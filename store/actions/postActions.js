import * as types from '../types';

export const postTodo = (arg) => {
    return (dispatch) => {
        dispatch({
            type: types.POST_TODO,
            payload: arg
        })
    }
}