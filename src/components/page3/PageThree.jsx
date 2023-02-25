import React from "react";
import Page3SetData from "../page3SetData/page3SetData";
import "./pageThree.css";

export default function PageThree({ genreImage,data }) {
  console.log(genreImage);

  return (
    <>
      <div className="main_container">
        <div className="image_content">
          <img src={genreImage} alt="" />
        </div>
        <div className="genre">
          <p>{data}</p>
        </div>
      </div>
      <div className="content">
        <Page3SetData data={data} />
      </div>
    </>
  );
}
