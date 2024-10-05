import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL // Assurez-vous que cette variable d'environnement est définie
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Assurez-vous que cette variable d'environnement est définie

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
