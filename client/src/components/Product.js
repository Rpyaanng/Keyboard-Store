import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Wrapper from "../assets/wrappers/Product";
import ReactHolder from "react-holder";

const Product = ({ name }) => {
  return (
    <Wrapper>
      <Card style={{ width: "18rem", borderRadius: "2rem" }}>
        <figure
          className="card-img"
          style={{
            height: "286px",
            backgroundImage: "url(holder.js/300x200)",
          }}
        >
          <div variant="top" />
        </figure>
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">View</Button>
          <Button variant="primary">Add To Cart</Button>
        </Card.Body>
      </Card>
    </Wrapper>
  );
};
export default Product;
