import React, { useState } from "react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description_desktop: string;
  description_mobile: string;
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sihala Weragama",
    title: "The Designer",
    description_desktop:
      "As a visionary UX/UI architect, Sihala brings an inquisitive mind and an unyielding motivation to redefine digital interactions. Passionate about elevating experiences beyond mere aesthetics, he meticulously crafts interfaces that are intuitively delightful and profoundly empowering. His commitment to collaborative excellence, coupled with a remarkable adaptability and a relentless drive for perfection, makes him an integral force in Thryve's mission to ensure every solution truly thrives.",
    description_mobile:
      "Sihala is a visionary UX/UI architect passionate about crafting intuitive, empowering, and delightful digital experiences. With adaptability, collaboration, and a drive for excellence, he advances Thryve's mission to help every solution thrive.",
    image: "/images/Sihala.png",
  },
  {
    id: "2",
    name: "Sevinda Perera",
    title: "The Developer",
    description_desktop:
      "As a highly motivated and inquisitive software engineer, Sevinda brings an unwavering drive to build, learn, and evolve digital solutions. Passionate about the intricacies of robust development, he thrives in dynamic, problem-solving environments. His dedication to clean, efficient, and innovative code, coupled with remarkable adaptability and a collaborative spirit, makes him a foundational force in Thryve's mission to ensure every solution truly thrives.",
    description_mobile:
      "Sevinda is a driven software engineer passionate about building robust digital solutions. With curiosity, adaptability, and a commitment to clean, innovative code, he thrives in dynamic environments and advances Thryve's mission to help every solution thrive.",
    image: "/images/Sevinda.png",
  },
];

const TeamProfile: React.FC = () => {
  const [activeMember, setActiveMember] = useState<string | null>(null);

  const handleImageTouch = (memberId: string) => {
    setActiveMember(activeMember === memberId ? null : memberId);
  };

  return (
    <div className="text-white mt-[125px]">
      <div className="flex flex-col sm:flex-row lg:flex-row sm:gap-4 lg:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-row lg:flex-col items-center mb-8 sm:mb-0 lg:mb-0 gap-4 lg:gap-0 sm:flex-1 lg:flex-1"
          >
            <div className="w-full sm:w-full lg:w-[400px] h-48 sm:h-56 lg:h-[27rem] relative group flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="object-contain w-full h-full rounded-lg transition-shadow duration-300 shadow-[0_0_45px_0_rgba(254,187,32,0.55)] group-hover:shadow-[0_0_70px_4px_rgba(254,187,32,0.7)] lg:cursor-pointer cursor-pointer"
                onClick={() => handleImageTouch(member.id)}
              />

              <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 py-3 px-3 flex-col justify-start items-center text-center rounded-lg">
                <div className="mb-4">
                  <h1 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {member.name}
                    </span>
                  </h1>
                  <h2 className="text-base sm:text-lg lg:text-xl text-gray-300 font-light">
                    {member.title}
                  </h2>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-xs sm:text-sm lg:text-base text-gray-400 leading-relaxed font-light">
                    {member.description_desktop}
                  </p>
                </div>
              </div>

              <div
                className={`lg:hidden absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300 p-3 flex flex-col justify-start rounded-lg ${
                  activeMember === member.id
                    ? "opacity-100"
                    : "opacity-0 pointer-events-none"
                }`}
              >
                <div className="mb-2">
                  <h1 className="text-sm sm:text-base font-bold mb-1">
                    <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                      {member.name}
                    </span>
                  </h1>
                  <h2 className="text-xs sm:text-sm text-gray-300 font-light">
                    {member.title}
                  </h2>
                </div>
                <div className="flex-1 flex items-center">
                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
                    {member.description_mobile}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfile;
