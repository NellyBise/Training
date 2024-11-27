'use client'

import LoginForm from '../components/LoginForm'
import Head from 'next/head'

export default function Inscription() {
  return (
    <>
      <Head>
        <title>
          Crée un compte Train Up | Commence ton programme d&rsquo;entraînement
          personnalisé
        </title>
        <meta
          name="description"
          content="Inscris-toi sur Train Up pour créer ton programme de circuit training personnalisé. Atteins tes objectifs plus rapidement avec des exercices adaptés à ton niveau et tes préférences. Rejoins-nous dès aujourd'hui !"
        />
      </Head>
      <LoginForm action="inscription" />
    </>
  )
}
