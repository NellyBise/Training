export default function Filter({
  title,
  setFilter,
  selectedValues,
  values,
  displayName,
  toggleFilter,
}) {
  return (
    <div className="group relative">
      <h3>{title}</h3>
      <div className="hidden z-20 absolute bg-white p-2 border-[1px] border-black group-hover:flex flex-col">
        {values.map((value) => (
          <label key={value}>
            <input
              type="checkbox"
              value={value}
              checked={selectedValues.includes(value)}
              onChange={() => toggleFilter(setFilter, value)}
            />
            {displayName ? displayName[value] : value}
          </label>
        ))}
      </div>
    </div>
  )
}
