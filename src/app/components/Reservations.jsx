"use client"
import React from 'react'
import { Button } from "@mui/material"

const Reservation=({ reservation, onDelete, onToggle })=>{
    return(
        <div onDoubleClick={() => onToggle(reservation.id)} className={`flex scale highlight cursor-pointer ${reservation.reminder === true ? 'bg-orange-200' : 'shadow-md'}  justify-between p-2 rounded-lg`}>
            <div className='flex flex-col'>
            <h2 className='font-bold p-1'>{reservation.text}</h2>
            <p className='p-1 text-gray'>{reservation.day}</p>
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
    
    return(
        <div style={{ overflowY:'auto', maxHeight:'70vh' }} className='flex flex-col p-6 space-y-6'>
            {reservations.map((reservation, index) =>(
                <Reservation key={index} onToggle={onToggle} reservation={reservation} onDelete={onDelete}/>
            ))}
        </div>
    )
}

export default Reservations