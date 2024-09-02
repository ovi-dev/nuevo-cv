import React from 'react'
import {fadeIn} from '../variables/vairables'
import { motion } from 'framer-motion'


export const Contacto = () => {
  return (
    <section id='contacto' className='py-16 lg:section'>
      <div className=' container mx-auto'>
        <div className=' flex flex-colo lg:flex-row'>
          {/* Texto */}
          <div className='flex-1'> 
            <div>
                <h4 className=' text-xl uppercase text-accent font-medium mb-2 
                tracking-wide'>
                  Ponte en contacto
                  </h4>
                  {/* tamano de letra text-[45px]  */}
                  <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos <br/> Juntos</h2>

            </div>  
          </div>



          {/* form */}
          <div className='flex-1'>
            <input 
            type="text" 
            name="" 
            id=""
            placeholder=' Tu Nombre' 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
             focus:border-accent transition-all'
            />
             <input 
            type="text" 
            name="" 
            id=""
            placeholder=' Tu email' 
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
             focus:border-accent transition-all'
            />
            <textarea 
            placeholder='Tu Mensaje'
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
             focus:border-accent transition-all resize-none mb-12'>
             </textarea>
             <button type="button"
             className='rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50'
             > Enviar Mensaje</button>

          </div>




        </div>
      </div>
      
      
      
      
      
    </section>
  )
}
