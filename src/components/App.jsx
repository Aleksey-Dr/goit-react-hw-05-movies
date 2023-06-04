import { Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Movies from '../pages/movies';
import Film from '../pages/film/Film';
import Layout from './layout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home/>} />
        <Route path="movies" element={<Movies/>} />
        <Route path="movies/:movieId" element={<Film />} />
      </Route>
    </Routes>
  );
};
