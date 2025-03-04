import { motion } from 'framer-motion'
import React from 'react'
import CountUp from 'react-countup'
import { useInView } from 'react-intersection-observer'
import {fadeIn} from '../variables/vairables'


export const About = () => {

const [ref, inView] = useInView({
  threshold: 0.5,

})
// 49:31
  return (
    <section id='about' 
    ref={ref}
    className='section'>
    <div className='container mx-auto'>
      <div className=' flex flex-col gap-y-10 lg:flex-row lg:items-center 
      lg:gap-x-20 lg:gap-y-0 h-screen'>
        {/* imagen */}
        <motion.div 
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1 bg-about bg-contain bg-no-repeat h-[400px] md:h-[600px] mix-blend-lighten bg-top opacity-3 rounded-lg'>
        </motion.div>

        {/* texto */}
        <motion.div 
        variants={fadeIn('left', 0.5)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.3}}
        className='flex-1'>
        <h2 className='text-5xl font-extrabold text-accent'> Sobre mí.</h2>
        <h3 className='mb-1'> 
          Soy un desarrollador con pasión por crear soluciones web y móviles utilizando las últimas tecnologías. Me especializo en desarrollo full-stack, con un fuerte enfoque en React, React Native, Next.js, 
          Node.js, y otras herramientas modernas como JavaScript TypeScript Docker SQL Git Tailwindcss Postgresql.
          </h3>
      
          {/* estados */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={4} duration={6} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Años de  <br />
                Experiencia
              </div>

            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={25} duration={6} /> : null }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyectos  <br />
                
              </div>

            </div>
            {/* <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={2} duration={3} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clientes  <br />
                
              </div>

          </div> */}
            
          </div>
          
        </motion.div>
      </div>
    </div>
  </section>
  )
}
