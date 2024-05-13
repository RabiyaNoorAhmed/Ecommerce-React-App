import { Link } from "react-router-dom";
const CustomerServices = () => {
    return (
      <div className="text-Black">
        <h4 className="font-semibold mb-3">CUSTOMER SERVICES</h4>
        <div className="space-y-2">
          <Link to="/" className="text-sm block hover:text-orange-500">
            Contact Us
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Track Your Order
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Product Care & Repair
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Book an Appointment
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Shipping & Returns
          </Link>
        </div>
      </div>
    );
  };
  export default CustomerServices