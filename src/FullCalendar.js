import React from 'react';

import momentPlugin from "@fullcalendar/moment";
import FullCalendarReact from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import "./css/calendar.css";
import "./css/dayGrid.css";
import "./css/list.css";
import "./css/timeGrid.css";
import "./css/override.css";

const timeZoneString = "local";
const timeFormatString = "MMMM DD YYYY";

const eventTimeFormat = {
    hour: "numeric",
    minute: "2-digit",
    meridiem: "short"
};

const headers = {
    left: "dayGridMonth,timeGridWeek,timeGridDay",
    center: "title",
    right: "prevYear,prev,today,next,nextYear"
};

const plugins = [dayGridPlugin, timeGridPlugin, momentPlugin];

const views = {
    listWeek: { buttonText: "Week list" },
    listMonth: { buttonText: "Month list" }
};

const FullCalendar = props => {
    const { onClickEvent, events } = props;

    return <FullCalendarReact
        aspectRatio={3}
        allDayText="Whole Day"
        defaultView="dayGridMonth"
        eventClick={onClickEvent}
        eventLimit={true}
        eventLimitClick="popover"
        eventLimitText="more events"
        events={events}
        eventTimeFormat={eventTimeFormat}
        dayPopoverFormat={{
            weekday: "long",
            month: "long",
            day: "numeric"
        }}
        fixedWeekCount={false}
        header={headers}
        plugins={plugins}
        timeZone={timeZoneString}
        titleFormat={timeFormatString}
        views={views}
    />
}

export default FullCalendar;