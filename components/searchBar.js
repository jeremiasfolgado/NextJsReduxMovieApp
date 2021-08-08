import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getMovies} from '../store/actions/getActions'
import styled from "styled-components";
import  { useRouter } from "next/router";
import { GrSearch } from "react-icons/gr";

const FormStyled = styled.form`

width: 40%;
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
        

            <FormStyled onSubmit={handleSubmit} >
                <input  value={movie} onChange={e=>setMovie(e.target.value)} placeholder='type title here.'  ></input>
                <button type='submit'>Search <GrSearch></GrSearch></button>

            </FormStyled>
        
    )
}
export default SearchBar;

