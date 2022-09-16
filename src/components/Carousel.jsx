import React, { useState } from "react";
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
const carouselImages = [
  {
    id: 1,
    name: "img1",
    img: img1,
  },
  {
    id: 2,
    name: "img2",
    img: img2,
  },
  {
    id: 3,
    name: "img3",
    img: img3,
  },
  {
    id: 4,
    name: "img4",
    img: img4,
  },
  {
    id: 5,
    name: "img5",
    img: img5,
  },
  {
    id: 6,
    name: "img6",
    img: img6,
  },
];
export default function Carousel() {
  const [slide, setSlide] = useState(0);
  const length = carouselImages.length;
  const nextSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide + 1);
  };
  const prevSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1);
  };
  console.log(slide);

  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 flex items-center justify-center relative">
      <span onClick={prevSlide} className="text-lg p-2 rounded-md bg-indigo-500 text-white absolute left-6 md:p-4 md:text-xl lg:text-2xl hover:bg-indigo-700 ease-in duration-300">
        <AiOutlineArrowLeft />
      </span>
      <span
        onClick={nextSlide}
        className="text-lg p-2 rounded-md bg-indigo-500 text-white absolute right-6 md:p-4 md:text-xl lg:text-2xl hover:bg-indigo-700 ease-in duration-300"
      >
        <AiOutlineArrowRight />
      </span>
      {carouselImages.map((carouselImage , index) => {
        return <div className={index !== slide ? 'hidden' : ''} key={carouselImage.id}>
            <img className='w-full h-full object-cover' src={carouselImage.img} alt={carouselImage.name} />
        </div> 
      })}
    </div>
  );
}
