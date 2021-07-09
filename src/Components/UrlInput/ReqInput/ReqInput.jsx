import React, { useEffect } from "react";
import { useState } from "react";
import "./ReqInput.css";
import classnames from "classnames";
import KeyValueList from "../../UI/KeyValueList";
import { useRequestContext } from "../../../Context/RequestContext";

import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

function ReqInput() {
  const [queryParams, setQueryParams] = useState(true);
  const [reqHeaders, setReqHeaders] = useState(false);
  const [json, setJson] = useState(false);

  const handleQuery = () => {
    setQueryParams(true);
    setReqHeaders(false);
    setJson(false);
  };

  const handleReqHead = () => {
    setQueryParams(false);
    setReqHeaders(true);
    setJson(false);
  };

  const handleJson = () => {
    setQueryParams(false);
    setReqHeaders(false);
    setJson(true);
  };

  const { state, setState } = useRequestContext();

  return (
    <div className="req-input">
      <div className="tab-div">
        <button
          className={classnames("btn-tab", {
            active: queryParams,
            "no-active": !queryParams,
          })}
          onClick={handleQuery}
        >
          Query Params
        </button>
        <button
          className={classnames("btn-tab", {
            active: reqHeaders,
            "no-active": !reqHeaders,
          })}
          onClick={handleReqHead}
        >
          Request Headers
        </button>
        <button
          className={classnames("btn-tab", {
            active: json,
            "no-active": !json,
          })}
          onClick={handleJson}
        >
          JSON
        </button>
      </div>
      {queryParams && <KeyValueList />}
      {reqHeaders && <KeyValueList />}
      {json && (
        <div className="active-div">
          <Editor
            value={state.code}
            onValueChange={(code) => setState({ code })}
            highlight={(code) => highlight(code, languages.js)}
            padding={10}
            style={{
              fontFamily: '"Fira code", "Fira Mono", monospace',
              fontSize: 16,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default ReqInput;
