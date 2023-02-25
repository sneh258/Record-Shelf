import React from 'react';
import PageThree from '../page3/PageThree';
import iconGrid from "./../../assets/icon-grid.svg";
import './page3Container.css';
import { useState, useEffect } from "react";
import makeRequest from '../../utils/makeRequest/makeRequest';
import { getGenre } from '../../utils/dataGenre/dataGenre';
import { GET_RECORD_DATA } from '../../constants/apiEndPoints/apiEndPoints';
import bollywood from './../../assets/genre-bollywood.png';
import country from './../../assets/genre-country.png';
import pop from './../../assets/genre-pop.png';
import rock from "./../../assets/genre-rock.png";
import { useNavigate } from "react-router-dom";

export default function Page3Container() {
  const navigate = useNavigate();

  const imageObject = {
    "Bollywood": bollywood,
    "Country": country,
    "Pop": pop,
    "Rock":rock  
  }

  const [error, setError] = useState();
  const [genre, setGenre] = useState([]);

  useEffect(() => {
    makeRequest(GET_RECORD_DATA)
      .then((data) => {
        const uniqueGenre = getGenre(data.data);
        setGenre(uniqueGenre);
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
    return (
      <>
        <div className='background'>
          <div>
            <div className="genre_header">
              <h1>genres</h1>
              <div className="icon">
                <img onClick={() => navigate("/allsongs")} src={iconGrid} alt="" />
              </div>
            </div>

            {genre.map((data) => {
              return <PageThree genreImage={imageObject[data]} data={data}/>
          })}
          </div>
        </div>
      </>
    );
}
