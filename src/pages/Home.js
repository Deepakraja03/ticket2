import React from 'react';
import Navbar from '../components/Navbar';
import main from '../assets/ticketroc.png'


const Home = () => {
  return (
    <div className='bg-gray-900'>
        <Navbar />
        <div>
        <div>
        <div>
        <h1 className='font-bold text-center text-4xl md:pt-32 pt-10 text-white md:flex md:justify-center'>Your Gateway to Memorable Events!</h1>
        </div>
        <div>
          <p className='text-white text-center py-5 md:flex md:justify-center'>
          Get ready to dive into the world of exciting events and unforgettable experiences with our very own Showbucks! Your passport to the hottest shows, concerts, sports events, and much more!
          </p>
          <p className='text-white text-center md:flex md:justify-center'>
          💰 Seamlessly Buy Tickets: With Showbucks, you can effortlessly purchase event tickets with the currency of fun, simplifying your ticket-buying experienc
          </p>
        </div>
        </div>
        <div className='md:flex md:justify-center'>
          <img className='h-60 pl-5' src={main} alt="main" />
        </div>
        <div>
          <h2 className='text-center text-white mt-6'>💼 Host Your Event: If you're an event organizer, Ticket3 offers you a <br/>
            platform to host and promote your event, complete with the convenience of EventCoin transactions.</h2>
        </div>
        </div>
    </div>
  )
}

export default Home;
