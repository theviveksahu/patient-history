const TableRow = ({ data }) => {
  let address = "";
  let name = "";
  let phone = "";
  const item = data.resource;

  if (item.address) {
    address = `${item.address[0].line}, ${item.address[0].city}, ${
      item.address[0].state
    }, ${item.address[0].postalcode ? item.address[0].postalcode : ""}, ${
      item.address[0].country ? item.address[0].country : ""
    }`;
  }

  if (item.name) {
    name = `${item.name[0]["family"]} ${item.name[0]["given"].join(" ")}`;
  }

  if (item.telecom) {
    phone = item.telecom[0].value;
  }
  return (
    <tr key={item.id}>
      <td>{item.id}</td>
      <td>{name}</td>
      <td>{item.gender && item.gender}</td>
      <td>
        {item.birthDate && new Date(item.birthDate).toISOString().split("T")[0]}
      </td>
      <td>{address}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableRow;
