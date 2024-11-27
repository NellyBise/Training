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

import Head from 'next/head'

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <Head>
        <meta name="robots" content="index,follow" />
        <meta
          property="og:title"
          content="Train Up, crée ton programme d'entraînement personnalisé"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:description"
          content="Découvre des programmes d’entraînement personnalisés pour atteindre tes objectifs à la maison ou en salle. Circuit training, exercices à la maison, conseils et astuces."
        />
        <meta
          property="og:image"
          content="http://www.train-up.fr/circuit-training.webp"
        />
        <meta property="og:url" content="http://www.train-up.fr" />
      </Head>
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
