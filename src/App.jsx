import React from "react";
import { Routes,Route } from "react-router-dom";
import { lazy,Suspense} from "react";
// import{HomePage} from './Pages/HomePage';
// import{MoviesPage} from './Pages/MoviesPage';
// import{MovieDetailsPage} from './Pages/MovieDetailsPage';
// import{ActorsPage} from './Pages/ActorsPage';
// import {DescriptionPage} from './Pages/DescriptionPage'
import{Navigation} from './components/Navigation/Navigation'

const loader = componentName =>{
  return lazy(() =>
  import (`./Pages/${componentName}`).then(module =>({
    default:module[componentName]
  }))
  )
}
  const HomePage = loader('HomePage')
  const MoviesPage = loader ('MoviesPage')
  const MovieDetailsPage = loader ('MovieDetailsPage')
const ActorsPage = loader ('ActorsPage')
const DescriptionPage = loader ('DescriptionPage')


export const App = () => {
    return (
      <>
      <Navigation/>
      <Suspense fallback=''>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage/>} />
          <Route path="movies/:itemId" element={<MovieDetailsPage/>} >
          <Route path="cast" element={<ActorsPage/>} />
          <Route path="reviews" element={<DescriptionPage/>} />
        </Route>
        </Routes>
    </Suspense>
      </>
    );
  };
         