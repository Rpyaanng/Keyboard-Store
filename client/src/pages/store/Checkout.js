import Wrapper from "../../assets/wrappers/Checkout";
import { useEffect, useState } from "react";
import { SectionTitle, CheckoutItem } from "../../components";
import { useAppContext } from "../../context/appContext";
import { useNavigate } from "react-router-dom";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";

const Checkout = () => {
  const { shoppingCart } = useAppContext();
  const [total, setTotal] = useState(0);

  const navigate = useNavigate();

  const calcTotal = (cart) => {
    var total = 0;
    Object.entries(shoppingCart).forEach(([key, values]) => {
      total += values.price * values.quantity;
    });
    setTotal(total);
  };

  useEffect(() => {
    document.title = "Checkout";
    calcTotal();
  }, [shoppingCart]);
  return (
    <Wrapper>
      <SectionTitle title={"Shopping Cart"} />
      <TableContainer className="table">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Quantity</TableCell>
              <TableCell>Price</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Object.entries(shoppingCart).map(([key, values]) => {
              return <CheckoutItem item={values} />;
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="coupon">
        <input className="coupon-input" placeholder="Coupon Code" />
      </div>
      <div className="details">
        <h4>
          Subtotal: <span className="total">{total}</span>
        </h4>
      </div>
      <div className="proceed">
        <button className="btn btn-invert" onClick={() => navigate(-1)}>
          Back
        </button>
        <button className="btn">Checkout</button>
      </div>
    </Wrapper>
  );
};
export default Checkout;
