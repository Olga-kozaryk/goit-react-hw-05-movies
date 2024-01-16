import LayoutNav from 'layout/LayoutNav';
import Cast from 'pages/Cast';
import Home from 'pages/Home';
import MovieDetails from 'pages/MovieDetails';
import Movies from 'pages/Movies';
import Reviews from 'pages/Reviews';
import React from 'react'
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
<Routes>
  <Route path="/" element={<LayoutNav/>} >
    <Route index element={<Home/>} />
    <Route path="movies" element={<Movies/>} />
    <Route path="" element={<MovieDetails/>} />
    <Route path="" element={<Cast/>} />
    <Route path="" element={<Reviews/>} />
    <Route path="*" element={<Home/>} />
  </Route>  
</Routes>
  );
};

export default App