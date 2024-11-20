"use client";
import React, { useState } from "react";
import Image from 'next/image';

function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      {/* Top Header Section */}
      <header className="hidden lg:flex h-[54px] bg-[#F7F7F7] pl-[64px] pr-[62px] items-center border-b border-[#000]">
        <div className="h-[30px] w-full text-[14px] text-[#000] flex items-center justify-between">
          <p>
            <span className="pr-6">Phone Number: 956 742 455 678</span>
            <span>Email: info@ddsgnr.com</span>
          </p>
        </div>
        <div className="flex space-x-4 items-center">
          <Image
            src={"/logos/logo1.svg"}
            alt="logo1"
            height={10}
            width={10}
            className="hidden md:block"
          />
          <Image
            src={"/logos/logo2.svg"}
            alt="logo2"
            height={18}
            width={18}
            className="hidden md:block"
          />
          <Image
            src={"/logos/logo3.svg"}
            alt="logo3"
            height={18}
            width={15.3}
            className="hidden md:block"
          />
          <Image
            src={"/logos/logo4.svg"}
            alt="logo4"
            height={18}
            width={18}
            className="hidden md:block"
          />
        </div>
      </header>

      {/* Main Header Section */}
      <header className="h-[72px] flex items-center bg-[#F7F7F7] px-4 lg:px-[64px] justify-between border-b border-[#000]">
        {/* Logo Section */}
        <div className="flex items-center">
          <div className="relative">
            <Image
              src={"/logos/Union-1.svg"}
              alt="logo"
              width={25.76}
              height={26.6}
              className="absolute left-1"
            />
            <Image
              src={"/logos/Union-2.svg"}
              alt="logo"
              width={25.76}
              height={26.6}
              className="absolute left-[12px]"
            />
          </div>
          <h2 className="font-inter font-bold text-[25.7px] ml-8">Ddsgnr</h2>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-[16px]">Home</a>
          <a href="#" className="text-[16px]">Courses</a>
          <a href="#" className="text-[16px]">Services</a>
          <a href="#" className="text-[16px]">Achievements</a>
          <a href="#" className="text-[16px]">About Us</a>
          <a href="#" className="text-[16px]">Testimonial</a>
          <button className="border border-[#000] h-[40px] w-[80px] rounded-md">
            Login
          </button>
          <button className="bg-[#000] text-white h-[40px] w-[95px] rounded-md">
            Sign Up
          </button>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <button
          className="block md:hidden"
          onClick={() => setSidebarOpen(!isSidebarOpen)}
        >
          <Image
            src="/Images/Icon.svg"
            alt="Menu"
            width={24}
            height={24}
          />
        </button>
      </header>

      {/* Mobile Sidebar */}
      {isSidebarOpen && (
        <div className="fixed top-0 left-0 w-[70%] h-full bg-white shadow-lg z-50 p-4">
          <button
            className="absolute top-4 right-4"
            onClick={() => setSidebarOpen(false)}
          >
            ✖
          </button>
          <nav className="flex flex-col space-y-4 mt-8">
            <a href="#" className="text-[16px]">Home</a>
            <a href="#" className="text-[16px]">Courses</a>
            <a href="#" className="text-[16px]">Services</a>
            <a href="#" className="text-[16px]">Achievements</a>
            <a href="#" className="text-[16px]">About Us</a>
            <a href="#" className="text-[16px]">Testimonial</a>
            <button className="border border-[#000] h-[40px] w-full rounded-md">
              Login
            </button>
            <button className="bg-[#000] text-white h-[40px] w-full rounded-md">
              Sign Up
            </button>
          </nav>
        </div>
      )}
    </>
  );
}

export default Home;
