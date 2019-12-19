import React from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar";
const events = [
    {
        id: "123ABC456efg",
        start: new Date("2019-12-18T12:00:00").toISOString(),
        end: "",
        title: "Event 3"
    },
    {
        id: "hj12UY89mL54",
        start: new Date("2019-12-18T11:00:00").toISOString(),
        end: "",
        title: "Event 1"
    },
    {
        id: "abc543kji987",
        start: new Date("2019-12-18T11:30:00").toISOString(),
        end: "",
        title: "Event 2"
    },
    {
        id: "yuRl683Ndejd2",
        start: new Date("2019-12-18T12:30:00").toISOString(),
        end: "",
        title: "Event 4"
    },
];

const theme = {
    palette: {
        primary: {
            light: "#568293",
            main: "#285565",
            dark: "#002c3b",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ffa08c",
            main: "#f86e5e",
            dark: "#c03d34",
            contrastText: "#000"
        }
    }
}

ReactDOM.render(
    <Calendar theme={theme} events={events} onEventClick={(props) => { console.log(props) }} />,
    document.getElementById("root")
);
