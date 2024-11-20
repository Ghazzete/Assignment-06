import Image from 'next/image';

const Courses = () => {
  const courses = [
    {
      title: "Design & Development",
      description: "50+ Courses Available",
      image: "/Frames/Frame1.svg",
    },
    {
      title: "Marketing",
      description: "30+ Courses Available",
      image: "/Frames/Frame2.svg",
    },
    {
      title: "Development",
      description: "50+ Courses Available",
      image: "/Frames/Frame3.svg",
    },
    {
      title: "Communication",
      description: "50+ Courses Available",
      image: "/Frames/Frame4.svg",
    },
    {
      title: "Digital Marketing",
      description: "50+ Courses Available",
      image: "/Frames/Frama5.svg",
    },
    {
      title: "Self Development",
      description: "50+ Courses Available",
      image: "/Frames/Frame6.svg",
    },
    {
      title: "Business",
      description: "50+ Courses Available",
      image: "/Frames/Frame7.svg",
    },
    {
      title: "Finance",
      description: "50+ Courses Available",
      image: "/Frames/Frame8.svg",
    },
    {
      title: "Consulting",
      description: "50+ Courses Available",
      image: "/Frames/Frame9.svg",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <div className="text-center mt-16">
        <h2 className="text-[48px] font-roboto font-bold">
          Explore Courses By Category
        </h2>
        <p className="text-[18px] mt-4">
          Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[1280px] h-auto mt-14 px-4">
        {courses.map((course, index) => (
          <div
            key={index}
            className={`flex items-center shadow-md rounded-lg bg-[#F7F7F7] w-full h-[132px] ${
              index >= courses.length - 3 ? "hidden md:flex" : ""
            }`}
          >
            <div className="bg-[#FFFFFF]">
              <Image src={course.image} alt="frame" height={100} width={100} />
            </div>
            <div>
              <p className="font-semibold pl-4 pt-4">{course.title}</p>
              <p className="pl-4">{course.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center border border-black h-[48px] w-[155px] rounded-[5px] mt-6">
        <button>View All Courses</button>
      </div>

      <div className="flex mt-44">
        <div className="flex flex-col items-center mt-10">
          <h2 className="font-roboto text-[48px] font-bold">Our Achievements</h2>
          <p className="text-[18px] text-center pl-12 pr-14 mt-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
          </p>
        </div>
      </div>

      <div className="h-[80px] flex flex-row space-x-52 mt-6">
        <div>
          <h3 className="text-[40px] font-bold">+200</h3>
          <p className="text-[16px]">Courses</p>
        </div>
        <div>
          <h3 className="text-[40px] font-bold">50K</h3>
          <p className="text-[16px]">Mentors</p>
        </div>
        <div>
          <h3 className="text-[40px] font-bold">370K</h3>
          <p className="text-[16px]">Students</p>
        </div>
        <div>
          <h3 className="text-[40px] font-bold">100+</h3>
          <p className="text-[16px]">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Courses;
