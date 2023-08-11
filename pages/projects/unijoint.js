import React from 'react';
import PageLayout from '../PageLayout';
import Image from 'next/image';

export default function UniJoint() {
  return (
    <PageLayout>
    <div className='md:grid md:grid-cols-5 md:w-2/3 md:m-auto md:mt-20 mx-5 mt-20'>
    <div className="col-span-3 space-y-10">
    <Image src='/drawing.jpg'alt='' width={920} height={450} className='object-cover '/>
    <Image src='/cad.jpg'alt='' width={920} height={450} className='object-cover '/>

        </div>

        <div className='space-y-5 col-span-2 ml-10'>
        <h1 className='font-bold text-2xl'>Overview</h1>
        <p className='text-gray-600'>
            This project was designed as a test for 4th year undergraduate students of Aerospace Engineering Department at Air Force Institute of Technology.<br/><br/>
            The goal was to test their skills in design with assembly proccess in mind. The students were encouraged to develop their own design in CATIA V5 using the center block as a reference to design the rest of the body.
            <br/><br/>
            My goal as the teacher of this course was to develop a deisgn mindset through understanding of proportions, manufacturing and easy assembly process
        </p>

        </div>

    </div>
    </PageLayout>
  );
}
