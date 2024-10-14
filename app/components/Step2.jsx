import ExerciseCard from './ExerciseCard'
import SelectedCard from './SelectedExercise'
import Filters from './ExercicesFilters'
import exercises from '../src/exercises-fr.json'
import { useState } from 'react'

export default function Step2({
  onNext,
  exerciseCount,
  selectedExercises,
  setSelectedExercises,
}) {
  const emptyCards = exerciseCount - selectedExercises.length

  //Select one exercise
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

  //Filters
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

  // Divide exercises by pages
  const [currentPage, setCurrentPage] = useState(1)
  const exercisesPerPage = 12
  const totalExercises = filteredExercises.length
  const totalPages = Math.ceil(totalExercises / exercisesPerPage)
  const indexOfLastExercise = currentPage * exercisesPerPage
  const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage
  const currentExercises = filteredExercises.slice(
    indexOfFirstExercise,
    indexOfLastExercise
  )

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <section className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
      <p className="text-4xl uppercase font-bold">Step 2</p>
      <h2 className="text-3xl uppercase text-center">Choisis tes exercices</h2>

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
        setCurrentPage={setCurrentPage}
      />

      <div className="flex flex-wrap justify-center gap-2">
        {currentExercises?.map((exercise) => (
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
      <div className="flex gap-3">
        <button onClick={handlePrevPage} disabled={currentPage === 1}>
          <svg
            className="-rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m7.5.793l4.354 4.353l-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button onClick={handleNextPage} disabled={currentPage === totalPages}>
          <svg
            className="rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fill-rule="evenodd"
              d="m7.5.793l4.354 4.353l-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div>
        <h3 className="uppercase text-xl text-center mx-auto my-12">
          Aperçu des exercices sélectionnés : {selectedExercises.length} /{' '}
          {exerciseCount}
        </h3>
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]">
          {selectedExercises.map((exercise, index) => (
            <SelectedCard
              key={exercise.id}
              exercise={exercise}
              toggleExercise={toggleExercise}
              index={index}
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
