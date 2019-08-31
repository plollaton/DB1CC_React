import { createAction, handleActions } from 'redux-actions';

//actions
const POSTS_ADD_ACTION = 'POSTS/ADD';
const POSTS_CLEAR_ACTION = 'POSTS/CLEAR';
const POSTS_REMOVE_ACTION = 'POSTS/REMOVE';

export const addPostAction = createAction(POSTS_ADD_ACTION, (description) => (
    {
        description
    }
));
export const clearPostsAction = createAction(POSTS_CLEAR_ACTION);
export const removePostAction = createAction(POSTS_REMOVE_ACTION);
// export const addPostAction = (description) => {
//     return {
//         type: POSTS_ADD_ACTION,
//         payload: {
//             description
//         }
//     }
// }

//reducers
const postsHandler = handleActions({
    [POSTS_ADD_ACTION]: (state, action) => {
        return [
            ...state,
            action.payload,
        ];
    },
    [POSTS_CLEAR_ACTION]: (state, action) => {
        return [];
    },
    [POSTS_REMOVE_ACTION]: (state, action) => {
        const newState = [...state];
        newState.splice(action.payload, 1)
        return newState;
        //return state.filter((post, index) => index !== action.payload); mesma coisa q o bloco anterior.
    },
}, []);
// const postsHandler = (state = [], action) => {
//     switch (action.type) {
//         case POSTS_ADD_ACTION:
//             //faça algo
//             return [
//                 ...state,
//                 action.payload,
//             ];
//         default:
//             return state;
//     }
// }

export const reducers = {
    posts: postsHandler,
};
