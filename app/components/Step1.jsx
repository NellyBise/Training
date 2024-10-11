'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import step1 from '../src/2.jpg'

export default function Step1({ onNext, setExerciseCount }) {
  const [count, setCount] = useState(0)
  const [isDisabled, setIsDisabled] = useState(true)
  useEffect(() => {
    const checkValues = () => {
      if (count === 9 || count === 12) {
        setIsDisabled(false)
      } else {
        setIsDisabled(true)
      }
    }
    checkValues()
  }, [count])

  return (
    <section className="flex flex-col md:flex-row items-center gap-8 bg-slate-50 py-12 px-8">
      <article className="md:w-1/2 flex flex-col items-center gap-8">
        <p className="text-4xl uppercase font-bold">Step 1</p>
        <h2 className="text-3xl uppercase">
          Choisis le nombre d&rsquo;exercices
        </h2>
        <p>
          Conseil : la durée idéale d&rsquo;une séance est de 30 à 60 minutes.
          Pour un circuit de 9 exercices le nombre de répétitions est entre 4 et
          6, pour un circuit de 12 exercices, entre 3 et 5.{' '}
        </p>
        <div className="flex gap-8">
          <button
            className={`p-4 rounded w-max flex gap-4 items-center hover:bg-lime-400 duration-300 ease-in-out ${
              count === 9 ? 'bg-lime-400' : 'bg-slate-200'
            }`}
            onClick={() => setCount(9)}
          >
            9 exercices
          </button>
          <button
            className={`p-4 rounded w-max flex gap-4 items-center hover:bg-lime-400 duration-300 ease-in-out ${
              count === 12 ? 'bg-lime-400' : 'bg-slate-200'
            }`}
            onClick={() => setCount(12)}
          >
            12 exercices
          </button>

          <button
            disabled={isDisabled}
            className="bg-slate-700 text-white p-4 rounded w-max flex gap-4 items-center disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
            onClick={() => {
              setExerciseCount(count)
              onNext()
            }}
          >
            Valider{' '}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
            >
              <path
                fill={isDisabled ? 'grey' : 'yellowgreen'}
                stroke={isDisabled ? 'grey' : 'yellowgreen'}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
              />
            </svg>
          </button>
        </div>
      </article>
      <Image
        className="md:w-1/2 rounded-lg"
        src={step1}
        alt=""
        width={500}
        height="auto"
      />
    </section>
  )
}
