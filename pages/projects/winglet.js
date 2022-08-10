import Image from 'next/image';
import React from 'react';
import PageLayout from '../PageLayout';

export default function Winglet() {
  return (
    <PageLayout>
   <div className='md:grid md:grid-cols-5 md:w-2/3 md:m-auto md:mt-20 mx-5 mt-20'>
    <div className="col-span-3 space-y-10">
        <Image src='/winglet2.jpg'alt='' width={920} height={420} className='object-fit '/>
        <Image src='/winglet.jpg'alt='' width={920} height={420} className='object-fit '/>
        <Image src='/templates.jpg'alt='' width={920} height={420} className='object-fit '/>
        <Image src='/cutting.jpg'alt='' width={920} height={420} className='object-fit '/>
        <Image src='/wingsections.jpg'alt='' width={920} height={420} className='object-fit '/>
       
        <Image src='/matchprototype.jpg'alt='' width={920} height={420} className='object-fit '/>
       
        </div>
        <div className='space-y-5 col-span-2 ml-10'>
            <h1 className='font-bold text-2xl'>Overview</h1>
            <p className='text-gray-600'>This project is part of a wing manufacture program for an operational fixed wing UAV. I and my team at Air Force Institute of Technology
                were tasked with the design and manufacture of a winglet that meets both aerodynamic and asthetics requirements. <br/><br/>

                As the design engineer, I used CATIA V5 to design winglet and visualize the integration between the wing design and new winglet. Futhermore, the I carried out
                feasibility studies for manufacturing the new design based on the available materials and tools needed for fabrication. Based on this study, I adoped design for manufacturing methods and ensured 
                they aligned with the available resources. <br/><br/>

                The goal of this project is to boost local human capacity in aircraft structure manufacturing. Previous models had been outsourced to foreign countries hence having local capacity saves cost and time of production.
            </p>

            <h1 className='font-bold text-2xl'>Implementation</h1>
            <p className='text-gray-600'><b>CAD tool:</b> CATIA V5 <br/>
            <b>Materials:</b> Extracted polystyrene foam, Glass Fibre <br/>
            <b>Manufacturing Tools:</b> CNC hot wire foam cutter, handheld hot wire foam cutter </p>
            <p className='text-gray-600'>
                <b>Stage 1</b><br/>
                CAD desgin and Optimization<br/><br/>
                <b>Stage 2</b><br/>
                Winglet is divided into sections then each section 2D profile is printed out and used to cut out wooden templates<br/><br/>
                <b>Stage 3</b><br/>
                Blocks of foam are cut using CNC hot wire foam cutter.The thickness of each block is based on the refrenece section length from the CAD design. 
                The templates marked for each section are marked with the corresponding blocks and held together using special pins. <br/><br/>
                <b>Stage 4</b><br/>
                Using a handheld hot wire foam cutter, the sections are carefully cut out. They are marked according to their positions. After all sections are positioned, printed out views are arranged to form a 
                3D space guide for joining and aligning the sections with refrence to front, side, and top views. <br/><br/>
                <b>Stage 5</b><br/>
                The sections are bonded together and then skinned with glass fibre and epoxy. Sanding and trimming is done to remove any irregularites and get the part ready for delivery to the molding team.
            </p>
        </div>
    
    </div>
    </PageLayout>
 
  );
}
