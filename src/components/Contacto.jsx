'use client'
import {fadeIn} from '../variables/vairables'
import { motion } from 'framer-motion'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Contacto = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_cn3pbl3', 'template_9ht82wf', form.current, {
        publicKey: 'LGdqJ2t3y5Abb8BOs',
      })
    
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      alert('Mensaje enviado')
      e.target.reset()
  };



  return (
    <section id='contacto' className='py-16 lg:section'>
      <div className=' container mx-auto'>
        <div className=' flex flex-col lg:flex-row'>
          {/* Texto */}
          <motion.div 
           variants={fadeIn("right", 0.3)}
           initial="hidden"
           whileInView={"show"}
           viewport={{ once: false, amount: 0.3 }}
          className='flex-1 flex justify-start items-center'> 
            <div>
                <h4 className=' text-xl uppercase text-accent font-medium mb-2 
                tracking-wide'>
                  Ponte en contacto
                  </h4>
                  {/* tamano de letra text-[45px]  */}
                  <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Trabajemos <br/> Juntos</h2>

            </div>  
          </motion.div>



          {/* form */}
          <motion.form 
             variants={fadeIn("left", 0.3)}
             initial="hidden"
             whileInView={"show"}
             viewport={{ once: false, amount: 0.3 }}

             ref={form} 
             onSubmit={sendEmail}
            className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6
            items-start'>

            <input 
            type="text" 
            name="name" 
            placeholder=' Tu Nombre'
            required
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
             focus:border-accent transition-all'
            />
             <input 
            type="email" 
            name="email" 
            placeholder=' Tu email' 
            required
            className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white
             focus:border-accent transition-all'
            />
            <textarea 
            name='message'
            placeholder='Tu Mensaje'
            required
            className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white
             focus:border-accent transition-all resize-none mb-12'>
             </textarea>

             <button type="submit"
             className='rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50'
             > Enviar Mensaje</button>

          </motion.form>




        </div>
      </div>
      
      
      
      
      
    </section>
  )
}
