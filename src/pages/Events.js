import React from 'react'
import Navbar from '../components/Navbar'
import Cards from '../components/Cards'

const Events = () => {
  return (
    <div className='bg-gray-900'>
      <Navbar />
      <h1 className='text-center text-white text-xl py-10 md:text-4xl font-bold font-sans uppercase'>Ongoing Events</h1>
      <div>
        <h1 class="text-center md:flex md:justify-start md:px-10 text-3xl font-bold text-white">Hackathon</h1><br/>
        <Cards />
      </div>
      <div>
        <h1 class="text-center md:flex md:justify-start md:px-10 text-3xl font-bold mt-10 text-white">Concerts</h1>
        <Cards />
      </div>
      <div>
        <h1 class="text-center md:flex md:justify-start md:px-10 text-3xl font-bold mt-10 text-white">Sports</h1>
        <Cards />
      </div>
      <div>
        <h1 class="text-center md:flex md:justify-start md:px-10 text-3xl font-bold mt-10 text-white">others</h1>
        <Cards />
      </div>
    </div>
  )
}

export default Events
