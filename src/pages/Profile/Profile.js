import React from 'react';
import { BrowserRouter, Routes, Route, Link, Outlet } from 'react-router-dom';
import Sidebar from './layouts/Sidebar';
import './Profile.css';



const Profile = () => {

  return (
    <div className="profile screen">
      <div className="main">
        <Sidebar />

        <Outlet />
      </div>
    </div>
  );
};

export default Profile;
