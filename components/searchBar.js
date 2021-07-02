import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getMovies} from '../store/actions/getActions'



const SearchBar = () => {
    const [movie, setMovie] = useState("")
    const dispatch = useDispatch()
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getMovies(movie));
        setMovie("")
    }
    return (
        <div>

            <form onSubmit={e=>{handleSubmit(e)}}>
                <input className="form-control me-2" type='text' autoComplete='off' value={movie} onChange={e=>setMovie(e.target.value)}   ></input>
                <button type='submit' className="btn btn-outline-success">Search</button>

            </form>
        </div>
    )
}
export default SearchBar;

//value={movie} onChange={e=>setMovie(e.target.value)}