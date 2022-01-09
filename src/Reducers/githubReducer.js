import data from "../initialState";

const githubReducer=(state=data,action)=>{

    switch(action.type){
        case"GITHUB_USER":
        state={
            ...state,
            githubUser:action.payload};
        break;
        case "USER":state={
            ...state,
            userDetails:action.payload

        }
    }
    return state;
}
export default githubReducer;