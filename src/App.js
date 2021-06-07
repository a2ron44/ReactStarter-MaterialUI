import React, { useState } from "react";
import clsx from "clsx";
import "@fontsource/roboto";
import { makeStyles } from "@material-ui/core/styles";
import { Hidden, ThemeProvider } from "@material-ui/core/";
import { dark, light, menuDrawerWidth } from "styles/muiTheme";
import CssBaseline from "@material-ui/core/CssBaseline";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "navigation/RouterConfig";
import TopHeaderContainer from "navigation/TopHeader/TopHeaderContainer";

import LeftNavMenuContainer from "navigation/LeftNavMenu/LeftNavMenuContainer";
import Auth from "navigation/Auth/Auth";

const useStyles = makeStyles((theme) => ({
  belowToolbar: {
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  contentShift: {
    flexGrow: 1,
    marginLeft: menuDrawerWidth,
  },
}));

function App() {
  const classes = useStyles();
  const [darkState, setDarkState] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleThemeChange = () => {
    setDarkState(!darkState);
    console.log("theme=", !darkState ? "dark" : "light");
  };

  return (
    <div className="App">
      <Auth>
        <ThemeProvider theme={darkState ? dark() : light()}>
          <CssBaseline>
            <BrowserRouter>
              <TopHeaderContainer
                handleOpen={handleDrawerOpen}
                open={open}
              ></TopHeaderContainer>
              <LeftNavMenuContainer
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                handleThemeChange={handleThemeChange}
                open={open}
              ></LeftNavMenuContainer>
              <Hidden xsDown>
                <main className={clsx(classes.content, classes.contentShift)}>
                  <div className={classes.belowToolbar} />

                  <RouterConfig></RouterConfig>
                </main>
              </Hidden>

              <Hidden smUp>
                <main className={classes.content}>
                  <div className={classes.belowToolbar} />

                  <RouterConfig></RouterConfig>
                </main>
              </Hidden>
            </BrowserRouter>
          </CssBaseline>
        </ThemeProvider>
      </Auth>
    </div>
  );
}

export default App;
