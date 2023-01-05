import React, { useState } from "react";
import Select from "../select/Select";

// import { Container } from './styles';

function VehicleSelectForm() {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedMake, setSelectedMake] = useState(null);
  const [selectedModel, setSelectedModel] = useState(null);
  const [selectedYear, setSelectedYear] = useState(null);
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  return (
    <div className="VehicleSelectForm">
      <Select options={makeList} label="Marca" />
    </div>
  );
}

export default VehicleSelectForm;
