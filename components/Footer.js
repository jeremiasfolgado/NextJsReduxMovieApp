import styled from "styled-components";

const FooterContainer = styled.div`
width: 100%;
min-height: 4rem;
border-top: 1px solid black;
display: flex;
justify-content: center;
align-items: center;

`

const Footer = () => {
    return(
        <FooterContainer className="page-footer font-small unique-color-dark pt-4">
        
            <strong>
              Developed with NextJS-Redux by Jeremias Folgado
            
            </strong>
        
      </FooterContainer>
     

    )
}

export default Footer;