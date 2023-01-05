import React from "react";

// import { Container } from './styles';

function Select({ options, label, onChange, type, selectedValue }) {
  return (
    <>
      <label>{label}: </label>
      {options.length === 0 ? (
        <p>Carregando...</p>
      ) : (
        <select onChange={(opt) => onChange(opt, type)} value={selectedValue}>
          <option value="" defaultChecked disabled />
          {options.map((opt) => (
            <option key={opt.codigo} value={opt.codigo}>
              {opt.nome}
            </option>
          ))}
        </select>
      )}
    </>
  );
}

export default Select;
