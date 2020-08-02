import Timeline from "react-calendar-timeline";
import "react-calendar-timeline/lib/Timeline.css";
import moment from "moment";
import React from "react";

const Timeliner = ({ groups, items }) => {
  return (
    console.log(groups, items),
    (
      <Timeline
        groups={groups}
        items={items}
        defaultTimeStart={moment().add(-20, "day")}
        defaultTimeEnd={moment().add(20, "day")}
      />
    )
  );
};

export default Timeliner;
