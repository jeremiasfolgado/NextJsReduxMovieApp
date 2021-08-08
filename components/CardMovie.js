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
max-height: 300px;
max-width: 80%;
`
const ImageTopCOntainer = styled.div`
width: 100%;
height: 300px;
border-bottom: 1px solid grey;
display:flex;
justify-content: center;
`


const InfoContainer = styled.div`
width: 80%;
display: flex;
flex-direction: column;
padding-top: 1rem;
`



const CardMovie = ({movie}) => {
  
   return (
       <Link href={'/movies/[id]'} as={`/movies/${movie.imdbID}` } passHref>
            <CardLayout >
                    <ImageTopCOntainer>
                        <ImageContainer src={movie.Poster} alt="Picture Poster" ></ImageContainer> 

                    </ImageTopCOntainer>
                    <InfoContainer className="card-body">
                        <h5>{movie.Title} </h5>
                        <span >{`${movie.Type} - year ${movie.Year}`}</span>
                    </InfoContainer>
            </CardLayout>
       </Link>
    )
}
                        
export default CardMovie;
                
                    
                    

                    
                
                

                
                
               
         
