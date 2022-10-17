import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import SectionTitle from "./SectionTitle";
import Wrapper from "../assets/wrappers/Featured";
import GenericLoader from "./GenericLoader";
import { useState, useEffect } from "react";

const Featured = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 300);
  }, []);

  return (
    <Wrapper>
      <SectionTitle title="Featured" />
      {isLoading && (
        <div className="loading-div">
          <div className="loading-div-1">
            <GenericLoader />
          </div>
          <div className="loading-div-2 mobilehidden">
            <GenericLoader />
          </div>
        </div>
      )}
      <Carousel
        className={isLoading && "hidden"}
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        thumbWidth={200}
        interval={8000}
        emulateTouch={false}
      >
        <div className="featured-img">
          <img className="carousel-image" src={banner} alt="product" />
        </div>
        <div className="featured-img">
          <img className="carousel-image" src={banner2} alt="product" />
        </div>
      </Carousel>
    </Wrapper>
  );
};
export default Featured;
