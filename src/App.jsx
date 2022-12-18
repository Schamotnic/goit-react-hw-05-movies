import React from "react";
import { Routes,Route } from "react-router-dom";
import{HomePage} from './Pages/HomePage';
import{MoviesPage} from './Pages/MoviesPage';
import{MovieDetailsPage} from './Pages/MovieDetailsPage';
import{ActorsPage} from './Pages/ActorsPage';
import {DescriptionPage} from './Pages/DescriptionPage'
import{Navigation} from './components/Navigation/Navigation'




export const App = () => {
    return (
      <>
      <Navigation/>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage/>} />
          <Route path="movies/:itemId" element={<MovieDetailsPage/>} >
          <Route path="cast" element={<ActorsPage/>} />
          <Route path="reviews" element={<DescriptionPage/>} />
        </Route>
        </Routes>
      </div>
      </>
    );
  };
         