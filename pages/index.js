import Container from '../components/container.js';
import { useState } from 'react';
import Cards from '../components/Cards.js';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Pagination from '../components/Pagination.js';

const HomeContainer = styled.div`
width: 100%;
min-height: 100%;
display:flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 1rem;


`


const Home = () => {
   
    const moviesResult = useSelector(state => state.get.searchResult)
    const [currentPage, setCurrentPage ] = useState(1)
    const [moviesPerPage] = useState(8) 
    const indexOfLastMovie = currentPage * moviesPerPage
    const indexOfFirstMovie =  indexOfLastMovie - moviesPerPage
    const paginate = pageNumber => setCurrentPage(pageNumber)
    const currentMovies = !!moviesResult && moviesResult.slice(indexOfFirstMovie, indexOfLastMovie)




    if(moviesResult === undefined) return(
        <Container>
            <HomeContainer>
                <h1 style={{marginBottom:'1rem'}}>Find Movies or Tv Shows</h1>
                <span>Find all the information about any Movie or Tv Show, just enter the name in the search bar.</span>
    
            </HomeContainer>
        </Container>
                
                   
    )
    

    return (
        <Container >
           
                <Cards currentMovies={currentMovies && currentMovies}/>
                <Pagination 
                    moviesPerPage={moviesPerPage}
                    totalMovies={moviesResult.length}
                    paginate={paginate}
                    currentPage={currentPage}
                />

        </Container>
    )

}

export default Home;
                
                



            
