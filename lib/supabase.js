import { createClient } from '@supabase/supabase-js'

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
export const supabaseAPI = createClient(SUPABASE_URL, SUPABASE_ANON_KEY)

class SupabaseAPI {
  async getExercises() {
    const { data, error } = await supabaseAPI.from('exercises').select('*')
    if (error) throw new Error(error.message)
    return data
  }

  async getTrainingsByUser(user_id) {
    const { data, error } = await supabaseAPI
      .from('training')
      .select('*')
      .eq('user_id', user_id)

    if (error) throw new Error(error.message)
    return data
  }

  async saveTraining(
    title,
    description,
    orderedExercises,
    exercisesNumber,
    user_id
  ) {
    const { data, error } = await supabaseAPI
      .from('training')
      .insert([
        { title, description, orderedExercises, exercisesNumber, user_id },
      ])

    if (error) throw new Error(error.message)
    return data[0]
  }
}

export default SupabaseAPI
