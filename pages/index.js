import Container from '../components/container.js';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards.js';



const Home = () => {
    const dispatch = useDispatch();
    const moviesResult = useSelector(state => state.get.searchResult)
    

    return (
        <Container >

            <div className="mx-auto"  >
                
                <Cards/>
                

            </div>


            

        </Container>
    )
}

export default Home;