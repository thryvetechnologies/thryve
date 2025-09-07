import TeamProfile from "../molecules/TeamProfile";

const AboutUs = () => {
  return (
    <div className="relative mx-auto max-w-[1100px] px-4 py-8">
      <h2 className="font-bold text-center mb-12 text-xl sm:text-2xl lg:text-3xl text-white">
        The <span className="text-primary">Code</span> Behind the Magic
      </h2>
      <p className="text-center text-sm sm:text-base lg:text-lg">
        Our journey began at university, ignited by a shared passion and a
        collective frustration with mediocre digital experiences. As
        undergraduates, a visionary UX architect and a skilled software
        engineer, we united with a core purpose: to craft solutions that
        transcended mere functionality, embodying intuitive delight and true
        empowerment. Committed to challenging the status quo, our partnership
        solidified, dedicated to building digital experiences as impactful as
        they are seamlessly beautiful.
      </p>

      <TeamProfile />
    </div>
  );
};

export default AboutUs;
