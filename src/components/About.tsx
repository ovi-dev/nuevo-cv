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
        <h2 className='text-5xl font-extrabold text-accent'> About me.</h2>
        <h3 className='mb-1'> React Developer com mas de 5 años de experiencia Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae 
          volupebitis sit. Enim, nemo consequatur.
           Sapiente sequi neque nesciunt libero repellendus eos?</h3>
        <p className=' mb-6'>Lorem ipsum dolor sit amet consectetur, adipisicing 
          elit.
          </p>
          {/* estados */}
          <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
            <div>
              <div className='text-[40px] font-tertiary text-gradient mb-2'>
                {
                inView ?
                <CountUp start={0} end={3} duration={3} /> : null }
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
                <CountUp start={0} end={200} duration={3} /> : null }
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
                <CountUp start={0} end={20} duration={3} /> : null }
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
