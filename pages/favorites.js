import { useSelector, useDispatch } from "react-redux";
import Router from "next/router"
import CardMovie from "../components/CardMovie";
import Container from "../components/container";
import {removeFavorites} from '../store/actions/getActions'
import styled from "styled-components";

const CardsContainer = styled.div`
width: 100%;
max-width: 1200px;

display: flex;
justify-content: space-between;
flex-wrap:wrap;
margin: auto;
margin-top: 2rem;

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
const MessageContainer = styled.div`
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const Favorites = () => {
    const favoritesInMemory = useSelector(state => state.get.favouritesMovies)
    const dispatch = useDispatch()
    if(!favoritesInMemory || favoritesInMemory.length === 0) return(
        <Container>
            <MessageContainer >
                    <h1>find your favorite movies and series</h1>
             

                <button onClick={e => Router.push('/')}>Home</button>
            </MessageContainer>

        </Container>
    )
    return(
        <Container>
            <CardsContainer >
                {favoritesInMemory && favoritesInMemory.map(movie => (
                    <CardStylus  key={movie.imdbID}>
                        <CardMovie movie={movie}/>
                        <button  onClick={() => dispatch(removeFavorites(movie)) }>Remove from favorites</button>
                    </CardStylus>
                    
                ))}

            </CardsContainer>
        </Container>
    )
}

export default Favorites;