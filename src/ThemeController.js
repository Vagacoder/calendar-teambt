import React, { useState } from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const theme1 = createMuiTheme({
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
});

const theme2 = createMuiTheme({
  palette: {
    primary: {
      light: "#ffa08c",
      main: "#f86e5e",
      dark: "#c03d34",
      contrastText: "#000"
    },
    secondary: {
      light: "#568293",
      main: "#285565",
      dark: "#002c3b",
      contrastText: "#fff"
    },
  }
});

const theme3 = createMuiTheme({
  palette: {
    primary: {
      light: "#6b93ff",
      main: "#0066ff",
      dark: "#003dcb",
      contrastText: "#fff"
    },
    secondary: {
      light: "#ffb3e6",
      main: "#ff66cc",
      dark: "#e60099",
      contrastText: "#fff"
    },
  }
});

const theme4 = createMuiTheme({
  palette: {
    primary: {
      light: "#ff9aff",
      main: "#ff66cc",
      dark: "#c92e9b",
      contrastText: "#000"
    },
    secondary: {
      light: "#80b3ff",
      main: "#0066ff",
      dark: "#0047b3",
      contrastText: "#000"
    },
  }
});

const theme5 = createMuiTheme({
  palette: {
    primary: {
      light: "#59e66b",
      main: "#00b33c",
      dark: "#008204",
      contrastText: "#000"
    },
    secondary: {
      light: "#33ccff",
      main: "#00ace6",
      dark: "#007399",
      contrastText: "#000"
    },
  }
});

const theme6 = createMuiTheme({
  palette: {
    primary: {
      light: "#64deff",
      main: "#00ace6",
      dark: "#007db4",
      contrastText: "#000"
    },
    secondary: {
      light: "#00e64d",
      main: "#00b33c",
      dark: "#00802b",
      contrastText: "#fff"
    },
  }
});

const themes = [theme1, theme2, theme3, theme4, theme5, theme6];

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

const ThemeController = (props) => {

  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [useTheme, setUseTheme] = useState(themes[value]);

  const handleChange = (event) => {
    setValue(Number.parseInt(event.target.value));
    setUseTheme(themes[event.target.value]);
  }

  return (
    <div>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Select A Theme</FormLabel>
        <RadioGroup aria-label="themes"
          name="themes" value={value}
          onChange={handleChange}
          row>
          {
            themes.map((theme, index) => {
              return (
                <FormControlLabel
                  value={index}
                  control={<Radio />}
                  label={`Theme${index + 1}`}
                  style={{
                    color: `${themes[index].palette.primary.main}`
                  }}
                />
              );
            })
          }
        </RadioGroup>
      </FormControl>
      <ThemeProvider theme={useTheme}>
        {props.children}
      </ThemeProvider>
    </div>
  );
}

export default ThemeController;