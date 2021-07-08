import React from "react";

function SelectInput({ onSelect }) {
  let options = [
    { value: "GET" },
    { value: "POST" },
    { value: "PUT" },
    { value: "PATCH" },
    { value: "DELETE" },
  ];

  return (
    <select onChange={onSelect}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.value}
        </option>
      ))}
    </select>
  );
}

export default SelectInput;
