import logo from "../../assets/images/logo.svg";
import { FaSearch, FaUser, FaShoppingBag, FaBars, FaTimes } from "react-icons/fa";

const NavSection = ({ toggleMenu, isMenuOpen }) => (
    <nav className='flex justify-between items-center container md:py-4 pt-6 pb-3'>
        <FaSearch className='text-Black w-5 h-5 cursor-pointer hidden md:block' />
        <a href='/'><img src={logo} alt='logo'/></a>
        <div className='text-lg text-Black sm:flex items-center gap-4 hidden'>
            <a href='/' className='flex items-center gap-2'><FaUser />Account</a>
            <a href='/' className='flex items-center gap-2'><FaShoppingBag />Shopping</a>
        </div>
        <div className='sm:hidden'>
            <button onClick={toggleMenu}>
                {isMenuOpen ? <FaTimes className="w-6 h-6 text-black" /> : <FaBars className="w-6 h-6 text-black" />}
            </button>
        </div>
    </nav>
);
export default NavSection



