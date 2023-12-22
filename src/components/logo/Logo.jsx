import { Link } from "react-router-dom";
import "./logo.css"

const Logo = () => {
  return (
    <Link to="/" className="logo navbar-brand">
      Movie
    </Link>
  );
};

export default Logo;
