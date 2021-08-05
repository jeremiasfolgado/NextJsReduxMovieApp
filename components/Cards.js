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
border:1px solid grey;
border-radius: 1rem;

margin:0.5rem;
display:flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
&:hover{
    cursor:pointer;
    box-shadow: 0 0 20px rgba(33,33,33,.2);
}


`



const Cards = () => {
    const moviesResult = useSelector(state => state.get.searchResult)
    const favoritesMovies = useSelector(state => state.get.favouritesMovies)
    
    const dispatch = useDispatch()
   if(moviesResult === undefined) return(
    <div>
        <div>
            <h1>Find movies or series</h1>

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
                        


                   

        



