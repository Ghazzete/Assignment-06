import React from 'react'
import Image from 'next/image'

export default function Testmintal () {
  return (
    <div className="flex flex-col w-full pt-24 bg-[#F7F7F7]">
      <div className="mt-10"> 
        <h1 className="text-[48px] font-roboto font-bold mt-10 hidden md:block">
          Customer testimonials
        </h1>
        <h1 className="text-[32px] flex justify-center font-roboto font-bold mt-10 md:hidden">
          What Our Student Say
        </h1>
        
        <p className="text-[18px] mt-4 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p> 
      </div> 
      <div className="flex flex-wrap justify-center gap-6 md:overflow-x-auto md:snap-x md:snap-mandotary max-w-[1280px] mt-24 px-4">
        <div className="flex flex-col shadow-md border border-[#000] bg-[#F7F7F7] min-h-[294px] md:w-[90%] lg:w-[30%] snap-center">
          <div className='m-10 justify-center'>
            <Image 
              src={"/logos/Stars.svg"}
              alt='stars'
              height={18.89}
              width={116}
            />
            <p className='text-[18px] mt-8'>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className='flex flex-row ' >
              <Image
                src={ "/Images/Img3.svg"}
                alt='img'
                height={56}
                width={56}
                className='rounded-full'
              />
              <div className='ml-6'>
                <p className='flex flex-col font-semibold'>James Nduku</p>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-md border border-[#000] bg-[#F7F7F7] min-h-[294px] md:w-[90%] lg:w-[30%] snap-center">
          <div className='m-10 justify-center'>
            <Image 
              src={"/logos/stars.svg"}
              alt='stars'
              height={18.89}
              width={116}
            />
            <p className='text-[18px] mt-8'>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className='flex flex-row ' >
              <Image
                src={ "/Images/Img1.svg"}
                alt='img'
                height={56}
                width={56}
                className='rounded-full'
              />
              <div className='ml-6'>
                <p className='flex flex-col font-semibold'>James Nduku</p>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-md border border-[#000] bg-[#F7F7F7] min-h-[294px] md:w-[90%] lg:w-[30%] snap-center">
          <div className='m-10 justify-center'>
            <Image 
              src={"/logos/stars.svg"}
              alt='stars'
              height={18.89}
              width={116}
            />
            <p className='text-[18px] mt-8'>
              &quot;Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.&quot;
            </p>
            <div className='flex flex-row ' >
              <Image
                src={ "/Images/Img6.svg"}
                alt='img'
                height={56}
                width={56}
                className='rounded-full'
              />
              <div className='ml-6'>
                <p className='flex flex-col font-semibold'>James Nduku</p>
                <p>Software Developer</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex justify-center mb-20 mt-10' >
        <Image 
          src={"/Card/Slider Dots.svg"}
          alt='dots'
          height={8}
          width={72}
        />
      </div>
    </div>
  )
}
