
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Movies = () => {
    useEffect(() => {
        // http-query
    }, []);

    return (
        <>
        <div>Collection movies</div>
        {
            ['movie-1', 'movie-2', 'movie-3', 'movie-4'].map(movie => {
            return <Link key={movie} to={ `${movie}` }>{movie}</Link>
        })}</>
    );
};

export default Movies;