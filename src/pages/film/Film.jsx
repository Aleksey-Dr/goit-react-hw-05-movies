import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

const Film = () => {
    const { movieId } = useParams();
    
    useEffect(() => {
        // http-query
    }, []);

    return (
        <div>Film { movieId } description</div>
    );
};

export default Film;