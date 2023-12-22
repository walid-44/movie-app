import { Container, Nav, Navbar } from "react-bootstrap";
import "./header.css";

import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaHeart } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Logo from "../logo/Logo";

function Header() {
  const movieSlice = useSelector((state) => state.movieSlice);
  const location = useLocation();
  return (
    <Navbar expand="lg" className="w-100 navbar-back py-2  ">
      <Container className="overflow-hidden py-3">
        <Logo />
        <Navbar.Toggle
          className="navbar-toggle shadow-none"
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse  id="basic-navbar-nav  ">
          
          <Nav className="ms-auto justify-content-center align-items-center ">
            <Link to="/" className={`nav-link  p-2 m-1 ${location.pathname === "/" ? "active": ""}`}>
              Home
            </Link>
            <Link to="/movie" className={`nav-link m-1 p-2 ${location.pathname === "/movie" ? "active": ""}`}>
            Top Rated
            </Link>
            <Link to="/movielist" className={`p-2 m-1 nav-link icon-link position-relative ${location.pathname === "/movielist" ? "active": ""}`}>
              
              <FaHeart className="fs-4   " />
              <span className="position-absolute number-live">{movieSlice.length}</span>
            </Link>
            <Link to="/search " className={`p-2 m-1 nav-link icon-link ${location.pathname === "/search" ? "active": ""}`}>
            <IoSearch className="fs-4" />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
