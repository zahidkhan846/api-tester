import axios from "axios";
import React, { useState } from "react";
import { useRequestContext } from "../../Context/RequestContext";
import { convertArrayIntoObject, updateEndTime } from "../../Utils/helper";
import ResOutput from "../ResOutput/ResOutput";
import SelectInput from "../UI/SelectInput";
import ReqInput from "./ReqInput/ReqInput";
import "./UrlInput.css";

function UrlInput() {
  const { inputValues } = useRequestContext();

  const [url, setUrl] = useState("");
  const [method, setMethod] = useState("GET");

  const [resHeaders, setResHeaders] = useState({});
  const [resBody, setResBody] = useState({});
  const [res, setRes] = useState(null);

  const [showResComp, setShowResComp] = useState(false);

  const handleSendRequest = async (e) => {
    e.preventDefault();
    const customObj = convertArrayIntoObject(inputValues);
    setShowResComp(true);
    try {
      axios.interceptors.request.use((request) => {
        request.customData = request.customData || {};
        request.customData.startTime = new Date().getTime();
        return request;
      });

      axios.interceptors.response.use(updateEndTime, (error) => {
        return Promise.reject(updateEndTime(error.response));
      });

      const res = await axios({
        url: url,
        method: method,
        params: customObj,
        headers: customObj,
      });

      setRes(res);
      setResBody(res.data);
      setResHeaders(res.headers);
    } catch (error) {
      setRes(error);
    }
  };

  return (
    <section className="url-input-section">
      <form onSubmit={handleSendRequest}>
        <div className="select-div">
          <SelectInput onSelect={(e) => setMethod(e.target.value)} />
        </div>
        <div className="input-div">
          <input
            required
            type="text"
            placeholder="https://www.example.com"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>
        <div className="btn-div">
          <button className="send" type="submit">
            Send
          </button>
        </div>
      </form>
      <ReqInput />
      {showResComp && (
        <ResOutput res={res} body={resBody} headers={resHeaders} />
      )}
    </section>
  );
}

export default UrlInput;
