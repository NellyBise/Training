'use client'
import { useState } from 'react'
import SelectedCard from './SelectedExercise'
import { SortableItem } from './SortableItem'
import GeneratePDF from './GeneratePDF'
import { supabaseAPI } from '@/lib/supabase'
import Button from './ui/Button'

import { DndContext, closestCenter } from '@dnd-kit/core'
import {
  arrayMove,
  SortableContext,
  rectSortingStrategy,
} from '@dnd-kit/sortable'

export default function Step3({ selectedExercises, onPrev }) {
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

  const [title, setTitle] = useState('')
  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }
  const [description, setDescription] = useState('')
  const handleDescriptionChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const {
        data: { user },
        error: userError,
      } = await supabaseAPI.auth.getUser()
      if (userError) throw new Error(userError.message)
      if (!user) throw new Error('Utilisateur non connecté')

      const user_id = user.id
      const exercisesNumber = orderedExercises.length

      const { data, error } = await supabaseAPI.from('training').insert([
        {
          title,
          description,
          orderedExercises,
          exercisesNumber,
          user_id,
        },
      ])
      if (error) throw new Error(error.message)

      alert('Training enregistré avec succès !')
    } catch (err) {
      console.error('Erreur lors de la soumission :', err.message)
      alert(`Erreur : ${err.message}`)
    }
  }

  return (
    <article>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <div className="flex flex-col items-center gap-8 bg-slate-50 py-12 px-8">
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            3
          </p>
          <h2 className="text-3xl uppercase text-center mb-8">
            Choisis l&rsquo;ordre
          </h2>
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
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:max-w-[600px] mt-6"
          >
            <label className="p-2" htmlFor="title">
              Le titre de ta séance
            </label>
            <input
              type="text"
              className="border-[1px] border-slate-200 rounded p-2"
              name="title"
              id="title"
              placeholder="Mon titre"
              value={title}
              maxLength="20"
              onChange={handleTitleChange}
            ></input>
            <label className="mt-4 p-2 flex flex-wrap" htmlFor="description">
              Ajoute ici toutes les précisions que tu veux : type de séance,
              durée, répétitions, timing...
            </label>
            <textarea
              className="border-[1px] border-slate-200 rounded p-2 mb-12"
              name="description"
              id="description"
              value={description}
              placeholder="Description de ma séance"
              maxLength="200"
              onChange={handleDescriptionChange}
              rows="4"
              cols="50"
            ></textarea>
            <Button disabled={title === ''} title="Enregistrer" type="submit" />
          </form>

          <div className="flex gap-4 mx-auto mt-6">
            <button
              className="bg-slate-200 text-black py-4 px-6 rounded w-max flex gap-4 items-center duration-300 hover:bg-slate-300"
              onClick={onPrev}
            >
              Retour
            </button>
            <GeneratePDF
              orderedExercises={orderedExercises}
              title={title}
              description={description}
            />
          </div>
        </div>
      </DndContext>
    </article>
  )
}
