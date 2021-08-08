import { useRouter } from "next/router";
import Router from "next/router"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Container from "../../components/container"
import { getMovieDetail,addMovieToFavorites } from "../../store/actions/getActions";
import styled from "styled-components";
import axios from "axios";

const DetailContainer = styled.div`
width: 80%;
border: 1px solid #ffff;
border-radius: 1rem;
box-shadow: 0 0 20px rgba(33,33,33,.2);
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

const MovieDetails = ({movie})=>{
   const dispatch = useDispatch()
  
   
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


export async function getServerSideProps(context){
    const {params} = context;
    const {id} = params
    
    const callDetail = await axios.get(`https://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&i=${id}`)
    
    
    return {props: {movie: callDetail.data }
}
}