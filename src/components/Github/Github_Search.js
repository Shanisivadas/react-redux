import React, { useState } from "react";
import axios from "axios";
import githubAction from "../../Actions/githubAction";

function Github_Search() {
  const [user, setUser] = useState("");
  const getUserData = () => {
    axios.get(`https://api.github.com/users/${user}`).then(
      (res) => {
        console.log(res.data);
        githubAction(res.data);
      },
      (error) => {
        alert("Error while fetching the data");
      }
    );
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header bg-primary text-white">
              <h2>Github Search</h2>
            </div>
            <div className="card-body ">
              <input
                type="text"
                className="formcontrol me-5 w-50 p-3"
                placeholder="Enter Github account name"
                onChange={(event) => {
                  setUser(event.target.value);
                }}
              ></input>
              <button className="btn btn-primary" onClick={getUserData}>
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Github_Search;
