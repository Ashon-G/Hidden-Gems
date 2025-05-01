import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://ihpajedpftoomvgfbqvd.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlocGFqZWRwZnRvb212Z2ZicXZkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwNTU0NTgsImV4cCI6MjA2MTYzMTQ1OH0.jR4GLkUTRGujjynZvPoHb8nCao_H7KsEJe6KcrmYlj4';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
