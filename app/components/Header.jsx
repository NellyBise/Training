'use client'

import Image from 'next/image'
import logo from '../src/green-circle.png'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { supabaseAPI } from '@/lib/supabase'
import { useRouter } from 'next/navigation'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isConnected, setIsConnected] = useState(false)
  const router = useRouter()

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

  const userConnection = async () => {
    try {
      const {
        data: { user },
        error: userError,
      } = await supabaseAPI.auth.getUser()
      if (userError) throw new Error(userError.message)
      if (!user) throw new Error('Utilisateur non connecté')

      setIsConnected(true)
    } catch (err) {
      setIsConnected(false)
      console.log(`Erreur : ${err.message}`)
    }
  }

  useEffect(() => {
    userConnection()

    const { data: listener } = supabaseAPI.auth.onAuthStateChange(
      (event, session) => {
        if (session?.user) {
          setIsConnected(true)
        } else {
          setIsConnected(false)
        }
      }
    )
  }, [])

  const handleSignOut = async (e) => {
    e.preventDefault()

    const { error } = await supabaseAPI.auth.signOut()

    if (error) {
      console.log(error.message)
    } else {
      router.push('/')
    }
  }

  return (
    <header className="z-20 relative sticky top-0 flex justify-between px-4 md:justify-around items-center text-white h-20 bg-[#042138]">
      <a href="/" className="flex items-center gap-4">
        <Image src={logo} alt="" width={40} height={40} />
        <p className="text-xl text-lime-400 font-bold uppercase">Train Up</p>
      </a>

      <div
        className={`z-[-1] absolute md:flex md:flex-row-reverse md:static md:h-20 md:w-max md:bg-transparent fixed left-0 top-20 w-full h-max bg-white rounded-b-xl overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
        }`}
      >
        <ul className="flex items-center justify-center m-4 gap-4">
          <li>
            {isConnected ? (
              <Link href="/profile" onClick={toggle}>
                <svg
                  className="group"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 16 16"
                >
                  <path
                    className="fill-slate-700 md:fill-white group-hover:fill-lime-500 duration-300"
                    d="M11 7c0 1.66-1.34 3-3 3S5 8.66 5 7s1.34-3 3-3s3 1.34 3 3"
                  />
                  <path
                    className="fill-slate-700 md:fill-white group-hover:fill-lime-500 duration-300"
                    fillRule="evenodd"
                    d="M16 8c0 4.42-3.58 8-8 8s-8-3.58-8-8s3.58-8 8-8s8 3.58 8 8M4 13.75C4.16 13.484 5.71 11 7.99 11c2.27 0 3.83 2.49 3.99 2.75A6.98 6.98 0 0 0 14.99 8c0-3.87-3.13-7-7-7s-7 3.13-7 7c0 2.38 1.19 4.49 3.01 5.75"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            ) : (
              <Link
                className="bg-lime-500 text-[#042138] p-3 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-lime-300 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
                href="/inscription"
                onClick={toggle}
              >
                S&rsquo;inscrire
              </Link>
            )}
          </li>
          <li>
            {isConnected ? (
              <button
                className="text-slate-700 md:text-white hover:text-lime-400 duration-300 ease-in-out"
                onClick={handleSignOut}
              >
                Déconnexion
              </button>
            ) : (
              <Link
                className="bg-slate-700 text-white p-3 rounded w-max flex gap-4 items-center self-center duration-300 hover:bg-slate-600 disabled:text-slate-500 disabled:cursor-not-allowed disabled:bg-slate-100"
                href="/login"
                onClick={toggle}
              >
                Se connecter
              </Link>
            )}
          </li>
        </ul>
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
