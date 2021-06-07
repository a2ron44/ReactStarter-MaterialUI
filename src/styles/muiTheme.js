import { createMuiTheme } from "@material-ui/core";

// Global styles can be moved to a separate file for ease of maintenance.
const global = {
  textRight: {
    textAlign: "right",
  },
  mygrey: "rgba(0, 0, 0, 0.5)",
};

export const menuDrawerWidth = () => 260;

export const dark = () =>
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: "#004d40",
        dark: "#00352c",
        light: "#337066",
      },
      secondary: {
        main: "#ff8f00",
        dark: "#a13800",
        light: "#eb7333",
      },
    },
    //common styles.
    global,
  });

export const light = () =>
  createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: "#424242",
      },
      secondary: {
        main: "#fdd835",
      },
    }, //,
    //common styles.
    global,
  });
