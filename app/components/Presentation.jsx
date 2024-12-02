'use client'
import Link from 'next/link'
import Button from './ui/Button'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const titleVariants = {
  visible: { opacity: 1, filter: 'blur(0px)' },
  hidden: { opacity: 0, filter: 'blur(5px)' },
  transition: { times: [0, 3] },
}
const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
}

export default function Presentation() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  return (
    <section className="flex flex-col items-center bg-slate-50 py-12 gap-12 text-center">
      <motion.h2
        ref={ref}
        variants={titleVariants}
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
        className="uppercase text-2xl md:text-4xl font-bold"
      >
        Crée ton programme d’entraînement en 3 étapes simples
      </motion.h2>
      <div className="flex flex-col justify-center md:max-w-[1000px] md:flex-row gap-12">
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.3 }}
          className="md:w-1/4 flex flex-col items-center gap-8"
        >
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            1
          </p>
          <p className="text-center">
            Définis le nombre d&rsquo;exercices de ton circuit personnalisé.
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.6 }}
          className="md:w-1/4 flex flex-col items-center gap-8"
        >
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            2
          </p>
          <p className="text-center">
            Sélectionne les exercices qui correspondent à tes objectifs
            d&rsquo;entraînement
          </p>
        </motion.div>
        <motion.div
          ref={ref}
          variants={variants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          transition={{ delay: 0.9 }}
          className="md:w-1/4 flex flex-col items-center gap-8"
        >
          <p className="flex items-center justify-center text-3xl md:text-5xl rounded-full size-16 md:size-24 border-2 border-black">
            3
          </p>
          <p className="text-center">
            Organise tes exercices dans l&rsquo;ordre que tu préfères.
          </p>
        </motion.div>
      </div>
      <Link href="./creer-programme-entrainement">
        <Button title="Crée ton circuit" />
      </Link>
    </section>
  )
}
