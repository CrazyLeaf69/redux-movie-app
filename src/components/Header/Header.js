import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, withRouter } from "react-router-dom";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getSelectedMovieOrShow,
} from "../../features/movies/movieSlice";
import user from "../../images/user.png";
import "./Header.scss";
import SearchBar from "./SearchBar";

const Header = (props) => {
  const dispatch = useDispatch();
  const path = props.location.pathname;

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchWords = e.target.input.value;
    dispatch(fetchAsyncMovies(searchWords));
    dispatch(fetchAsyncShows(searchWords));
    e.target.input.value = "";
  };

  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="right-header">
        {path === "/" && <SearchBar handleSubmit={handleSubmit} />}
        <div className="user-image">
          <img src={user} alt="user" />
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
