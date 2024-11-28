import Hero from './components/Hero'
import Presentation from './components/Presentation'

export const metadata = {
  title: "Programme d'entraînement sur mesure | Train Up",
  description:
    "Découvre des programmes d'entraînement personnalisés pour atteindre tes objectifs à la maison ou en salle. Circuit training, exercices à la maison, conseils et astuces.",
}

export default function Home() {
  return (
    <main>
      <Hero />
      <Presentation />
    </main>
  )
}
