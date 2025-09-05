const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-20 lg:h-[600px] relative">
      <div className="flex flex-col gap-14 lg:gap-24 items-center lg:items-start lg:w-1/2 z-10">
        <h1 className="font-bold text-2xl md:text-4xl text-center lg:text-left lg:text-5xl">
          In a Mediocre World
          <br />
          We Will Help You {""}
          <span className="text-primary">Thryve.</span>
        </h1>
        <p className="font-normal italic text-sm md:text-xl text-center lg:text-justify">
          Crafting software solutions that transform complexity into effortless
          delight, ensuring every interaction is not just functional, but
          genuinely intuitive and a joy to experience.
        </p>
        <button>Contact Us</button>
      </div>

      <div className="absolute lg:relative top-1/2 lg:top-1/3 left-1/2 lg:left-auto -translate-x-1/2 -translate-y-1/2 lg:translate-x-0 lg:-translate-y-1/2 lg:w-1/2 lg:flex lg:items-center lg:justify-center pointer-events-none z-0">
        <img
          src="/images/GearCog.png"
          alt="Gear"
          className="w-[320px] md:w-[600px] lg:w-[700px] max-w-none opacity-15 lg:opacity-100"
        />
      </div>
    </div>
  );
};

export default Hero;
