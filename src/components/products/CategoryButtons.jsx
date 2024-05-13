// CategoryButtons.jsx
import React from 'react';

const CategoryButtons = ({ showAll, filterItems }) => {
    return (
        <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("Dress")}>T-Shirt</button>
            <button onClick={() => filterItems("Hoodies")}>Hoodies</button>
            <button onClick={() => filterItems("Bag")}>Bag</button>
        </div>
    );
};

export default CategoryButtons;
