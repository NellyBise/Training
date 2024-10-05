import React from 'react'
import { useQuery, gql } from '@apollo/client'

const GET_EXERCISES = gql`
  query GetExercises {
    exercises {
      id
      name
      description
    }
  }
`

const Exercises = () => {
  const { loading, error, data } = useQuery(GET_EXERCISES)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <h2>Exercises</h2>
      <ul>
        {data.exercises.map((exercise) => (
          <li key={exercise.id}>
            <h3>{exercise.name}</h3>
            <p>{exercise.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Exercises
