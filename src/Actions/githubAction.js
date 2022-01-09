import myStore from "../redux/Store"

const githubAction =(githubUserDetails)=>
{

myStore.dispatch({
type:"GITHUB_USER",
payload:githubUserDetails,

});
}
export default githubAction;
