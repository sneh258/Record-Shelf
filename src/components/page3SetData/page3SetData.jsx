import React from "react";
import PageTwoBody from "../pageTwoBody/PageTwoBody";
// import "./page2Container.css";
import { useState, useEffect } from "react";
import makeRequest from "./../../utils/makeRequest/makeRequest";
import { GET_RECORD_DATA } from "./../../constants/apiEndPoints/apiEndPoints";

export default function Page3SetData({ data }) {
  const [recordData, setRecordData] = useState([]);
  const [error, setError] = useState();
  

  useEffect(() => {
    makeRequest(GET_RECORD_DATA)
      .then((response) => {
        if (response.data) {
            const genreData = response.data.filter((x) => x.genre.name === data);
            setRecordData(genreData);
        }
      })
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
