import React from 'react'
import rentacarImg from '../../assets/vechicleImages/R.png'

const RentCarAd = () => {
  return (
    <div className='bg-[#E5D9E9] flex p-[1rem] items-center flex-col lg:flex-row mx-auto justify-center'>
        <div className='w-[300px] lg:w-[600px]'>
            <img src={rentacarImg} alt='rentCarAdImg' />
        </div>
        <div className='lg:pl-12'>
            <h1 className='text-3xl lg:text-4xl font-bold '>Do you want to</h1>
            <h1 className='text-4xl lg:text-5xl font-bold text-purple-600 py-3'>Rent your Car?</h1>
            <h1 className='text-4xl font-extrabold text-purple-600'>076 40 27 775</h1>
            {/* <form> 
                <button className='bg-[#41A4FF] text-white px-8 font-bold rounded-lg p-2 mt-6 shadow-lg'>Register</button>
            </form> */}
            
        </div>
    </div>
  )
}

export default RentCarAd