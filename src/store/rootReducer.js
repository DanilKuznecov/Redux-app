import { combineReducers } from "redux";
import { postReducer } from "./posts/postReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    user:  userReducer,
    post: postReducer
})