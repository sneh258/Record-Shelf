import React from "react";
import PageTwoBody from "../pageTwoBody/PageTwoBody";
import "./page2Container.css";
import { useState, useEffect } from "react";
import makeRequest from "./../../utils/makeRequest/makeRequest";
import { GET_RECORD_DATA } from "./../../constants/apiEndPoints/apiEndPoints";

export default function Page2Container() {
  
  const [recordData, setRecordData] = useState([]);
  const [error, setError] = useState();
  
  useEffect(() => {
    makeRequest(GET_RECORD_DATA)
      .then((data) => setRecordData(data.data))
      .catch((e) => {
        setError(e.message);
      });
  }, []);
    
  if (error) {
    return (
      <div className="recordDataError">
        <p>{error}</p>
      </div>
    );
  }

  return recordData ? (
    <div className="container">
        {recordData.map((post) => (
          <PageTwoBody key={post.id} post={post} />
        ))}
     
    </div>
  ) : (
    <div className="dataLoader">
      <p>Loading...</p>
    </div>
  );
}
