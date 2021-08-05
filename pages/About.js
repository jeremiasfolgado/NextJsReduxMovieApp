import Container from '../components/container.js';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
import styled from 'styled-components';

const AboutContainer = styled.div`
width: 80%;
min-height: 100%;
display: flex;
flex-direction: column;
align-items: center;
margin: auto;
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
                
                <h1 >Hi there! welcome to my app</h1>
                <span>

This project was developed with Next JS, Redux and Styled-components, it was a very quick project to learn how these technologies worked all together. Because they were the ones used for our graduation project. If you want to know more about me or my code </span>
                <ButtonContainer>
                    <button onClick={handleLinkedIn} >LinkedIn</button>
                    <button onClick={handleGithub}>GitHub</button>

                </ButtonContainer>
                

                
                   
            </AboutContainer>


    </Container>
    )
}

export default List;