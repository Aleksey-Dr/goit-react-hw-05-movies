import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Container from './container';
import Layout from './layout';

const Home = lazy(() => import('../pages/home/'));
const Movies = lazy(() => import('../pages/movies'));
const Film = lazy(() => import('../pages/film'));
const Cast = lazy(() => import('./cast'));
const Reviews = lazy(() => import('./reviews'));

export const App = () => {
  return (
    <Container>
      <Routes styles={{ padding:"24px"}}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="movies" element={<Movies/>} />
          <Route path="movies/:movieId" element={<Film />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </Container>
  );
};
