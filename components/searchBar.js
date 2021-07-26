import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getMovies} from '../store/actions/getActions'
import styled from "styled-components";
import  { useRouter } from "next/router";

const FormStyled = styled.form`
width: 100%;
height: 100%;
display: flex;
align-items: center;

`


const SearchBar = () => {
    const [movie, setMovie] = useState("")
    const dispatch = useDispatch()
    const router = useRouter()
    
    
    function handleSubmit(e){
        e.preventDefault();
        dispatch(getMovies(movie));
        setMovie("")
        router.push("/")
    }
    return (
        <div>

            <FormStyled onSubmit={handleSubmit} >
                <input className="form-control me-2" type='text' autoComplete='off' value={movie} onChange={e=>setMovie(e.target.value)}   ></input>
                <button type='submit' className="btn btn-dark">Search</button>

            </FormStyled>
        </div>
    )
}
export default SearchBar;

