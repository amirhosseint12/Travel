import React from "react";
import { BiSearchAlt2 } from "react-icons/bi";
import { AiOutlineUser, AiOutlineClose } from "react-icons/ai";
import { FiMenu } from "react-icons/fi";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
import { useState } from "react";
export default function Navbar() {
  const [isShowMenu, setIsShowMenu] = useState(false);
  const showMenuHandler = () => {
    setIsShowMenu(!isShowMenu);
  };
  window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
      setIsShowMenu(false);
    }
  });
  return (
    <div className="justify-between items-center h-20 flex px-4 absolute z-10 w-full">
      <div>{isShowMenu ? "" : <h1 className="text-white">TRAVEL.</h1>}</div>
      <ul className="md:flex hidden text-white">
        <li>Home</li>
        <li>Destinations</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div className="md:flex hidden gap-2 text-white">
        <BiSearchAlt2 className="cursor-pointer" size={25} />
        <AiOutlineUser className="cursor-pointer" size={25} />
      </div>
      {/* humberger menu  */}
      <div
        className={
          isShowMenu ? "md:hidden z-10 text-black" : "md:hidden z-10 text-white"
        }
        onClick={showMenuHandler}
      >
        {isShowMenu ? <AiOutlineClose size={25} /> : <FiMenu size={25} />}
      </div>
      {/* mobile menu dropdown */}
      <div className={isShowMenu ? "mobile-menu left-0" : "mobile-menu"}>
        <ul>
          <h1>TRAVEL.</h1>
          <li>Home</li>
          <li>Destinations</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="flex flex-col gap-3">
            <button>Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-8">
            <BsFacebook className="icon" />
            <BsTwitter className="icon" />
            <BsInstagram className="icon" />
            <BsPinterest className="icon" />
            <BsYoutube className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
}
