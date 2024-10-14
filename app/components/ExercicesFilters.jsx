import Filter from './Filter'

const exerciseLevel = {
  beginner: 'débutant',
  intermediate: 'intermédiaire',
  expert: 'avancé',
}

const exerciseEquipment = {
  'body only': 'Sans',
  'medicine ball': 'Medecine ball',
  dumbbell: 'Haltères',
  bands: 'Élastique',
  kettlebells: 'Kettlebells',
  'foam roll': 'Rouleau de massage',
  cable: 'Câble',
  machine: 'Machine',
  barbell: 'Barre de musculation',
  'exercise ball': 'Ballon',
  'e-z curl bar': 'Curl bar',
  other: 'Autre',
}

const exerciseCategory = {
  powerlifting: 'Powerlifting',
  strength: 'Force',
  stretching: 'Stretching',
  cardio: 'Cardio',
  'olympic weightlifting': 'Haltérophilie',
  strongman: 'Strongman',
  plyometrics: 'Pliométrie',
}

export default function Filters({
  selectedLevels,
  setSelectedLevels,
  selectedEquipments,
  setSelectedEquipments,
  selectedCategories,
  setSelectedCategories,
  selectedMuscularGroups,
  setSelectedMuscularGroups,
  muscularGroups,
  setCurrentPage,
}) {
  const levels = Object.keys(exerciseLevel)
  const equipments = Object.keys(exerciseEquipment)
  const categories = Object.keys(exerciseCategory)
  const muscularGroupList = Object.keys(muscularGroups)

  const toggleFilter = (setFilter, value) => {
    setCurrentPage(1)
    setFilter((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    )
  }

  return (
    <div className="flex flex-wrap gap-4">
      <Filter
        title="Niveau"
        setFilter={setSelectedLevels}
        selectedValues={selectedLevels}
        values={levels}
        filter="level"
        displayName={exerciseLevel}
        toggleFilter={toggleFilter}
      />
      <Filter
        title="Équipement"
        setFilter={setSelectedEquipments}
        selectedValues={selectedEquipments}
        values={equipments}
        filter="equipment"
        displayName={exerciseEquipment}
        toggleFilter={toggleFilter}
      />
      <Filter
        title="Type d'exercice"
        setFilter={setSelectedCategories}
        selectedValues={selectedCategories}
        values={categories}
        filter="category"
        displayName={exerciseCategory}
        toggleFilter={toggleFilter}
      />
      <Filter
        title="Groupe musculaire"
        setFilter={setSelectedMuscularGroups}
        selectedValues={selectedMuscularGroups}
        values={muscularGroupList}
        filter="group"
        toggleFilter={toggleFilter}
      />
    </div>
  )
}
