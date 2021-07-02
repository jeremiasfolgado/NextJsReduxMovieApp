import Container from '../components/container.js';
import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards.js';



const Home = () => {
    const dispatch = useDispatch();
    const moviesResult = useSelector(state => state.get.searchResult)
    

    return (
        <Container>

            <h1>Home</h1>

            <div>
                Probando hacer un pull request!
            </div>
            <Cards/>


            

        </Container>
    )
}

export default Home;