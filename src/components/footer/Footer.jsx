import "./footer.css";
import Logo from "../logo/Logo";
import { Container } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="pt-5">
        <Container>
          <div className="py-3  d-flex flex-column flex-sm-row justify-content-between align-items-center">
            <Logo />
            <ul className="social-media mt-3 p-0 py-sm-0 m-0 d-flex align-items-center gap-2">
              <li>
                <a href="">
                  <FaFacebookSquare />
                </a>
              </li>
              <li>
                <a href="">
                  <FaYoutube />
                </a>
              </li>
              <li>
                <a href="">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="">
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </div>
      <p className="copyright text-center py-2 m-0">copyright &copy; 2023</p>
        </Container>
      </footer>
    
    </>
  );
};

export default Footer;
