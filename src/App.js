import { useState } from "react";
import "./App.css";
import VehicleDetails from "./components/vehicleDetails/VehicleDetails";
import VehicleSelectForm from "./components/vehicleSelectForm/VehicleSelectForm";

function App() {
  const [selectedVehicle, setSelectedVehicle] = useState(null);
  return (
    <div className="App">
      <VehicleSelectForm
        selectedVehicle={selectedVehicle}
        setSelectedVehicle={setSelectedVehicle}
      />
      {selectedVehicle && <VehicleDetails vehicle={selectedVehicle} />}
    </div>
  );
}

export default App;
