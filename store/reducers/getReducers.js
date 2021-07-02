import * as types from '../types';

const initialState = {
   searchResult: [],
   favouritesMovies: undefined,
   moviesDetail: undefined
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
            return {
                ...state,
                favouritesMovies: [...state.favouritesMovies, action.payload]
            }
           
        default:
            return state;
    }
}