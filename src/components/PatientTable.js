import TableRow from "./TableRow";

const PatientTable = ({ data }) => {
  return (
    <div className="patient-table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Gender</th>
            <th>Date of Birth</th>
            <th>Address</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {data && data.length
            ? data.map((patient, index) => (
                <TableRow key={index} data={patient} />
              ))
            : null}
        </tbody>
      </table>
    </div>
  );
};

export default PatientTable;
