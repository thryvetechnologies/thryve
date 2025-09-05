import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <div>
      <h1>
        <span className="text-primary">Designs</span> That Speak in Clicks
      </h1>

      <Carousel
        // autoPlay
        showThumbs={false}
        showStatus={false}
        // infiniteLoop
        showArrows={true}
      >
        <div>
          <img
            src="images/Sevinda.png"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="images/Sihala.png"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </div>
        <div>
          <img
            src="images/Sevinda.png"
            style={{ width: "100%", height: "400px", objectFit: "contain" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
