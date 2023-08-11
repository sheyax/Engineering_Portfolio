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
                <a className='hover:opacity-50' href=''>About</a></Link>
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
    <div className='h-full bg-gray-200 flex flex-col items-center'>

        <Head>
            <title>Sheyi Oyename</title>
            <meta name="description" content="Sheyi Oyename Aircraft Design Engineer"/> 
        </Head>
    
    <nav className='bg-black text-white w-full flex items-center justify-between  '>
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

    <footer className='bg-black mt-10 text-white w-full flex justify-center items-center h-40'>
        <h1>Copyright 2022 Vratec Designs</h1>
    </footer>
    </div>
  );
}
