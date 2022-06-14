import { Carousel } from "react-responsive-carousel";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import banner from "../assets/images/banner.png";
import banner2 from "../assets/images/banner2.png";

const Featured = () => {
  return (
    <div>
      <h1>Featured</h1>
      <Carousel showThumbs={false}>
        <div className="holder">
          <img className="carousel-image" src={banner} alt="product" />
        </div>
        <div className="holder">
          <img className="carousel-image" src={banner2} alt="product" />
        </div>
      </Carousel>
    </div>
  );
};
export default Featured;
