import React from "react";
import { Typography, Button } from "@material-ui/core/";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  blah: theme.global.textRight,
}));

const test = () => {
  throw new Error("test2");
};
const TestButton = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.blah}>Test2</Typography>
      <Button variant="contained" color="secondary" onClick={test}>
        This is a button
      </Button>
    </>
  );
};

export default TestButton;
