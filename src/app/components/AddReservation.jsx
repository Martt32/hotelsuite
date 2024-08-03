"use client"
import React,{ useState } from 'react'
import { Button, TextField, Container, Checkbox, Switch  } from '@mui/material'

const AddReservation=({ popUp, onAdd })=>{
  const [rooms, setRooms] = useState([
    {
      name:'D-010',
      price:50000,
      vacancy:true,
      type:'Royal Suite'  
    },{
      name:'D-011',
      price:50000,
      vacancy:true,
      type:'Royal Suite'  
    },{
      name:'D-012',
      price:50000,
      vacancy:true,
      type:'Executive Suite'  
    },{
      name:'D-013',
      price:50000,
      vacancy:true,
      type:'Event Hall'  
    },
  ])  

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [purpose, setPurpose] = useState('')
    const [reminder, setReminder] = useState(false)
    const submitReservation=()=>{
        if(!text && !day){
             alert('Please add a task and day')
        }else{
            onAdd({ text,day,reminder,purpose })
            setText('')
            setDay('')
            setReminder(false)
            popUp()
            currentStep--
        }
     }

     let currentStep = 1; 

    function nextStep() {
        if (currentStep < 3) {
            document.getElementById(`step${currentStep}`).classList.remove('visible');
            currentStep++;
            document.getElementById(`step${currentStep}`).classList.add('visible');
        }else{
            submitForm()
        }
    }
    
    function prevStep() {
        if (currentStep > 1) {
            document.getElementById(`step${currentStep}`).classList.remove('visible');
            currentStep--;
            document.getElementById(`step${currentStep}`).classList.add('visible');
        }
    }
    return(
        <div className="popup" id="popup-1">
            <div className='overlay'>
            <div className=''>
            <div id='step1' className='form-step visible bg-white p-8 grid grid-cols-2 gap-4'>
              <div onClick={nextStep} className='flex flex-col justify-center items-center scale cursor-pointer p-3 rounded-lg highlight'>
                <img style={{ width:'5rem' }} src='royal2.png' alt=''/>
                <p className='font-bold text-initClr'>Royal Room</p>
              </div>
              <div onClick={nextStep} className='flex flex-col justify-center items-center scale cursor-pointer p-3 rounded-lg highlight'>
                <img style={{ width:'5rem' }} src='executive.png' alt=''/>
                <p className='font-bold text-initClr'>Executive Room</p>
              </div>
              <div onClick={nextStep} className='flex flex-col justify-center items-center scale cursor-pointer p-3 rounded-lg highlight'>
                 <img style={{ width:'5rem' }} src='visitor.webp' alt=''/>
                <p className='font-bold text-initClr'>Visitor Room</p>
              </div>
              <div onClick={nextStep} className='flex flex-col justify-center items-center scale cursor-pointer p-3 rounded-lg highlight'>
                <img style={{ width:'5rem' }} src='conference.webp' alt=''/>
                <p className='font-bold text-initClr'>conference hall</p>
              </div>
             </div>
                <div id='step2' className='form-step grid grid-cols-4 gap-5 p-6'>
                    {rooms.map((room, index) =>(
                    <div onClick={nextStep} className='scale p-4 cursor-pointer rounded-lg bg-white'>
                       <img src='room.jpg' alt=''/>
                       <p className='font-bold text-initClr p-1'>Name: Suite {room.name}</p>
                       <p className='font-bold text-initClr p-1'>Price: <strike>N</strike>{room.price}</p>
                       <p className='font-bold text-initClr p-1'>{room.type}</p>   
                    </div>
                    ))}
                </div>
                <div id='step3' className='form-step'>
                <form style={{ width:'30vw' }} className='text-initClr bg-white rounded-lg p-6 grid grid-cols gap-y-8'>
                    <h3 className='flex justify-center items-center text-sm text-initialColor'>Add Task</h3>
                    <TextField  variant='standard'
                    value={text}
                    onChange={
                        (e) => setText(e.target.value)
                    }
                    id='text' name='text' label='First name' />
                    <TextField variant='standard'
                    value={day}
                    onChange={
                        (e) => setDay(e.target.value)
                    }
                    id='day' name='day' label='Last Name' />
                    <TextField variant='standard'
                    value={purpose}
                    onChange={
                        (e) => setPurpose(e.target.value)
                    }
                    id='purpose' name='purpose' label='Purpose of visit' />
                    <input type='date' placeholder='Date to Check in'/>
                    <div className='flex justify-center items-center'>
                    <p className='font-bold text-initialColor'>Add VAT Value</p>
                    <Switch
                    checked={reminder}
                    onChange={
                        (e) => setReminder(e.currentTarget.checked)
                    }/>
                    </div>
                {'task' !=='task' ?
                    <Button  variant='contained' color='success' disabled>Save</Button>
                    :
                    <Button onClick={submitReservation} variant='contained' color='success' >Save</Button>
                    }
                </form>
                </div>

         </div>
        </div>
        </div>
    )
}

export default AddReservation;