// import React, { useState } from 'react'
// import { FaSearch, FaUser, FaShoppingBag, FaBars , FaTimes} from "react-icons/fa";
// import logo from "../assets/images/logo.svg"
// import { Link, NavLink } from "react-router-dom";
// const Navbar = () => {
//     const [isMenuOpen, setIsMenuOpen]= useState(false);
//     const toggleMenu =()=>{
//         setIsMenuOpen(!isMenuOpen)
//     }
//     const navItems = [
//         { title: "Jewelry & Accessories", path: "/" },
//         { title: "Clothing & Shoes", path: "/" },
//         { title: "Home & Living", path: "/" },
//         { title: "Wedding & Party", path: "/" },
//         { title: "Toys & Entertainment", path: "/" },
//         { title: "Art & Collectibles", path: "/" },
//         { title: "Craft Supplies & Tools", path: "/" },
//       ];
// return (
//     <header className='max-w-screen-2xl xl:px-28 px-4'>
//         <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
//             <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />
//             {/* Logo */}
//             <a href='/'><img src={logo} alt='logo' /></a>
//             {/* Account and Shopping Button */}
//             <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
//                 <a href='/' className='flex items-center gap-2'><FaUser />Account</a>
//                 <a href='/' className='flex items-center gap-2'><FaShoppingBag />Shopping</a>

//             </div>
//             {/* navbar for sm devices */}
//             <div className='sm:hidden'>
//                 <button onClick={toggleMenu}>
//                 {
//                     isMenuOpen ? <FaTimes className="w-6 h-6 text-black"/> : <FaBars className="w-6 h-6 text-black"/>
//                 }
                   
//                 </button>
//             </div>
//         </nav>
//         <hr />
//         {/* Category Items */}
//         <div className='pt-4' >
// <ul className='lg:flex items-center justify-between text-Black hidden'>
//    {navItems.map(({title,path})=>(
//     <li key={title} className='hover:text-orange-500'>
//         <Link to="/">
//             {title}
//         </Link>
//     </li>
//    ))}
// </ul>
//         </div>
//         {/* Mobile menu items */}
//         <div>
//         <ul className={`bg-Black text-white px-4 py-2 rounded text-center ${isMenuOpen ? "" : "hidden"}`}>
//    {navItems.map(({title,path})=>(
//     <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
//         <Link to="/">
//             {title}
//         </Link>
//     </li>
//    ))}
// </ul>
//         </div>
//     </header>
// )
// }

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