import React from "react";
import "./VehicleDetails.css";

function VehicleDetails({ vehicle }) {
  const { Valor, Marca, Modelo, AnoModelo, Combustivel, MesReferencia } =
    vehicle;
  return (
    <div className="VehicleDetails">
      <p className="title">
        {Modelo} {Marca} {AnoModelo}
      </p>
      <ul>
        <li>
          <span>Modelo:</span> {Modelo}
        </li>
        <li>
          <span>Marca:</span> {Marca}
        </li>
        <li>
          <span>Valor:</span> {Valor}
        </li>
        <li>
          <span>Ano:</span> {AnoModelo}
        </li>
        <li>
          <span>Combustível:</span> {Combustivel}
        </li>
        <li>
          <span>Mês de referência:</span> {MesReferencia}
        </li>
      </ul>
    </div>
  );
}

export default VehicleDetails;
