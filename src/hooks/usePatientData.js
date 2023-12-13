import { useEffect, useState } from "react";
const URL = "https://hapi.fhir.org/baseR4/Patient";

const usePatientData = () => {
  const [patientData, setPatientData] = useState([]);

  const fetchData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    setPatientData(data.entry);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return patientData;
};

export default usePatientData;
