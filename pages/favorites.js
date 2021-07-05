import { useSelector, useDispatch } from "react-redux";
import Router from "next/router"
import CardMovie from "../components/CardMovie";
import Container from "../components/container";
import {removeFavorites} from '../store/actions/getActions'


const Favorites = () => {
    const favoritesInMemory = useSelector(state => state.get.favouritesMovies)
    const dispatch = useDispatch()
    if(!favoritesInMemory || favoritesInMemory.length === 0) return(
        <Container>
            <div className="vw-90 vh-100 d-flex flex-column justify-content-center align-items-center">
                <div 
                className=" text-center col-md-5 p-3 border border-warning border-2  rounded-3"
                >
                    <h1 className="text-warning font-monospace" >find your favorite movies and series</h1>
                    <span></span>

                </div>

                <button className="btn btn-warning mt-4 col-md-2" onClick={e => Router.push('/')}>Home</button>
            </div>

        </Container>
    )
    return(
        <Container>
            <ul className=" d-flex flex-row flex-wrap justify-content-around ">
                {favoritesInMemory && favoritesInMemory.map(movie => (
                    <div className="card p-2 m-3 col-md-3 mx-auto" key={movie.imdbID}>
                        <CardMovie movie={movie}/>
                        <button className="btn btn-dark m-2 " onClick={() => dispatch(removeFavorites(movie)) }>Remove from favorites</button>
                    </div>
                    
                ))}

            </ul>
        </Container>
    )
}

export default Favorites;