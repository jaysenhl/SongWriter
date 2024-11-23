import { serve } from 'https://deno.land/std@0.114.0/http/server.ts';
import { createClient } from 'https://deno.land/x/supabase@1.0.0/mod.ts';

serve(async (req) => {
  try {
    const { user_id, display_name } = await req.json();

    // Extract the token from the Authorization header
    const authHeader = req.headers.get('Authorization')!;
    const token = authHeader.replace('Bearer ', '');

    // Create a Supabase client using the token for authentication
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_ANON_KEY') ?? '',
      { global: { headers: { Authorization: `Bearer ${token}` } } }
    );

    // Update the user's metadata
    const { data, error } = await supabase.auth.admin.updateUserById(user_id, {
      user_metadata: { display_name },
    });

    if (error) {
      console.error('Error updating user metadata:', error);
      const errorResponse = JSON.stringify({ error: error.message });
      console.log('Error response:', errorResponse);
      return new Response(errorResponse, { status: 400 });
    }

    const successResponse = JSON.stringify({ data });
    console.log('Success response:', successResponse);
    return new Response(successResponse, { status: 200 });
  } catch (err) {
    console.error('Unexpected error:', err);
    const unexpectedErrorResponse = JSON.stringify({ error: 'Unexpected error occurred' });
    console.log('Unexpected error response:', unexpectedErrorResponse);
    return new Response(unexpectedErrorResponse, { status: 500 });
  }
});
