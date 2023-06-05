// import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

// import { ImSearch } from 'react-icons/im';

const Movies = () => {
    const location = useLocation();

    // useEffect(() => {
    //     // http-query
    // }, []);

    return (
        <>
            <h2>Collection movies</h2>
            {/* <input type="text" />
            <button onClick="">
                <ImSearch size="10" />
            </button> */}
        {
            ['movie-1', 'movie-2', 'movie-3', 'movie-4'].map(movie => {
            return <Link key={movie} to={ `${movie}` } state={{ from: location }}>{movie}</Link>
        })}</>
    );
};

export default Movies;