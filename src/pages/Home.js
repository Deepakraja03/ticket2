import React from 'react';
import Navbar from '../components/Navbar';
import main from '../assets/ticketroc.png';
import Cards from '../components/Cards';


const Home = () => {
  return (
    <div className='bg-gray-900'>
        <Navbar />
        <div>
        <div>
        <div>
        <h1 className='font-bold text-center text-3xl md:text-4xl md:pt-32 pt-10 text-white md:flex md:justify-center'>Welcome to Ticket2 - Your Premier Ticket Booking Platform</h1>
        </div>
        <div>
          <p className='text-white text-center font-bold md:font-bold md:text-4xl  py-5 md:flex md:justify-center'>
          Discover, Reserve, Experience!
          </p>
        <div className='md:flex md:justify-center'>
          <img className='h-60 pl-5' src={main} alt="main" />
        </div>
          <p className='text-white text-center md:flex md:justify-center'>
          At Ticket2, we believe in the power of experiences. We bring people together to celebrate, learn, and be entertained through a vast array of events hosted by passionate individuals just like you. Whether you're an event organizer or someone seeking a memorable time, Ticket2 is your go-to destination for a world of experiences. Browse events, book tickets, and create unforgettable memories with us.
          </p>
        </div>
        </div>
        <div className='flex justify-center my-10'>
          <h1 className='uppercase text-4xl text-white'>On going Events</h1>
        </div>
        <div id='cards'>
        <Cards />
        </div>
        <div id='whyTicket2'>
          
        </div>
        </div>
    </div>
  )
}


export default Home;
