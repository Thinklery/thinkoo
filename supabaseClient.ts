import { createClient } from '@supabase/supabase-js';

// Replace these with your actual Supabase project URL and anon key
const SUPABASE_URL = 'https://gklwhdofqvuymbuvkpbc.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdrbHdoZG9mcXZ1eW1idXZrcGJjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzNDE1NjgsImV4cCI6MjA3ODkxNzU2OH0.SteR-042Sm-NG4yCXYITxGMNGL_gVVEkeujP1_F7ETE';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
