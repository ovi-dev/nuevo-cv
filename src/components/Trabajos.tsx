import { motion } from "framer-motion";
import React from "react";
import { fadeIn } from "@/variables/vairables";
import Img1 from "/public/img/portfolio-img1.png";
import Img2 from "/public/img/portfolio-img2.png";
import Img3 from "/public/img/portfolio-img3.png";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
});

export const Trabajos = () => {
  return (
    <section id="trabajo" className="">
      <div className=" container mx-auto">
        <div className="flex flex-col lg:flex-row gap-x-12">
          
   <motion.div 
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-12 mb-10 lg:mb-0"
          >
            {/* izquierda texto */}
            <div>
              <h2 className={`${inter.className} text-5xl text-accent mb-7`}>
                My trabajo
              </h2>
              <p className=" max-w-sm mb-14">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                jlkjkljdslkjsd kjkj khj kjh
                
              </p>
              <button
                className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-4 py-2 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
                type="button"
              > Todos mis Proyectos
              </button>
            </div>



            {/* imagenes div de primera imagen*/}
            <div
              className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* cubrir */}
              <div
                className="group-hover:bg-black/70 w-full h-full absolute 
              z-39 transition-all duration-300"
              ></div>

              {/* imagen */}
              <Image
                className=" group-hover:scale-125 transition-all duration-500"
                width={600}
                src={Img1}
                alt="primerta imagen"
              />
              {/* title */}
              <div className=" absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                {/* colores de las letras UI/UX */}
                <span className="text-gradient">UI/UX</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Proyectos</span>
              </div>
            </div> 
  </motion.div> {/* // cierre imagen 1 */}


          {/* las otras dos Imagenes */}
  <motion.div 
            variants={fadeIn("left", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className=" flex-1 flex flex-col gap-y-2"
          >
      {/* Imagen 2 */}
      <div className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* cubrir */}
              <div className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* imagen */}
              
              <Image
              width={600}
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img2}
                alt="segunda imagen"

              />
              {/* title */}
              <div className=" absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                {/* colores de las letras UI/UX */}
                <span className="text-gradient">UI/UX</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Proyectos</span>
              </div>
        </div>

        {/* Imagen 3 */}
        <div className="group relative overflow-hidden border-2
             border-white/50 rounded-xl"
            >
              {/* cubrir */}
              <div className="group-hover:bg-black/70 w-full h-full absolute 
              z-40 transition-all duration-300"
              ></div>
              {/* imagen */}
              
              <Image 
                width={600}
                className=" group-hover:scale-125 transition-all duration-500"
                src={Img3}
                alt="tercera imagen"
              />
              {/* title */}
              <div className=" absolute -bottom-full left-12
              group-hover:bottom-24 transition-all duration-500 z-50"
              >
                {/* colores de las letras UI/UX */}
                <span className="text-gradient">UI/UX</span>
              </div>
              {/* title */}
              <div className="absolute -bottom-full left-12
              group-hover:bottom-14 transition-all duration-700 z-50"
              >
                <span className="text-3xl text-white">Proyectos</span>
              </div>
        </div>

  </motion.div>
        </div>
      </div>
    </section>
  );
};
