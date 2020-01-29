import React from 'react';
import Calendar from '../Calendar';
import * as MUI from '@material-ui/core';

const theme = MUI.createMuiTheme({
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
})

export default { title: 'Calendar' };
export const calendar = () => (
    <MUI.ThemeProvider theme={theme} >
        <Calendar />
    </MUI.ThemeProvider>
)