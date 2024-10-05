export default function Step2 ({ onNext, exercises, selectedExercises, setSelectedExercises }) {
    const toggleExercise = (exercise) => {
      setSelectedExercises(prev => 
        prev.includes(exercise) 
        ? prev.filter(e => e !== exercise) 
        : [...prev, exercise]
      );
    };
  
/**{exercises.map((exercise) => (
    <div key={exercise.id}>
    <span>{exercise.name}</span>
    <button onClick={() => toggleExercise(exercise)}>
      {selectedExercises.includes(exercise) ? 'Deselect' : 'Select'}
    </button>
  </div>
))} */


    return (
      <div>
        <h2>Étape 2: Choisir vos exercices</h2>
        <div>
         Les exercices
        </div>
        <div>
          <h3>Aperçu des exercices sélectionnés</h3>
          {selectedExercises.map((exercise) => (
            <div key={exercise.id}>{exercise.name}</div>
          ))}
        </div>
        <button onClick={onNext}>Valider</button>
      </div>
    );
  };
  