import React from "react";
import ReactDOM from "react-dom";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import { EventCustomRender } from "./EventCustomRender";

import momentPlugin from "@fullcalendar/moment";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";

import "./css/calendar.css";
import "./css/dayGrid.css";
import "./css/list.css";
import "./css/timeGrid.css";
import EventSummary from "./EventSummary";

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

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    marginBottom: "15px"
  },
  calendarContainer: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column"
  }
}));

const Calendar = props => {
  const classes = useStyles({});
  const { events } = props;

  const [showEventSummary, setShowEventSummary] = React.useState(false);

  const onClickEvent = () => {};

  const onMouseEnter = arg => {
    if (!showEventSummary) {
      setShowEventSummary(true);
    }

    arg.el.style.cursor = "pointer";
  };

  return (
    <React.Fragment>
      <ExpansionPanel className={classes.container} defaultExpanded={true}>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="header" variant="h6">
            CALENDAR
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.calendarContainer}>
          <FullCalendar
            aspectRatio={2}
            allDayText="Whole Day"
            defaultView="dayGridMonth"
            eventClick={onClickEvent}
            eventLimit={true}
            eventLimitClick="popover"
            eventLimitText="more events"
            eventMouseEnter={onMouseEnter}
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
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <EventSummary
        open={showEventSummary}
        onClose={() => setShowEventSummary(false)}
      >
        {props.children}
      </EventSummary>
    </React.Fragment>
  );
};

export default Calendar;
