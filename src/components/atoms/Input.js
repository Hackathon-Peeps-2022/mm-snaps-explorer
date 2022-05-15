import React from "react";

export const UnlabeledInput = () => {
  return <input type="text" placeholder="Search" />;
};

export const LabeledInput = ({ placeholder, type, label, description }) => {
  return (
    <label>
			<p>{label} <span>{description}</span></p>
      <input type={type} placeholder={placeholder} required />
    </label>
  );
};

// Textarea
