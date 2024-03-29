import Link from 'next/link';
import React from 'react';
import ProjectBanner from './ProjectBanner';

export default function Projects() {
  return (
    <div>
<div className='md:grid md:grid-flow-col md:grid-cols-3 grid grid-flow-row h-80 '>
  <div className="bg-[url('/winglet.jpg')] bg-cover bg-center hover:opacity-80 hover:bg-scale-10">
  <Link href='./projects/winglet'>
    <a href=''>
    <ProjectBanner projectName='Winglet Design and Fabrication'/></a>
    </Link>
  </div>
  <div className="bg-[url('/streamline.jpg')] bg-cover bg-center hover:opacity-80">
  <Link href='./projects/hexa'>
    <a href=''>
  <ProjectBanner projectName='Hexacopter Canopy CFD analysis'/>
  </a>
  </Link>
  </div>
  <div className="bg-[url('/joint.jpg')] bg-cover bg-center hover:opacity-80">
    <Link href="./projects/unijoint">
    <a href="">
  <ProjectBanner projectName='Universal Joint Design'/></a>
  </Link>
  </div>
</div>

<div className='md:grid md:grid-flow-col md:grid-cols-3 grid grid-flow-row  h-80 '>
  <div className="bg-[url('/fishgrader.jpg')] bg-cover bg-center hover:opacity-80">
    <Link href="./projects/fuzzylogic">
    <a href="">
  <ProjectBanner projectName='Smart Irrigation System'/>
  </a>
  </Link>
  </div>
  <div className="bg-[url('/release.jpg')] bg-cover bg-center hover:opacity-80">
    <Link href="./projects/rcam">
    <a href="">
    <ProjectBanner projectName='MATLAB Flight Simulator'/>
    </a>
    </Link>
 
  </div>
  <div className="bg-[url('/visflow.jpg')] bg-cover bg-center hover:opacity-80">
  <ProjectBanner projectName='Spray Nozzle Optimization'/>
  </div>
</div>
</div>
  );
}
