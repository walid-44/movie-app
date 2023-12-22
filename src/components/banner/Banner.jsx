import "./banner.css";
import { Row } from "react-bootstrap";
import { Carousel } from "react-responsive-carousel";

import data from "./data";

const Banner = () => {
  return (
    <div className="banner pb-5">
      <Row>
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={2}
          infiniteLoop={true}
          showStatus={false}
        >
          {data.map((movie) => (
            <div className="movie-banner" key={movie.id}>
              <div className="poster-img">
                <img
                  className="w-100 h-100"
                  src={movie.image}
                  alt={movie.title}
                />
              </div>
            </div>
          ))}
        </Carousel>
      </Row>
    </div>
  );
};

export default Banner;
