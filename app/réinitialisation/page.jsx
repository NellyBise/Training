'use client'

import LoginForm from '../components/LoginForm'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>Réinitialiser ton mot de passe | Train Up</title>
        <meta
          name="description"
          content="Tu as oublié ton mot de passe ? Réinitialise-le en toute simplicité et retrouve rapidement l'accès à ton compte Train Up pour continuer tes entraînements personnalisés."
        />
      </Head>
      <LoginForm action="reset" />
    </>
  )
}
