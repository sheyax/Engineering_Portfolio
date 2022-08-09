import Head from 'next/head'
import Image from 'next/image'
import Profile from './Components/Profile'
import Projects from './Components/Projects'
import Specialties from './Components/Specialties'
import PageLayout from './PageLayout'



export default function Home() {
  return (
   
      <PageLayout>
    <Profile/>

<div className='flex items-center justify-center my-5'>
<h1 className='text-2xl font-bold text-gray-900'>Specialties</h1>
</div>
        
<Specialties/>

<div className='flex items-center justify-center my-5'>
<h1 className='text-2xl font-bold text-gray-900'>Projects</h1>
</div>

<Projects/>
        
      </PageLayout>
   
  )
}
