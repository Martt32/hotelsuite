"use client"
import { Button } from '@mui/material'
import { useState } from 'react'
import { AddReservation, Reservations } from '../components'

 

const Content=()=>{
    const [ reservations, setReservations ] = useState([])
    const ToggleReminder=(id)=>{
        setReservations(reservations.map((reservations)=> reservations.id === id ? { ...reservations, reminder: !reservations.reminder  } :reservations ))
    }
    const deleteReservation=(id)=>{
        setReservations(reservations.filter((reservations)=> reservations.id !== id))
    }
    const popUp = async ()=>{
        try{
        const popup = document.querySelector('.popup')
        popup.classList.toggle('active')
      }catch(err){
        alert(err)
      }  
    }
    const addReservations =(x)=>{
        const id = Math.floor(Math.random() * 5000) + 1
        const newReservation = { id, x }
        setReservations([ ...reservations, newReservation ])
    }
    return(
      <div className='flex p-8 shadow-md justify-center items-center'>
        <div className='Content rounded-lg p-8 space-y-6 bg-white'>
            <div className='flex justify-between p-2'>
            <h3 className='text-3xl text-initialColor font-bold '>
                Booking and Reservations
            </h3>
            <Button onClick={popUp} variant='contained' color='success'>Add</Button>
            </div>
            <AddReservation popUp={popUp} onAdd={addReservations}/>
            {reservations.length > 0 ? <Reservations onToggle={ToggleReminder} onDelete={deleteReservation} reservations={reservations}/> : 
            <p className='text-2xl font-bold text-bgActive p-4'>
                Reservations completed will be shown here
            </p>
                }
        </div>
      </div>
    )
  }


function Booking(){
    return(
        <div className="flex justify-between">
            <Content/>
        </div>
    )
}
export default Booking



// import { Button, TextField } from '@mui/material'
// import React from 'react'
// import { NavigateNext, NavigateBefore } from '@mui/icons-material'

// const Booking = () => {

//     const popUp = ()=>{
//         document.getElementById('overlay').classList.add('visible')
//         console.log('popped up')
//     }
//     const showBookingInfo = ()=>{
//         document.getElementById('bookingHide').classList.add('visible')
//         console.log('popped up')
//     }
//     const popUpOff = ()=>{
//         document.getElementById('overlay').classList.remove('visible')
//     }
//     let currentStep = 1;

//     function nextStep() {
//         if (currentStep < 2) {
//             document.getElementById(`step${currentStep}`).classList.remove('visible');
//             currentStep++;
//             document.getElementById(`step${currentStep}`).classList.add('visible');
//         }else{
//             submitForm()
//         }
//     }
    
//     function prevStep() {
//         if (currentStep > 1) {
//             document.getElementById(`step${currentStep}`).classList.remove('visible');
//             currentStep--;
//             document.getElementById(`step${currentStep}`).classList.add('visible');
//         }
//     }
    
//     function submitForm() {
//         // Handle form submission
//     }
    

//     return (
//         <div className='p-4 flex flex-col justify-center items-center w-full'>
//             <div id='overlay' className='overlay hidden flex flex-col justify-center items-center'>
//                 <div id='popup' className='popup space-y-6'>
//                 <form className='p-4 bg-white rounded-lg flex flex-col justify-center items-center'>
//                     <p onClick={popUpOff} className='cursor-pointer font-bold text-dangerRed'>X</p>
//                 <div id='step1' className='form-step visible flex flex-col space-y-4'>
//                     {
//                         //personal information
//                     }
//                 <TextField className='input' id="standard-basic"  name='name' label="Full Name" variant="standard" />
//                 <TextField className='input' id="standard-basic"  type='number' name='phone' label="Phone Number" variant="standard" />
//                 <TextField className='input' id="standard-basic"  type='email'  name='email' label="Email" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='address' label="Address" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='name' label="Full Name" variant="standard" />
//                 </div>
//                 <div id='step2' className='form-step flex flex-col space-y-4'>
//                     {
//                         //additional info
//                     }
//                 <TextField className='input' id="standard-basic"  name='occupation' label="Occupation" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='organization' label="Organization" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='purpose' label="Purpose of Visit" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='next_of_kind' label="Next of kin" variant="standard" />
//                 <TextField className='input' id="standard-basic"  name='next_of_kin_phone' label="Next of kin's phone" variant="standard" />
//                 </div>
//                 <div className='flex justify-between'>

//                 <div className='p-3'>
//                 {
//                     // currentStep > 1 &&
//                     <Button onClick={prevStep} variant='contained'><NavigateBefore/>prev</Button>
//                 }
//                 </div>
//                 <div className='p-3'>
//                     {currentStep > 1 ? <Button onClick={nextStep} variant='contained'>Submit</Button> : 
//                     <Button onClick={nextStep} variant='contained'>next <NavigateNext/></Button>}
//                 </div>
//                 </div>
//             </form>
//                 </div>
//             </div>
//             <p className='font-bold text-2xl'>
//                 Booking & Reservation
//             </p>
//             <div className='p-4'>
//                 {
//                     //Reservations
//                 }
//                 <table>
//                     <thead>
//                         <tr className=''>
//                             <th>Name</th>
//                             <th>Check in</th>
//                             <th>Check out</th>
//                             <th>Room</th>
//                             <th>Type</th>
//                             <th>Date</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         <div className='m-4 reserve shadow-md rounded-lg cursor-pointer text-initClr font-bold p-4'>
//                         <tr onClick={showBookingInfo} >
//                             <td>Martins Charles</td>
//                             <td>7:00 am</td>
//                             <td>7:00pm</td>
//                             <td>D-13</td>
//                             <td>Suite</td>
//                             <td>27/07/2024</td>
//                         </tr>
//                         <tr id='bookingHide' >
//                             <td>Martins Charles</td>
//                             <td>7:00 am</td>
//                             <td>7:00pm</td>
//                             <td>D-13</td>
//                             <td>Suite</td>
//                             <td>27/07/2024</td>
//                         </tr>
//                         </div>
//                     </tbody>
//                 </table>
//             </div>
            
//             <button onClick={popUp} className='addButton scale highlight font-bold text-3xl text-initClr font-bold rounded-full shadow-md p-4'>
//                 +
//             </button>
//         </div>
//     )
// }

// export default Booking
