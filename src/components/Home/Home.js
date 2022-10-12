import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import "./Home.scss";

import { useDispatch, useSelector } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
  getSearchwords,
} from "../../features/movies/movieSlice";
const Home = () => {
  const dispatch = useDispatch();
  const searchWords = useSelector(getSearchwords);

  useEffect(() => {
    dispatch(fetchAsyncMovies(searchWords.movie));
    dispatch(fetchAsyncShows(searchWords.show));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      <MovieListing />
    </div>
  );
};

export default Home;
