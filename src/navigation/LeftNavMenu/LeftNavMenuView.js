import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  ListSubheader,
  SwipeableDrawer,
  Hidden,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeSwitch } from "components/ThemeSwitch";
import { Link } from "react-router-dom";
import { menuDrawerWidth } from "styles/muiTheme";
import CreateIcon from "@material-ui/icons/Create";

const useStyles = makeStyles((theme) => ({
  belowToolbar: {
    ...theme.mixins.toolbar,
  },
  drawer: {
    width: menuDrawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: menuDrawerWidth,
  },
  nested: {
    paddingLeft: theme.spacing(3),
  },
}));

const LeftNavMenuView = ({
  darkState,
  handleThemeChange,
  open,
  handleDrawerOpen,
  handleDrawerClose,
}) => {
  const classes = useStyles();

  const drawerContents = (
    <>
      <Hidden xsDown>
        <div className={classes.belowToolbar}></div>
      </Hidden>
      <List>
        <ListSubheader>List 1</ListSubheader>
        <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Portfolio" />
        </ListItem>

        <ListItem
          button
          component={Link}
          to="/test"
          onClick={handleDrawerClose}
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Test" />
        </ListItem>
      </List>
      <Divider />

      <List dense>
        <ListSubheader>List 2</ListSubheader>
        <ListItem
          button
          component={Link}
          to="/"
          dense
          onClick={handleDrawerClose}
        >
          <ListItemIcon>
            <CreateIcon />
          </ListItemIcon>
          <ListItemText primary="Feedback" />
        </ListItem>
      </List>

      <List>
        <ListItem>
          <ThemeSwitch
            darkState={darkState}
            handleThemeChange={handleThemeChange}
          />
          <ListItemText>Theme</ListItemText>
        </ListItem>
      </List>
    </>
  );

  const drawerMobile = (
    <SwipeableDrawer
      className={classes.drawer}
      anchor="right"
      open={open}
      onClose={handleDrawerClose}
      onOpen={handleDrawerOpen}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {drawerContents}
    </SwipeableDrawer>
  );

  const drawerDesktop = (
    <Drawer
      variant="permanent"
      className={classes.drawer}
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      {drawerContents}
    </Drawer>
  );

  return (
    <>
      <Hidden xsDown>{drawerDesktop}</Hidden>
      <Hidden smUp>{drawerMobile}</Hidden>
    </>
  );
};

export default LeftNavMenuView;
