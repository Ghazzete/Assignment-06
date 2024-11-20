import React from 'react';
import Image from 'next/image';

function Footer() {
  return (
    <div className="w-full bg-[#FFFFF] py-10 mt-40 ">
      <div className="max-w-[1280px] mx-auto px-4 ">
        <div className="flex flex-col md:flex-row justify-center md:justify-between items-center space-y-6 md:space-y-0 mb-16">
          <div className="text-center md:text-left">
            <h1 className="text-[18px] font-semibold">Subscribe to our newsletter</h1>
            <p className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:ml-6 ">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded-md border border-[#000] w-full md:w-auto"
            />
            <button className="px-6 py-2 rounded-md border border-[#000] mt-2 md:mt-0 md:ml-4">
              Subscribe
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-center border-b border-[#000] ">
          <div className="flex justify-center items-center space-x-2">
            <div className="relative flex items-center">
            <Image 
        src={"/logos/Union-1.svg"}
        alt='logo'
        width={25.76}
        height={26.6}
        className='absolute left-1'/>
        <Image 
        src={"/logos/Union-2.svg"}
        alt='logo'
        width={25.76}
        height={26.6}
        className='absolute left-[12px]'/>
            </div>
            <h2 className="font-inter font-bold text-[25.7px] ml-8">Ddsgnr</h2>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[18px] font-semibold mb-4">Courses</h2>
            <ul className='space-y-2 mb-20'>
              <li>Business</li>
              <li>Development</li>
              <li>Technology</li>
              <li>Design</li>
              <li>Programming</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[18px] font-semibold mb-4">Resources</h2>
            <ul className='space-y-2 mb-20'>
              <li>Career</li>
              <li>Resume</li>
              <li>Learning</li>
              <li>Interview Preparation</li>
              <li>Jobs</li>
            </ul>
          </div>

          <div className="flex flex-col items-center">
            <h2 className="text-[18px] font-semibold mb-4">About Us</h2>
            <ul className='space-y-2 mb-20'>
              <li>Contact</li>
              <li>Help/Support</li>
              <li>FAQ</li>
              <li>Terms and Conditions</li>
              <li>Partners</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='flex flex-row justify-center mt-6'>
      <div className='flex items-start space-x-4 w-full '>
        <p>2023 Ddsgnr. All right reserved.</p>
        <p>Privacy Policy</p>
        <p>Terms of Service</p>
        <p>Cookies Settings</p>
      </div>
      <div className='flex space-x-4 items-center mr-6'>
            <Image
            src={"/logos/logo1.svg"}
            alt='logo1'
            height={10}
            width={10}  
            className='hidden md:block'
            />
            <Image
            src={"/logos/logo2.svg"}
            alt='logo1'
            height={18}
            width={18}
            className='hidden md:block' 
            />
            <Image
            src={"/logos/logo3.svg"}
            alt='logo1'
            height={18}
            width={15.3} 
            className='hidden md:block'
            />
            <Image
            src={"/logos/logo4.svg"}
            alt='logo1'
            height={18}
            width={18} 
            className='hidden md:block'
            />
        </div>
      </div>
    </div>
  );
}

export default Footer;
