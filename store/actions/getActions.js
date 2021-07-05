import * as types from '../types';
import axios from 'axios';

export const getMovies =  (arg) => {
    
    return  (dispatch) => {
        return  axios.get(`http://www.omdbapi.com/?apikey=20dac387&s=${arg}`)
                .then(response => {
                    console.log("en la call",response.data)
                    dispatch({
                        type: types.GET_MOVIES,
                        payload: response.data.Search
                    })
                })
                .catch(error =>  alert("the title has not been found"))
    }
}
//tt0078748

export const getMovieDetail = (arg) => {
    return  (dispatch) => {
        return  axios.get(`http://www.omdbapi.com/?apikey=20dac387&i=${arg}`)
                .then(response => {
                    //console.log("en la call",response.data)
                    if (response.data.Response === "False"){
                        dispatch({
                            type: types.SET_NULL_MOVIE_DETAIL
                        })
                        return
                    } 
                    dispatch({
                        type: types.GET_MOVIE_DETAIL,
                        payload: response.data
                    })
                })
                
    }
    
}

export const addMovieToFavorites = (payload) => {
    
    return {type: types.ADD_MOVIE_FAVORITES, payload: payload}
}

export const removeFavorites = (payload) => {
    return {type: types.REMOVE_FAVORITES, payload: payload}
}
