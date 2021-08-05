import * as types from '../types';

const initialState = {
   searchResult: undefined,
   favouritesMovies: undefined,
   moviesDetail: undefined,
   alertModal:undefined,
}

export function getReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_MOVIES:
            return {
                ...state,
                searchResult: action.payload
            }
        
        case types.GET_MOVIE_DETAIL:
            return {
                ...state,
                moviesDetail: action.payload
            }
        case types.SET_NULL_MOVIE_DETAIL:
            return {
                ...state,
                moviesDetail: null
            }
        case types.ADD_MOVIE_FAVORITES:
            
            if(Array.isArray(state.favouritesMovies))  {
                if(!!state.favouritesMovies.find(movie=> movie.Title === action.payload.Title)){
                    return state;
                }   
                }
           
            return {
                ...state,
                favouritesMovies: state.favouritesMovies !== undefined ? [...state.favouritesMovies, action.payload] : [action.payload]
            }
        case types.REMOVE_FAVORITES:
            return {
                ...state,
                favouritesMovies: state.favouritesMovies.filter(movie=> movie.imdbID !== action.payload.imdbID )
            }   
        case types.SET_ALERT_MODAL:
            return {
                ...state,
                alertModal: action.payload
            } 
        case types.REMOVE_MESSAGE_ALERT_MODAL:
            return {
                ...state,
                alertModal: undefined
            }        
           
        default:
            return state;
    }
}