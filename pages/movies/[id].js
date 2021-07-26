import { useRouter } from "next/router";
import Router from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container"
import { getMovieDetail,addMovieToFavorites } from "../../store/actions/getActions";
import styled from "styled-components";

const DetailContainer = styled.div`
width: 80%;

display: flex;
margin:auto;
` 
const ImageAndRating = styled.div`
display: flex;
flex-direction: column;
justify-content: space-around;
align-items: center;
min-height: 100%;
min-width: 40%;

`
const ImageStyle =  styled.img`
width:100%;
margin-bottom: 2rem;

`

const InfoContainer = styled.div`
width: 90%;

display: flex;
flex-direction: column;
justify-content: space-around;
padding: 1rem;


`
const CardsInfoContainer = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;

`
const CardInfo = styled.div`

display: flex;
flex-direction: column;
margin-right: 1.2rem;

`

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
            
                    <DetailContainer key={movie.imdbID}>
                          
                        
                        <InfoContainer >
                            <h2 >{movie.Title}</h2>
                            <span >{movie.Plot}</span>
                            <CardsInfoContainer>
                                <CardInfo>
                                    <h5 >Genre</h5>
                                    <span >{movie.Genre}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Actors</h5>
                                    <span >{movie.Actors}</span>
                                </CardInfo>

                                <CardInfo>
                                    <h5 >Director</h5>
                                    <span >{movie.Director}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Writer/s</h5>
                                    <span >{movie.Writer}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Rated</h5>
                                    <span>{movie.Rated}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Awards</h5>
                                    <span >{movie.Awards}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Runtime</h5>
                                    <span >{movie.Runtime}</span>
                                </CardInfo>
                                <CardInfo>
                                    <h5 >Country</h5>
                                    <span >{movie.Country}</span>
                                </CardInfo>

                             
                                
                                
                                
                                
                               
                                
                              

                            </CardsInfoContainer>
                           
                            

                        </InfoContainer>
                        <ImageAndRating >
                                <ImageStyle src={movie.Poster}  />
                                <div>
                                    <strong >imdb Rating {movie.imdbRating} </strong>
                                    {movie.Ratings && movie.Ratings.map(rating=> (<strong className="badge rounded-pill bg-warning text-dark p-2 m-1" key={rating.Value}>{`- ${rating.Source} ${rating.Value} `}</strong>))}
                                </div>
                                <button className="btn btn-dark m-2 " onClick={() => dispatch(addMovieToFavorites(movie)) }>Add to favorites</button>

                           </ImageAndRating>


                    </DetailContainer>
                 
               
        </Container>
    )
}


export default MovieDetails;