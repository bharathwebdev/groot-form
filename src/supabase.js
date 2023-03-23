
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jdmjfshjvnisrxlzennb.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpkbWpmc2hqdm5pc3J4bHplbm5iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzk1NjIzMjQsImV4cCI6MTk5NTEzODMyNH0.ws-dsUZc0VQ__1BO9PMHmTlQ5migNuaSbFcCqQSyaE8'
export default  createClient(supabaseUrl, supabaseKey)
