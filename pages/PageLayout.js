import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';

export default function PageLayout(props) {
    var menu;
    const router = useRouter();

    menu=(
        <ul className='flex space-x-5 p-5 text-md'>
            <li>
                <Link href='#'>
                <a className='hover:opacity-50' href='#'>About</a></Link>
            </li>
            <li>
                <Link href='#'>
                <a className='hover:opacity-50' href='#'>Projects</a></Link>
            </li>
            <li>
                <Link href='#'>
                <a className='hover:opacity-50' href='#'>Contact</a></Link>
            </li>
        </ul>
    )
  return (
    <div className='h-full bg-gray-200 flex flex-col items-center '>

        <Head>
            <title>Sheyi Oyename</title>
            <meta name="description" content="Sheyi Oyename Aircraft Design Engineer"/> 
        </Head>
    
    <nav className='bg-gray-200 flex items-center justify-between w-2/3'>
        <div>
      
                <Link href='/'>
                <a href='#' className='font-bold  p-5'>Sheyi Oyename</a></Link>
          
        </div>

        <div>
            {menu}
        </div>
    </nav>
    <div>
        <main className=''>
            {props.children}
        </main>
    </div>
    </div>
  );
}
