'use client'

import Step1 from '../components/Step1'
import Step2 from '../components/Step2'
import Step3 from '../components/Step3'
import Exercises from '../components/test'

import { useState } from 'react'

export default function Wizard() {
  const [step, setStep] = useState(1)
  const [exerciseCount, setExerciseCount] = useState(0)
  const [selectedExercises, setSelectedExercises] = useState([])

  const nextStep = () => setStep((prev) => prev + 1)
  const prevStep = () => setStep((prev) => prev - 1)

  const handleSubmit = (orderedExercises) => {
    // Logique pour envoyer le circuit final
    console.log('Circuit créé avec ces exercices:', orderedExercises)
  }

  return (
    <div className="bg-slate-50">
      {step === 1 && (
        <Step1 onNext={nextStep} setExerciseCount={setExerciseCount} />
      )}
      {step === 2 && (
        <Step2
          onNext={nextStep}
          exerciseCount={exerciseCount}
          selectedExercises={selectedExercises}
          setSelectedExercises={setSelectedExercises}
        >
          <Exercises />
        </Step2>
      )}
      {step === 3 && (
        <Step3 selectedExercises={selectedExercises} onSubmit={handleSubmit} />
      )}
      {step > 1 && <button onClick={prevStep}>Retour</button>}
    </div>
  )
}
