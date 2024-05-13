import React from 'react'
import { Link } from 'react-router-dom'
import img1 from '../../assets/images/instagram/img1.png'
import img2 from '../../assets/images/instagram/img2.png'
import img3 from '../../assets/images/instagram/img3.png'
import img4 from '../../assets/images/instagram/img4.png'
import img5 from '../../assets/images/instagram/img5.png'
import img6 from '../../assets/images/instagram/img6.png'

const News = () => {
    return (
        <div className='bg-[#1E2832] bg-opacity-5 xl:px-28 px-4 py-16'>
            <h2 className='title mb-8 capitalize'>Follow products and discounts on Instagram</h2>
            {/* Instagram Pictures */}
            <div className='flex flex-wrap gap-4 items-center justify-center mb-20 overflow-x-auto'>
                <Link to='/'>
                    <img src={img1} alt='' />
                </Link>
                <Link to='/'>
                    <img src={img2} alt='' />
                </Link>
                <Link to='/'>
                    <img src={img3} alt='' />
                </Link>
                <Link to='/'>
                    <img src={img4} alt='' />
                </Link>
                <Link to='/'>
                    <img src={img5} alt='' />
                </Link>
                <Link to='/'>
                    <img src={img6} alt='' />
                </Link>
            </div>
            {/* Newsletter */}
            <div>
                <h2 className='title mb-8 capitalize'>Or subscribe to the newsletter</h2>
                <form className='md:w-1/2 mx-auto text-center'>
                    <input type='email' name='email' id='email' placeholder='Email Address...' className='h-8 bg-transparent outline-none border-b-2 pl-2
                     border-black/60 md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4' />
                    <input type='submit' value={'Submit'} className='bg-transparent outline-none border-b-2 px-6 pl-3
                     border-black/60 text-black/60 mr-5' />
                </form>
            </div>
        </div>
    )
}

export default News
