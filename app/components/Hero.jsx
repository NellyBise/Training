import Link from 'next/link'
import Image from 'next/image'
import cover from '../src/cover.png'

export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row gap-12 pb-12 text-white px-4 md:px-12 pt-8">
      <div className="md:w-2/5 md:pl-12 md:pt-24 md:min-h-screen flex flex-col gap-6 text-left">
        <h1 className="uppercase text-2xl md:text-5xl font-bold">
          Crée tes propres circuits training
        </h1>
        <p className="uppercase text-base md:text-lg">
          Choisis tes exercices et crée tes circuits facilement
        </p>
        <Link
          className="group bg-slate-700 py-4 px-6 rounded w-max flex gap-2 items-center hover:bg-slate-600 duration-300 ease-in-out"
          href="./circuit"
        >
          Start{' '}
          <svg
            className="group-hover:translate-x-1 duration-300"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 24 24"
          >
            <path
              fill="yellowgreen"
              stroke="yellowgreen"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
            />
          </svg>
        </Link>
      </div>
      <div className="md:w-3/5">
        <Image src={cover} alt="" />
      </div>
    </section>
  )
}
