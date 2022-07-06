import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'


function Hero() {
    return (
        <div className='hero mt-10 md:mt-0 w-full h-full text-white relative'>
            <video autoPlay loop muted id='video' className="w-full h-full object-cover -z-10">
                <source src="https://res.cloudinary.com/dsuh9ww6d/video/upload/v1656770849/Nature_-_31377_xirl9d.mp4" type='video/mp4' />
            </video>
            <div className="overlay absolute w-ful h-full top-0 left-0 bg-[rgba(0, 0, 0, 0.1)]"></div>
            <div className="content absolute top-0 h-full flex flex-col justify-center text-center w-full m-auto p-[1rem]">
                <h1 className='font-semibold'>Enjoy the Travel</h1>
                <h2>Best Locations Worldwide</h2>
                <form className="form flex bg-slate-100
                text-black justify-between items-center text-center
                pl-1 rounded-lg max-w-[700px] w-full mx-auto my-0
                border-2 border-gray-300">
                    <div>
                        <input type="text"
                            className='border-transparent bg-transparent font-lg focus:outline-none max-w-[275px] md:w-[400]'
                            placeholder='Search Destinations' />
                    </div>
                    <div>
                        <button><AiOutlineSearch className='icon' /></button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Hero
