import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <div className="home-container">
        <div className="home-content-container">
          <div className="home-title-container">
            <h1 className="home-title">HOME</h1>
          </div>
          <div className="home-login-hyperlink-container">
              <a className="home-login-hyperlink" href="/login">Login here</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home;