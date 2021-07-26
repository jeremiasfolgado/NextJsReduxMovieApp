import { useDispatch, useSelector } from "react-redux";
import CardMovie from "./CardMovie";
import { addMovieToFavorites, getMovies, removeFavorites } from "../store/actions/getActions";
import styled from "styled-components";


const CardsContainer = styled.div`
width: 90%;
max-width: 1200px;

display: flex;
justify-content: space-between;
flex-wrap:wrap;
margin: auto;
margin-top: 2rem;
margin-bottom: 2rem;
@media (max-width: 500px){
    width: 100%;
    justify-content: center;
    
    

}

`
const CardStylus = styled.div`
width:300px;
height: 550px;
border: 1px solid #ffff;
border-radius: 1rem;
box-shadow: 0 0 20px rgba(33,33,33,.2);
margin:0.5rem;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
&:hover{
    cursor:pointer;
}


`



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
    
          <CardsContainer >
                {moviesResult && moviesResult.map(movie => (
                <CardStylus key={movie.imdbID}>
                    
                    <CardMovie movie={movie}/>
                    
                     <button  onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</button> 
                </CardStylus>
                ))}
         </CardsContainer>


    
 )
}

export default Cards;
                        


                   

        



