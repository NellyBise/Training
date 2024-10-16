import Link from 'next/link'
import Image from 'next/image'
import cover from '../src/cover.png'
import Button from './ui/Button'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row md:justify-around gap-12 md:gap-6 pb-12 text-white px-4 md:px-12 pt-8">
      <div className="md:w-2/5 md:pl-12 md:pt-32 md:min-h-screen flex flex-col gap-6 text-left">
        <h1 className="uppercase text-2xl md:text-5xl font-bold">
          Crée ton circuit d&rsquo;entraînement sur mesure
        </h1>
        <p className="uppercase text-base md:text-lg">
          Choisis tes exercices et crée tes circuits facilement
        </p>
        <Link href="./circuit">
          <Button title="Start" />
        </Link>
      </div>
      <div className="md:w-3/5">
        <Image src={cover} alt="" />
      </div>
    </section>
  )
}
