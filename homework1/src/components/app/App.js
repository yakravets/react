import React from 'react';
import './App.css';
import '../navbar'
import 'bootstrap/dist/css/bootstrap.css';

import Navbar from '../navbar';
import Profile from '../main/profile/index';

const App = () => {
  return (
    <>
      <div className="container">
        <div>
          <Navbar />
          <div className="">
            <Profile />
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
