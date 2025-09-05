import React from "react";

interface TeamMember {
  id: string;
  name: string;
  title: string;
  description: string;
  position: "left" | "right";
  image: string;
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sihala Weragama",
    title: "The Designer",
    description:
      "Sihala is a visionary UX/UI architect driven to redefine digital interactions. Passionate about creating experiences that go beyond aesthetics, he designs interfaces that are intuitive, delightful, and empowering. With a collaborative spirit, adaptability, and relentless pursuit of excellence, he plays a key role in advancing Thryve's mission to help every solution thrive.",
    position: "left",
    image: "/images/Sihala.png",
  },
  {
    id: "2",
    name: "Sevinda Perera",
    title: "The Developer",
    description:
      "Sevinda is a driven software engineer with an insatiable curiosity to build, learn, and evolve digital solutions. Passionate about robust development, he excels in dynamic, problem-solving environments. With a commitment to clean, efficient, and innovative code, paired with adaptability and teamwork, he plays a vital role in advancing Thryve's mission to help every solution thrive.",
    position: "right",
    image: "/images/Sevinda.png",
  },
];

const TeamProfile: React.FC = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col lg:flex-row lg:gap-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-row lg:flex-col items-center mb-8 lg:mb-0 gap-4 lg:gap-0 lg:flex-1"
          >
            {/* Small screens: side by side layout */}
            <div className="w-32 h-40 lg:w-80 lg:h-96 lg:relative lg:group flex-shrink-0">
              <img
                src={member.image}
                alt={member.name}
                className="object-cover w-full h-full rounded-lg transition-shadow duration-300 shadow-[0_0_45px_0_rgba(255,170,60,0.55)] group-hover:shadow-[0_0_70px_4px_rgba(255,170,60,0.7)]"
              />

              {/* Large screens: hover overlay */}
              <div className="hidden lg:flex absolute inset-0 bg-black bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6 flex-col justify-center">
                <h1 className="text-3xl xl:text-4xl font-bold mb-2">
                  <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                    {member.name}
                  </span>
                </h1>
                <h2 className="text-xl xl:text-2xl text-gray-300 mb-4 font-light">
                  {member.title}
                </h2>
                <p className="text-sm xl:text-base text-gray-400 leading-relaxed font-light">
                  {member.description}
                </p>
              </div>
            </div>

            {/* Small screens: text content */}
            <div className="flex-1 lg:hidden">
              <h1 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  {member.name}
                </span>
              </h1>
              <h2 className="text-lg text-gray-300 mb-2 font-light">
                {member.title}
              </h2>
              <p className="text-sm text-gray-400 leading-relaxed font-light">
                {member.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamProfile;
