
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container"
import { addMovieToFavorites, removeFavorites } from "../../store/actions/getActions";
import styled from "styled-components";
import axios from "axios";
import { FaHeart } from "react-icons/fa";

const DetailContainer = styled.div`
width: 100%;
max-width: 1300px;
` 
const HeaderContainer = styled.div`
    width: 100%;
    min-height: 80px;
    color:grey;
    border-bottom: 1px solid grey;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
`
const HeaderInfo = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    padding-right: 1rem;
    @media screen and (max-width:500px){
        font-size: 0.7rem;
        padding-right: 0.7rem;
    }
`
const HeaderItem = styled.p`
    height: 100%;
    padding: 0.5rem 1.5rem ;
    display: flex;
    justify-content: center;
    align-items: center;
`
const AddFavoritesButton = styled.div`
    
    border: 2px solid #E6E6E6;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0.2rem;
    
    color:#E6E6E6;
   
    &:hover{
        color: hotpink;
        border: 2px solid hotpink;

    }

`
const RemoveFavoritesButton = styled.div`
    border: 2px solid hotpink;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:0.2rem;
    color:hotpink;
    &:hover{
        color: grey;
        border: 2px solid grey;
    }
`
const MainInfoContainer = styled.div`
    padding-top: 1rem;
    width: 100%;
    display:flex;
    @media screen and (max-width:600px){
        flex-direction: column;
        align-items: center;
        padding-top: 0.2rem;
    }


` 
const ImageContainer = styled.div`
    width:450px;
    height: 600px;
    background-image: url(${(props) => props.imgBkg});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    @media screen and (max-width:500px){
        width:100%;
    }
    
`
const InfoContainer = styled.div`
    max-width: 850px; 
    display: flex;
    flex-direction: column;
    
    padding: 1rem;
    
`   

const RowContainer = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 1rem;
    padding-bottom:0.5rem;
    border-bottom: 1px solid #E6E6E6;


`
const GenreContainer = styled.div`
    width:100%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 1rem;
`
const GenreItem = styled.div`
    border:2px solid grey;
    color: grey;
    border-radius: 25px;
    padding: 0.5rem;
    margin-right: 0.5rem;
`


    
   
    










const MovieDetails = ({movie})=>{
   const dispatch = useDispatch()
   const favoritesMovies = useSelector(state => state.get.favouritesMovies)
   const genres = movie.Genre && movie.Genre.split(', ') 
    console.log(movie)
    return (
        <Container>
            
            <DetailContainer key={movie.imdbID}>
                <HeaderContainer>
                    <h2 style={{paddingLeft:'1rem', fontSize:'2rem'}}>{movie.Title}</h2>
                    <HeaderInfo>
                        <HeaderItem><strong >imdb Rating </strong> &nbsp;{movie.imdbRating} </HeaderItem>
                        <HeaderItem><strong >imdb Votes </strong> &nbsp;{movie.imdbVotes} </HeaderItem>
                        <HeaderItem>
                            <strong >Add to Favorites  </strong> &nbsp;
                            {favoritesMovies?.find(m=> m.imdbID === movie.imdbID) ? 
                                <RemoveFavoritesButton onClick={() => dispatch(removeFavorites(movie)) }>
                                    <FaHeart></FaHeart>
                                </RemoveFavoritesButton> 
                                : 
                                <AddFavoritesButton onClick={() => dispatch(addMovieToFavorites(movie)) }>
                                    <FaHeart></FaHeart>
                                </AddFavoritesButton>
                            }
                        </HeaderItem>
                    </HeaderInfo>
                </HeaderContainer>
                <MainInfoContainer>
                    <ImageContainer imgBkg={movie.Poster}></ImageContainer>
                    <InfoContainer>
                        <GenreContainer>
                            {genres && genres.map(g=> <GenreItem key={g}>{g}</GenreItem>)}
                        </GenreContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Plot  </strong>
                            <span >{movie.Plot}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Actors  </strong>
                            <span >{movie.Actors}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Director  </strong>
                            <span >{movie.Director}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Awards  </strong>
                            <span >{movie.Awards}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Year  </strong>
                            <span >{movie.Year}</span>
                        </RowContainer>
                        <RowContainer>
                            <strong style={{paddingBottom:'0.5rem'}}>Type  </strong>
                            <span >{movie.Type}</span>
                        </RowContainer>


                    </InfoContainer>

                </MainInfoContainer>
                            
                            




                    
              


            </DetailContainer> 
                 
               
        </Container>
    )
}


export default MovieDetails;


export async function getServerSideProps(context){
    const {params} = context;
    const {id} = params
    
    const callDetail = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`)
    
    
    return {props: {movie: callDetail.data }
}
}
