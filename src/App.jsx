import React, { Suspense, lazy } from 'react'
import { Route, Routes } from "react-router-dom";
import Loader from 'components/Loader/Loader';

const LayoutNav = lazy(() => import ('./layout/LayoutNav'));
const Home =lazy(() => import ('./pages/Home'));
const Movies =lazy(() => import ('./pages/Movies'));
const MovieDetails =lazy(() => import ('./pages/MovieDetails'));
const Cast =lazy(() => import ('./pages/Cast'));
const Reviews =lazy(() => import ('./pages/Reviews'));

const App = () => {
  return (
<Suspense fallback={<Loader/>}>

<Routes>
  <Route path="/" element={<LayoutNav/>} >
    <Route index element={<Home/>} />
    <Route path="movies" element={<Movies/>} />
    <Route path="movies/:movieId" element={<MovieDetails/>} >
      <Route path="cast" element={<Cast/>} />
      <Route path="reviews" element={<Reviews/>} />
    </Route>
    <Route path="*" element={<Home/>} />
  </Route>  
</Routes>

</Suspense>   
  );
};

export default App