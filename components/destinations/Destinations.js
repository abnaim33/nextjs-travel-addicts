import React from 'react'

import BoraBora from '../../assets/borabora.jpg'
import BoraBora2 from '../../assets/borabora2.jpg'
import Maldives from '../../assets/maldives.jpg'
import Maldives2 from '../../assets/maldives2.jpg'
import KeyWest from '../../assets/keywest.jpg'
import Image from 'next/image'

function Destinations() {
    return (
        <div name='destinations' className='destinations'>
            <div className="container">
                <h1>All-Inclusive Resorts</h1>
                <p>On the Caribbeans Best Beaches</p>
                <div className="img-container">
                    <Image className='span-3 image-grid-row-2' src={BoraBora} alt="/"
                        height={600} width={600} />
                    <Image src={BoraBora2} alt="/" height={300} width={300} />
                    <Image src={Maldives} alt="/" height={300} width={300} />
                    <Image src={Maldives2} alt="/" height={300} width={300} />
                    <Image src={KeyWest} alt="/" height={300} width={300} />
                </div>
            </div>
        </div>
    )
}

export default Destinations
