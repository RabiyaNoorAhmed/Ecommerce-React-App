import React from 'react';
import { FaFilter } from "react-icons/fa";

const FilterComponent = ({ handleSortChange, sortOption }) => {
    return (
        <div className='flex justify-end mb-4 rounded-sm'>
            <div className='bg-black p-2'>
                <FaFilter className='text-white h-4 w-4' />
            </div>
            <select
                id='sort'
                onChange={(e) => handleSortChange(e.target.value)}
                value={sortOption}
                className='bg-black text-white px-2 py-1 rounded-sm'
            >
                <option value='default'>Default</option>
                <option value='A-Z'>A-Z</option>
                <option value='Z-A'>Z-A</option>
                <option value='low-to-high'>Low to High</option>
                <option value='high-to-low'>High to Low</option>
            </select>
        </div>
    );
};

export default FilterComponent;
