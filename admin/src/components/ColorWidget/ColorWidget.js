import "./ColorWidget.css";
import ColorItem from "./ColorItem";
import { useState } from "react";

const ColorWidget = ({ colors, handleClick }) => {
  const [selected, setSelected] = useState();

  return (
    <div className="color-container">
      {colors &&
        colors.map((color, idx) => {
          return (
            <ColorItem
              key={idx}
              idx={idx}
              colorProp={color}
              selected={selected}
              setSelected={setSelected}
              handleClick={handleClick}
            />
          );
        })}
    </div>
  );
};

export default ColorWidget;
