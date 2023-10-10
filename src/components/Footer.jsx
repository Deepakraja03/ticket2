import React from 'react'

const Footer = () => {
  return (
    <div>
      <div className='bg-gradient-to-r from-yellow-400 via-yellow-200 to-white text-black drop-shadow-lg'>
        <div className='md:flex md:justify-center gap-8 py-5  md:pt-10 font-bold font-sans px-10'>
        <a className='block' href='/'>Home</a>
        <a className='block' href='/contact'>Contact</a>
        <a className='block' href='/About'> About</a>
        <a className='block' href='/Events'>Events</a>
        <a className='block' href='/Hosts'>Host</a>
        </div>
        <h1 className='md:flex md:justify-center flex justify-end pr-5 pb-5 text-gray-800'>Copyright © 2023 Ticket2</h1>
      </div>
    </div>
  )
}

export default Footer
