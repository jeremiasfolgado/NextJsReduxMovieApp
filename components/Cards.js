import { useDispatch, useSelector } from "react-redux";
import CardMovie from "./CardMovie";
import { addMovieToFavorites, getMovies, removeFavorites } from "../store/actions/getActions";




const Cards = () => {
    const moviesResult = useSelector(state => state.get.searchResult)
    const favoritesMovies = useSelector(state => state.get.favouritesMovies)
    
    const dispatch = useDispatch()
   if(moviesResult === undefined) return(
    <div className="vw-90 vh-100 d-flex flex-column justify-content-center align-items-center">
        <div className=" text-center col-md-5 p-3 border border-warning border-3  rounded-3" >
            <h1 className="text-warning font-monospace" >This is a series and movies search engine</h1>

        </div>
    </div>
            
               
)
 return (
     <ul className=" d-flex flex-row flex-wrap justify-content-center align-items-center min-vw-90 ">
         {moviesResult && moviesResult.map(movie => (
         <div className="card p-2 m-1 col-md-3 " key={movie.imdbID}>
             
             <CardMovie movie={movie}/>
             
             <button className="btn btn-dark m-2 " onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</button>
         </div>
         ))}
     </ul>
 )
}

export default Cards;
                        


                   

        



