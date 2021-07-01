import * as types from '../types';
import axios from 'axios';

export const getMoviesDetail =  (arg) => {
     axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${arg}`)
        .then(response => {
            console.log(response)
        })
    return  (dispatch) => {
         dispatch({
            type: types.GET_MOVIES,
            payload: "hello"
        })
    }
}