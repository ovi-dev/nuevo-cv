
import React from 'react'
import Image from 'next/image'
import Logo from '../app/assets/logo2.png'



export const Header = () => {
  return (
    <header className=' py-4'>

      <div className='container mx-auto'>
       <div className='flex justify-between items-center'>
        {/* logo */}
        <Image src={Logo} alt={''}
        width={200}
        height={50} 
        className=' opacity-90 '
      />
  
        
        <button  
        className=" rounded-xl bg-gradient-to-br from-[#6025F5] to-[#FF5555] px-5 py-3 text-base  text-white font-bold transition duration-200 hover:shadow-lg hover:shadow-[#6025F5]/50"
        type='button'> Mi trabajo</button>
   
       </div>
      </div>

    </header>
)
}
