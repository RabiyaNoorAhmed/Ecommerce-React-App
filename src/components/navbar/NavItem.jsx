import { Link } from "react-router-dom";
const NavItem = ({ title }) => (
    <li className='hover:text-orange-500'>
        <Link to="/">{title}</Link>
    </li>
);
export default NavItem