import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  AppBar,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";

const useStyles = makeStyles((theme) => ({
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    lineHeight: 2.4,
  },
  menuItemHeight: {
    lineHeight: 2.4,
  },
  logo: {
    maxWidth: 40,
    marginRight: "10px",
  },
}));

const TopHeaderView = ({ handleOpen, open }) => {
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={classes.appBar}
      color="primary"
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          App Name
        </Typography>
        <Hidden smUp>
          <IconButton
            onClick={handleOpen}
            edge="start"
            color="inherit"
            aria-label="menu"
            className={classes.menuButton}
          >
            <MenuIcon></MenuIcon>
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
};

export default TopHeaderView;
