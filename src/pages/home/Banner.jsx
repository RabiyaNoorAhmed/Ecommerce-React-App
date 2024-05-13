import React from 'react'
import bannerImg from '../../assets/images/banner.png'
import {FaShoppingBag} from "react-icons/fa";
const Banner = () => {
    return (
        <div className='bg-primaryBG py-12 xl:px-28 px-4'>
            <div className='py-28 flex flex-col md:flex-row-reverse justify-between items-center gap-14'>
                 {/* Banner Image */}
                 <div className='md:w-1/2'>
                    <img src={bannerImg} alt='banner' />
                </div>
                <div className='md:w-1/2'>
                    <h1 className='text-6xl font-light mb-9 '>Collections</h1>
                    <p className='text-xl mb-7'>You Can Explore Ans Shop Many Differnt Collection
                        From Various Brands Here.</p> 
                    <button className="bg-Black hover:bg-orange-500 px-6 py-2 text-white font-semibold rounded-sm flex item-center gap-2"><FaShoppingBag  className='inline-flex'/>Shop Now</button>
                </div>
            </div>
        </div>
    )
}

export default Banner
