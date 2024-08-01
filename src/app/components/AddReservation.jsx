"use client"
import React,{ useState } from 'react'
import { Button, TextField, Container, Checkbox  } from '@mui/material'

const AddReservation=({ popUp, onAdd })=>{
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(true)
    const submitReservation=()=>{
        if(!text && !day){
             alert('Please add a task and day')
        }else{
            onAdd({ text,day,reminder })
            setText('')
            setDay('')
            setReminder(true)
            popUp()
        }
     }

    return(
        <div className="popup" id="popup-1">
            <div className='overlay'>
            <div className=''>
            <Container component='main' maxWidth="xs">
        <form id='task-form' className='text-initClr bg-white rounded-lg p-6 grid grid-cols gap-y-8'>
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
            <div className='flex justify-center items-center'>
            <p className='font-bold text-initialColor'>Set Reminder</p>
            <Checkbox 
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
        </Container>

            </div>
            </div>
        </div>
    )
}

export default AddReservation;