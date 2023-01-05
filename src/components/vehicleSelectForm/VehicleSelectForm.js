import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import Select from "../select/Select";
import {
  MAKE_LIST_BASE_URL,
  MODEL_LIST_BASE_URL,
  VEHICLE_BASE_URL,
  YEAR_LIST_BASE_URL,
} from "../../utils/axiosConstants";

function VehicleSelectForm({ selectedVehicle, setSelectedVehicle }) {
  const [makeList, setMakeList] = useState([]);
  const [modelList, setModelList] = useState([]);
  const [yearList, setYearList] = useState([]);
  const [selectedMake, setSelectedMake] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [selectedYear, setSelectedYear] = useState("");

  const resetValues = useCallback(() => {
    setModelList([]);
    setYearList([]);
    setSelectedModel("");
    setSelectedYear("");
    setSelectedVehicle(null);
  }, [setSelectedVehicle]);

  const fetchMakeList = useCallback(async () => {
    await axios.get(MAKE_LIST_BASE_URL).then((res) => {
      setMakeList(res.data);
    });
  }, []);

  const fetchModelList = (make) => {
    axios.get(MODEL_LIST_BASE_URL(make)).then((res) => {
      setModelList(res.data.modelos);
    });
  };

  const fetchYearList = (make, model) => {
    axios.get(YEAR_LIST_BASE_URL(make, model)).then((res) => {
      setYearList(res.data);
    });
  };

  const fetchVehicle = useCallback(
    (make, model, year) => {
      axios.get(VEHICLE_BASE_URL(make, model, year)).then((res) => {
        setSelectedVehicle(res.data);
      });
    },
    [setSelectedVehicle]
  );

  const onSelectChange = useCallback(
    (opt, type) => {
      const value = opt.target?.value || opt;
      switch (type) {
        case "make": {
          setSelectedMake(value);
          fetchModelList(value);
          resetValues();
          break;
        }
        case "model": {
          setSelectedModel(value);
          setSelectedYear("");
          setSelectedVehicle(null);
          setYearList([]);
          fetchYearList(selectedMake, value);
          break;
        }
        case "year": {
          setSelectedYear(value);
          fetchVehicle(selectedMake, selectedModel, value);
          break;
        }
        default:
          return;
      }
    },
    [fetchVehicle, resetValues, selectedMake, selectedModel, setSelectedVehicle]
  );

  useEffect(() => {
    if (makeList.length === 0) {
      fetchMakeList();
    }
  }, [fetchMakeList, makeList.length]);

  return (
    <div className="VehicleSelectForm">
      <h2>Busca Tabela FIPE</h2>
      <Select
        options={makeList}
        label="Marca"
        type="make"
        onChange={onSelectChange}
        selectedValue={selectedMake}
      />
      {modelList.length > 0 && (
        <Select
          options={modelList}
          label="Modelo"
          type="model"
          onChange={onSelectChange}
          selectedValue={selectedModel}
        />
      )}
      {yearList.length > 0 && (
        <Select
          options={yearList}
          label="Ano"
          type="year"
          onChange={onSelectChange}
          selectedValue={selectedYear}
        />
      )}
    </div>
  );
}

export default VehicleSelectForm;
