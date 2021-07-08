import React from "react";
import "./KeyValue.css";

function KeyValue({ input, index, onChange, onDelete }) {
  return (
    <li key={index} className="key-value">
      <input
        type="text"
        name="key"
        value={input.key}
        onChange={onChange}
        placeholder="Key"
      />
      <input
        type="text"
        name="value"
        value={input.value}
        onChange={onChange}
        placeholder="Value"
      />
      <button onClick={onDelete}>Remove</button>
    </li>
  );
}

export default KeyValue;
