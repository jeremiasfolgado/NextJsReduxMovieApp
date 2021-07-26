import Router from "next/router";
import Image from 'next/image'
import styled from "styled-components";


const CardLayout = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
&:hover{
    cursor:pointer;
}



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
        <CardLayout onClick={e => Router.push('/movies/[id]', `/movies/${movie.imdbID}`)}>
                
                <ImageContainer src={movie.Poster} alt="Picture Poster" ></ImageContainer> 
            
                

                <InfoContainer className="card-body">
                    <h5 className="card-title">{movie.Title} </h5>
                    
                    <span className="card-text">{`${movie.Type} - year ${movie.Year}`}</span>
                </InfoContainer>
                
            
        </CardLayout>
    )
}
                
export default CardMovie;

                
                
               
         
