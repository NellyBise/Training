'use client'
import Link from 'next/link'
import Button from './ui/Button'

export default function Presentation() {
  return (
    <section className="flex flex-col items-center bg-slate-50 py-12 gap-12 text-center">
      <h2 className="uppercase text-2xl md:text-4xl font-bold">
        Crée ton programme d’entraînement en 3 étapes simples
      </h2>
      <div className="flex flex-col justify-center md:max-w-[1000px] md:flex-row gap-12">
        <div className="md:w-1/4 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            1
          </p>
          <p className="text-center">
            Définis le nombre d&rsquo;exercices de ton circuit personnalisé.
          </p>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            2
          </p>
          <p className="text-center">
            Sélectionne les exercices qui correspondent à tes objectifs
            d&rsquo;entraînement
          </p>
        </div>
        <div className="md:w-1/4 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            3
          </p>
          <p className="text-center">
            Organise tes exercices dans l&rsquo;ordre que tu préfères.
          </p>
        </div>
      </div>
      <Link href="./creer-programme-entrainement">
        <Button title="Crée ton circuit" />
      </Link>
    </section>
  )
}
