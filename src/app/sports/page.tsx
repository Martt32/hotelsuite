import React from 'react'

const Sport = () => {
  return (
    <div className='p-2 flex flex-col justify-center items-center'>
        <p className='font-bold text-black text-3xl'>Check into the sports arena</p>
        <p className='font-bold text-black'>Scan the qrcode to sign in</p>
        <img src='qrcode.png'/>
    </div>
  )
}

export default Sport