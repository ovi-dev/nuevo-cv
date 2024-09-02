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
      " loren etelkjlkckm;lk;k;lkdf;lkjloi kj jh sdkjhf kjhui   jkhjh kjh kjh kjhkjhjksdf jkhjh kjhsdiufh ujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: "saber mas",
  },
  {
    nombre: "Developer",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujk ksdl;fk ds;lk ;lskd  kh sdhf gjjhg sdjhg hj gjsghdf jgh jhg fjlkj kjlskjdflkjsd, ",
    link: "saber mas",
  },
  {
    nombre: "Digital",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjkdsljlkjsdklc l ljs dlkj ljlkjsd lkj sdlkj lkjoisuydf lh h kjhds fkh dskjh khdsfloiujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: "saber mas",
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
            <h2 className={`${inter.className} text-5xl text-accent mb-6`}> Lo que Hago</h2>
            <h3 className=" max-w-[555px] mb-12 text-2xl ">
              
              Lorem ipsum dolorat tempore, selksjdflk
            </h3>
            <button
              className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
              type="button"
            >
              Mi Trabajo
            </button>
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
                const {nombre, descripcion, link} = servicios
                return (
                  <div className=" border-b-0 border-white/20 h-[146px] mb-[38px] flex" 
                      key={index}>
                    <div className=" max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary
                      font-semibold mb-4">{nombre}</h4>
                      <p className="font-semibold leading-tight">{descripcion}</p>
                    </div>
                    <div className=" flex flex-col flex-1 items-end ">
                      <a 
                      className="btn w-9 h-9 mb-[40px] flex justify-center items-center"
                      href="http://">
                      <BsArrowUpRight/>      
                      </a>
                      <a 
                        className="text-gradient text-sm"
                        href="#">{link}</a>
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
