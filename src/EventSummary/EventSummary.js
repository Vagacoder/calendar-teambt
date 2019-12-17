import React from "react";
import * as MUI from "@material-ui/core";

const EventSummary = props => {
  const { onClose, open, children } = props;
  return (
    <MUI.Dialog open={open} onClose={onClose}>
      {children}
    </MUI.Dialog>
  );
};

export default EventSummary;
