import { ADD_USER } from "./userActions";



export const userReducer = (state = [], action) => {
    switch (action.type) {
        case ADD_USER:
            return [...state, action.payload]
            break;
        default:
            return state
            break
    }
}