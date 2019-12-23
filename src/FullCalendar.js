import React, { useEffect } from 'react';

import momentPlugin from "@fullcalendar/moment";
import FullCalendarReact from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { makeStyles } from "@material-ui/styles";


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


const useStyles = makeStyles((theme) => {
  // Styles for active/inactive button background
  return {
    calendarButtonActive: {
      color: `${theme.palette.primary.contrastText} !important`,
      background: `${theme.palette.primary.dark} !important`,
      borderColor: `${theme.palette.primary.main} !important`,
      boxShadow: `0 1px 0 0.05rem ${theme.palette.primary.light} !important`,
      fontWeight: 600,
    },
    calendarButtonInactive: {
    },
  }
});

const FullCalendar = props => {
  const { onClickEvent, events } = props;
  const classes = useStyles();

  // Override the active button background color when page is loaded
  useEffect(() => {
    const activeButton = document.getElementsByClassName('fc-button-active');
    activeButton[0].classList.add(classes.calendarButtonActive);
  }, [classes.calendarButtonActive])

  // Override the active button background color when button is clicked
  useEffect(() => {
    const onClick = e => {
      fcButtonPrimary.forEach(b => {
        if (b.classList.contains('fc-button-active')) {
          b.classList.add(classes.calendarButtonActive);
          b.classList.remove(classes.calendarButtonInactive)
        } else {
          b.classList.add(classes.calendarButtonInactive)
          b.classList.remove(classes.calendarButtonActive);
        }
      });
    }

    const fcButtonPrimary = document.querySelectorAll(".fc-button-primary");
    fcButtonPrimary.forEach(b => {
      b.addEventListener('click', onClick)
    });

    return () => {
      fcButtonPrimary.forEach(b => {
        b.removeEventListener('click', onClick)
      });
    }
  }, [classes.calendarButtonActive, classes.calendarButtonInactive])

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
    scrollTime='09:00:00'
    timeZone={timeZoneString}
    titleFormat={timeFormatString}
  />
}

export default FullCalendar;