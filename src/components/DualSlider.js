import { useState } from "react";

const MIN_GAP = 10;

const DualSlider = ({ onMinAgeChange, onMaxAgeChange }) => {
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(100);

  const minPercentage = (minValue / 100) * 100;
  const maxPercentage = 100 - (maxValue / 100) * 100;

  const onMinValueChange = (e) => {
    if (maxValue - e.target.value < MIN_GAP) {
      setMinValue(maxValue - MIN_GAP);
    } else {
      setMinValue(e.target.value);
    }
  };

  const onMaxValueChange = (e) => {
    if (e.target.value - minValue < MIN_GAP) {
      setMaxValue(minValue + MIN_GAP);
    } else {
      setMaxValue(e.target.value);
    }
  };

  return (
    <div className="dual_slider_box">
      <span>Filter by age: </span>
      <div className="dual_slider">
        <span
          className="range_track"
          style={{
            left: `${(minValue / 100) * 100}` + "%",
            right: `${100 - (maxValue / 100) * 100}` + "%",
          }}
        ></span>

        <input
          type="range"
          className="min"
          min="0"
          max="100"
          step="0"
          value={minValue}
          onInput={onMinValueChange}
          onChange={onMinAgeChange}
        />
        <input
          type="range"
          className="max"
          min="0"
          max="100"
          step="0"
          value={maxValue}
          onInput={onMaxValueChange}
          onChange={onMaxAgeChange}
        />

        <div
          className="minvalue"
          style={{
            left: `${minPercentage}` + "%",
            transform: `translate(-${minPercentage / 2}%, -100%)`,
          }}
        >
          {minValue}
        </div>
        <div
          className="maxvalue"
          style={{
            right: `${maxPercentage}` + "%",
            transform: `translate(${maxPercentage / 2}%, -100%)`,
          }}
        >
          {maxValue}
        </div>
      </div>
    </div>
  );
};

export default DualSlider;
