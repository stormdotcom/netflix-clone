import axios from "axios";
import React, { useState, useEffect } from "react";
import "./Navbar.css";
function Navbar() {
  const [nav, setNav] = useState(false);
  const [searchBox, setSearchBox] = useState(false);
  const ChangeNavColor = () => {
    if (window.scrollY >= 90) {
      setNav(true);
    } else {
      setNav(false);
    }
  };
  const searchHide = {
    display: "block"
  };
  function handleSearchClick() {
    setSearchBox(true);
  }
  window.addEventListener("scroll", ChangeNavColor);

  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  useEffect(() => {});

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=d4847088205d5f78ea769551c35a02e1&language=en-US&query=" +
          searchTerm +
          "&page=1&include_adult=false"
      )
      .then(res => {
        console.log(res.data);
        setData(res.data.results);
      });
  }
  function handleOnChange(e) {
    setSearchTerm(e.target.value);
  }

  return (
    <div className={nav ? "navbar1 active" : "navbar1"}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
            <img
              className="logo"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
              alt="logo"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#movies">
                  Movies
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#series">
                  Series
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#news">
                  News
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  My List
                </a>
              </li>
            </ul>

            <i
              class="fas fa-search"
              style={searchHide}
              onClick={handleSearchClick}
            />
            <i className="fas fa-bell" />
            {searchBox ? (searchHide.display = "none") : "block"}
            {searchBox &&
              <div className="wrapper">
                <div className="search_box">
                  <form onSubmit={handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search"
                      value={searchTerm}
                      onChange={handleOnChange}
                    />
                  </form>
                  {/* <button
                    type="button"
                    className="list-group-item list-group-item-action"
                  > </button> */}
                </div>
              </div>}
            <button type="submit" id="login" class="btn-login mt-3 mb-3">
              Login{" "}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
