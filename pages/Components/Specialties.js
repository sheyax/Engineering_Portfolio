import React from 'react';

export default function Specialties() {
  return (
    <div className='md:grid md:grid-flow-col grid-cols-4'>
          <div className="flex 
          flex-col items-center justify-center
          bg-gray-900 marker text-white 
          h-52 drop-shadow-2xl mx-2 my-4
          hover:bg-gray-600 rounded-lg">
            <h1 className='text-lg font-bold text-center'>Computer Aided Design</h1>
            <p className='text-center text-sm text-gray-400 mx-2 mt-5'>Proeficent in CATIA V5 and Solidworks</p></div>
          
            <div className="flex 
          flex-col items-center justify-center
          bg-gray-900 marker text-white 
          h-52 drop-shadow-2xl mx-2 my-4
          hover:bg-gray-600 rounded-lg">
            <h1 className='text-lg mx-2 text-center font-bold'>Computational Fluid Dynamics</h1>
            <p className='text-center text-sm text-gray-400 mx-2 mt-5'>ANSYS , AVL, Xfoil, Python </p></div>
        

            <div className="flex 
          flex-col items-center justify-center
          bg-gray-900 marker text-white 
          h-52 drop-shadow-2xl mx-2 my-4
          hover:bg-gray-600 rounded-lg">
            <h1 className='text-lg mx-2 text-center font-bold'>Computer Aided Manufacturing</h1>
            <p className='text-center text-sm text-gray-400 mx-2 mt-5'>DELMIA, CATIA, Plant simultion</p></div>

            <div className="flex 
          flex-col items-center justify-center
          bg-gray-900 marker text-white 
          h-52 drop-shadow-2xl mx-2 my-4
          hover:bg-gray-600 rounded-lg">
            <h1 className='text-lg text-center font-bold'>Composite Manufacturing</h1>
            <p className='text-center text-sm text-gray-400 mx-2 mt-5'></p></div>
        </div>
  );
}
