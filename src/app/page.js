'use client'
import React from 'react'

function Home (){

    const showBookingInfo = ()=>{
                document.getElementById('bookingHide').classList.toggle('visible')
                console.log('popped up')
            }
    return (
    <div className='flex flex-col justify-center items-center p-4'>
        <div className='flex w-full justify-between'>
        <p className='font-bold text-initClr'>Welcome, Martins Charles</p>
        </div>
        <div className='flex flex-col font-bold text-initClr justify-center items-center'>
            {
                //reception
            }
            <div className='flex  justify-center items-center'>
                <img style={{ width:'200px' }} src='./assets/reception.webp' alt=''/>
            </div>
            <p>Receptionist: Caroline Prince</p>
            <p>Front Desk</p>
        </div>
        <p className='font-bold text-2xl p-6 text-black'>Our services</p>
        <div className='grid grid-cols-3 gap-6 p-6'>
        <div onClick={showBookingInfo}  className='highlight scale justify-center items-center flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img style={{ width:'200px' }} src='./assets/dining.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Dining</p>
            </div>
            <div onClick={showBookingInfo}  className='highlight scale justify-center items-center flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img style={{ width:'200px' }} src='./assets/sports.webp' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Sports</p>
                <p id='bookingHide' className='text-black'>Additional sports info</p>
            </div>
            <div onClick={showBookingInfo}  className='highlight scale justify-center items-center flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img style={{ width:'200px' }} src='./assets/booking.webp' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Booking</p>
            </div>
        </div>
    </div>
    )
}

export default Home
