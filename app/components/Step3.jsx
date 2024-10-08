'use client'
import { useState } from 'react'

export default function Step3({ selectedExercises, onSubmit }) {
  const [orderedExercises, setOrderedExercises] = useState(selectedExercises)

  const handleDragAndDrop = (draggedIndex, droppedIndex) => {
    // Logique pour réordonner les exercices
    const updatedExercises = [...orderedExercises]
    const [removed] = updatedExercises.splice(draggedIndex, 1)
    updatedExercises.splice(droppedIndex, 0, removed)
    setOrderedExercises(updatedExercises)
  }

  return (
    <div>
      <h2>Étape 3: Organiser l&rsquo;ordre des exercices</h2>
      <ul>
        {orderedExercises.map((exercise, index) => (
          <li key={exercise.id}>
            {exercise.name}
            {/* Logique de Drag-and-Drop à ajouter ici */}
          </li>
        ))}
      </ul>
      <button onClick={() => onSubmit(orderedExercises)}>Valider</button>
    </div>
  )
}
