import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <div className='bg-gray-900 text-white h-screen'>
        <Navbar />
      <div>
        <h1 className='font-bold text-center text-3xl md:text-6xl py-10'>
          Contact Us
        </h1>
        <div className='md:flex md:justify-center md:text-xl'>
        <div className='flex justify-center'>
          <h1>Name:</h1>
          <div className='px-2'>
          <input type='text' className='border-2 border-gray-600 rounded-lg' placeholder='  Enter your name' />
          </div>
        </div>
        <div className='flex justify-center py-5 md:py-0'>
          <h1>Email:</h1>
          <div className='px-2'>
          <input type='email' className='border-2 border-gray-600 rounded-lg' placeholder='  Enter your email' />
          </div>
        </div>
        </div>
        <div className='flex justify-center md:py-5 md:text-xl'>
          <h1>Subject:</h1>
          <div className='px-2'>
          <textarea type='text' className='border-2 border-gray-600 rounded-lg h-28 md:w-80' placeholder='  subject here' />
          </div>
        </div>
        <div className='flex justify-center pt-7 pb-28 md:pb-52 md:text-xl' id='button'>
          <button type='submit' className='bg-gradient-to-r from-yellow-500 via-slate-400 to-gray-200 rounded-full h-10 px-5'>Send</button>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Contact
