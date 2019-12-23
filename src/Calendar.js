import React, { useEffect } from "react";
import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { makeStyles } from "@material-ui/styles";
import FullCalendar from './FullCalendar';

const useStyles = makeStyles((theme) => {
  return {
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
    },
    // override the Full Calendar button background colors
    // Active button bg color is overriden in FullCalendar.js
    calendarButtonPrimary: {
      color: theme.palette.primary.contrastText,
      background: theme.palette.primary.main,
      borderColor: theme.palette.primary.light,
      boxShadow: `0px 1px 0px 0px ${theme.palette.primary.light},
      1px 2px 2px 0px ${theme.palette.primary.light},
      2px 3px 5px -2px ${theme.palette.primary.light}`,
      '&:hover': {
        background: theme.palette.primary.light,
        borderColor: theme.palette.primary.main,
      },
      '&:focus': {
        boxShadow: `0 0 0 0.1rem ${theme.palette.primary.light}`,
      },
      '&:disabled': {
        background: theme.palette.primary.light,
        border: theme.palette.primary.light,
      },
      '&:not(:disabled):active': {
        color: theme.palette.primary.contrastText,
        background: theme.palette.primary.dark,
        borderColor: theme.palette.primary.main,
      },
      '&:not(:disabled):active:focus': {
        boxShadow: `0 0 0 0.1rem ${theme.palette.primary.light}`,
      },
    },
  }
});

const Calendar = props => {
  const { events, onEventClick } = props;
  const classes = useStyles();

  const onClickEvent = (clickInfo) => {
    onEventClick(clickInfo.event._def.publicId);
  };

  // override the FullCalendar button background colors
  useEffect(() => {
    const fcButtonPrimary = document.querySelectorAll(".fc-button-primary");
    fcButtonPrimary.forEach(button => {
      button.classList.add(classes.calendarButtonPrimary);
    });
  })

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
