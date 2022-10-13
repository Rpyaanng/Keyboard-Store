import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import SectionTitle from "./SectionTitle";
import Wrapper from "../assets/wrappers/Featured";

const Featured = () => {
  return (
    <Wrapper>
      {/* <SectionTitle title="Featured" /> */}
      <Carousel
        style={{ boxShadow: "var(--shadow-1)" }}
        showThumbs={true}
        autoPlay={true}
        infiniteLoop={true}
        thumbWidth={200}
        interval={8000}
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
