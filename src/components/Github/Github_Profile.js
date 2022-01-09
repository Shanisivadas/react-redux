import React from "react";
import { useSelector } from "react-redux";

function Github_Profile() {
  const storeData = useSelector((storeData) => {
    return storeData;
  });
console.log(storeData.githubReducer.githubUser)
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              <img
                className="img-fluid"
                src={storeData.githubReducer.githubUser.avatar_url}
                alt=""
              />
            </div>
            <div className="card-body">
              <h2>  {storeData.githubReducer.githubUser.login}</h2>
              <p>
              {storeData.githubReducer.githubUser.bio}
              </p>
              <button className="btn btn-primary px-4" onClick={()=>{window.open(storeData.githubReducer.githubUser.html_url, '_blank')}
            }>Profile</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Github_Profile;
