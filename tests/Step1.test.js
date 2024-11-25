import '@testing-library/jest-dom'
import { render, screen, fireEvent } from '@testing-library/react'

import Step1 from '../app/components/Step1'

describe('Step1', () => {
  test('initialize count at 9 and increment one by one until 15 when plus button is clicked', () => {
    render(
      <Step1
        onNext={() => {}}
        setExerciseCount={() => {}}
        exerciseCount={9}
        setSelectedExercises={() => {}}
      />
    )
    const input = screen.getByLabelText(/Nombre d’exercices/i)
    const plusButton = screen.getByLabelText('Plus')
    expect(input.value).toBe('9')
    fireEvent.click(plusButton)
    expect(input.value).toBe('10')
    for (let i = 0; i < 10; i++) {
      fireEvent.click(plusButton)
    }
    expect(input.value).toBe('15')
  })

  test('decrements count one by one until 5 when minus button is clicked', () => {
    render(
      <Step1
        onNext={() => {}}
        setExerciseCount={() => {}}
        exerciseCount={9}
        setSelectedExercises={() => {}}
      />
    )
    const input = screen.getByLabelText(/Nombre d’exercices/i)
    const minusButton = screen.getByLabelText('Moins')
    fireEvent.click(minusButton)
    expect(input.value).toBe('8')
    for (let i = 0; i < 10; i++) {
      fireEvent.click(minusButton)
    }
    expect(input.value).toBe('5')
  })

  test('count does not accept non numerical values and render 5', () => {
    render(
      <Step1
        onNext={() => {}}
        setExerciseCount={() => {}}
        exerciseCount={9}
        setSelectedExercises={() => {}}
      />
    )
    const input = screen.getByLabelText(/Nombre d’exercices/i)
    fireEvent.change(input, { target: { value: 'Hello, world!' } })
    expect(input.value).toBe('5')
  })

  test('calls onNext when validate button is clicked', () => {
    const onNextMock = jest.fn()
    render(
      <Step1
        onNext={onNextMock}
        setExerciseCount={() => {}}
        exerciseCount={9}
        setSelectedExercises={() => {}}
      />
    )
    const button = screen.getByText(/Valider/i)
    fireEvent.click(button)
    expect(onNextMock).toHaveBeenCalled()
  })
})
