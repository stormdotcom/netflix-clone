import React, { useEffect, useState } from "react";
import { API_KEY, imgUrl } from "../../Const/constant";
import axios from "../../axios";
import "./Banner.css";
function Banner(props) {
  const [movie, setMovie] = useState();
  var randomMovie = Math.floor(Math.random() * 20);
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
      .then(res => {
        setMovie(res.data.results[randomMovie]);
      });
  }, []);
  return (
    <div>
      <div
        style={{
          backgroundImage: `url(${movie ? imgUrl + movie.backdrop_path : ""})`
        }}
        className="banner"
        id={props.id}
      >
        <div className="content">
          <h1 className="title">
            {" "}{movie ? movie.title : ""}
          </h1>
          <div className="banner-btns">
            <button className="btn">Play</button>
            <button className="btn">My List</button>
          </div>
          <h1 className="description">
            {" "}{movie ? movie.overview : ""}
          </h1>
        </div>
        <div className="fade-bottom" />
      </div>
    </div>
  );
}

export default Banner;
