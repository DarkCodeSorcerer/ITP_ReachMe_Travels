import React from "react";
import trainMainImg  from "../../assets/TrainImages/ASD.jpg"

const TrainHero = ()=>{
    return(
        <div className='bg-[#E5D9E9] h-full flex items-center justify-between w-full flex-col lg:flex-row'>
        <div className='h-full flex items-center justify-between w-full flex-col lg:flex-row bg-cover'
             style={{backgroundImage:`url(${trainMainImg})`}}
        >
        <div className='p-8 pt-28 md:p-24 md:pt-36 lg:p-36'>
            <h2 className='text-3xl md:text-5xl  font-extrabold uppercase  text-[#B399DD]'>
                Easily Book your<br/>Train Tickets online<br/>with 
            </h2>
            <h1 className='text-3xl md:text-5xl font-extrabold uppercase text-[#B399DD] py-4'>
                ReachMe Travels
            </h1>
            <p className='text-sm md:text-1xl  lg:max-w-[580px] md:max-w-[900px] text-justify text-white'>"Experience seamless movement with our innovative design. Perfectly blending comfort and style, our products keep you active and agile. Designed to support you with every step, our solutions are crafted for those on the go. Make every journey more comfortable and effortless."</p>
        </div>        
    </div> 
    </div>
    )
}


export default TrainHero;