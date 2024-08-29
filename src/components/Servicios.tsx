import { fadeIn } from '@/variables/vairables'
import { motion } from 'framer-motion'

import React from 'react'
import { BsArrowUpRight } from 'react-icons/bs'

const servicios =  [
  {
    nombre: 'UI/UX',
    descripcion: ' loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ',
    link: ' loren etc'
  },
  {
    nombre: 'Developer',
    descripcion: ' loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ',
    link: ' loren etc'
  },
  {
    nombre: 'Digital',
    descripcion: ' loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ',
    link: ' loren etc'
  },
]

export const Servicios = () => {
  return (
    <section id='servicios' className='section'>
      <div className='container mx-auto'>
        <div>
          {/* texto */}
          <h2 className='text-5xl text-accent mb-6'> Lo que Hago</h2>
          <h3 className=' max-w-[455px] mb-16'> Lorem ipsum dolorat tempore, sequi recusandae dolore
             mollitia, minus ad, sit deleniti rr.
          </h3>
          
          <div>texto</div>

          {/* ser vicios */}
          <div>servicios</div>
        </div>
      </div>
    </section>
  )
}
