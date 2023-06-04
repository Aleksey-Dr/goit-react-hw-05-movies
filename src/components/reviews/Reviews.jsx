import { useParams } from "react-router-dom";

const Reviews = () => {
    const { movieId } = useParams();

    return (
        <div>
            <h3>Reviews: { movieId }</h3>
        </div>
    );
};

export default Reviews;