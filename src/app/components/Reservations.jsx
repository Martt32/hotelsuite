"use client"
import React from 'react'
import { Button } from "@mui/material"

const Reservation=({ reservation, onDelete, onToggle })=>{
    console.log('Received Reserved', reservation)
    return(
        <div onDoubleClick={() => onToggle(reservation.id)} className={`flex scale highlight cursor-pointer ${reservation.reminder === true ? 'bg-orange-200' : 'shadow-md'}  justify-between p-2 rounded-lg`}>
            <div className='flex'>
                <img style={{ width:'100px' }} src='room.jpg'/>
            <div className='flex flex-col'>
            <div className='flex'>
            <h2 className='font-bold p-1 text-initClr'>{reservation.x.text}</h2>
            <p className='p-1 text-gray text-initClr'>{reservation.x.day}</p>
            </div>
            <p className='p-1 text-gray text-initClr'>Purpose of visit:{reservation.x.purpose}</p>
            </div>
            </div>
            <div className='p-1 text-red'>
            <Button variant='outlined' style={{ color:'red' }} color='error' onClick={()=> onDelete(reservation.id)}>
                Delete
            </Button>
            </div>
            </div>
    )
}

const Reservations=({ reservations, onDelete, onToggle })=>{
    console.log('Reserved', reservations)
    return(
        <div style={{ overflowY:'auto', maxHeight:'70vh' }} className='flex flex-col p-6 space-y-6'>
            {reservations.map((reservation, index) =>(
                <Reservation key={index} onToggle={onToggle} reservation={reservation} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Reservations