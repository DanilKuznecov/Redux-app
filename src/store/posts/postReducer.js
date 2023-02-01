import { GET_POSTS } from "./postActions";



export const postReducer = (state = [], action) => {
    switch (action.type) {
        case GET_POSTS:
            return action.payload
            break;
        default:
            return state
            break;
    }
}