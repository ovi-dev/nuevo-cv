import { fadeIn } from "@/variables/vairables";
import { motion } from "framer-motion";

import React from "react";
import { BsArrowUpRight } from "react-icons/bs";

const servicios = [
  {
    nombre: "UI/UX",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: " loren etc",
  },
  {
    nombre: "Developer",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: " loren etc",
  },
  {
    nombre: "Digital",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: " loren etc",
  },
  {
    nombre: "Digital",
    descripcion:
      " loren etelkjlkckm;lk;k;lkdf;lkjloiujoiureoiujfjlkj kjlskjdflkjsd, ",
    link: " loren etc",
  },
];

export const Servicios = () => {
  return (
    <section id="servicios" className="section">
      <div className="container mx-auto">
        <div className=" flex flex-col lg:flex-row">
          {/* texto */}
          <div
            className="flex-1 lg:bg-services lg:bg-bottom bg-no-repeat
          mix-blend-lighten mb-12 mb-o"
          >
            <h2 className="text-5xl text-accent mb-6"> Lo que Hago</h2>
            <h3 className=" max-w-[455px] mb-16">
              {" "}
              Lorem ipsum dolorat tempore, sequi recusandae dolore mollitia,
              minus ad, sit deleniti rr.
            </h3>
            <button
              className="rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
              type="button"
            >
              {" "}
              Mi Trabajo
            </button>
          </div>
          {/* ser vicios */}

          <div className="flex-1">
            {/* servicios y listas */}
            <div>
              {servicios.map((servicios, index) => {
                // desestructuracion
                const {nombre, descripcion, link} = servicios
                return (
                  <div key={index}>
                    <div>
                      <h4>{nombre}</h4>
                    </div>
                    <div>Lista</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
