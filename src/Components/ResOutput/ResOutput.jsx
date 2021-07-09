import classNames from "classnames";
import React, { useState } from "react";
import "./ResOutput.css";
import prettyBytes from "pretty-bytes";

function ResOutput({ res, headers, body }) {
  const [showBody, setShowBody] = useState(true);
  const [showHeader, setShowHeader] = useState(false);

  const handleShowBody = () => {
    setShowBody(true);
    setShowHeader(false);
  };
  const handleShowHeader = () => {
    setShowBody(false);
    setShowHeader(true);
  };

  console.log(headers);

  return (
    <div className="res-output">
      <div className="header-res">
        <h3>Response</h3>
        <div className="res-status">
          <p>Status: {res && res.status}</p>
          <p>Time: {res && `${res.customData.time}ms`}</p>
          <p>
            Size:{" "}
            {res &&
              prettyBytes(
                JSON.stringify(res.data).length +
                  JSON.stringify(res.headers).length
              )}
          </p>
        </div>
        <div>
          <button
            className={classNames("btn-tab", {
              active: showBody,
              "no-active": !showBody,
            })}
            onClick={handleShowBody}
          >
            Body
          </button>
          <button
            className={classNames("btn-tab", {
              active: showHeader,
              "no-active": !showHeader,
            })}
            onClick={handleShowHeader}
          >
            Headers
          </button>
        </div>
      </div>
      <div>
        {showBody && (
          <div className="res-body-div scroll">
            <pre>{JSON.stringify(body, null, 2).replace(/["]/g, "")}</pre>
          </div>
        )}
        {showHeader && (
          <div className="res-header-div">
            {Object.entries(headers).map(([key, value]) => (
              <ul key={key} className="header-list">
                <li>{key}</li>
                <li>{value}</li>
              </ul>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ResOutput;
