'use client'
import Script from 'next/script';
import { About } from "@/components/About";
import { Baner } from "@/components/Baner";
import { Contacto } from "@/components/Contacto";
import { Header } from "@/components/Header";
import { Nav } from "@/components/Nav";
import { Servicios } from "@/components/Servicios";
import { Trabajos } from "@/components/Trabajos";
import Politica from '@/components/Politica';


export default function Home() {
  return (
    <main >

      <div className="bg-site bg-no-repeat bg-cover overflow-hidden" >

        <Header/>
        <Baner/>
        <About/>
        <Nav/>
        <Servicios/>
        <Trabajos/>
        <Contacto/>

        {/* <div className="h-[4000px]"></div> */}
        
        

      </div>
      <div>
        <Politica/>
      </div>
      
     
    </main>
  );
}
