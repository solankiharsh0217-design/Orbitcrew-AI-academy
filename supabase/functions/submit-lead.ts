import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface LeadData {
  full_name: string
  phone: string
  email?: string
  program_interest?: string
  skill_interests?: string
  career_goals?: string
}

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    // Create Supabase client
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!
    const supabase = createClient(supabaseUrl, supabaseServiceKey)

    // Get form data
    const leadData: LeadData = await req.json()

    // Validate required fields
    if (!leadData.full_name || !leadData.phone) {
      return new Response(
        JSON.stringify({ error: 'Name and phone are required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      )
    }

    // Insert into database
    const { data: lead, error: insertError } = await supabase
      .from('leads')
      .insert([{
        full_name: leadData.full_name,
        phone: leadData.phone,
        email: leadData.email || null,
        program_interest: leadData.program_interest || null,
        skill_interests: leadData.skill_interests || null,
        career_goals: leadData.career_goals || null,
        status: 'new',
        source: 'website'
      }])
      .select()
      .single()

    if (insertError) throw insertError

    // TODO: Send email notification using Resend or SendGrid
    // For now, we'll log and return success
    console.log('New lead submitted:', lead)
    console.log('Send email to:', leadData.email)
    console.log('Send WhatsApp to:', leadData.phone)

    return new Response(
      JSON.stringify({ success: true, lead_id: lead.id }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )

  } catch (error) {
    console.error('Error:', error)
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    )
  }
})

/*
To deploy this function:
1. Install Supabase CLI: npm install -g supabase
2. Run: supabase functions serve submit-lead --no-verify-jwt
3. Or deploy to production: supabase functions deploy submit-lead

Environment variables needed:
- SUPABASE_URL
- SUPABASE_SERVICE_ROLE_KEY
- RESEND_API_KEY (for email)
- TWILIO_ACCOUNT_SID (for WhatsApp)
- TWILIO_AUTH_TOKEN
- TWILIO_PHONE_NUMBER
*/