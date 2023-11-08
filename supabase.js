import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://tsdkcibduznaxoljnyod.supabase.co";
export const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRzZGtjaWJkdXpuYXhvbGpueW9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTkwMDUxNDgsImV4cCI6MjAxNDU4MTE0OH0.8UMresPQN0BBSJYtBDXIU9yD_A8srG21q31ygBcVcrc";
export const supabase = createClient(supabaseUrl, supabaseKey);
