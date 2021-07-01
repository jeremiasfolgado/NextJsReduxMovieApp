import * as types from '../types';

const initialState = {
   searchResult: [],
   favouritesMovies: [],
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
           
        default:
            return state;
    }
}