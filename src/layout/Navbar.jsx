import { NavLink } from "react-router-dom";
import { List, Sun, Moon } from "@phosphor-icons/react";
import Logo from "../components/Logo";

const SideBar = () => {
  return (
    <aside className="shadow absolute top-full -right-full h-screen w-2/3 bg-red-400 py-1.5 rounded">
      <ul className="flex flex-col px-1 gap-1">
        <li>
          <NavLink
            to="/"
            className="hover:ps-2 transition-all block bg-blue-600 rounded ps-1 py-1"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/genre"
            className="hover:ps-2 transition-all block bg-blue-600 rounded ps-1 py-1"
          >
            Genre
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/onGoing"
            className="hover:ps-2 transition-all block bg-blue-600 rounded ps-1 py-1"
          >
            On Going
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/populer"
            className="hover:ps-2 transition-all block bg-blue-600 rounded ps-1 py-1"
          >
            Populer
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className="hover:ps-2 transition-all block bg-blue-600 rounded ps-1 py-1"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </aside>
  );
};

const Navbar = () => {
  return (
    <nav className="w-full z-20 bg-white shadow-md fixed top-0 left-0 flex justify-between items-center py-4 px-2 md:px-3 lg:px-5">
      <Logo />

      <div className="md:hidden flex gap-2 items-center">
        <button className="p-1.5 rounded">
          <Moon size={32} />
        </button>
        <button className="p-1.5 rounded">
          <List size={32} />
        </button>
      </div>

      <SideBar />

      <ul className="items-center hidden md:flex gap-2">
        <li>
          <NavLink className="" to="/">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/genre">
            Genre
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/onGoing">
            On Going
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/populer">
            Populer
          </NavLink>
        </li>
        <li>
          <NavLink className="" to="/contact">
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
