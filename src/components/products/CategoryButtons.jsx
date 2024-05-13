// CategoryButtons.jsx
import React from 'react';

const CategoryButtons = ({ showAll, filterItems }) => {
    return (
        <div className='flex flex-row justify-start md:items-center md:gap-8 gap-4 flex-wrap'>
            <button onClick={showAll}>All Products</button>
            <button onClick={() => filterItems("men's clothing")}>Men's Clothing</button>
            <button onClick={() => filterItems("jewelery")}>Jewelery</button>
            <button onClick={() => filterItems("women's clothing")}>Women's Clothing</button>
        </div>
    );
};

export default CategoryButtons;
