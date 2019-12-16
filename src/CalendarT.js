// import * as React from 'react';
// import {
//   ExpansionPanel, ExpansionPanelSummary,
//   ExpansionPanelDetails, Typography
// } from '@material-ui/core';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import dayGridPlugin from '@fullcalendar/daygrid';
// import { EventApi, View } from '@fullcalendar/core';
// import Event from '../../../models/event';
// import FullCalendar from '@fullcalendar/react';
// import { makeStyles } from '@material-ui/styles';
// import momentPlugin from '@fullcalendar/moment';
// import timeGridPlugin from '@fullcalendar/timegrid';
// import { EventCustomRender } from './EventCustomRender';

// import '../css/calendar.css';
// import '../css/dayGrid.css';
// import '../css/list.css';
// import '../css/timeGrid.css';

// const timeZoneString = 'local';
// const timeFormatString = 'MMMM DD YYYY';

// const customButtons = {
//   custom1: {
//     text: 'custom 1',
//     click: () => { alert('custom 1 is clicked!'); }
//   },
//   custom2: {
//     text: 'custom 2',
//     click: () => { alert('custom 2 is clicked!'); }
//   }
// };

// const eventTimeFormat = {
//   hour: 'numeric',
//   minute: '2-digit',
//   meridiem: 'short'
// };

// const headers = {
//   left: 'dayGridMonth,timeGridWeek,timeGridDay',
//   center: 'title',
//   right: 'prevYear,prev,today,next,nextYear'
// };

// const plugins = [dayGridPlugin,
//   timeGridPlugin,
//   momentPlugin
// ];

// const views = {
//   listWeek: { buttonText: 'Week list' },
//   listMonth: { buttonText: 'Month list' }
// };

// const useStyles = makeStyles({
//   container: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     marginBottom: '15px',
//   },
//   calendarContainer: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//   },
// });

// const handleClickOnDate = (arg: any) => {
//   alert(arg.dateStr);
// };

// const makeCalendarEventList = (eventList: Event[] | undefined) => {

//   let result: object[] = [];
//   if (eventList === undefined) {
//     return result;
//   } else {
//     for (var event of eventList) {
//       let calendarEvent = {
//         start: new Date().toISOString(),
//         end: '',
//         title: '',
//         extendedProps: {}
//       };
//       if (event.date) {
//         calendarEvent.start = event.date.toISOString();
//       }
//       if (event.name) {
//         calendarEvent.title = event.name;
//       }
//       calendarEvent.extendedProps = {
//         budget: event.budget,
//         total: event.total,
//         status: event.status
//       }
//       result.push(calendarEvent);
//     }
//     return result;
//   }
// }

// interface ICalendar {
//   events: Event[],
// }

// const Calendar: React.SFC<ICalendar> = ({ events }) => {

//   const classes = useStyles({});

//   const onClickEvent = () => { };

//   const onMouseEnter = (arg: {
//     el: HTMLElement;
//     event: EventApi;
//     jsEvent: MouseEvent;
//     view: View;
//   }) => {
//     arg.el.style.cursor = "pointer";
//   }

//   return (
//     <ExpansionPanel
//       className={classes.container}
//       defaultExpanded={true}>
//       <ExpansionPanelSummary
//         expandIcon={<ExpandMoreIcon />}
//         aria-controls="panel1a-content"
//         id="panel1a-header"
//       >
//         <Typography className="header" variant="h6">CALENDAR</Typography>
//       </ExpansionPanelSummary>
//       <ExpansionPanelDetails className={classes.calendarContainer}>
//         <FullCalendar
//           aspectRatio={2}
//           allDayText="Whole Day"
//           customButtons={customButtons}
//           dateClick={handleClickOnDate}
//           defaultView="dayGridMonth"
//           eventClick={onClickEvent}
//           eventLimit={true}
//           eventLimitClick="popover"
//           eventLimitText="more events"
//           eventMouseEnter={onMouseEnter}
//           events={makeCalendarEventList(events)}
//           eventRender={EventCustomRender}
//           eventTimeFormat={eventTimeFormat}
//           dayPopoverFormat={{ weekday: 'long', month: 'long', day: 'numeric' }}
//           fixedWeekCount={false}
//           header={headers}
//           plugins={plugins}
//           timeZone={timeZoneString}
//           titleFormat={timeFormatString}
//           views={views}
//         />
//       </ExpansionPanelDetails>
//     </ExpansionPanel>
//   );
// }

// export default Calendar;