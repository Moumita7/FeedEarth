import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useSelector } from "react-redux";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  let onlineStatus = useOnlineStatus();

  let { user } = useContext(userContext);
  let cartSelector = useSelector((store) => store.cart.items);
  let [open, setOpen] = useState(false);

  return (
    <div className="shadow-md w-[100%]  top-0 left-0 ">
      <div className="md:flex items-center justify-between  bg-blue-50  md:px-10 px-7 sm:flex sm:px-8">
        <div className="font-bold text-2xl cursor-pointer flex items-center font-[poppine] text-gray-800">
          <Link to="/">
            <img className="w-16" src={LOGO_URL} alt="dd" />
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className=" absolute top-7 ml-[600px]  cursor-pointer md:hidden"
        >
          {open ? <AiOutlineClose /> : <AiOutlineMenu />}

          {/* <ion-icon name="filter-outline"></ion-icon> */}
          {/* <ion-icon name="heart"></ion-icon> */}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static
              bg-blue-50 md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 
             transition-all duration-500 ease-in ${
               open ? "top-20" : "top-[-490px]"
             } `}
        >
          <Link
            className="text-blue-900 hover:text-blue-700 duration-500"
            to="/"
          >
            <li className="md:ml-8 text-md md:my-0 my-5">Home</li>
          </Link>
          <Link
            className="text-blue-900 hover:text-blue-700 duration-500"
            to="/about"
          >
            <li className="md:ml-8 text-md md:my-0 my-5">Help</li>
          </Link>

          <Link
            className="text-blue-900 hover:text-blue-700 duration-500"
            to="/cart"
          >
            <li className="md:ml-8 text-md md:my-0 my-5">
              <div className="flex justify-center items-center gap-1">
                {/* <h1>Cart</h1> */}
                <AiOutlineShoppingCart />

                <h1 className="text-red-700">{cartSelector.length}</h1>
              </div>
            </li>
          </Link>

          {/* <Link to="/login"><button className="px-3  bg-red-400 caret-white rounded-sm" onClick={()=>loginButton=="Login"? setLoginButton("Logout"):setLoginButton("Login")}>{loginButton}</button></Link> */}

          <Link
            className="text-blue-900 hover:text-blue-700 duration-500"
            to="/login"
          >
            <button className="px-3  bg-green-400 caret-white rounded-sm  md:ml-8 text-md md:my-0 my-5">
              login
            </button>
          </Link>
          <Link
            className="text-blue-900 hover:text-blue-700 duration-500"
            to="/grosary"
          >
            <li className="md:ml-8 text-md md:my-0 my-5">Grosary</li>
          </Link>
          <li className="md:ml-8 text-md md:my-0 my-5">
            Online Status: {onlineStatus ? "🟢" : "🔴"}
          </li>
          {/* <button className='bg-indigo-600 text-white font-[poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500 '>
btn
            </button> */}
        </ul>
      </div>
    </div>
  );
};

export default Header;
