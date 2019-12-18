import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";
const events = [
    {
        id: "123ABC456efg",
        start: new Date().toISOString(),
        end: "",
        title: "Event"
    },
    {
        id: "abc543kji987",
        start: new Date().toISOString(),
        end: "",
        title: "Event"
    }
];

ReactDOM.render(
    <Calendar events={events} onEventClick={(props) => { console.log(props) }} />,
    document.getElementById("root")
);
