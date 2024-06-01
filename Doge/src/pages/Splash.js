// Splash.js
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './logo.png'
import "./Splash.css";

const Splash = () => {


  return (
    <div className="container">
      <div className="content">
        
        <h1 className="splashh1">Doge</h1>
        <img src="./logo.png" alt=""/>
          <>
            <Link to="./SignUp">
              <button className="CustomerButton">Sign up</button>
            </Link>
            <Link to="./SignIn">
              <button className="EmployeeButton">Sign in</button>
            </Link>
          </>
        
      </div>
    </div>
  );
};

export default Splash;
