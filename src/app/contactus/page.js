'use client'
import { EmailOutlined, Facebook, FacebookOutlined, WhatsApp } from '@mui/icons-material'
import * as React from 'react'
import { Button, TextField, Container, Checkbox  } from '@mui/material'

const Link = () =>{
    return(
        <a href='https://www.facebook.com/hazibalsuites'>
          Hazibal Suites  
        </a>
    )
}

const Form = () =>{
    return(
        <Container component='main' maxWidth="xs">
        <form id='task-form' className='text-initClr bg-white rounded-lg p-6 grid grid-cols gap-y-8'>
            <h3 className='flex justify-center items-center text-sm text-initialColor'>Send an Email</h3>
            <TextField  variant='standard' id='text' name='text' label='Subject' />
            <TextField variant='standard' id='day' name='day' label='message' />
            <Button  variant='contained' color='success'>Send</Button>
        </form>
        </Container>
    )
}

const Contactus = () => {
    const [popValue, setPopValue] = React.useState()
    const popUp = async (value)=>{
        try{
            setPopValue(value)
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
    <div onClick={() => popUp('')} className='highlight scale bg-white flex flex-col rounded-lg cursor-pointer shadow-md font-bold p-4'>
        <img src='logo192.png' alt=''/>    
        <p className='text-initClr font-bold text-sm'>{popValue}</p>
    </div>
    </div>
    </div>
    <div className='text-black flex flex-col justify-center items-center'>
        <p className='font-bold text-3xl text-black'>Contact us on our different social media platforms</p>
        <div className='grid grid-cols-3 gap-6  p-6'>
        <div onClick={() => popUp('Whatsapp Link')} className='cursor-pointer flex scale shadow-md flex-col space-y-3 p-2 items-center  bg-green-100 rounded-lg font-bold text-green-600'>
            <WhatsApp/>
            <p>Whatsapp</p>
        </div>
        <div onClick={() => popUp(<Link/>)} className='cursor-pointer flex scale shadow-md flex-col space-y-3 p-2 items-center  bg-blue-100 rounded-lg font-bold text-blue-600'>
            <Facebook/>
            <p>Facebook</p>
        </div>
        <div onClick={() => popUp(<Form/>)} className='cursor-pointer flex scale shadow-md flex-col space-y-3 p-2 items-center  bg-red-100 rounded-lg font-bold text-red-600'>
            <EmailOutlined/>
            <p>Email</p>
        </div>
        </div>
    </div>
    </div>
  )
}

export default Contactus