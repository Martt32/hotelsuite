"use client"
import React from 'react'

const Report = () => {

    const popUp = async ()=>{
        try{
        const popup = document.querySelector('.popup')
        popup.classList.toggle('active')
      }catch(err){
        alert(err)
      }  
    }

    return (
        <div className="popup" id="popup-1">
            <div className='overlay'>

            <div className=''>
            <div onClick={popUp} className='highlight scale bg-white flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Report for Collins phillip</p>
            </div>
            </div>
            </div>
        <div className='p-4 flex flex-col justify-center'>
            <p className='font-bold text-3xl p-1'>
                Report
            </p>
            <div className='grid grid-cols-6 gap-6 p-6'>
            <div onClick={popUp} className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='next.svg' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            <div className='highlight scale flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
                <img src='logo192.png' alt=''/>    
                <p className='text-initClr font-bold text-sm'>Collins phillip</p>
            </div>
            </div>
        </div>
        </div>
    )
}

export default Report