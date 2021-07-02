import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container"
import { getMovieDetail } from "../../store/actions/getActions";

const MovieDetails = ()=>{
    const router = useRouter()
    const dispatch = useDispatch()
    const {id} = router.query
    const movie = useSelector(state => state.get.moviesDetail) 

    //console.log("soy movie", movie)
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
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <div className="card">
                        <div className="card-header text-center">
                           <img src={movie.Poster}/>
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">{movie.Title}</h5>

                        </div>

                    </div>
                </div>
            </div>
        </Container>
    )
}


export default MovieDetails;