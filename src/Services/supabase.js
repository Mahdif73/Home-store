import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://btqmpxmpknshiwuzhzfc.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cW1weG1wa25zaGl3dXpoemZjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODMzMjQxNDgsImV4cCI6MjA5ODkwMDE0OH0.oSYmXoYoYEm9jW8unGCcHVKxdz1qIuOyWw5lBP5mcpc";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
