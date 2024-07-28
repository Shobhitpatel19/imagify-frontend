/* eslint-disable react/prop-types */
import logo2 from '../assets/logo2.png'
import { Link } from "react-router-dom";

const Navbar = ({ btnText }) => {
  return (
    <nav className="bg-black p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <span className="text-white text-2xl font-bold">
            <Link className="/" to="/">
              <img src={logo2} alt="imagify" className='w-52'/>
            </Link>
          </span>
        </div>
        <div>
          <button className="bg-transparent border-blue-500 border-2 hover:bg-blue-600 duration-300 text-white font-bold py-2 px-3 rounded-lg">
            {btnText === "Create" ? (
              <Link to="/">{btnText}</Link>
            ) : (
              <Link to="/community">{btnText}</Link>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
