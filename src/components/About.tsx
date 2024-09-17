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
        className='flex-1 bg-about bg-contain bg-no-repeat 
        h-[400px] mix-blend-lighten bg-top opacity-3'>
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
          Soy un desarrollador web con más de 5 años de experiencia en el desarrollo de aplicaciones frontend y conocimientos backend. Mi experiencia abarca tecnologías como React, React-Native, Nextjs, Node, Git, SQL mi último proyecto desarrolle una plataforma de e-commerce.
          Me apasiona crear soluciones tecnológicas que no solo sean funcionales, sino también intuitivas y eficientes. Me esfuerzo por mantenerme al día con las últimas tendencias y tecnologías.
          Valoro la colaboración y el aprendizaje continuo, y estoy buscando una oportunidad donde pueda aplicar mis habilidades y crecer.
          </h3>
      
          {/* estados */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={5} duration={3} /> : null }
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
                <CountUp start={0} end={40} duration={3} /> : null }
                +
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Proyectos  <br />
                
              </div>

            </div>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={2} duration={3} /> : null }
              </div>
              <div className='font-primary text-sm tracking-[2px]'>
                Clientes  <br />
                
              </div>

          </div>
            
          </div>
          
        </motion.div>
      </div>
    </div>
  </section>
  )
}
