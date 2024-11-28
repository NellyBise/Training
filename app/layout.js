import Header from './components/Header'
import Footer from './components/Footer'
import { Poppins } from 'next/font/google'
import './globals.css'
import { ApolloWrapper } from '@/ApolloWrapper'

const poppins = Poppins({
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  authors: [{ name: 'Nelly Bise', url: 'https://www.nelly-bise.fr' }],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Train Up, crée ton programme d'entraînement personnalisé",
    description:
      "Découvre des programmes d'entraînement personnalisés pour atteindre tes objectifs à la maison ou en salle. Circuit training, exercices à la maison, conseils et astuces.",
    url: 'https://www.train-up.fr',
    image: 'https://www.train-up.fr/circuit-training.webp',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body
        className={`${poppins.className} min-h-screen scroll-smooth flex flex-col`}
      >
        <Header />
        <main>
          <ApolloWrapper>{children}</ApolloWrapper>
        </main>
        <div className="flex-grow bg-slate-50"></div>
        <Footer />
      </body>
    </html>
  )
}
