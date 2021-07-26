import Container from '../components/container.js';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const AboutContainer = styled.div`
width: 100%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
`
const ButtonContainer = styled.div`
display: flex;
margin-top: 2rem;
flex-wrap: wrap;
`


const List = () => {
    const router = useRouter()

    const handleGithub = ()=> {
        router.push("https://www.github.com/jeremiasfolgado")
    
    }
    const handleLinkedIn = ()=> {
        router.push("https://www.linkedin.com/in/jeremias-folgado-fullstack-developer/")
    
    }
    return (
        <Container>
            
            <AboutContainer >
                
                <h1 >Hola Bienvenidos a mi aplicación de Movies</h1>
                <span></span>

                <span className=" mt-3">If you want to know more about me ...</span>
                <ButtonContainer>
                    <button onClick={handleLinkedIn} >LinkedIn</button>
                    <button onClick={handleGithub}>GitHub</button>

                </ButtonContainer>
                
                   
            </AboutContainer>


    </Container>
    )
}

export default List;