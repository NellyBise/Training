'use client'
import { useState } from 'react'
import SelectedCard from './SelectedExercise'
import { SortableItem } from './SortableItem'

import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable'

export default function Step3({ selectedExercises, onSubmit }) {
  const [orderedExercises, setOrderedExercises] = useState(selectedExercises)

  function handleDragEnd(event) {
    const { active, over } = event

    if (active.id !== over.id) {
      setOrderedExercises((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id)
        const newIndex = items.findIndex((item) => item.id === over.id)

        return arrayMove(items, oldIndex, newIndex)
      })
    }
  }

  return (
    <section>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
          <p className="text-4xl uppercase font-bold">Step 3</p>
          <h2 className="text-3xl uppercase text-center">Choisis l'ordre</h2>
          <SortableContext
            items={orderedExercises}
            strategy={rectSortingStrategy}
          >
            <div className="flex flex-wrap justify-center max-w-[1000px] gap-4">
              {orderedExercises.map((exercise, index) => (
                <SortableItem key={exercise.id} id={exercise.id}>
                  <SelectedCard exercise={exercise} index={index} />
                </SortableItem>
              ))}
            </div>
          </SortableContext>

          <button
            onClick={() => onSubmit(orderedExercises)}
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
                fill="yellowgreen"
                stroke="yellowgreen"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M6.906 4.537A.6.6 0 0 0 6 5.053v13.894a.6.6 0 0 0 .906.516l11.723-6.947a.6.6 0 0 0 0-1.032z"
              />
            </svg>
          </button>
        </div>
      </DndContext>
    </section>
  )
}
