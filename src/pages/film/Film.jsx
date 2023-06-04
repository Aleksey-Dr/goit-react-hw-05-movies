import { Suspense } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useEffect, useRef } from 'react';
import { BsArrowLeft } from 'react-icons/bs';

const Film = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
    
    useEffect(() => {
        // http-query
    }, []);

    return (
        <div>
            <section>
                <Link to={backLinkLocationRef.current}><p><BsArrowLeft /> Go back</p></Link>
                <h2>Film: {movieId}</h2>
                <p>description</p>
            </section>
            <section>
                <h2>Additional information</h2>
                <ul>
                    <li>
                        <Link to="cast">Cast</Link>
                    </li>
                    <li>
                        <Link to="reviews">Reviews</Link>
                    </li>
                </ul>
                <Suspense>
                    <Outlet />
                </Suspense>
            </section>
        </div>
    );
};

export default Film;