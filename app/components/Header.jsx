'use client'

import Image from 'next/image'
import logo from '../src/green-circle.png'
import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  function toggle() {
    if (window.innerWidth <= 768) {
      setIsOpen(!isOpen)
    }
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true)
      } else {
        setIsOpen(false)
      }
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className="sticky top-0 flex justify-between px-4 md:justify-around items-center text-white h-20 bg-[#042138]">
      <a href="/" className="flex items-center gap-4">
        <Image src={logo} alt="" width={40} height={40} />
        <p className="text-xl text-lime-400 font-bold uppercase">Training</p>
      </a>

      <div
        className={`md:flex md:static md:h-20 md:w-max md:bg-transparent fixed left-0 top-20 w-full h-max bg-slate-50 rounded-b-xl overflow-hidden transform transition-transform duration-300 ease-in-out ${
          isOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-full opacity-0 pointer-events-none md:pointer-events-auto md:opacity-100 md:translate-y-0'
        }`}
        style={{ zIndex: isOpen ? 10 : -1 }}
      >
        <nav
          id="menu"
          className="flex flex-col items-center h-full space-y-8 text-slate-700 md:text-white py-8 md:h-14 md:mt-0 md:flex-row md:space-x-8"
        >
          <ul className="space-y-16 text-center text-lg md:flex md:items-center md:space-y-0 md:space-x-8">
            <li className="hover:font-bold duration-300 ease-in-out">
              <Link
                className="border-b-4 border-transparent"
                href="#"
                onClick={toggle}
              >
                En savoir plus
              </Link>
            </li>
            <li className="hover:font-bold duration-300 ease-in-out">
              <Link
                className="border-b-4 border-transparent"
                href="/circuit"
                onClick={toggle}
              >
                Créer mon circuit
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="md:hidden">
        <button
          className="w-10 h-10 relative bg-slate-700 rounded"
          onClick={toggle}
        >
          <span className="sr-only">Ouvrir le menu de navigation</span>
          <div className="block w-8 h-8 relative ">
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-lime-400 transform transition duration-500 ease-in-out ${
                isOpen ? 'rotate-45' : '-translate-y-2'
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-lime-400 transform transition duration-500 ease-in-out ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              aria-hidden="true"
              className={`block absolute top-1/2 left-1 w-8 h-0.5 bg-lime-400 transform transition duration-500 ease-in-out ${
                isOpen ? '-rotate-45' : 'translate-y-2'
              }`}
            ></span>
          </div>
        </button>
      </div>
    </header>
  )
}
