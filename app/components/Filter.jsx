import { useState, useRef, useEffect } from 'react'

export default function Filter({
  title,
  setFilter,
  selectedValues,
  values,
  displayName,
  toggleFilter,
}) {
  // Opening closing of filter menus
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false)
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="group relative" ref={menuRef}>
      <button
        className="flex gap-3 items-center bg-white border-[1px] border-slate-200 hover:border-black rounded px-2 py-0"
        onClick={toggle}
      >
        <h3 className="">{title}</h3>
        <p
          className={`text-white bg-black rounded-full size-6 justify-center items-center ${
            selectedValues.length === 0 ? 'hidden' : 'flex'
          }`}
        >
          {selectedValues.length}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="17.5"
          height="35"
          viewBox="0 0 12 24"
          className={`w-3 duration-300 ${isOpen ? '-rotate-90' : 'rotate-90'}`}
        >
          <path
            fill="currentColor"
            fill-rule="evenodd"
            d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
          />
        </svg>
      </button>

      <div
        className={`z-20 w-max absolute bg-white border-[1px] border-slate-200 rounded ${
          isOpen ? 'flex flex-col' : 'hidden'
        }`}
      >
        {values.map((value) => (
          <label
            key={value}
            className="flex gap-3 p-3 items-center hover:bg-lime-200"
          >
            <input
              className="size-4"
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
