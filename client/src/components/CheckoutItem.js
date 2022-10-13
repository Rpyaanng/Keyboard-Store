import Wrapper from "../assets/wrappers/CheckoutItem";
import React, { useEffect } from "react";
import { TableRow, TableCell } from "@mui/material";

const CheckoutItem = ({ item }) => {
  const { id, name, quantity, price, imageUrl } = item;

  useEffect(() => {
    console.log(name);
  }, []);
  return (
    <TableRow>
      <TableCell>
        <div className="thumbnail">
          <img src={imageUrl} alt="" />
        </div>
      </TableCell>
      <TableCell>
        <span className="name">{name}</span>
      </TableCell>
      <TableCell>
        <button className="quantity btn">qty:{quantity}</button>
        <button className="delete">delete</button>
      </TableCell>
      <TableCell>
        <span className="price">${(quantity * price).toFixed(2)}</span>
      </TableCell>
    </TableRow>
  );
};

export default CheckoutItem;
