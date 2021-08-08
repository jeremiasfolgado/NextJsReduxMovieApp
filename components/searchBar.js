import { useState } from "react";
import {useDispatch} from 'react-redux';
import {getMovies} from '../store/actions/getActions'
import styled from "styled-components";
import  { useRouter } from "next/router";
import { GrSearch } from "react-icons/gr";

const FormStyled = styled.form`
    height: 100%;
    display: flex;
    align-items: center;
    padding-left: 1rem;
`
const StyledInput = styled.input`
    text-decoration: none;
    border: 1px solid grey;
    font-size: 1rem;
    padding:0.2rem;
    color:hotpink;
`
const StyledButton = styled.button`
    text-decoration: none;
    color: grey;
    border: 1px solid grey;
    font-size: 1rem;
    padding: 0.2rem;

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
                <StyledInput  value={movie} onChange={e=>setMovie(e.target.value)} placeholder='type title here.'  ></StyledInput>
                <StyledButton type='submit'> <GrSearch></GrSearch></StyledButton>

            </FormStyled>
        
    )
}
export default SearchBar;

