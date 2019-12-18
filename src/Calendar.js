import React from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import FullCalendar from './FullCalendar';

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
  const { events, onEventClick } = props;

  const onClickEvent = (clickInfo) => {
    onEventClick(clickInfo.event._def.publicId);
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
            onClickEvent={onClickEvent}
            events={events}
          />
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </React.Fragment>
  );
};

export default Calendar;
