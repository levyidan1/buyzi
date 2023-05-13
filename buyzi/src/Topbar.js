import React, { useState } from 'react';
import logo from './assets/logo.png';
import './Topbar.css';

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="logo">
        <img src={logo} alt="Logo" />

      </div>
    </div>
  );
}

export default Topbar;
