import { useDispatch, useSelector } from "react-redux";
import CardMovie from "./CardMovie";
import { addMovieToFavorites, getMovies, removeFavorites } from "../store/actions/getActions";
import { useEffect } from "react";


const Cards = () => {
    const moviesResult = useSelector(state => state.get.searchResult)
    const favoritesMovies = useSelector(state => state.get.favouritesMovies)
    //if(moviesResult === undefined) return (<div><h1>Loading...</h1></div>)
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(getMovies("batman"))
    },[dispatch])
    return (
        <ul className=" d-flex flex-row flex-wrap justify-content-center align-items-center min-vw-90 ">
            {moviesResult && moviesResult.map(movie => (
            <div className="card p-2 m-1 col-md-3" >
                
                <CardMovie movie={movie}/>
                
                <button className="btn btn-dark m-2 " onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</button>
            </div>
            ))}
        </ul>
    )
}

export default Cards;



