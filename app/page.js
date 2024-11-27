import Hero from './components/Hero'
import Presentation from './components/Presentation'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Programme d’entraînement sur mesure | Train Up</title>
        <meta
          name="description"
          content="Découvre des programmes d’entraînement personnalisés pour atteindre tes objectifs à la maison ou en salle. Circuit training, exercices à la maison, conseils et astuces."
        />
      </Head>
      <main>
        <Hero />
        <Presentation />
      </main>
    </>
  )
}
