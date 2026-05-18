import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create client only if credentials are provided
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null

// Helper function to check if Supabase is configured
export const isSupabaseConfigured = () => !!supabase

// Lead/Contact form functions
export const submitLead = async (leadData: {
  full_name: string
  phone: string
  email?: string
  current_status?: string
  program_interest?: string
  skill_interests?: string
  english_proficiency?: string
  laptop_ownership?: string
  existing_experience?: string
  career_goals?: string
}) => {
  if (!supabase) {
    // Mock response for development
    console.log('Lead submitted (mock):', leadData)
    return { success: true, data: { id: 'mock-id', ...leadData } }
  }

  const { data, error } = await supabase
    .from('leads')
    .insert([leadData])
    .select()
    .single()

  if (error) throw error
  return { success: true, data }
}

// Get all leads (for admin)
export const getLeads = async () => {
  if (!supabase) return { success: true, data: [] }

  const { data, error } = await supabase
    .from('leads')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) throw error
  return { success: true, data }
}

// Update lead status
export const updateLeadStatus = async (id: string, status: string) => {
  if (!supabase) return { success: true }

  const { error } = await supabase
    .from('leads')
    .update({ status, updated_at: new Date().toISOString() })
    .eq('id', id)

  if (error) throw error
  return { success: true }
}

// Testimonials functions
export const getTestimonials = async () => {
  if (!supabase) return { success: true, data: [] }

  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .eq('is_active', true)
    .order('display_order', { ascending: true })

  if (error) throw error
  return { success: true, data }
}

export const addTestimonial = async (testimonial: {
  student_name: string
  student_role: string
  quote: string
  initials: string
  display_order?: number
}) => {
  if (!supabase) return { success: true, data: {} }

  const { data, error } = await supabase
    .from('testimonials')
    .insert([testimonial])
    .select()
    .single()

  if (error) throw error
  return { success: true, data }
}

// Programs functions
export const getPrograms = async () => {
  if (!supabase) return { success: true, data: [] }

  const { data, error } = await supabase
    .from('programs')
    .select('*')
    .eq('is_active', true)
    .order('name')

  if (error) throw error
  return { success: true, data }
}

// Batches functions
export const getBatches = async (programId?: string) => {
  if (!supabase) return { success: true, data: [] }

  let query = supabase
    .from('batches')
    .select('*, programs(name)')
    .order('start_date', { ascending: false })

  if (programId) {
    query = query.eq('program_id', programId)
  }

  const { data, error } = await query

  if (error) throw error
  return { success: true, data }
}

// Students functions
export const getStudents = async () => {
  if (!supabase) return { success: true, data: [] }

  const { data, error } = await supabase
    .from('students')
    .select('*, leads(full_name, email, phone)')
    .order('enrollment_date', { ascending: false })

  if (error) throw error
  return { success: true, data }
}

// Attendance functions
export const markAttendance = async (attendance: {
  student_id: string
  batch_id: string
  date: string
  status: string
}) => {
  if (!supabase) return { success: true }

  const { error } = await supabase
    .from('attendance')
    .insert([attendance])

  if (error) throw error
  return { success: true }
}

export const getAttendance = async (batchId: string, date: string) => {
  if (!supabase) return { success: true, data: [] }

  const { data, error } = await supabase
    .from('attendance')
    .select('*, students(full_name)')
    .eq('batch_id', batchId)
    .eq('date', date)

  if (error) throw error
  return { success: true, data }
}