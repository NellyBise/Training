'use client'

import LoginForm from '../components/LoginForm'
import Head from 'next/head'

export default function Login() {
  return (
    <>
      <Head>
        <title>
          Se connecter à Train Up | Accède à ton programme d&rsquo;entraînement
          personnalisé
        </title>
        <meta
          name="description"
          content="Connecte-toi à ton compte Train Up pour accéder à tes programmes d'entraînement personnalisés. Atteins tes objectifs plus facilement avec des circuits training adaptés à tes besoins."
        />
      </Head>
      <LoginForm action="login" />
    </>
  )
}
