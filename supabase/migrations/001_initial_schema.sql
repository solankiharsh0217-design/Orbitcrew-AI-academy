-- OrbitCrew AI Academy - Phase 1 Database Schema
-- Run this in Supabase SQL Editor

-- ============================================
-- LEADS TABLE (Contact Form Submissions)
-- ============================================
CREATE TABLE IF NOT EXISTS leads (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  current_status TEXT DEFAULT 'new',
  program_interest TEXT,
  skill_interests TEXT,
  english_proficiency TEXT,
  laptop_ownership TEXT,
  existing_experience TEXT,
  career_goals TEXT,
  source TEXT DEFAULT 'website',
  assigned_to UUID REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  first_contact_at TIMESTAMPTZ,
  converted_at TIMESTAMPTZ,
  notes TEXT
);

-- Add lead status enum
ALTER TABLE leads ADD COLUMN IF NOT EXISTS status VARCHAR(50) DEFAULT 'new';

-- Index for faster queries
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads(created_at DESC);

-- ============================================
-- STUDENTS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS students (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  full_name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  enrolled_program TEXT NOT NULL,
  batch_id UUID,
  enrollment_date DATE DEFAULT CURRENT_DATE,
  status VARCHAR(50) DEFAULT 'active',
  created_at TIMESTAMPTZ DEFAULT NOW(),
  completed_at TIMESTAMPTZ
);

-- ============================================
-- PROGRAMS TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS programs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  duration_months INTEGER,
  description TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default programs
INSERT INTO programs (name, slug, duration_months, description) VALUES
  ('AI Automation', 'ai-automation', 5, 'Learn AI automation, ChatGPT workflows, no-code tools'),
  ('Web Development', 'web-development', 6, 'Professional website and ecommerce store development'),
  ('Digital Marketing', 'digital-marketing', 4, 'Run ad campaigns and drive business growth'),
  ('Custom Path', 'custom-path', NULL, 'Tailored learning path based on individual goals')
ON CONFLICT (slug) DO NOTHING;

-- ============================================
-- BATCHES TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS batches (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  program_id UUID REFERENCES programs(id),
  name TEXT NOT NULL,
  start_date DATE NOT NULL,
  max_students INTEGER DEFAULT 15,
  current_students INTEGER DEFAULT 0,
  status VARCHAR(20) DEFAULT 'upcoming',
  mentor_id UUID,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- ATTENDANCE TABLE
-- ============================================
CREATE TABLE IF NOT EXISTS attendance (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_id UUID REFERENCES students(id),
  batch_id UUID REFERENCES batches(id),
  date DATE NOT NULL,
  status VARCHAR(20) DEFAULT 'present',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================
-- TESTIMONIALS TABLE (for Admin CMS)
-- ============================================
CREATE TABLE IF NOT EXISTS testimonials (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  student_name TEXT NOT NULL,
  student_role TEXT NOT NULL,
  quote TEXT NOT NULL,
  initials TEXT NOT NULL,
  is_active BOOLEAN DEFAULT true,
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Insert sample testimonials
INSERT INTO testimonials (student_name, student_role, quote, initials, display_order) VALUES
  ('Priya Sharma', 'AI Automation Graduate', 'OrbitCrew changed my career trajectory completely. The hands-on AI projects gave me a portfolio that impressed every interviewer.', 'PS', 1),
  ('Rahul Verma', 'Web Development Student', 'The small batch size meant I got personal attention. My mentor helped me land my first freelance client within a month of completing the course.', 'RV', 2),
  ('Anjali Singh', 'Digital Marketing Graduate', 'I went from zero digital marketing knowledge to managing campaigns for real clients. The practical approach is what sets OrbitCrew apart.', 'AS', 3)
ON CONFLICT DO NOTHING;

-- ============================================
-- Row Level Security (RLS)
-- ============================================
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE students ENABLE ROW LEVEL SECURITY;
ALTER TABLE programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE batches ENABLE ROW LEVEL SECURITY;
ALTER TABLE attendance ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Public read access for testimonials (shown on website)
CREATE POLICY "Public can view active testimonials" ON testimonials
  FOR SELECT USING (is_active = true);

-- Allow public insert for leads (contact form)
CREATE POLICY "Anyone can insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Admin policies (restrict to authenticated users)
CREATE POLICY "Admins can manage leads" ON leads
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage students" ON students
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage programs" ON programs
  FOR ALL USING (auth.role() = 'authenticated');

CREATE POLICY "Admins can manage batches" ON batches
  FOR ALL USING (auth.role() = 'authenticated');

-- ============================================
-- Function to update lead status
-- ============================================
CREATE OR REPLACE FUNCTION update_lead_status()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER leads_updated_at
  BEFORE UPDATE ON leads
  FOR EACH ROW
  EXECUTE FUNCTION update_lead_status();

-- ============================================
-- Auto-create log entry on new lead
-- ============================================
CREATE TABLE IF NOT EXISTS lead_activity_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  lead_id UUID REFERENCES leads(id),
  activity_type VARCHAR(50),
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Function to log lead activity
CREATE OR REPLACE FUNCTION log_lead_activity()
RETURNS TRIGGER AS $$
BEGIN
  IF TG_OP = 'INSERT' THEN
    INSERT INTO lead_activity_log (lead_id, activity_type, description)
    VALUES (NEW.id, 'created', 'New lead submitted from website');
  END IF;
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER new_lead_activity
  AFTER INSERT ON leads
  FOR EACH ROW
  EXECUTE FUNCTION log_lead_activity();