import React from "react"
import Header from "../../components/header/Header";
import Page2Container from "../../components/page2Container/Page2Container";
import iconGenre from "./../../assets/icon-genre.svg";
import './page2.css';
import { useNavigate } from "react-router-dom";

export default function Page2() {
  const navigate = useNavigate();

  return (
    <div className="page2Header">
      <Header />
      <div className="header_page2">
        <h1>all songs</h1>
        <img onClick={ ()=>navigate('/allsongs/genre')} src={iconGenre} alt="icon genre" />
      </div>
      <Page2Container />
    </div>
  );
}
