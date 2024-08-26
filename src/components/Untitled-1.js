
import React from 'react'
import imagen from '../app/assets/adri.png'
import { FaGithub, FaDribbble } from 'react-icons/fa'
import { TypeAnimation } from 'react-type-animation'
import { FaXTwitter } from "react-icons/fa6";
import { motion } from 'framer-motion';
import {fadeIn} from '../variables/vairables'
import Image from 'next/image';
import { Raleway } from 'next/font/google';
import { Link } from 'react-scroll';

const raleway = Raleway({
  subsets: ['latin'],
  weight: "600"
})

const descargaCv = '/cv.pdf'

export const Baner = () => {
  return (
    <section id='home' className='section'>
      <div className='container max-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center'>

      {/* texto */}
        <div className='flex-1 text-center font-primary lg:text-left'>
          <h1 className='text-[55px] font-bold leading-[0.8] lg:text-[100px]'> Adrian <span> Perez</span>
          </h1>
          <div className=' mb-6 text-[36px] lg:text-[54px] font-secondary font-semibold uppercase
           leading-[1]' >
            <span className='text-white mr-4'>Soy  </span>

            <TypeAnimation sequence={[
              'Next',
              1000,
              'React Developer',
              1000,
              'React-Native Developer',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.2em', display: 'inline-block' }}
            className='text-accent'
            repeat={Infinity}
            /> 
        </div> {/*  el que jose */}
          
              <p className='mb-8 max-w-lg mx-auto lg:mx-0 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Voluptas deleniti et at expedita similique aut iure, 
                tempora nam
              </p>
              {/* Botones Contactame y Cv */}
          <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
           <Link to='contacto'>
           <button className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base font-medium text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50" type="button">Contactame</button> 
           
           </Link>

           <a href={descargaCv}>
           <button className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base text-white transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50" type="button">Mi Cv</button> 
           </a>

          </div>
            {/* redes sociales */}
          <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:max-0'>
              <a href="#">
                <FaGithub/>
              </a>
              <a href="#">
                <FaXTwitter/>
              </a>
          </div>

        </div>


        {/* imagen */}
        <div>
        <Image src={imagen} alt={''}
        width={290}
        height={350}
        className='rounded-full opacity-70'
        />
        </div>

        </div>
      
    </section>
  )
}


