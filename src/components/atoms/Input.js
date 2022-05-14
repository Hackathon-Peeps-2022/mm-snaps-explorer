import React from "react";

export const UnlabeledInput = () => {
  return <input type="text" placeholder="Search" />;
};

export const LabeledInput = ({ placeholder, type }) => {
  return (
    <label htmlFor="">
      <input type={type} placeholder={placeholder} />
    </label>
  );
};
