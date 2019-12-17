import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";

const events = [
  {
    id: "123456",
    start: new Date().toISOString(),
    end: "",
    title: "Event"
  }
];

const EventSummaryView = props => {
  const { timeline } = props;
  return <div>Event Summary View ${timeline}</div>;
};

ReactDOM.render(
  <Calendar events={events}>
    <EventSummaryView timeline="adsfasd"></EventSummaryView>
  </Calendar>,
  document.getElementById("root")
);
