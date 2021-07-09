import React, { createContext, useContext, useState } from "react";

const RequestContext = createContext();

export const useRequestContext = () => useContext(RequestContext);

const code = `{
    "" : ""
}`;

function RequestProvider(props) {
  const [inputValues, setInputValues] = useState([{ key: "", value: "" }]);
  const [state, setState] = useState({ code });

  const value = { inputValues, setInputValues, state, setState };

  return (
    <RequestContext.Provider value={value}>
      {props.children}
    </RequestContext.Provider>
  );
}

export default RequestProvider;
