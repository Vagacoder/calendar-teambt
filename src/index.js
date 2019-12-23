import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";
import ThemeController from './ThemeController';

const events = [
  {
    id: "123ABC456efg",
    start: new Date("2019-12-25T12:00:00").toISOString(),
    end: "",
    title: "Event 3"
  },
  {
    id: "hj12UY89mL54",
    start: new Date("2019-12-25T11:00:00").toISOString(),
    end: "",
    title: "Event 1"
  },
  {
    id: "abc543kji987",
    start: new Date("2019-12-25T11:30:00").toISOString(),
    end: "",
    title: "Event 2"
  },
  {
    id: "yuRl683Ndejd2",
    start: new Date("2019-12-25T12:30:00").toISOString(),
    end: "",
    title: "Event 4"
  },
];


ReactDOM.render(
  (
    <ThemeController>
      <Calendar events={events} onEventClick={(props) => { console.log(props) }} />
    </ThemeController>
  ),
  document.getElementById("root")
);
