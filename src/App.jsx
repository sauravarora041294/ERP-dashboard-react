import React, { useState } from 'react';
import Board from './components/board/board';
import Navbar from './components/navbar/Navbar';
import './App.css';

const App = () => {

  const [onlineUsers,] = useState(['Sameer', 'David', 'George', 'ritu']);

  const handleSearch = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <Navbar />
      <div className="header">
        <div className="col">
          <input className="search" placeholder="Search" onChange={(e) => handleSearch(e.target.value)} />
          <i className="icon filterIcon"></i>
        </div>
        <div className="col switch-links">
          <a href="/#">CRM</a>
          <a href="/#" className="active">ERP</a>
          <a href="/#">CMS</a>
        </div>
        <div className="col">
          <div className="onlineUsers">
            {
              onlineUsers.map((profile, index) => {
                return (
                  <span key={index} className="onlineProfile">{profile[0].toUpperCase()}</span>
                )
              })
            }
          </div>
          <span className="icon settingsIcon"></span>
        </div>
      </div>
      <Board />
    </div>
  );
}

export default App;
