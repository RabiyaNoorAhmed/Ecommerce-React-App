import React from 'react';
import { Link } from 'react-router-dom';
import img1 from '../../assets/images/company/brand1.png';
import img2 from '../../assets/images/company/brand2.png';
import img3 from '../../assets/images/company/brand3.png';
import img4 from '../../assets/images/company/brand4.png';
import img5 from '../../assets/images/company/brand5.png';
import img6 from '../../assets/images/category/image1.png';
import img7 from '../../assets/images/category/image2.png';
import img8 from '../../assets/images/category/image3.png';
import img9 from '../../assets/images/category/image4.png';
import img10 from '../../assets/images/category/image5.png';

const companyLogo = [
    { id: 1, img: img1 },
    { id: 2, img: img2 },
    { id: 3, img: img3 },
    { id: 4, img: img4 },
    { id: 5, img: img5 }
];

const Category = () => {
    return (
        <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-28'>
            {/* Brands Logo */}
            <div className='flex items-center justify-around flex-wrap gap-4 py-5'>
                {companyLogo.map(({ id, img }) => (
                    <div key={id}><img src={img} alt='' /></div>
                ))}
            </div>
            {/* Category Grid*/}
            <div className='mt-8 flex flex-col md:flex-row items-center gap-4'>
                <p className='font-semibold uppercase md:-rotate-90 text-center text-Black md:p-1.5 p-2 rounded-sm inline-flex text-lg'>
                    Explore new and popular styles
                </p>
                <div>
                    <Link to='/'>
                        <img src={img6} alt='' className='w-full hover:scale-105 transition-all duration-200' />
                    </Link>
                </div>
                <div className='md:w-1/2'>
                    <div className='grid grid-cols-2 gap-2 '>
                        <Link to='/'>
                            <img src={img7} alt='' className='w-full hover:scale-105 transition-all duration-200' />
                        </Link>
                        <Link to='/'>
                            <img src={img8} alt='' className='w-full hover:scale-105 transition-all duration-200' />
                        </Link>
                        <Link to='/'>
                            <img src={img9} alt='' className='w-full hover:scale-105 transition-all duration-200' />
                        </Link>
                        <Link to='/'>
                            <img src={img10} alt='' className='w-full hover:scale-105 transition-all duration-200' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
