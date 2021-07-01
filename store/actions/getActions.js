import * as types from '../types';
import axios from 'axios';

export const getMoviesDetail =  (arg) => {
    
    return  (dispatch) => {
        return  axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${arg}`)
                .then(response => {
                    console.log(response.data.Search)
                    dispatch({
                        type: types.GET_MOVIES,
                        payload: response.data.Search
                    })
                })
    }
}


export const getMovieDetail = () => {
    return  (dispatch) => {
        return  axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${arg}`)
                .then(response => {
                    console.log(response.data.Search)
                    dispatch({
                        type: types.GET_MOVIE_DETAIL,
                        payload: response.data.Search
                    })
                })
    }
    
}

