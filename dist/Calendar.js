import React from 'react';
import { ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails, Typography } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import { makeStyles } from '@material-ui/styles';
import momentPlugin from '@fullcalendar/moment';
import timeGridPlugin from '@fullcalendar/timegrid';
import { EventCustomRender } from './EventCustomRender';
import './css/calendar.css';
import './css/dayGrid.css';
import './css/list.css';
import './css/timeGrid.css';
var timeZoneString = 'local';
var timeFormatString = 'MMMM DD YYYY';
var customButtons = {
  custom1: {
    text: 'custom 1',
    click: function click() {
      alert('custom 1 is clicked!');
    }
  },
  custom2: {
    text: 'custom 2',
    click: function click() {
      alert('custom 2 is clicked!');
    }
  }
};
var eventTimeFormat = {
  hour: 'numeric',
  minute: '2-digit',
  meridiem: 'short'
};
var headers = {
  left: 'dayGridMonth,timeGridWeek,timeGridDay',
  center: 'title',
  right: 'prevYear,prev,today,next,nextYear'
};
var plugins = [dayGridPlugin, timeGridPlugin, momentPlugin];
var views = {
  listWeek: {
    buttonText: 'Week list'
  },
  listMonth: {
    buttonText: 'Month list'
  }
};
var useStyles = makeStyles({
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '15px'
  },
  calendarContainer: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  }
});

var handleClickOnDate = function handleClickOnDate(arg) {
  alert(arg.dateStr);
};

var makeCalendarEventList = function makeCalendarEventList(eventList) {
  var result = [];

  if (eventList === undefined) {
    return result;
  } else {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = eventList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var event = _step.value;
        var calendarEvent = {
          start: new Date().toISOString(),
          end: '',
          title: '',
          extendedProps: {}
        };

        if (event.date) {
          calendarEvent.start = event.date.toISOString();
        }

        if (event.name) {
          calendarEvent.title = event.name;
        }

        calendarEvent.extendedProps = {
          budget: event.budget,
          total: event.total,
          status: event.status
        };
        result.push(calendarEvent);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    return result;
  }
};

var Calendar = function Calendar(_ref) {
  var events = _ref.events;
  var classes = useStyles({});

  var onClickEvent = function onClickEvent() {};

  var onMouseEnter = function onMouseEnter(arg) {
    arg.el.style.cursor = "pointer";
  };

  return React.createElement(ExpansionPanel, {
    className: classes.container,
    defaultExpanded: true
  }, React.createElement(ExpansionPanelSummary, {
    expandIcon: React.createElement(ExpandMoreIcon, null),
    "aria-controls": "panel1a-content",
    id: "panel1a-header"
  }, React.createElement(Typography, {
    className: "header",
    variant: "h6"
  }, "CALENDAR")), React.createElement(ExpansionPanelDetails, {
    className: classes.calendarContainer
  }, React.createElement(FullCalendar, {
    aspectRatio: 2,
    allDayText: "Whole Day",
    customButtons: customButtons,
    dateClick: handleClickOnDate,
    defaultView: "dayGridMonth",
    eventClick: onClickEvent,
    eventLimit: true,
    eventLimitClick: "popover",
    eventLimitText: "more events",
    eventMouseEnter: onMouseEnter,
    events: makeCalendarEventList(events),
    eventRender: EventCustomRender,
    eventTimeFormat: eventTimeFormat,
    dayPopoverFormat: {
      weekday: 'long',
      month: 'long',
      day: 'numeric'
    },
    fixedWeekCount: false,
    header: headers,
    plugins: plugins,
    timeZone: timeZoneString,
    titleFormat: timeFormatString,
    views: views
  })));
};

export default Calendar;