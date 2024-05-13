import { Link } from "react-router-dom";
const MobileMenu = ({ navItems, isMenuOpen }) => (
    <div>
        <ul className={`bg-Black text-white px-4 py-2 rounded text-center ${isMenuOpen ? "" : "hidden"}`}>
            {navItems.map(({ title }) => (
                <li key={title} className='hover:text-orange-500 my-3 cursor-pointer'>
                    <Link to="/">{title}</Link>
                </li>
            ))}
        </ul>
    </div>
);
export default MobileMenu