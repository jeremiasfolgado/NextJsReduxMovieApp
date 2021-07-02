import Router from "next/router";
import { useDispatch } from "react-redux";
import { addMovieToFavorites } from "../store/actions/getActions";

const CardMovie = ({movie}) => {
   const dispatch = useDispatch()
    return (
        <div>
            <li 
            className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
            key={movie.imdbID}
            
            >
                <div>
                    <h5 onClick={e => Router.push('/movies/[id]', `/movies/${movie.imdbID}`)}>{movie.Title} </h5>
                    <span>{movie.Year}</span>
                    <span>{movie.Type}</span>
                </div>
                <img src={movie.Poster} alt="Picture Poster"></img>
            </li>

            {/* <button onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</button> */}
        </div>
    )
}

export default CardMovie;