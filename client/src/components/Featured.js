import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";
import SectionTitle from "./SectionTitle";

const Featured = () => {
  return (
    <div>
      {/* <SectionTitle title="Featured" /> */}
      <Carousel style={{ boxShadow: "var(--shadow-1)" }} showThumbs={false}>
        <div className="featured-img">
          <img className="carousel-image" src={banner} alt="product" />
        </div>
        <div className="featured-img">
          <img className="carousel-image" src={banner2} alt="product" />
        </div>
      </Carousel>
    </div>
  );
};
export default Featured;
