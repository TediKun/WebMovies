import { Link } from "react-router-dom";
import Logo from "../components/Logo";

const FooterLink = () => {
  return (
    <div className="flex flex-col">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/genre">Genres</Link>
      <Link>On Going</Link>
      <Link>Contact</Link>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="w-full px-2 py-2 mt-5 shadow-md shadow-black">
      <div className="flex justify-between items-center ">
        <Logo />
        <FooterLink />
      </div>
      <div className="w-full mt-4 flex items-center justify-between">
        <Link to="/" className="text-xs text-slate-400">
          copyright ©2024, StreamTeday All Rights Reversed
        </Link>
        <ul className="hidden md:flex items-center gap-2 text-xs text-slate-400">
          <li>Terms Of Use</li>
          <li>Privacy Policy</li>
          <li>FAQs</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
