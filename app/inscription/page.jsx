import LoginForm from '../components/LoginForm'

export const metadata = {
  title: "Crée un compte Train Up | Commence ton programme d'entraînement",
  description:
    "Connecte-toi à ton compte Train Up pour accéder à tes programmes d'entraînement personnalisés. Atteins tes objectifs plus facilement avec des circuits training adaptés à tes besoins.",
}

export default function Inscription() {
  return <LoginForm action="inscription" />
}
