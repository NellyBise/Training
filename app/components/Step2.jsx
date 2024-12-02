import ExerciseCard from './ExerciseCard'
import SelectedCard from './SelectedExercise'
import Filters from './ExercicesFilters'
import exercises from '../src/exercises-fr.json'
import { useState } from 'react'
import Button from './ui/Button'

export default function Step2({
  onNext,
  exerciseCount,
  selectedExercises,
  setSelectedExercises,
  onPrev,
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
    <article className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
      <p className="flex items-center justify-center text-3xl md:text-4xl rounded-full size-16 md:size-20 border-2 border-black">
        2
      </p>
      <h2 className="text-xl md:text-3xl uppercase text-center mb-8">
        Choisis tes exercices
      </h2>

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
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          aria-label="Page précédente"
        >
          <svg
            className="-rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m7.5.793l4.354 4.353l-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <span>
          Page {currentPage} sur {totalPages}
        </span>
        <button
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          aria-label="Page suivante"
        >
          <svg
            className="rotate-90"
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 15 15"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="m7.5.793l4.354 4.353l-.707.708L8 2.707V14H7V2.707L3.854 5.854l-.708-.708z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      <div>
        <h3 className="uppercase text-xl text-center mx-auto my-12">
          Exercices sélectionnés : {selectedExercises.length} / {exerciseCount}
        </h3>
        <div className="flex flex-wrap justify-center gap-5 max-w-[1000px]">
          {selectedExercises.map((exercise, index) => (
            <SelectedCard
              key={exercise.id}
              exercise={exercise}
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
      <div className="flex gap-4 mx-auto mt-6">
        <button
          className="bg-slate-200 text-black py-4 px-6 rounded w-max flex gap-4 items-center duration-300 hover:bg-slate-300"
          onClick={onPrev}
        >
          Retour
        </button>

        <Button
          title="Valider"
          clickFunction={onNext}
          disabled={selectedExercises.length < exerciseCount}
          condition={selectedExercises.length >= exerciseCount}
        />
      </div>
    </article>
  )
}
