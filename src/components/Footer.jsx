import React from "react";
import {
  BsFacebook,
  BsTwitter,
  BsInstagram,
  BsPinterest,
  BsYoutube,
} from "react-icons/bs";
export default function Footer() {
  return (
    <div className=" bg-gray-200">
      <div className="max-w-[1240px] mx-auto py-16 px-4">
        <div className="flex flex-col p-4 items-center md:flex-row md:justify-between">
          <h1>beaches.</h1>
          <ul className="flex text-indigo-500">
            <li>
              <BsFacebook size={25} />
            </li>
            <li>
              <BsTwitter size={25} />
            </li>
            <li>
              <BsInstagram size={25} />
            </li>
            <li>
              <BsPinterest size={25} />
            </li>
            <li>
              <BsYoutube size={25} />
            </li>
          </ul>
        </div>
        <div className="flex justify-between">
          <ul className="flex flex-col lg:flex-row flex-wrap">
            <li>
              <a href="#">about</a>
            </li>
            <li>
              <a href="#">Partnerships</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Newsroom</a>
            </li>
            <li>
              <a href="#">Advertising</a>
            </li>
          </ul>
          <ul className="flex flex-col lg:flex-row">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">View</a>
            </li>
            <li>
              <a href="#">Book</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
