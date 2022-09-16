import React from "react";
import { GiWorld } from "react-icons/gi";
import { RiCustomerService2Fill } from "react-icons/ri";
export default function Search() {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      <div className="col-span-1 md:col-span-2">
        <h1 className="my-2">luxury included vacations for tow people</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore,
          blanditiis enim excepturi placeat animi quaerat quod velit corporis.
          Fuga accusamus deleniti harum voluptatibus ea quaerat possimus atque
          laborum! Quos! Earum totam quod est perspiciatis unde! Excepturi,
          commodi? Earum voluptas quis iure deleniti ipsa eius neque, sint iusto
          ea veritatis vero sit facilis adipisci modi quos temporibus natus
          ratione animi.
        </p>
        <div className="flex flex-col  md:flex-row gap-4 my-10">
          <div className="flex md:flex-col lg:flex-row items-center gap-2 md:gap-4 md:text-center">
            <button className="cursor-auto">
              <GiWorld size={40} />
            </button>
            <div>
              <h3 className="uppercase">leading service</h3>
              <p className="capitalize">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
          <div className="flex md:flex-col lg:flex-row items-center gap-2 md:gap-4 md:text-center">
            <button className="cursor-auto">
              <RiCustomerService2Fill size={40} />
            </button>
            <div>
              <h3 className="uppercase">automated bookings</h3>
              <p className="capitalize">
                all-inclusive company for 20 years in-a-row
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col items-center p-2 gap-2 uppercase border-2 text-center">
          <p>get an adoitional 10% off </p>
          <p>12 houer left</p>
          <p className="uppercase w-full bg-gray-800 text-white rounded-md p-2">book now and safe</p>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-3">
            <label>Destination</label>
            <select className="border rounded-md p-2 " >
              <option value="gronde antigua">Gronde Antigua</option>
              <option value="key west">Key West</option>
              <option value="maldives">Maldives</option>
              <option value="cozusel">Cozusel</option>
            </select>
          </div>
          <div className="flex flex-col my-3">
            <label>Check-in</label>
            <input  className="border rounded-md p-2 " type="date" name="" id="" />
          </div>
          <div className="flex flex-col my-3">
            <label>Check-out</label>
            <input  className="border rounded-md p-2 " type="date" name="" id="" />
          </div>
          <div>
            <button className="capitalize w-full">rates & availabilities</button>
          </div>
        </form>
      </div>
    </div>
  );
}
