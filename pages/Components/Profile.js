import React from 'react';
import Image from 'next/image'
export default function Profile() {
  return (
    <div className="md:flex md:flex-row h-96 bg-gray-900 flex flex-col 
    items-center justify-center 
    bg-[url('/drawing.jpg')] 
    bg-cover
    bg-center">
        
        <div className='md:flex w-full h-full bg-gray-900 bg-opacity-70 backdrop-blur-sm items-center justify-center '> 
        <div className='mt-4 mx-20 md:mt-0 md:mx-0'>
 <Image src='/profile.jpg' width={250} alt=''
      height={250}
      layout='intrinsic'
       className='object-cover object-center  rounded-full mt-5 md:mx-4 '/>
        </div>
   
    
    <div className=" md:ml-20 md:my-32 text-white  flex flex-col items-center justify-center  ">
    <h1 className='  md:text-3xl text-2xl font-bold ' >HELLO I AM SHEYI OYENAME</h1>
    <h1 className='text-lg ' >Aircraft Design Engineer</h1> 

    <p className='py-2 w-4/5 text-gray-200 text-center text-sm'>I am an Aircraft Design Engineer with 2 years of industrial experience in UAV design, simulation and manufacturing</p>
    </div>
    </div> 
    
  </div>
  );
}
