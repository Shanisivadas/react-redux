import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import userAction from "../../Actions/userAction";

function Details() {
  const [userDetails, setUserDetails] = useState([]);
  useEffect(() => {
    axios.get("https://randomuser.me/api/?results=5").then(
      (res) => {
        // console.log(res.data.results);
        userAction(res.data.results);
        setUserDetails(res.data.results);
      },
      (error) => {
        alert("Error While fetching the data");
      }
    );
  }, []);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>User Details</h2>
          <p>xdjjjjjjjjskldueeeeeeeeeeeeeeeioaspppppppppppppppppcnxhkjckxj</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          {userDetails.length > 0 ? (
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>NAME</th>
                  <th>GENDER</th>
                  <th>EMAIL</th>
                  <th></th>
                </tr>
              </thead>

              <tbody>
                {userDetails.map((ele, index) => {
                  return (
                    <tr key={index + 1}>
                      <td>{ele.login.uuid}</td>
                      <td>
                        {ele.name.first} {ele.name.last}
                      </td>
                      <td>{ele.gender}</td>
                      <td>{ele.email}</td>
                      <td>
                        <Link
                          to={`/profile/${ele.login.uuid}`}
                          className="btn btn-primary"
                        >
                          Details
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          ) : (
            <div className="text-danger">
              {" "}
              <h4>NO DATA</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Details;
