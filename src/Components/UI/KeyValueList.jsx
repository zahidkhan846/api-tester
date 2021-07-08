import React from "react";
import { useRequestContext } from "../../Context/RequestContext";
import KeyValue from "./KeyValue";
import "./KeyValueList.css";

function KeyValueList() {
  const { inputValues, setInputValues } = useRequestContext();

  const handleChange = (e, index) => {
    const { name, value } = e.target;

    const copyOfInputValues = [...inputValues];

    copyOfInputValues[index][name] = value;

    setInputValues(copyOfInputValues);
  };

  const handleDelete = (index) => {
    const copyOfInputValues = [...inputValues];
    copyOfInputValues.splice(index, 1);
    setInputValues(copyOfInputValues);
  };

  const handleAdd = () => {
    setInputValues((prevState) => {
      return [...prevState, { key: "", value: "" }];
    });
  };

  return (
    <div className="active-div">
      <ul className="key-value-list">
        {inputValues.map((input, index) => {
          return (
            <KeyValue
              key={index}
              index={index}
              input={input}
              onChange={(e) => handleChange(e, index)}
              onDelete={() => handleDelete(index)}
            />
          );
        })}
      </ul>
      <div>
        <button onClick={handleAdd} className="btn-success">
          Add
        </button>
      </div>
    </div>
  );
}

export default KeyValueList;
