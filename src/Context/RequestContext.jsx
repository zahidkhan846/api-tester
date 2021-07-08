import React, { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export const useRequestContext = () => useContext(RequestContext);

function RequestProvider(props) {
  const [inputValues, setInputValues] = useState([{ key: "", value: "" }]);

  const value = { inputValues, setInputValues };

  return (
    <RequestContext.Provider value={value}>
      {props.children}
    </RequestContext.Provider>
  );
}

export default RequestProvider;
