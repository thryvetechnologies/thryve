import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const Projects = () => {
  return (
    <div style={{ maxWidth: "400px", maxHeight: "300px", margin: "0 auto" }}>
      <Carousel autoPlay showThumbs={false}>
        <div>
          <img
            src="images/Sevinda.png"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="images/Sihala.png"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        </div>
        <div>
          <img
            src="images/Sevinda.png"
            style={{ width: "100%", height: "200px", objectFit: "cover" }}
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Projects;
