import React from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav className="flex bg-black justify-around p-2">
        <ul className="flex gap-10 items-center">
          <Link to="/">
            <img className="w-30" src="/imgs/logo.png" alt="activision logo" />
          </Link>
          <li className="text-gray-300">Games</li>
          <li className="text-gray-300 flex items-center gap-1">
            <Link to="/about" className="flex items-center gap-1">
              About <MdKeyboardArrowDown className="text-white text-[25px]" />
            </Link>
          </li>
          <li className="text-gray-300 flex items-center gap-1">
            Careers <MdKeyboardArrowDown className="text-white text-[25px]" />
          </li>
          <li className="text-gray-300 flex items-center gap-1">
            Support <MdKeyboardArrowDown className="text-white text-[25px]" />
          </li>
        </ul>
        <div className="flex gap-5">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Sign up
          </button>
          <button className="text-gray-300">Log in</button>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
