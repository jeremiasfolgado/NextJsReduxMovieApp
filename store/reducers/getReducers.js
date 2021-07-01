import * as types from '../types';

const initialState = {
   movies: [],
   favouritesMovies: [],
   moviesDetail: undefined
}

export function getReducer(state = initialState, action) {
    switch (action.type) {
        case types.GET_MOVIES:
            return {
                ...state,
                moviesDetail: action.payload
            }
        default:
            return state;
    }
}