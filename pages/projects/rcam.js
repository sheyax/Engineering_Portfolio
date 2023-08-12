import React from 'react';
import PageLayout from '../PageLayout';
import ReactPlayer from "react-player";

export default function Rcam() {
  return (
    <PageLayout>
        <div className="flex items-center justify-center pt-2">
            <h1 className='font-bold text-2xl mx-auto text-center'>MATLAB Flight Simulator</h1>
            </div>
               <div className='md:grid md:grid-cols-5 md:w-2/3 md:m-auto md:mt-20 mx-5 mt-20'>
    <div className="col-span-3 md:p-2 space-y-10 bg-gray-300">
    <div className="h-[300px]">
    <ReactPlayer
        url="https://vimeo.com/853957415"
        controls={true}
        width='100%'
        height='100%'

      />
      </div>

    </div>

    <div className='space-y-5 col-span-2 ml-10'>
    <h1 className='font-bold text-2xl'>Overview</h1>
    <p className='text-gray-600'>
        An aircraft mathematical model derived from and calulation of the state variables of an aircraft in space. The derivative is then translated into MATLAB and used to create a virtual model of the aircraftdynamics.<br/><br/>
        The complete system including Joystic control, environmental coditions, and data visualization is designed in SIMULINK. Also an aircraft stabilization model is generated using PID control to keep the aircraft in steady state and return it to steady state when disturbed.
    </p>

    </div>

    </div>

    </PageLayout>
  );
}
