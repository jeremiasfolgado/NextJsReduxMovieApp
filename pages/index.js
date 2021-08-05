import Container from '../components/container.js';

import Cards from '../components/Cards.js';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const HomeContainer = styled.div`
width: 100%;
min-height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;


`


const Home = () => {
    const searchResults = useSelector(state => state.get.searchResult)
    if(searchResults === undefined) return(
        <Container>
            <HomeContainer>
                <h1>Find movies or series</h1>
                <span>Find all the information about any movie or series, just enter the name in the search bar.

</span>
    
            </HomeContainer>
        </Container>
                
                   
    )
    

    return (
        <Container >
           
                <Cards/>
           
        </Container>
    )

}

export default Home;
                
                



            
