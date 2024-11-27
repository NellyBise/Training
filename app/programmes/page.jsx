'use client'

import { useEffect, useState } from 'react'
import { supabaseAPI } from '@/lib/supabase'
import GeneratePDF from '../components/GeneratePDF'
import Head from 'next/head'

export default function Profile() {
  const [trainings, setTrainings] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const fetchTrainings = async () => {
    try {
      setLoading(true)
      const {
        data: { user },
        error: userError,
      } = await supabaseAPI.auth.getUser()
      if (userError) throw new Error(userError.message)

      if (!user) {
        throw new Error('Utilisateur non connecté')
      }

      const { data: trainingsData, error: trainingsError } = await supabaseAPI
        .from('training')
        .select('*')
        .eq('user_id', user.id)

      if (trainingsError) throw new Error(trainingsError.message)

      setTrainings(trainingsData)
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchTrainings()
  }, [])

  if (loading) return <p>Chargement...</p>
  if (error) return <p>Erreur : {error}</p>

  const handleDelete = async (trainingId) => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabaseAPI.auth.getUser()
      if (userError) throw new Error(userError.message)
      if (!user) throw new Error('Utilisateur non connecté')

      const userId = user.id

      const { data: trainingData, error: trainingError } = await supabaseAPI
        .from('training')
        .select('id, user_id')
        .eq('id', trainingId)
        .single()

      if (trainingError) throw new Error(trainingError.message)
      if (!trainingData) throw new Error('Training non trouvé')

      if (trainingData.user_id !== userId) {
        throw new Error(
          "Vous ne pouvez pas supprimer ce training car vous n'êtes pas l'auteur"
        )
      }

      const { error: deleteError } = await supabaseAPI
        .from('training')
        .delete()
        .eq('id', trainingId)

      if (deleteError) throw new Error(deleteError.message)

      alert('Training supprimé avec succès !')
      fetchTrainings()
    } catch (err) {
      console.error('Erreur lors de la suppression :', err.message)
      alert(`Erreur : ${err.message}`)
    }
  }

  return (
    <>
      <Head>
        <title>Mes programmes d&rsquo;entraînement | Train Up</title>
        <meta
          name="description"
          content="Accédez à tous tes programmes d’entraînement enregistrés sur Train Up. Gère tous tes circuits training."
        />
      </Head>
      <section className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
        <h1 className="text-4xl uppercase font-bold text-center">
          {' '}
          Tableau de Bord{' '}
        </h1>
        <h2 className="text-3xl uppercase text-center mb-8">Mes circuits</h2>
        {trainings.length > 0 ? (
          <table className="border-2 border-black text-sm md: text-base">
            <thead className="h-10">
              <tr className="bg-slate-700 text-white">
                <th className="px-2 border-[1px] border-black" scope="col">
                  Nom
                </th>
                <th
                  className="px-2 max-w-40 border-[1px] border-black hidden md:table-cell"
                  scope="col"
                >
                  Description
                </th>
                <th
                  className="px-2 border-[1px] border-black md:min-w-20"
                  scope="col"
                >
                  Date
                </th>
                <th
                  className="px-2 border-[1px] border-black md:min-w-20"
                  scope="col"
                >
                  Voir PDF
                </th>
                <th
                  className="px-2 border-[1px] border-black md:min-w-20"
                  scope="col"
                >
                  Supprimer
                </th>
              </tr>
            </thead>
            <tbody>
              {trainings.map((training) => (
                <tr className="min-h-12 even:bg-slate-200" key={training.id}>
                  <th className="p-2 border-[1px] border-black" scope="row">
                    {training.title}
                  </th>
                  <td className="p-2 max-w-96 overflow-hidden border-[1px] border-black hidden md:table-cell">
                    {training.description}
                  </td>
                  <td className="p-2 border-[1px] border-black" align="center">
                    {training.created_at
                      .substr(4, 6)
                      .split('-')
                      .reverse()
                      .join('/')}
                    {training.created_at.substr(2, 2)}
                  </td>
                  <td
                    className="p-2 border-[1px] text-red-500 border-black"
                    align="center"
                  >
                    <GeneratePDF
                      orderedExercises={training.orderedExercises}
                      title={training.title}
                      description={training.description}
                      type="profile"
                    />
                  </td>
                  <td
                    className="p-2 border-[1px] text-red-500 border-black"
                    align="center"
                  >
                    <button onClick={() => handleDelete(training.id)}>
                      <svg
                        className="group"
                        xmlns="http://www.w3.org/2000/svg"
                        width="25"
                        height="25"
                        viewBox="0 0 24 24"
                      >
                        <path
                          className="stroke-slate-700 group-hover:stroke-red-500 duration-300"
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 11v6m-4-6v6M6 7v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7M4 7h16M7 7l2-4h6l2 4"
                        />
                      </svg>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>Aucun training trouvé.</p>
        )}
      </section>
    </>
  )
}
