import Link from 'next/link'

export default function Steps() {
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
            Choisis le nombre d'exercices de ton circuit
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
      <Link
        className="bg-white border-2 border-slate-700 p-4 rounded w-max flex gap-4 items-center"
        href="./circuit"
      >
        Start{' '}
        <svg
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
    </section>
  )
}
