import Image from 'next/image';
import React from 'react';
import PageLayout from '../PageLayout';

export default function Hexa() {
  return (
    <PageLayout>
   <div className='md:grid md:grid-cols-5 md:w-2/3 md:m-auto md:mt-20 mx-5 mt-20'>
    <div className="col-span-3 space-y-10">
        <Image src='/bodypressure.jpg'alt='' width={920} height={571} className='object-fit '/>
        <Image src='/body2pressure.jpg'alt='' width={920} height={571} className='object-fit '/>
        <Image src='/hexaairflow.png'alt='' width={920} height={571} className='object-fit '/>
        <Image src='/velocitycontour.jpg'alt='' width={920} height={571} className='object-fit '/>
       
       
        </div>
        <div className='space-y-5 col-span-2 ml-10'>
            <h1 className='font-bold text-2xl'>Overview</h1>
            <p className='text-gray-600'>This project covers the design and fabrication of a canopy for protecting the avionics of our plant protection hexacopter drone<br/><br/>

                As part of the design and analysis team I was responsible for carrying out aerodynamic simulation and analysis on the designed structure. <br/><br/>

                The analysis covers three major areas of operational conditions. First the 
<b> aerodynamics performance and down-wash characteristics </b>of the propellers in forward flight, secondly
the <b> drag analysis on the vehicle frame </b> was also carried out to determine an optimum design for a shell
used in covering the centre frame of the vehicle. Finally the effect of <b> propeller down-wash on spray
droplets </b> was investigated.
            </p>

            <h1 className='font-bold text-2xl'>Implementation</h1>
            <p className='text-gray-600'><b>Tools:</b> CATIA V5, Solidworks, ANSYS Fluent <br/>
            
             </p>
            <p className='text-gray-600'>
                <b>Stage 1</b><br/>
                CAD desgin and Optimization<br/><br/>
                <b>Stage 2</b><br/>
                The model is cleaned up and simplified for ANSYS fluent<br/><br/>
                <b>Stage 3</b><br/>
                ANSYS fluent software was used to carry out the simulation. In order to run the simulation discretization of the mathematical model needs a high quality mesh of the model. A flow domain was around the model to be simulated was generated to represent flow around the body. <br/><br/>
                <b>Stage 4</b><br/>
                The k-omega SST turbulence model was used to carry out the simulation. This model is efficient in capturing the generation of turbulence close to he wall as well as steady flow far away of the boundary layer. The simulation is set to transient so that the aerodynamic can be observed over time. <br/><br/>
                <b>Results</b><br/>
                <ul>
                  <li>Canopy drag analysis</li>
                </ul>
            </p>
        </div>
    
    </div>
    </PageLayout>
  );
}
