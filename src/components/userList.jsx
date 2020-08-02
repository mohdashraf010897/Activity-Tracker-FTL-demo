import React, { useState, useEffect } from "react";
import { getData } from "./../data/data";
import Modal from "./modal";

const UserListHeader = () => {
  return (
    <div className="list-header">
      <span>User Id</span>
      <span>Name</span>
      <span>Time Zone</span>
    </div>
  );
};

const UserListItem = ({ id, name, tz, activityPeriods }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      {showModal && (
        <Modal
          setShowModal={setShowModal}
          id={id}
          name={name}
          activityPeriods={activityPeriods}
        />
      )}
      <div className="list-item">
        <span className="id">{id}</span>
        <span className="name" onClick={() => setShowModal(true)}>
          {name}
        </span>
        <span className="timezone">{tz}</span>
      </div>
    </>
  );
};

const UserList = () => {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const data = getData();
    setUserData(data.members);
  }, []);

  return (
    <>
      <UserListHeader />
      {userData.map((item) => (
        <UserListItem
          key={item.id}
          id={item.id}
          name={item.real_name}
          tz={item.tz}
          activityPeriods={item.activity_periods}
        />
      ))}
    </>
  );
};

export default UserList;
