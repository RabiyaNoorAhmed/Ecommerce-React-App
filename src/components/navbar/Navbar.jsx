// export default Navbar
import React, { useState } from 'react';
import NavSection from './NavSection';
import MobileMenu from './MobileMenu'
import CategoryItems from './CategoryItems'
// Navbar Component
const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const navItems = [
        { title: "Jewelry & Accessories", path: "/" },
        { title: "Clothing & Shoes", path: "/" },
        { title: "Home & Living", path: "/" },
        { title: "Wedding & Party", path: "/" },
        { title: "Toys & Entertainment", path: "/" },
        { title: "Art & Collectibles", path: "/" },
        { title: "Craft Supplies & Tools", path: "/" },
    ];

    return (
        <header className='max-w-screen-2xl xl:px-28 px-4 absolute top-0 right-0 left-0'>
            <NavSection toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
            <hr />
            <CategoryItems navItems={navItems} />
            <MobileMenu navItems={navItems} isMenuOpen={isMenuOpen} />
        </header>
    );
};
export default Navbar