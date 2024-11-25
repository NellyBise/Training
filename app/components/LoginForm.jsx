'use client'

import { useState } from 'react'
import { supabaseAPI } from '@/lib/supabase'
import Button from './ui/Button'
import { useRouter } from 'next/navigation'

function LoginForm({ action }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(null)
  const router = useRouter()

  const handleLogin = async (e) => {
    e.preventDefault()
    setError(null)

    const { error } = await supabaseAPI.auth.signInWithPassword({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      router.push('/profile')
    }
  }

  const handleSignup = async (e) => {
    e.preventDefault()
    setError(null)

    const { data, error } = await supabaseAPI.auth.signUp({
      email,
      password,
    })

    if (error) {
      setError(error.message)
    } else {
      alert(
        'Inscription réussie ! Vérifie ton email pour confirmer ton compte.'
      )
    }
  }

  const handlePasswordReset = async (e) => {
    e.preventDefault()
    setError(null)

    const { data, error } = await supabaseAPI.auth.resetPasswordForEmail(
      email,
      {
        redirectTo: 'https://trainup-rosy.vercel.app/reset',
      }
    )

    if (error) {
      setError(error.message)
    } else {
      alert('Vérifie ton email pour réinitialiser ton mot de passe.')
    }
  }

  const handleNewPassword = async (e) => {
    e.preventDefault()

    const { data, error } = await SupabaseAPI.auth.updateUser({
      password: password,
    })
    if (error) {
      setError(error.message)
    } else {
      alert('Nouveau mot de passe enregistré.')
    }
  }

  const handleSubmit = (event) => {
    switch (action) {
      case 'login':
        handleLogin(event)
        break
      case 'inscription':
        handleSignup(event)
        break
      case 'reset':
        handleNewPassword(event)
        break
      default:
        console.error('Action non valide')
    }
  }

  return (
    <section className="flex flex-col items-center py-12 md:py-24 bg-slate-50">
      <h1 className="text-4xl mt-2 mb-10 text-center">
        {action === 'inscription' ? "S'INSCRIRE" : 'SE CONNECTER'}
      </h1>
      <p>{action === 'reset' ? 'Entrez votre nouveau mot de passe' : ''}</p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 flex flex-col items-left w-full px-6 md:w-2/5"
      >
        <label htmlFor="email">Email</label>
        <input
          className="p-2 drop-shadow-lg rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        ></input>
        <label className="mt-8" htmlFor="password">
          Mot de passe
        </label>
        <input
          className="p-2 mb-12 drop-shadow-lg rounded"
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        ></input>
        <Button
          title={action === 'inscription' ? "S'inscrire" : 'Se connecter'}
          type="submit"
          disabled={email === '' || password === ''}
        />
        <div className="h-12">
          {error && (
            <p className="text-center text-red-500 mt-4 font-bold">{error}</p>
          )}
        </div>
      </form>
      <button onClick={handlePasswordReset}>
        {action === 'login' ? "J'ai oublié mon mot de passe" : ''}
      </button>
    </section>
  )
}

export default LoginForm
