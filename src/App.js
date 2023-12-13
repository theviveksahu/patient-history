import { useState } from "react";
import "./App.css";
import loader from "./assets/images/loader.gif";

import usePatientData from "./hooks/usePatientData";
import PatientTable from "./components/PatientTable";
import DualSlider from "./components/DualSlider";
import { findAgeByDOB } from "./utils";

function App() {
  const patientData = usePatientData();
  const [filteredData, setFilteredData] = useState([]);
  const [minAge, setMinAge] = useState(0);
  const [maxAge, setMaxAge] = useState(100);

  const handleMinAgeChange = (e) => {
    setMinAge(e.target.value);
    handleChange(e.target.value, maxAge);
  };

  const handleMaxAgeChange = (e) => {
    setMaxAge(e.target.value);
    handleChange(minAge, e.target.value);
  };

  const handleChange = (minAge, maxAge) => {
    console.log(minAge, maxAge);
    if (minAge > 0 || maxAge < 100) {
      const data = patientData.filter((item) => {
        if (item.resource?.birthDate) {
          const age = findAgeByDOB(item.resource.birthDate);
          return age >= minAge && age <= maxAge;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(patientData);
    }
  };

  return (
    <div className="App">
      {patientData.length === 0 ? (
        <div className="loader">
          <img src={loader} alt="Loading..." />
        </div>
      ) : minAge > 0 || maxAge < 100 ? (
        <>
          <DualSlider
            onMinAgeChange={handleMinAgeChange}
            onMaxAgeChange={handleMaxAgeChange}
          />
          <PatientTable data={filteredData} />
        </>
      ) : (
        <>
          <DualSlider
            onMinAgeChange={handleMinAgeChange}
            onMaxAgeChange={handleMaxAgeChange}
          />
          <PatientTable data={patientData} />
        </>
      )}
    </div>
  );
}

export default App;
