import * as types from '../types';
import axios from 'axios';





export const getMovies =  (arg) => {
    
    return  (dispatch) => {
        return  axios.get(`http://www.omdbapi.com/?apikey=${process.env.NEXT_PUBLIC_API_KEY}&s=${arg}`)
                .then(response => {
                   
                    if(response.data.Error){
                        console.log("hola",response.data.Error)
                        return dispatch({
                            type:types.SET_ALERT_MODAL,
                            payload: response.data.Error
                        })
                    }
                    dispatch({
                        type: types.GET_MOVIES,
                        payload: response.data.Search
                    })
                })
                .catch(error =>  alert("the title has not been found"))
    }
}


export const addMovieToFavorites = (payload) => {
    
    return {type: types.ADD_MOVIE_FAVORITES, payload: payload}
}

export const removeFavorites = (payload) => {
    return {type: types.REMOVE_FAVORITES, payload: payload}
}

export const removeAlertMessage = () => {
    return {
        type: types.REMOVE_MESSAGE_ALERT_MODAL
    }
}
