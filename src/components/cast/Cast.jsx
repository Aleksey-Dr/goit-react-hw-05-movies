import { useParams } from "react-router-dom";

const Cast = () => {
    const { movieId } = useParams();

    return (
        <div>
            <h3>Cast: { movieId }</h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};

export default Cast;