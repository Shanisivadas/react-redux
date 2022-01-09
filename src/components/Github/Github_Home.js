import React from "react";
import Github_Search from "./Github_Search";
import Github_Details from "./Github_Details";
import Github_Profile from "./Github_Profile";

function Github_Home() {
  return (
    <div className="container mt-5">
      <div className="row mt-5">
        <div className="col">
          <Github_Search />
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <Github_Profile />
        </div>
        <div className="col-8">
          <Github_Details />
        </div>
      </div>
    </div>
  );
}
export default Github_Home;
