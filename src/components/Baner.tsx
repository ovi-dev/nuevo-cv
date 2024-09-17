import React from "react";
import imagen from "../app/assets/adri.png";
import { FaGithub, FaDribbble } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import { FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";
import { fadeIn } from "../variables/vairables";
import Image from "next/image";
import { Raleway } from "next/font/google";
import { Link } from "react-scroll";
import { FaLinkedin } from "react-icons/fa";


const raleway = Raleway({
  subsets: ["latin"],
  weight: "600",
});
// 32-18 minutos
const descargaCv = "/cv.pdf";

export const Baner = () => {
  return (
    <section className=" min-h-[85vh] lg:min-h-[78vh] flex items-center" id="home" >
      <div className=" container mx-auto">
        <div className="flex flex-col gap-y-8 lg:flex-row lg:items-center 
        lg:gap-x-12 ">{/* texto */}
          <div className="flex-1 text-center lg:text-left">
            <motion.h1 
            variants={fadeIn('up', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}

            className="text-[55px] font-bold leading-[0.8] lg:text-[80px]" > Adrian <span>Perez</span>
            </motion.h1>
            <motion.div
            variants={fadeIn('up', 0.4)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}} 
            className="mb-6 text-[28px] lg:text-[50px] font-semibold uppercase leading-[1]">
            
              <span className="text-white mr-3">developer</span>
              <TypeAnimation sequence={[
              'ReactNative',
              1000,
              'Nextjs',
              1000,
              'React',
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '1.2em', display: 'inline-block' }}
            className='text-accent'
            repeat={Infinity}
            /> 
            </motion.div>
            <motion.p 
             variants={fadeIn('up', 0.5)}
             initial='hidden'
             whileInView={'show'}
             viewport={{once: false, amount: 0.7}} 
            className="mb-8 max-w-lg mx-auto lg:mx-0">Transformando ideas en experiencias digitales excepcionales
               
            </motion.p>

            <motion.div 
            variants={fadeIn('up', 0.6)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.8}} 
            className=" flex max-w-max gap-x-6 items-center mb-12 
            mx-auto lg:mx-0"
            
            >{/* Botones Contactame y Cv */}            
              <Link to="contacto">
              <button type="button" 
              className=" rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200
               hover:shadow-lg hover:shadow-[#6025F5]/50"
              >Contactame</button>
              </Link>
              <a href={descargaCv}>
              <button type="button" 
              className=" rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200
               hover:shadow-lg hover:shadow-[#6025F5]/50"
              >Mi Cv</button>
              </a>
            </motion.div>{/* Botones Contactame y Cv */}
             
              <motion.div 
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.9}} 
              
              className="flex text-[19px] gap-x-9 max-w-max mx-auto lg:mx-12">{/* Sociales */}
             <button type="button">
              <a href="https://github.com/ovi-dev">
                <FaGithub />
              </a>
             </button>

             <button type="button">
              <a href="https://x.com/adrianovi_">
                <FaXTwitter/>
              </a>
             </button>

             <button type="button">
              <a href="https://linkedin.com/in/adrian-perez-santana-350419230">
                <FaLinkedin/>
              </a>
             </button>

             
              </motion.div>{/* Sociales */}

          </div>

          <motion.div 
          variants={fadeIn('down', 0.5)}
          initial='hidden'
          whileInView={'show'}
         
          className=" hidden lg:flex flex-1 max-w-[320px]
          lg:max-[482px]">{/* imagen */}
            <Image
              src={imagen}
              alt={" adrian Perez"}
              width={350}
              height={290}
              className="rounded-full opacity-70"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
