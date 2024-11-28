import LoginForm from '../components/LoginForm'

export const metadata = {
  title:
    "Se connecter à Train Up | Accède à ton programme d'entraînement personnalisé",
  description:
    "Connecte-toi à ton compte Train Up pour accéder à tes programmes d'entraînement personnalisés. Atteins tes objectifs plus facilement avec des circuits training adaptés à tes besoins.",
}

export default function Login() {
  return <LoginForm action="login" />
}
