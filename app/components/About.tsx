import Image from 'next/image';

const About = () => {
  const teamMembers = [
    {
      name: "James Nduku",
      role: "Marketing Coordinator",
      image: "/Images/Img1.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
    {
      name: "Joseph Munyambu",
      role: "Nursing Assistant",
      image: "/Images/Img2.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
    {
      name: "Joseph Ngumbau",
      role: "Medical Assistant",
      image: "/Images/Img3.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
    {
      name: "Erick Kipkemboi",
      role: "Web Designer",
      image: "/Images/Image4.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
    {
      name: "Stephen Kerubo",
      role: "President of Sales",
      image: "/Images/Image5.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
    {
      name: "John Leboo",
      role: "Dog Trainer",
      image: "/Images/Img6.svg",
      socialIcons: [
        "/logos/logo4.svg",
        "/logos/logo3.svg",
        "/logos/Vector.svg",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center w-full bg-[#F7F7F7] mt-44">
      <div className="text-center mt-16">
        <h2 className="text-[48px] font-roboto font-bold">Our Team</h2>
        <p className="text-[18px] mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full max-w-[1280px] mt-10 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className={`flex flex-col items-center bg-[#F7F7F7] w-full h-[209px] p-4 ${
              index >= teamMembers.length - 3 ? 'hidden md:flex' : ''
            }`}
          >
            <Image src={member.image} alt={member.name} height={80} width={80} />
            <p className="text-center font-roboto font-semibold text-[20px] mt-2">
              {member.name}
            </p>
            <p className="text-center text-[18px] mt-2">{member.role}</p>
            <div className="flex justify-center items-center space-x-4 mt-4">
              {member.socialIcons.map((icon, i) => (
                <Image key={i} src={icon} alt={`icon-${i}`} height={18} width={18} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;