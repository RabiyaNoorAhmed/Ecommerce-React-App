import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Logo from '../../assets/images/logo.svg'
import { Link } from "react-router-dom";
const CompanyInfo = () => {
    return (
      <div className="md:w-[400px]">
        <Link to="/">
          <img src={Logo} alt="" />
        </Link>
        <p className="my-8 text-Black/75 capitalize">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
        <div className="flex items-center gap-6">
          <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
          <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
        </div>
      </div>
    );
  };
  export default CompanyInfo