import React from "react";
import Timeliner from "./Timeliner";
import "./../styles/modal.scss";

const Modal = ({ id, name, activityPeriods, setShowModal }) => {
  const groups = [{ id: 1, title: `${name}` }];

  const items = activityPeriods.map((item, idx) => {
    return {
      id: idx,
      title: `Active Slot ${idx + 1}`,
      group: 1,
      start_time: new Date(item.start_time).getTime(),
      end_time: new Date(item.end_time).getTime(),
      tip: "additional information",
      color: "rgb(158, 14, 206)",
      selectedBgColor: "rgba(225, 166, 244, 1)",
      bgColor: "rgba(225, 166, 244, 0.6)",
    };
  });

  return (
    <div className="backdrop">
      <div className="modal">
        <div className="close-btn" onClick={() => setShowModal(false)}>
          Close Modal
        </div>
        <Timeliner groups={groups} items={items} />
      </div>
    </div>
  );
};

export default Modal;
