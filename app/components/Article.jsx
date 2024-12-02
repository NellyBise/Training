'use client'
import Image from 'next/image'
import { motion, useInView } from 'motion/react'
import { useRef } from 'react'

const variants = {
  visible: { y: 0, opacity: 1, filter: 'blur(0px)' },
  hidden: { y: 50, opacity: 0, filter: 'blur(5px)' },
}

export default function Article({ title, content, image, reverse, altText }) {
  const ref = useRef(null)

  return (
    <motion.article
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={variants}
      transition={{ delay: 0.2 }}
      className={`flex flex-col ${
        reverse ? 'md:flex-row-reverse' : 'md:flex-row'
      } gap-8`}
    >
      <div
        className={`flex flex-col ${
          image === '' ? 'md:w-full' : 'md:w-2/3'
        } gap-3`}
      >
        <h2 className="uppercase flex justify-center text-center text-2xl md:text-4xl py-8 font-bold">
          {title}
        </h2>
        {content}
      </div>
      <div
        className={` ${
          image === '' ? 'md:w-0' : 'md:w-1/3'
        } my-4 flex items-center`}
      >
        <Image
          src={image}
          alt={altText}
          className="object-cover rounded"
          width={6000}
          height="auto"
        />
      </div>
    </motion.article>
  )
}
