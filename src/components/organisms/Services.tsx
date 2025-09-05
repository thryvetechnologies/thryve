import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Services = () => {
  return (
    <div>
      <h1>
        What We to <span className="text-primary">Craft</span> Make Ideas Click
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

export default Services;
