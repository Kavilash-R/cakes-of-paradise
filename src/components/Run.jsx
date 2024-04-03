import React, { useState } from "react";

import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const Run = () => {
  const data = [
    {
      img: "./images/brownie.jpg",
    },
    {
      img: "./images/plainbun.jpg",
    },
    {
      img: "./images/samosa-1.webp",
    },
    {
      img: "./images/white-forest-cake.jpg",
    },
    {
      img: "./images/bhelpuri.jpg",
    },
    {
      img: "./images/chickenpuff1.jpg",
    },
    {
      img: "./images/chocochipcookies.jpeg",
    },
    {
      img: "./images/sandwichbread.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const prevSlide = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  const nextSlide = () => {
    const isLast = currentIndex === data.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <>
      <div className="">
        <div className="w-full dark:bg-[#080707e4] bg-gray-100 sm:py-12 py-6  pt-20">
          <h1 className="dark:text-white min-[0px]:text-2xl md:text-3xl lg:text-5xl font-bold my-5 text-center px-4">
            Some of our Popular Items!!
          </h1>
          <div className=" max-w-[1500px] h-[300px] md:h-[700px] md:w-[80%] w-[80%] md:px-2 m-auto py-10 md:px-4 px-2 relative group">
            <div
              style={{ backgroundImage: `url(${data[currentIndex].img})` }}
              className="w-full h-full rounded-xl bg-center bg-cover duration-500 shadow-xl"
            >
              {}
              <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactLeft onClick={prevSlide} size={30} />
              </div>
              {}
              <div className="  group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <BsChevronCompactRight onClick={nextSlide} size={30} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Run;
