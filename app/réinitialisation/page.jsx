import LoginForm from '../components/LoginForm'

export const metadata = {
  title: 'Réinitialiser ton mot de passe | Train Up',
  description:
    "Tu as oublié ton mot de passe ? Réinitialise-le en toute simplicité et retrouve rapidement l'accès à ton compte Train Up pour continuer tes entraînements personnalisés.",
}

export default function Login() {
  return <LoginForm action="reset" />
}
