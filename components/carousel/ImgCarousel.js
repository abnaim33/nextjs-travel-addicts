import React from 'react'


import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'

import Image from 'next/image'
function ImgCarousel() {
    return (
        <div name='carousel' className='container'>
            <Carousel className='carousel'
                showArrows={false} showIndicators={false} autoPlay={true} infiniteLoop={true} >
                <div>
                    <Image src={BoraBora} alt='/' height={900} width={1000} />
                </div>
                <div>
                    <Image src={BoraBora2} alt='/' height={900} width={1000} />
                </div>
                <div>
                    <Image src={Maldives} alt='/' height={900} width={1000} />
                </div>
            </Carousel>
        </div>


    )
}

export default ImgCarousel
