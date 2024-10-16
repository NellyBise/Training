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
  title: 'Train Up',
  description: "Crée ton circuit d'entraînement sur mesure",
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={poppins.className}>
        <main>
          <Header />
          <ApolloWrapper>{children}</ApolloWrapper>
          <Footer />
        </main>
      </body>
    </html>
  )
}
