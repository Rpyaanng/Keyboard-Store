import { useEffect } from "react";

const Checkout = () => {
  useEffect(() => {
    document.title = "Checkout";
  }, []);
  return <div>Checkout</div>;
};
export default Checkout;
