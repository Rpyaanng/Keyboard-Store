import "./ColorWidget.css";

const ColorAdder = ({ onAdd, idx }) => {
  const { name, color } = colorProp;
  return (
    <div>
      <div className="color-item">
        <div
          className={
            idx === selected
              ? "color-item-button activeSelected"
              : "color-item-button"
          }
          style={{ backgroundColor: `${color}` }}
          onClick={() => {
            setSelected(idx);
            {
              handleClick && handleClick({ name, color });
            }
          }}
        ></div>
        <span
          className={
            idx === selected
              ? "color-item-name activeSelected"
              : "color-item-name"
          }
        >
          {name}
        </span>
      </div>
    </div>
  );
};
export default ColorAdder;
