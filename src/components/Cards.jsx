import React from 'react'

const Cards = (props) => {
  return (
    <div className='md:pt-10 md:pl-10 pt-10 pl-10 md:grid md:grid-cols-3'>
    <div className='bg-gradient-to-t from-blue-600 via-purple-300 to-purple-400 md:pl-10 md:pr-16 md:py-10 pl-10 pr-16 rounded-lg h-72 w-60'>
        <h1 className='font-bold text-center pb-4'>Details</h1>
        <img src={props.Image} alt="Car" className="w-20 h-10 ml-9" /> <br />
        <p className='pt-2'>Event_Name: {props.Event}</p>
        <p className='pt-2'>Description: {props.Description}</p>
        <p className='pt-2'>Timing : {props.timing}</p>
        <p className='pt-2'>Location : {props.location}</p>
        
        {/* <p className='pt-2'>image : {props.image}</p> */}
    </div>
    </div>
  )
}
  
export default Cards;
