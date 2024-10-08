import { createClient } from '@supabase/supabase-js'
import { RESTDataSource } from '@apollo/datasource-rest'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL // Assurez-vous que cette variable d'environnement est définie
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY // Assurez-vous que cette variable d'environnement est définie
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

class SupabaseAPI extends RESTDataSource {
  async getExercises() {
    const { data, error } = await supabase.from('exercises').select('*')
    if (error) throw new Error(error.message)
    return data
  }
}

export default SupabaseAPI
