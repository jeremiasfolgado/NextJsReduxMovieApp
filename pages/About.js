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
width:300px;
display: flex;
margin-top: 2rem;
justify-content: space-around;
`
const LinkMyProfile = styled.strong`
margin-bottom: 1rem;
&:hover{
  color: #2E9AFE;
  text-decoration: underline #2E9AFE;
  cursor: pointer;
}
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
                
                <h1 style={{marginBottom:'1rem'}}>Hi there! Welcome to my App</h1>
                <span>This project was developed using Next JS, Redux and Styled-Components. It was a fast building App made in order to learn how these technologies worked all together, as they were the ones used for my programming bootcamp's graduation project. If you want to know more about me or my works, please don't hesitate contacting me through the linked below social networks.</span>
                <ButtonContainer>
                    <LinkMyProfile onClick={handleLinkedIn} >LinkedIn</LinkMyProfile>
                    <LinkMyProfile onClick={handleGithub}>GitHub</LinkMyProfile>

                </ButtonContainer>
                

                
                   
            </AboutContainer>


    </Container>
    )
}

export default List;
