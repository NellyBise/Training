'use client'

import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'

import { useState } from 'react'

export default function Wizard() {
  const [step, setStep] = useState(1)
  const [exerciseCount, setExerciseCount] = useState(0)
  const [selectedExercises, setSelectedExercises] = useState([])

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  return (
    <section className="bg-slate-50">
      <h1 className="flex justify-center text-center uppercase text-xl md:text-4xl font-bold pt-12  px-8">
        Conçois ton programme d’entraînement en quelques clics
      </h1>
      {step === 1 && (
        <Step1
          onNext={nextStep}
          setExerciseCount={setExerciseCount}
          exerciseCount={exerciseCount}
          setSelectedExercises={setSelectedExercises}
        />
      )}
      {step === 2 && (
        <Step2
          onNext={nextStep}
          onPrev={prevStep}
          exerciseCount={exerciseCount}
          selectedExercises={selectedExercises}
          setSelectedExercises={setSelectedExercises}
        />
      )}
      {step === 3 && (
        <Step3 selectedExercises={selectedExercises} onPrev={prevStep} />
      )}
    </section>
  )
}
