import { Link } from "react-router-dom";
const Catalog = () => {
    return (
      <div className="text-Black">
        <h4 className="font-semibold mb-3">CATALOG</h4>
        <div className="space-y-2">
          <Link to="/" className="text-sm block hover:text-orange-500">
            Necklaces
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Hoodies
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Jewelry Box
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            T-shirt
          </Link>
          <Link to="/" className="text-sm block hover:text-orange-500">
            Jacket
          </Link>
        </div>
      </div>
    );
  };
  export default Catalog