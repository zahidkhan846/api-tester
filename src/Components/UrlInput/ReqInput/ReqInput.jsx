import React from "react";
import { useState } from "react";
import "./ReqInput.css";
import classnames from "classnames";
import KeyValueList from "../../UI/KeyValueList";

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
      {json && <div className="active-div">JSON</div>}
    </div>
  );
}

export default ReqInput;
