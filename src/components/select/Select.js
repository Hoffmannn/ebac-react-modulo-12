import React from "react";

// import { Container } from './styles';

function Select({ options, label }) {
  return (
    <>
      <label>{label}</label>
      <select>
        {options.map((opt) => (
          <option value={opt.id}>{opt.name}</option>
        ))}
      </select>
    </>
  );
}

export default Select;
