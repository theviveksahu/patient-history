import { useState } from "react";

const FilterComponent = ({ onChange }) => {
  const [value, setValue] = useState(100);
  return (
    <div className="slider">
      <span>Filter by age: </span>
      <input
        type="range"
        name="age"
        min="0"
        max="100"
        value={value}
        onInput={(e) => {
          setValue(e.target.value);
        }}
        onChange={onChange}
      ></input>
      <p>{value}</p>
    </div>
  );
};

export default FilterComponent;
