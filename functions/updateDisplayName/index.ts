import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { createClient } from 'https://deno.land/x/supabase@1.0.0/mod.ts';

serve(async (req) => {
  const { user_id, display_name } = await req.json();

  // Create a Supabase client using service role key
  const supabase = createClient(
    Deno.env.get('SUPABASE_URL') ?? '',
    Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
  );

  // Update the user's metadata
  const { data, error } = await supabase.auth.admin.updateUserById(user_id, {
    user_metadata: { display_name },
  });

  if (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new Response(JSON.stringify({ data }), { status: 200 });
});
