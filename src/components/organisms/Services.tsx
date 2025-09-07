import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useState, useEffect } from "react";

const Services = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const services = [
    { id: 1, name: "Service 01" },
    { id: 2, name: "Service 02" },
    { id: 3, name: "Service 03" },
  ];

  const ServiceCard = ({
    service,
  }: {
    service: { id: number; name: string };
  }) => (
    <div className="relative flex h-[400px] flex-col items-center justify-start overflow-hidden rounded-2xl border border-amber-400/10 bg-black shadow-[0_0_8px_3px_rgba(253,211,25,.25)] transition-all duration-300 ease-in-out">
      <h2 className="py-6 text-center text-2xl font-semibold text-white">
        {service.name}
      </h2>

      <div className="flex flex-1 flex-col items-center justify-center">
        <img
          src="icons/UnderDev.svg"
          alt="Under Development"
          className="mb-4 h-20 w-20 object-contain"
        />
        <p className="text-xl font-medium text-primary">Under Development</p>
      </div>

      {/* subtle inner edge glow */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-400/20" />
    </div>
  );

  return (
    <section className="relative mx-auto max-w-[1200px] px-4 py-8">
      <h1 className="mb-20 text-center text-3xl font-semibold text-white">
        What We <span className="text-primary">Craft</span> To Make Ideas Click
      </h1>

      {isMobile ? (
        <Carousel
          className="relative z-[2] w-full"
          infiniteLoop
          autoPlay
          interval={4200}
          stopOnHover
          emulateTouch
          swipeable
          showThumbs={false}
          showStatus={false}
          showArrows={false}
          showIndicators
          renderIndicator={(onClick, isSelected, index, label) => (
            <li
              key={index}
              className="mx-1 inline-block"
              role="button"
              title={`${label} ${index + 1}`}
              onClick={onClick}
            >
              <span
                className={`block h-2.5 w-2.5 rounded-full ${
                  isSelected ? "bg-primary" : "bg-white/30"
                }`}
              />
            </li>
          )}
        >
          {services.map((service) => (
            <div key={service.id} className="mx-4 my-4">
              <ServiceCard service={service} />
            </div>
          ))}
        </Carousel>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-20">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Services;
