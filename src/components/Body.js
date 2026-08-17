import React from 'react'
import SideBar from './SideBar'
import MainContainer from './MainContainer'
import Watch from "./Watch"
import { Outlet } from 'react-router-dom';

const Body = () => {
  return (
    <div className="flex pt-20">
      <SideBar />
      <main className="flex-1 overflow-y-auto">
        <Outlet/>
      </main>
    </div>
  );
};

export default Body
