import React from "react";

function VehicleDetails({ vehicle }) {
  const { Valor, Marca, Modelo, AnoModelo, Combustivel, MesReferencia } =
    vehicle;
  return (
    <ul className="VehicleDetails">
      <li>Modelo: {Modelo}</li>
      <li>Marca: {Marca}</li>
      <li>Valor: {Valor}</li>
      <li>Ano: {AnoModelo}</li>
      <li>Combustível: {Combustivel}</li>
      <li>Mês de referência: {MesReferencia}</li>
    </ul>
  );
}

export default VehicleDetails;
