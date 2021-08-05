import Router from "next/router";
import Image from 'next/image'
import styled from "styled-components";
import Link from "next/link";


const CardLayout = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;



` 
const ImageContainer = styled.img`
max-height: 350px;
width: 80%;



`
const InfoContainer = styled.div`
width: 90%;
display: flex;
flex-direction: column;

margin-left: 0.2rem;
`

const CardMovie = ({movie}) => {
  
   return (
       <Link href={'/movies/[id]'} as={`/movies/${movie.imdbID}` } passHref>
            <CardLayout >
                    <ImageContainer src={movie.Poster} alt="Picture Poster" ></ImageContainer> 
                    <InfoContainer className="card-body">
                        <h5>{movie.Title} </h5>
                        <span >{`${movie.Type} - year ${movie.Year}`}</span>
                    </InfoContainer>
            </CardLayout>
       </Link>
    )
}
                        
export default CardMovie;
                
                    
                    

                    
                
                

                
                
               
         
