import Image from 'next/image'
import React from 'react'


function SelectsImg({ bgImg, text }) {
    return (
        <div className='selects-location'>
            <Image src={bgImg} alt='/' width={400} height={350} />
            <div className="overlay">
                <p>{text}</p>
            </div>
        </div>
    )
}

export default SelectsImg
