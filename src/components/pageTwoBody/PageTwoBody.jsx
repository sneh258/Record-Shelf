import React from "react";
import { useState, useEffect } from "react";
import "./pageTwoBody.css";
import heartRed from "../../assets/heart-red.svg";
import heartGray from "../../assets/heart-gray.svg";
import makeRequest from "../../utils/makeRequest/makeRequest";
import {
  UPDATE_RECORD_DATA,
  GET_BY_RECORD_DATA,
} from "../../constants/apiEndPoints/apiEndPoints";

export default function PageTwoBody({ post }) {
  const [like, setLike] = useState(false);
  const [error, setError] = useState();
  const [count, setCount] = useState(0);

  useEffect(() => {
    makeRequest(GET_BY_RECORD_DATA(post.id)).then((response) => {
      setLike(response.data.like);
      setCount(response.data.count);
    });
  }, []);

  const handleLike = async () => {
    console.log(post.id);
    try {
      await makeRequest(UPDATE_RECORD_DATA(post.id), {
        data: { like: !like },
      });
      setLike(!like);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleCount = () => {
    try {
      if (!like) setCount(count + 1);
      else {
        setCount(count - 1);
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container_card">
      <div className="card">
        <div className="image">
          <img src={post.imageUrl} alt="" />
        </div>
        <div className="content_card">
          <div className="title">
            <p id="one">{post.name}</p>
            <p id="two">{post.artist.name}</p>
          </div>
        </div>
        <div className="heart">
          <img
            onClick={() => {
              handleLike();
              handleCount();
            }}
            src={like ? heartRed : heartGray}
            alt="red heart"
          />
          <p className="count">{count}</p>
        </div>
      </div>
    </div>
  );

  
}
