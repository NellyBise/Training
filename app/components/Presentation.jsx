'use client'
import Link from 'next/link'
import Button from './ui/Button'

export default function Presentation() {
  return (
    <section className="flex flex-col items-center bg-slate-50 py-12 gap-12 text-center">
      <h2 className="uppercase text-2xl md:text-4xl font-bold">
        En seulement 3 étapes
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            1
          </p>
          <p className="text-center">
            Choisis le nombre d&rsquo;exercices de ton circuit
          </p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            2
          </p>
          <p className="text-center">Choisis tes exercices</p>
        </div>
        <div className="md:w-1/3 flex flex-col items-center gap-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            3
          </p>
          <p className="text-center">Choisis leur ordre</p>
        </div>
      </div>
      <Link href="./circuit">
        <Button title="Commencer" />
      </Link>
    </section>
  )
}
