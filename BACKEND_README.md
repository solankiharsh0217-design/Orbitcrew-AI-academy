# OrbitCrew AI Academy - Backend Setup

## Phase 1: Core Features Implementation Complete

### What's Been Created:

1. **Database Schema** (`supabase/migrations/001_initial_schema.sql`)
   - `leads` - Contact form submissions
   - `students` - Enrolled students
   - `programs` - Course programs (AI, Web Dev, Digital Marketing)
   - `batches` - Program batches
   - `attendance` - Student attendance tracking
   - `testimonials` - Student testimonials (CMS)
   - `lead_activity_log` - Activity tracking

2. **Supabase Client** (`src/lib/supabase.ts`)
   - Submit leads from contact form
   - Get/update leads (admin)
   - Get programs, batches, students
   - Mark attendance
   - Testimonials CRUD

3. **Edge Function** (`supabase/functions/submit-lead.ts`)
   - Handles form submissions
   - Can integrate with Resend (email) and Twilio (WhatsApp)

4. **Frontend Integration**
   - Updated Contact page to use Supabase
   - Form validation and loading states

---

## Setup Instructions

### Step 1: Create Supabase Project
```bash
# Go to https://supabase.com
# Create new project "orbitcrew-ai-academy"
# Note your project URL and anon key
```

### Step 2: Run Database Schema
```bash
# Open Supabase Dashboard
# Go to SQL Editor
# Copy and run: supabase/migrations/001_initial_schema.sql
```

### Step 3: Configure Environment
```bash
# Copy .env.example to .env
# Fill in your Supabase credentials:
# VITE_SUPABASE_URL=https://your-project.supabase.co
# VITE_SUPABASE_ANON_KEY=your-anon-key
```

### Step 4: Deploy (Optional - Works Without It)
The form works with direct database inserts. To add email/WhatsApp notifications:

```bash
# Install Supabase CLI
npm install -g supabase

# Deploy edge function
supabase functions deploy submit-lead

# Add environment variables in Supabase dashboard:
# RESEND_API_KEY
# TWILIO_ACCOUNT_SID
# TWILIO_AUTH_TOKEN
# TWILIO_PHONE_NUMBER
```

---

## Features Ready

| Feature | Status | Notes |
|---------|--------|-------|
| Contact Form → Database | ✅ Works | Direct insert |
| Lead Management | ✅ Ready | Admin can query |
| Programs Display | ✅ Ready | Fetch from DB |
| Student Records | ✅ Ready | CRUD operations |
| Attendance | ✅ Ready | Mark/track |
| Testimonials CMS | ✅ Ready | Add/edit/delete |

---

## Next Steps (Phase 2)

1. Build Admin Dashboard (React)
2. Add Authentication
3. Student Portal
4. Email Notifications
5. WhatsApp Integration

---

## Environment Variables Needed

```
VITE_SUPABASE_URL=https://xxxxx.supabase.co
VITE_SUPABASE_ANON_KEY=eyJxxx...
```

Get these from: **Settings → API** in Supabase dashboard