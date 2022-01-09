import {createStore,combineReducers, applyMiddleware} from "redux"
import githubReducer from "../Reducers/githubReducer";
import logger from "redux-logger";


const combinedReducers= combineReducers({
    githubReducer
})
const myStore=createStore(combinedReducers,applyMiddleware(logger));


export default myStore;