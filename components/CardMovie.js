import Router from "next/router";
import { useDispatch } from "react-redux";
import { addMovieToFavorites } from "../store/actions/getActions";

const CardMovie = ({movie}) => {
   const dispatch = useDispatch()
   //console.log("aca en cards", movie) 
   return (
        <div >
            <li 
            className="card list-group-item-action " 
            key={movie.imdbID}
            onClick={e => Router.push('/movies/[id]', `/movies/${movie.imdbID}`)}
            
            >
                <img src={movie.Poster} alt="Picture Poster" className="card-img-top"></img>
                

                <div className="card-body">
                    <h5 className="card-title">{movie.Title} </h5>
                    
                    <span className="card-text">{`${movie.Type} - year ${movie.Year}`}</span>
                </div>
                
                
            </li>
               
            {/* <div onClick={() => dispatch(addMovieToFavorites(movie)) } key={movie.imdbID}>Add to favorites</div> */}
        </div>
    )
}

export default CardMovie;