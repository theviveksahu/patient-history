import { useState } from "react";
import "./App.css";
import loader from "./assets/images/loader.gif";

import usePatientData from "./hooks/usePatientData";
import PatientTable from "./components/PatientTable";
import FilterComponent from "./components/FilterComponent";
import { findAgeByDOB } from "./utils";

function App() {
  const patientData = usePatientData();
  const [filteredData, setFilteredData] = useState([]);
  const [filterAge, setFilterAge] = useState();

  const handleChange = (e) => {
    const age = e.target.value;
    setFilterAge(age);
    if (age < 100) {
      const data = patientData.filter((item) => {
        if (item.resource?.birthDate) {
          const age = findAgeByDOB(item.resource.birthDate);
          return age <= filterAge;
        }
      });
      setFilteredData(data);
    } else {
      setFilteredData(patientData);
    }
  };

  return (
    <div className="App">
      <FilterComponent onChange={handleChange} />
      {patientData.length === 0 ? (
        <div className="loader">
          <img src={loader} alt="Loading..." />
        </div>
      ) : filterAge < 100 ? (
        <PatientTable data={filteredData} />
      ) : (
        <PatientTable data={patientData} />
      )}
    </div>
  );
}

export default App;
