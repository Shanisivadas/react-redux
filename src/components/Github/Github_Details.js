import React from "react";
import { useSelector } from "react-redux";

function Github_Details() {
  const storeData = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              {" "}
              User Details
            </div>
            <div className="card-body">
              <ul className="list-group">
                <li className="list-group-item">
                  {storeData.githubReducer.githubUser.login}
                </li>
                <li className="list-group-item">
                  Address:{storeData.githubReducer.githubUser.login}
                </li>
                <li className="list-group-item">
                  Email:{storeData.githubReducer.githubUser.email}
                </li>
                <li className="list-group-item">
                  Company Name:{storeData.githubReducer.githubUser.company}
                </li>
                <li className="list-group-item">
                  location:{storeData.githubReducer.githubUser.location}
                </li>
                <li className="list-group-item">
                  twitter_username:
                  {storeData.githubReducer.githubUser.twitter_username}
                </li>
                <li className="list-group-item">
                  blog:{storeData.githubReducer.githubUser.blog}
                </li>
                <li className="list-group-item">
                  repos_url:{storeData.githubReducer.githubUser.repos_url}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Github_Details;
