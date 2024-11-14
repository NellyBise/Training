'use client'

import Image from 'next/image'
import logo from '../src/green-circle.png'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Button from './ui/Button'

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
    <header className="z-20 relative sticky top-0 flex justify-between px-4 md:justify-around items-center text-white h-20 bg-[#042138]">
      <a href="/" className="flex items-center gap-4">
        <Image src={logo} alt="" width={40} height={40} />
        <p className="text-xl text-lime-400 font-bold uppercase">Train Up</p>
      </a>

      <div
        className={`z-[-1] absolute md:flex md:static md:h-20 md:w-max md:bg-transparent fixed left-0 top-20 w-full h-max bg-white rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <nav
          id="menu"
          className="flex flex-col items-center h-full space-y-8 text-slate-700 md:text-white py-8 md:mt-0 md:flex-row md:space-x-8"
        >
          <ul className="space-y-16 text-center text-lg md:flex md:items-center md:space-y-0 md:space-x-8">
            <li className="hover:text-lime-400 duration-300 ease-in-out">
              <Link
                className="border-b-4 border-transparent"
                href="#"
                onClick={toggle}
              >
                En savoir plus
              </Link>
            </li>
            <li className="hover:text-lime-400 duration-300 ease-in-out">
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
      <ul className="flex gap-4">
        <li>
          <Link
            className="bg-lime-500 text-[#042138] p-3 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-lime-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
            href="/inscription"
          >
            S&rsquo;inscrire
          </Link>
        </li>
        <li>
          <Link
            className="bg-slate-700 text-white p-3 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-slate-600 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
            href="/login"
          >
            Se connecter
          </Link>
        </li>
      </ul>
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
