import React, { useRef } from 'react';

function Story() {

     const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: 'smooth'
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left:350,
      behavior: 'smooth'
    });
  };

  return (
     <div className="relative bg-gray-700 w-full h-24 overflow-x-auto no-scrollbar">
      {/* Left Scroll Button */}
      <button
        className="absolute left-2 top-1/2 -translate-y-1/2 "
        onClick={scrollLeft}
      >
       <i className="fa-solid fa-circle-chevron-left text-2xl story-icon"></i>
      </button>

      {/* Scrollable Content */}
      <div
        ref={scrollRef}
        className="flex items-center space-x-4 h-full overflow-x-auto scroll-smooth  no-scrollbar px-12"
      >
        {/* Example scrollable content */}
        <p className=" bg-red-400 text-white p-8 rounded-full"></p>
        <p className=" bg-green-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-blue-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-yellow-400 text-white p-8 rounded-full"></p>
        <p className=" bg-purple-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-pink-400 text-white  p-8 rounded-full"></p>
         <p className=" bg-red-400 text-white p-8 rounded-full"></p>
        <p className=" bg-green-400 text-white p-8 rounded-full"></p>
        <p className=" bg-blue-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-yellow-400 text-white p-8 rounded-full"></p>
        <p className=" bg-purple-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-pink-400 text-white p-8 rounded-full"></p>
         <p className=" bg-red-400 text-white p-8 rounded-full"></p>
        <p className=" bg-green-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-blue-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-yellow-400 text-white p-8 rounded-full"></p>
        <p className=" bg-purple-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-pink-400 text-white  p-8 rounded-full"></p>
         <p className=" bg-red-400 text-white p-8 rounded-full"></p>
        <p className=" bg-green-400 text-white p-8 rounded-full"></p>
        <p className=" bg-blue-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-yellow-400 text-white p-8 rounded-full"></p>
        <p className=" bg-purple-400 text-white  p-8 rounded-full"></p>
        <p className=" bg-pink-400 text-white p-8 rounded-full"></p>
      </div>

      {/* Right Scroll Button */}
      <button
        className="absolute right-2 top-1/2 -translate-y-1/2  bg-transparent rounded-full  "
        onClick={scrollRight}
      >
       <i className="fa-solid fa-circle-chevron-right text-2xl story-icon " ></i>
      </button>
    </div>
  )
}

export default Story