import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkIfMobile();
    window.addEventListener("resize", checkIfMobile);

    return () => window.removeEventListener("resize", checkIfMobile);
  }, []);

  const projects = [
    { id: 1, name: "Project 01" },
    { id: 2, name: "Project 02" },
    { id: 3, name: "Project 03" },
  ];

  return (
    <>
      <section
        id="projects"
        className="relative mx-auto max-w-[1200px] px-4 py-8"
      >
        <h1 className="mb-12 text-center text-2xl sm:text-3xl lg:text-4xl font-semibold text-white">
          <span className="text-primary">Designs</span> That Speak in Clicks
        </h1>

        <Carousel
          className="relative z-[2] w-full"
          centerSlidePercentage={isMobile ? 100 : 64}
          infiniteLoop
          autoPlay
          interval={4200}
          stopOnHover
          emulateTouch
          swipeable
          showThumbs={false}
          showStatus={false}
          showArrows={!isMobile}
          showIndicators
          renderArrowPrev={(onClick, hasPrev, label) =>
            hasPrev && (
              <button
                type="button"
                onClick={onClick}
                title={label}
                className="absolute left-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 text-primary bg-primary-400/10 shadow-[0_0_10px_rgba(253,211,25,.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="M15.41 7.41 14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                </svg>
                <span className="sr-only">Previous</span>
              </button>
            )
          }
          renderArrowNext={(onClick, hasNext, label) =>
            hasNext && (
              <button
                type="button"
                onClick={onClick}
                title={label}
                className="absolute right-2 top-1/2 z-10 -translate-y-1/2 rounded-full p-3 text-primary bg-primary-400/10 shadow-[0_0_10px_rgba(253,211,25,.45)]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path d="m8.59 16.59 1.41 1.41 6-6-6-6-1.41 1.41L13.17 12z" />
                </svg>
                <span className="sr-only">Next</span>
              </button>
            )
          }
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
          {projects.map((project) => (
            <div
              key={project.id}
              className={`relative flex h-[420px] flex-col items-center justify-start overflow-hidden rounded-2xl border border-amber-400/10 bg-black shadow-[0_0_8px_3px_rgba(253,211,25,.25)] transition-all duration-300 ease-in-out ${
                isMobile
                  ? "mx-4 my-4 scale-100 opacity-100"
                  : "mx-10 my-4 scale-90 opacity-80 hover:scale-95"
              }`}
            >
              <h2 className="py-6 text-center text-lg sm:text-xl lg:text-2xl font-semibold text-white">
                {project.name}
              </h2>

              <div className="flex flex-1 flex-col items-center justify-center">
                <img
                  src="icons/UnderDev.svg"
                  alt="Under Development"
                  className="mb-4 h-20 w-20 object-contain"
                />
                <p className="text-base sm:text-lg lg:text-xl font-medium text-primary">
                  Under Development
                </p>
              </div>

              {/* subtle inner edge glow */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-amber-400/20" />
            </div>
          ))}
        </Carousel>
      </section>
    </>
  );
};

export default Projects;
