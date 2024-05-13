import { Link } from "react-router-dom";
const AboutUs = () => {
    return (
      <div className="text-Black">
        <h4 className="font-semibold mb-3">ABOUT US</h4>
        <div className="space-y-2">
          <Link to="/" className="text-sm block hover:text-orange-500">
            Our Producers
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Sitemap
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            FAQ
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            About Us
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Terms & Conditions
          </Link>
        </div>
      </div>
    );
  };
  export default AboutUs