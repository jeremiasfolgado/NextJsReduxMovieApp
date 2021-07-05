import { useRouter } from "next/router";
import Router from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container"
import { getMovieDetail,addMovieToFavorites } from "../../store/actions/getActions";

const MovieDetails = ()=>{
    const router = useRouter()
    const dispatch = useDispatch()
    const {id} = router.query
    const movie = useSelector(state => state.get.moviesDetail) 

    
    useEffect(()=>{
        if(id)dispatch(getMovieDetail(id))
    }, [dispatch, id])
    
    if(movie === undefined){
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }else if(movie === null){
        return (
            <Container>
                <h1>the title has not been found</h1>
            </Container>
        )
    }
    return (
        <Container>
            
                    <div className=" card  p-2 mx-auto col-md-10 d-flex flex-row justify-content-around align-items-around flex-wrap text-dark">
                           <div className="col-md-4 col-sm-10">
                                <img src={movie.Poster} className="img-fluid img-thumbnail " />
                                <div>
                                    <span className="badge rounded-pill bg-warning text-dark p-2 m-1">imdb Rating {movie.imdbRating}</span>
                                    {movie.Ratings && movie.Ratings.map(rating=> (<span className="badge rounded-pill bg-warning text-dark p-2 m-1">{`${rating.Source} ${rating.Value}`}</span>))}
                                </div>
                                <div className="btn btn-dark m-2 " onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</div>

                           </div>

                        
                        <div className="col-md-5 card p-2 col-sm-10">
                            <h5 className="card-title mt-4">{movie.Title}</h5>
                            <span className="card-text">{movie.Plot}</span>
                            
                            <h5 className="card-title mt-2">Genre</h5>
                            <span className="card-text">{movie.Genre}</span>
                            <h5 className="card-title mt-2">Actors</h5>
                            <span className="card-text">{movie.Actors}</span>
                            <h5 className="card-title mt-2">Director</h5>
                            <span className="card-text">{movie.Director}</span>
                            <h5 className="card-title mt-2">Writer/s</h5>
                            <span className="card-text">{movie.Writer}</span>
                            <h5 className="card-title mt-2">Rated</h5>
                            <span className="card-text">{movie.Rated}</span>
                            <h5 className="card-title mt-2">Awards</h5>
                            <span className="card-text">{movie.Awards}</span>
                            <h5 className="card-title mt-2">Runtime</h5>
                            <span className="card-text">{movie.Runtime}</span>
                            <h5 className="card-title mt-2">Country</h5>
                            <span className="card-text">{movie.Country}</span>

                        </div>

                    </div>
                 
               
        </Container>
    )
}


export default MovieDetails;