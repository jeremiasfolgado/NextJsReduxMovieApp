import Container from '../components/container.js';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postTodo } from '../store/actions/postActions.js';
import SearchBar from '../components/searchBar.js';

const Home = () => {
    const dispatch = useDispatch();

    const [state, setState] = useState({
        string: '',
        number: ''
    })

    const handleChange = (event) => {
        setState({
            ...state,
            [event.target.name]: event.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(postTodo(state));
    }

    return (
        <Container>

            <h1>Home</h1>

            <div>
                Probando hacer un pull request!
            </div>
            {/* <SearchBar/> */}

            <div>
                <form
                    onSubmit={(e) => {handleSubmit(e)}}
                >
                    <input 
                        type='text'
                        name='string'
                        onChange={(e) => {handleChange(e)}}
                        value={state.string}
                    />
                    <input 
                        type='number'
                        name='number'
                        onChange={(e) => {handleChange(e)}}
                        value={state.number}  
                    />
                    <button type='submit'>submit</button>
                </form>
            </div>

        </Container>
    )
}

export default Home;