import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const About = () => {
  return (
    <div>

    <div className='bg-gray-900 text-white'>
        <Navbar />
        <div>
          <h1 className='font-bold text-2xl py-5 flex justify-center md:flex md:justify-center md:py-10'>Our Story</h1>
        </div>
        <div className='text-center px-4 md:text-xl md:px-8'>
          <p>Ticket2 was born out of a love for live experiences and a desire to make them more accessible. We are a passionate team dedicated to connecting event organizers with eager attendees. Here's what sets us apart:</p>
        </div>
        <div>
          <h1 className='text-center my-7 mx-5'> <span className='font-bold'>Our Mission:</span> To empower event creators to share their passions and talents with the world
            while giving event-goers seamless access to these unique experiences.</h1>
        </div>
        <div>
          <h1 className='text-center my-7 mx-5'> <span className='font-bold'>Easy Booking:</span>We've designed a user-friendly platform that simplifies the ticket booking process,
           making it easy for you to discover and secure your spot at incredible events.</h1>
        </div>
        <div className='pb-24 md:pb-96'>
          <h1 className='text-center my-7 mx-5'> <span className='font-bold'>Diverse Experiences: </span>concerts and conferences to workshops and festivals, Ticket2 offers
           a wide range of events to suit all interests.</h1>
        </div>
    </div>
    <Footer />
    </div>
  )
}

export default About
