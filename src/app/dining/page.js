'use client'
import * as React from 'react'

const Dining = () => {

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
    <div className='p-2 flex flex-col justify-center items-center'>
        <p className='font-bold text-black'>Scan the qrcode to sign in to the {popValue}</p>
    <img src='qrcode.png'/>
    </div>
    </div>
    </div>
    </div>
        <div className='p-4 flex flex-col justify-center text-black items-center'>
            <p className='p-1 font-bold text-3xl'>    
                Dining
            </p>
            <div className='grid grid-cols-2 gap-6 p-6'>
                <div onClick={() => popUp('Restaurant')} className='scale rounded-lg flex flex-col justify-center cursor-pointer shadow-md p-4'>
                    <img src='./logo192.png' alt=''/>
                    <p className='font-bold text-initClr'>Restaurant</p>
                    <p className='font-bold text-gray text-sm'>Head to the restaurant and find varieties of dishes </p>
                </div>
                <div onClick={() => popUp('Bar')} className='scale rounded-lg flex flex-col justify-center cursor-pointer shadow-md p-4'>
                    <img src='./logo192.png' alt=''/>
                    <p className='font-bold text-initClr'>Bar </p>
                    <p className='font-bold text-gray text-sm'>Get something to cool off in the bar. </p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Dining
