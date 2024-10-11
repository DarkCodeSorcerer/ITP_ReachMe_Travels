import React from 'react'
import carMainImg from '../../assets/vechicleImages/R (1).png'
import evImg from '../../assets/vechicleImages/ev.png'


const VehicleHero = () => {
  return (
    <div className='bg-[#E5D9E9] h-full flex items-center justify-between w-full flex-col lg:flex-row'>
        <div className='p-8 pt-18 md:p-24 md:pt-36 lg:p-24'>
            <h1 className='text-3xl md:text-5xl uppercase font-extrabold text-purple-600'>
                Fast and easy way to
            </h1>
            <h1 className='text-3xl md:text-5xl uppercase font-extrabold text-purple-600 py-4'>
                Rent a car
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify'>Use our easy-to-use web interface to make car reservations without stress. Whether you're planning a road trip, travelling for work, or just need a trustworthy vehicle, our platform has a large selection of cars to meet your requirements. Our web app ensures a seamless and comfortable experience with simple booking, adaptable pickup and drop-off options, and the possibility to customise your reservation with add-ons like drivers. All it takes is a few clicks to quickly reserve your dream car, skipping the convoluted reservation procedures. Start your adventure now with our easy-to-use online app for car reservations.</p>
            
            <div className='flex py-4 items-center justify-center lg:justify-start'>
                <img src={evImg} className='w-14 h-14' alt='evlogo'/>
                <h2 className='py-4 font-bold text-auto md:text-2xl px-4 '>Try EV and Save Atmosphere</h2>
            </div>
        </div>

        <div>
            <img src={carMainImg} className='lg:w-[600px] md:w-[650px] ' alt='mainCarImage'/>
        </div>
    </div>
    
  )
}

export default VehicleHero