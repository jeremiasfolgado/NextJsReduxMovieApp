import { useSelector, useDispatch } from "react-redux";
import Router from "next/router"
import CardMovie from "../components/CardMovie";
import Container from "../components/container";
import {removeFavorites} from '../store/actions/getActions'
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";

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
justify-content: space-between;
align-items: center;
position: relative;

&:hover{
    cursor:pointer;
    box-shadow: 0 0 20px rgba(33,33,33, 0.5);
}

`
const MessageContainer = styled.div`
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
padding: 1rem;
`
const RemoveFavorites =  styled.div`
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
        
        
        color:hotpink;
        border: 2px solid hotpink;
        transition: 0.2s all ease-in;

    }


`
const LinkMyProfile = styled.strong`

&:hover{
  color: #2E9AFE;
  text-decoration: underline #2E9AFE;
  cursor: pointer;
}
`

const Favorites = () => {
    const favoritesInMemory = useSelector(state => state.get.favouritesMovies)
    const dispatch = useDispatch()
    if(!favoritesInMemory || favoritesInMemory.length === 0) return(
        <Container>
            <MessageContainer >
                    <h1 style={{marginBottom:'1rem'}}>find your favorite movies and series</h1>
             
                
                <LinkMyProfile onClick={e => Router.push('/')}>Home</LinkMyProfile>
            </MessageContainer>

        </Container>
    )
    return(
        <Container>
            <CardsContainer >
                {favoritesInMemory && favoritesInMemory.map(movie => (
                    <CardStylus  key={movie.imdbID}>
                        <CardMovie movie={movie}/>
                        <RemoveFavorites onClick={() => dispatch(removeFavorites(movie)) }>
                            <FaTimes></FaTimes>
                        </RemoveFavorites>

                       
                    </CardStylus>
                    
                ))}

            </CardsContainer>
        </Container>
    )
}

export default Favorites;