import ExerciseCard from './ExerciseCard'
import SelectedCard from './SelectedExercise'
import Filters from './ExercicesFilters'
import exercises from '../src/exercises-fr.json'
import { useState } from 'react'

const toggleExercise = (exercise) => {
  setSelectedExercises((prev) =>
    prev.includes(exercise)
      ? prev.filter((e) => e !== exercise)
      : [...prev, exercise]
  )
}

export default function Step2({
  onNext,
  exerciseCount,
  selectedExercises,
  setSelectedExercises,
}) {
  const emptyCards = exerciseCount - selectedExercises.length

  const toggleExercise = (exercise) => {
    setSelectedExercises((prev) => {
      if (prev.includes(exercise)) {
        return prev.filter((e) => e !== exercise)
      }
      if (prev.length >= exerciseCount) {
        return prev
      }
      return [...prev, exercise]
    })
  }
  const muscularGroups = {
    Bras: ['biceps', 'forearms', 'triceps'],
    Épaules: ['shoulders', 'traps'],
    Poitrine: ['chest'],
    Dos: ['lower back', 'middle back', 'neck', 'lats'],
    Abdominaux: ['abdominals'],
    Jambes: ['abductors', 'adductors', 'hamstrings', 'quadriceps', 'calves'],
    Fessiers: ['glutes'],
  }

  const [selectedLevels, setSelectedLevels] = useState([])
  const [selectedEquipments, setSelectedEquipments] = useState([])
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedMuscularGroups, setSelectedMuscularGroups] = useState([])

  const filteredExercises = exercises.filter((exercise) => {
    const levelMatch =
      selectedLevels.length === 0
        ? true
        : selectedLevels.includes(exercise.level)

    const equipmentMatch =
      selectedEquipments.length === 0
        ? true
        : selectedEquipments.includes(exercise.equipment)

    const categoryMatch =
      selectedCategories.length === 0
        ? true
        : selectedCategories.includes(exercise.category)

    const muscularGroupMatch =
      selectedMuscularGroups.length === 0
        ? true
        : selectedMuscularGroups.some((group) =>
            muscularGroups[group].some((muscle) =>
              exercise.primaryMuscles.includes(muscle)
            )
          )

    return levelMatch && equipmentMatch && categoryMatch && muscularGroupMatch
  })

  return (
    <section className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
      <p className="text-4xl uppercase font-bold">Step 2</p>
      <h2 className="text-3xl uppercase">Choisis tes exercices</h2>

      <Filters
        selectedLevels={selectedLevels}
        setSelectedLevels={setSelectedLevels}
        selectedEquipments={selectedEquipments}
        setSelectedEquipments={setSelectedEquipments}
        selectedCategories={selectedCategories}
        setSelectedCategories={setSelectedCategories}
        selectedMuscularGroups={selectedMuscularGroups}
        setSelectedMuscularGroups={setSelectedMuscularGroups}
        muscularGroups={muscularGroups}
      />

      <div className="flex flex-wrap justify-center gap-2">
        {filteredExercises?.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            selectedExercises={selectedExercises}
            toggleExercise={toggleExercise}
            isDisabled={
              selectedExercises.length >= exerciseCount &&
              !selectedExercises.includes(exercise)
            }
          />
        ))}
      </div>

      <div>
        <h3 className="uppercase">
          Aperçu des {exerciseCount} exercices sélectionnés
        </h3>
        <div className="grid grid-cols-6 gap-2">
          {selectedExercises.map((exercise) => (
            <SelectedCard
              key={exercise.id}
              exercise={exercise}
              selectedExercises={selectedExercises}
              toggleExercise={toggleExercise}
            />
          ))}
          {/* Affichage des cartes vides */}
          {[...Array(emptyCards)].map((_, index) => (
            <div
              key={index}
              className="border-[1px] border-black rounded-lg size-44"
            />
          ))}
        </div>
      </div>
      <button
        onClick={onNext}
        disabled={selectedExercises.length < exerciseCount}
        className="bg-slate-700 text-white p-4 rounded w-max flex gap-4 items-center disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
      >
        Valider{' '}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 24 24"
        >
          <path
            fill={
              selectedExercises.length <= exerciseCount ? 'grey' : 'yellowgreen'
            }
            stroke={
              selectedExercises.length <= exerciseCount ? 'grey' : 'yellowgreen'
            }
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
          />
        </svg>
      </button>
    </section>
  )
}
