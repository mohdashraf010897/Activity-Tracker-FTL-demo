import React, { useEffect } from "react";

import "./../styles/home.scss";
import { useState } from "react";
import UserList from "./userList";

const Home = () => {
  return (
    <div className="home">
      <div className="user-list">
        <div className="user-list__header">Users on board</div>

        <div className="user-list__body">
          <UserList />
        </div>
      </div>
    </div>
  );
};

export default Home;
