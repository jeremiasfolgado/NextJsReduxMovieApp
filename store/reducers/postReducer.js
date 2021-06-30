import * as types from '../types';

const initialState = {
    ToDos: []
}

export function postReducer(state = initialState, action) {
    switch (action.type) {
        case types.POST_TODO:
            return {
                ...state,
                ToDos: [...state.ToDos, action.payload]
            }
        default:
            return state;
    }
}