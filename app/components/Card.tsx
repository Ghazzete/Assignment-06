import React from 'react';
import Image from 'next/image';

function Card() {
  return (
    <div className="flex flex-col items-center w-full mt-44">
      <div className="text-center mt-10">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-roboto font-bold">Courses</h1>
        <p className="text-sm md:text-base lg:text-lg mt-4">Your Ultimate Guide to learning</p>
        <div className="flex justify-between text-center mt-4 gap-4">
          <button className="text-sm md:text-base font-roboto underline">Popular</button>
          <button className="text-sm md:text-base font-roboto">Recommended</button>
          <button className="text-sm md:text-base font-roboto">Best Price</button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1280px] mt-14 px-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className={`flex flex-col shadow-md rounded-lg bg-[#F7F7F7] h-[534px] ${
              index >= 3 ? 'hidden lg:flex' : ''
            }`}
          >
            <Image
              src={`/Card/Image${index + 1}.svg`}
              alt={`Card ${index + 1}`}
              height={416}
              width={400}
              className="rounded-t-lg"
            />
            <div className="flex justify-between items-center mt-4 px-4">
              <p className="text-sm md:text-base font-roboto font-semibold">Design</p>
              <div className="flex items-center">
                <Image
                  src="/Card/Star 1.svg"
                  alt="star"
                  height={24}
                  width={24}
                />
                <p className="font-semibold text-sm md:text-base ml-2">5.0</p>
              </div>
            </div>
            <div className="px-4">
              <h5 className="text-lg md:text-xl font-bold font-roboto mt-4">UX/UI Design 201</h5>
              <p className="mt-4 text-sm md:text-base">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.
              </p>
            </div>
            <div className="flex items-center justify-between px-4 mt-6">
              <button className="border border-black rounded-md h-10 w-28 text-sm">Enroll Now</button>
              <p className="font-roboto font-medium">$400</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center border border-black h-12 w-40 rounded-md mt-12">
        <button className="text-sm md:text-base">View All Courses</button>
      </div>
    </div>
  );
}

export default Card;
