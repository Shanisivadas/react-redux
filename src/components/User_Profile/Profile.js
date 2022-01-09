import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Profile() {
  const [user, setUser] = useState([]);
  const storeData = useSelector((store) => {
    return store;
  });
  useEffect(() => {
    const filteredUser = storeData.githubReducer.userDetails.filter((ele) => {
      return ele.login.uuid == id.id;
    });
    setUser(filteredUser);
  });
  const id = useParams();
  console.log(id);
  return (
    <div className="container mt-5 p-5">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="row">
              <div className="col-4">
                <img
                  src={user.length > 0 ? user[0].picture.large : ""}
                  alt=""
                  className="img-fluid"
                />
              </div>
              <div className="col-8">
                <h2>First Name:{user.length > 0 ? user[0].name.first : ""}</h2>
                <h4>LastName:{user.length > 0 ? user[0].name.last : ""}</h4>
                <h4>Email:{user.length > 0 ? user[0].email : ""}</h4>
                <h4>City:{user.length > 0 ? user[0].location.city : ""}</h4>
                <Link to="/Details" className="btn btn-primary">
                  Back to Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
