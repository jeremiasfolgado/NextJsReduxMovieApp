import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getMovies} from '../store/actions/getActions'
import styled from "styled-components";
import  { useRouter } from "next/router";

const FormStyled = styled.form`

width: 40%;
height: 100%;
display: flex;
align-items: center;
@media (max-width:500px){
    width: 100%;
    margin: auto;
}

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
        

            <FormStyled onSubmit={handleSubmit} >
                <input  value={movie} onChange={e=>setMovie(e.target.value)}   ></input>
                <button type='submit'>Search</button>

            </FormStyled>
        
    )
}
export default SearchBar;

