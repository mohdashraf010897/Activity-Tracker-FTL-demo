import { getDefaultNormalizer } from "@testing-library/react";

const sampleData = {
  ok: true,
  members: [
    {
      id: "W012A3CDE",
      real_name: "Egon Spengler",
      tz: "America/Los_Angeles",
      activity_periods: [
        {
          start_time: "Jul 21 2020  1:33 PM",
          end_time: "Jul 23 2020 1:54 PM",
        },
        {
          start_time: "Aug 1 2020  11:11 AM",
          end_time: "Aug 3 2020 2:00 PM",
        },
        {
          start_time: "Aug 14 2020  5:33 PM",
          end_time: "Aug 14 2020 8:02 PM",
        },
      ],
    },
    {
      id: "W07QCRPA4",
      real_name: "Glinda Southgood",
      tz: "Asia/Kolkata",
      activity_periods: [
        {
          start_time: "Aug 1 2020  1:33 AM",
          end_time: "Aug 1 2020 1:54 PM",
        },
        {
          start_time: "Jul 1 2020  11:11 AM",
          end_time: "Jul 1 2020 2:00 PM",
        },
        {
          start_time: "Aug 16 2020  5:33 PM",
          end_time: "Sep 16 2020 8:02 PM",
        },
      ],
    },
    {
      id: "W07QhfjPA4",
      real_name: "John Doe",
      tz: "Asia/Kolkata",
      activity_periods: [
        {
          start_time: "Aug 1 2020  11:33 AM",
          end_time: "Aug 3 2020 10:54 PM",
        },
        {
          start_time: "Jul 1 2020  9:11 AM",
          end_time: "Jul 10 2020 2:30 PM",
        },
        {
          start_time: "Aug 16 2020  5:33 PM",
          end_time: "Aug 18 2020 8:02 PM",
        },
      ],
    },
    {
      id: "W0325QhfjPA4",
      real_name: "Harry Potter",
      tz: "Asia/Kolkata",
      activity_periods: [
        {
          start_time: "Aug 1 2020  8:33 AM",
          end_time: "Aug 3 2020 10:54 PM",
        },
        {
          start_time: "Jul 2 2020  9:11 AM",
          end_time: "Jul 10 2020 2:30 PM",
        },
        {
          start_time: "Aug 6 2020  5:33 PM",
          end_time: "Aug 18 2020 8:02 PM",
        },
      ],
    },
  ],
};

export const getData = () => {
  return sampleData;
};
