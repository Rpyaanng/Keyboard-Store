import React from "react";

const FormRow = ({
  type,
  name,
  value,
  min,
  max,
  handleChange,
  onKeyPress,
  className,
  labeltext,
  placeholder,
  disabled,
  hideLabel,
  prefix,
  suffix,
}) => {
  return (
    <div className="form-row">
      {!hideLabel && (
        <label htmlFor={name} className="form-label">
          {labeltext || name}
        </label>
      )}

      {prefix && <span className={className}>{prefix}</span>}
      <input
        type={type}
        value={value}
        name={name}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={handleChange}
        onKeyPress={onKeyPress}
        className={className}
        disabled={disabled}
      />
    </div>
  );
};

export default FormRow;
