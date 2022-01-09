import myStore from "../redux/Store"
const userAction=(data)=>{

    myStore.dispatch({
        type:"USER",
        payload:data
    })

}
export default userAction;