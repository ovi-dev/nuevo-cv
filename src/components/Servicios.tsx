import { fadeIn } from "@/variables/vairables";
import { motion } from "framer-motion";
import { Inter,Roboto_Mono } from "next/font/google";
import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const inter = Inter({
  subsets: ['latin'],
  weight: ['500']

})
 
const roboto_mono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
 
})

const servicios = [
  {
    nombre: "UI/UX",
    descripcion:
      "React y Next son mi enfoque para desarrollar aplicaciones web modernas. Utilizo React para construir interfaces de usuario interactivas y reutilizables.",
    
    link1: "saber mas",
  },
  {
    nombre: "Bases de Datos",
    descripcion:
      "Utilizo SQL y postgresql para gestionar y manipular datos en bases de datos relacionales. Tengo experiencia en el diseño de esquemas de bases de datos, así como en la escritura de consultas.",
    link2: "saber mas",
  },
  {
    nombre: "Apps Nativas Android y IOS",
    descripcion:
      "Desarrollo aplicaciones móviles nativas para iOS y Android con React Native.",
    link3: "saber mas",
  },
 
];

export const Servicios = () => {
  return (
    <section id="servicios" className="section">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          {/* texto */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
            // imagen se sertvicios
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 mb-o"
          >
            <h2 className={`${inter.className} text-4xl text-accent mb-6`}> Lo que Hago</h2>
            <h3 className=" max-w-[555px] mb-12 text-2xl ">
              
            Ofrezco desarrollo web completo utilizando React y Next.js para crear interfaces interactivas y optimizadas. Desarrollo aplicaciones móviles nativas con React Native y gestiono el backend con Node.js y SQL. 
            Diseño y optimizo bases de datos para asegurar un rendimiento eficiente.
            </h3>
            {/* <button
              className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
              type="button"
            >
              Mi Trabajo
            </button> */}
          </motion.div>
          {/* ser vicios */}

          <motion.div 
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.3}}
          className="flex-1">
            {/* servicios y listas */}
            <div>
              {servicios.map((servicios, index) => {
                // desestructuracion
                const {nombre, descripcion, link1, link2, link3} = servicios
                return (
                  <div className=" border-b-0 border-white/20 h-[146px] mb-[38px] flex" 
                      key={index}>
                    <div className=" max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary
                      font-semibold mb-4">{nombre}</h4>
                      <p className="font-semibold leading-tight text-[18px]">{descripcion}</p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end ">
                      <a className="btn w-9 h-9 mb-[40px] flex justify-center items-center" >
                      <BsArrowUpRight/>      
                      </a>
                      <a className="text-gradient text-sm" href="https://nextjs.org/">{link1}</a>
                      <a className="text-gradient text-sm" href="https://www.postgresql.org">{link2}</a>
                      <a className="text-gradient text-sm" href="https://reactnative.dev/">{link3}</a>
                      </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
