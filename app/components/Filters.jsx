import { useState } from 'react'

const exerciseLevel = {
  beginner: 'débutant',
  intermediate: 'intermédiaire',
  expert: 'avancé',
}

const exerciseEquipment = {
  'medicine ball': 'Medecine ball',
  dumbbell: 'Haltères',
  'body only': 'Sans',
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
}) {
  const levels = Object.keys(exerciseLevel)
  const equipments = Object.keys(exerciseEquipment)
  const categories = Object.keys(exerciseCategory)
  const muscularGroupList = Object.keys(muscularGroups)

  const toggleLevel = (level) => {
    setSelectedLevels((prevSelectedLevels) =>
      prevSelectedLevels.includes(level)
        ? prevSelectedLevels.filter((l) => l !== level)
        : [...prevSelectedLevels, level]
    )
  }
  const toggleEquipment = (equipment) => {
    setSelectedEquipments((prevSelectedEquipments) =>
      prevSelectedEquipments.includes(equipment)
        ? prevSelectedEquipments.filter((l) => l !== equipment)
        : [...prevSelectedEquipments, equipment]
    )
  }
  const toggleCategory = (category) => {
    setSelectedCategories((prevSelectedCategories) =>
      prevSelectedCategories.includes(category)
        ? prevSelectedCategories.filter((l) => l !== category)
        : [...prevSelectedCategories, category]
    )
  }
  const toggleMuscularGroup = (muscularGroups) => {
    setSelectedMuscularGroups((prevSelectedMuscularGroups) =>
      prevSelectedMuscularGroups.includes(muscularGroups)
        ? prevSelectedMuscularGroups.filter((l) => l !== muscularGroups)
        : [...prevSelectedMuscularGroups, muscularGroups]
    )
  }

  return (
    <div className="flex gap-4">
      <div>
        <h3>Filtrer par niveau :</h3>
        <div className="flex flex-col">
          {levels.map((level) => (
            <label key={level}>
              <input
                type="checkbox"
                value={level}
                checked={selectedLevels.includes(level)}
                onChange={() => toggleLevel(level)}
              />
              {exerciseLevel[level]}
            </label>
          ))}
        </div>
      </div>
      <div className="group relative">
        <h3>Filtrer par équipement :</h3>
        <div className="hidden z-20 absolute bg-white p-2 border-[1px] border-black group-hover:flex flex-col">
          {equipments.map((equipment) => (
            <label key={equipment}>
              <input
                type="checkbox"
                value={equipment}
                checked={selectedEquipments.includes(equipment)}
                onChange={() => toggleEquipment(equipment)}
              />
              {exerciseEquipment[equipment]}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3>Filtrer par catégorie :</h3>
        <div className="flex flex-col">
          {categories.map((category) => (
            <label key={category}>
              <input
                type="checkbox"
                value={category}
                checked={selectedCategories.includes(category)}
                onChange={() => toggleCategory(category)}
              />
              {exerciseCategory[category]}
            </label>
          ))}
        </div>
      </div>
      <div>
        <h3>Filtrer par groupe musculaire :</h3>
        <div className="flex flex-col">
          {muscularGroupList.map((group) => (
            <label key={group}>
              <input
                type="checkbox"
                value={group}
                checked={selectedMuscularGroups.includes(group)}
                onChange={() => toggleMuscularGroup(group)}
              />
              {group}
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}
