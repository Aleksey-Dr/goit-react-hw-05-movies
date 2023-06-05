import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesGalleryItem = ({ id, title }) => {
    const location = useLocation();

    return (
        <li><Link
            to={location.pathname === '/movies' ? `${id}` : `movies/${id}`}
            state={{ from: location }}>{title}</Link></li>
    );
};

MoviesGalleryItem.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
};

export default MoviesGalleryItem;