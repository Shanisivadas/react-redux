import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Nav from "./components/Navbar/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Github_Home from "./components/Github/Github_Home";
import Details from "./components/User_Profile/Details";
import Profile from "./components/User_Profile/Profile";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
          <Routes>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/github" element={<Github_Home />}></Route>
          <Route path="/Details" element={<Details />}></Route>
          <Route path="/profile/:id" element={<Profile />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
