import { useRouter } from "next/router";
import styled from "styled-components";

const FooterContainer = styled.div`
width: 100%;
height: 4rem;
padding: 1rem;
border-top: 1px solid grey;
display: flex;

justify-content: center;
align-items: center;
@media screen and (max-width:500px){
  height: auto;
}
`
const LinkMyProfile = styled.strong`

&:hover{
  color: #2E9AFE;
  text-decoration: underline #2E9AFE;
  cursor: pointer;
}
`

const Footer = () => {
  const router = useRouter()
  const handleLinkedIn = ()=> {
    router.push("https://www.linkedin.com/in/jeremias-folgado-fullstack-developer/")

}
    return(
        <FooterContainer className="page-footer font-small unique-color-dark pt-4">
        
            <p>Developed with <strong>NextJS-Redux-Styled-Components</strong> by <LinkMyProfile onClick={handleLinkedIn}>Jeremías Folgado</LinkMyProfile>
              </p>
              
            
            
        
      </FooterContainer>
     

    )
}

export default Footer;