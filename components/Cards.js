
import { useDispatch, useSelector } from "react-redux";
import CardMovie from "./CardMovie";
import { addMovieToFavorites, removeFavorites } from "../store/actions/getActions";
import styled from "styled-components";
import { FaHeart } from "react-icons/fa";







const CardsContainer = styled.div`
width: 100%;
max-width: 1300px;
display: flex;
flex-wrap:wrap;
margin-top: 2rem;
margin-bottom: 2rem;
@media screen and (max-width: 620px){
    width: 100%;
    flex-direction: column;
    align-items: center;
}

`
    
    





const CardStylus = styled.div`
width:300px;
height: 450px;
border:1px solid grey;
border-radius: 1rem;
margin:0.5rem;
display:flex;
flex-direction: column;
position: relative;
&:hover{
    cursor:pointer;
    box-shadow: 0 0 20px rgba(33,33,33, 0.5);
}
`


const AddFavoritesButton = styled.div`
    position: absolute;
    bottom:1rem;
    right: 1rem;
    border: 2px solid grey;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0.2rem;
    
    color:grey;
   
    &:hover{
        color: hotpink;
        border: 2px solid hotpink;

    }
`

const RemoveFavorites =  styled.div`
     position: absolute;
    bottom:1rem;
    right: 1rem;
    border: 2px solid hotpink;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0.2rem;
    background-color: hotpink;
    color:white;
    &:hover{
        color: grey;
        background-color: white;
        border: 2px solid grey;

    }
   
`





const Cards = ({currentMovies}) => {
    
    const favoritesMovies = useSelector(state => state.get.favouritesMovies)
   
    const dispatch = useDispatch()
    
    
    
 return (
    
          <CardsContainer >
                {currentMovies && currentMovies.map(movie => (
                <CardStylus key={movie.imdbID}>
                    
                    <CardMovie movie={movie}/>
                    
                   
                     {favoritesMovies?.find(m=> m.imdbID === movie.imdbID) ? 
                        <RemoveFavorites onClick={() => dispatch(removeFavorites(movie)) }>
                            <FaHeart></FaHeart>
                        </RemoveFavorites> 
                        : 
                        <AddFavoritesButton onClick={() => dispatch(addMovieToFavorites(movie)) }>
                            <FaHeart></FaHeart>
                        </AddFavoritesButton>
                        }
                     

                </CardStylus>
                ))}
               

         </CardsContainer>


    
 )
}

export default Cards;
                        


                   

        



