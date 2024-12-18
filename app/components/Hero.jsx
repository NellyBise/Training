'use client'
import Link from 'next/link'
import Image from 'next/image'
import cover from '../src/cover.webp'
import Button from './ui/Button'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const containerVariants = {
  visible: {
    opacity: 1,
    y: [100, 0],
  },
  hidden: { opacity: 0 },
}

export default function Hero() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section className="flex flex-col md:flex-row md:justify-around gap-12 md:gap-6 pb-12 text-white px-4 md:px-12 pt-8">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="md:w-2/5 md:pl-12 md:pt-32 md:min-h-screen flex flex-col gap-6 text-left"
      >
        <h1 className="uppercase text-2xl md:text-5xl font-bold">
          Crée ton circuit d&rsquo;entraînement sur mesure
        </h1>
        <p className="text-base md:text-lg">
          Sélectionne tes exercices préférés et crée un circuit sur mesure
          adapté à tes objectifs.
        </p>
        <Link href="./creer-programme-entrainement">
          <Button title="Commencer" />
        </Link>
      </motion.div>
      <div className="md:w-3/5">
        <Image src={cover} alt="" width={2491} height="auto" priority />
      </div>
    </section>
  )
}
