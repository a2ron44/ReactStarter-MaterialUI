import React from "react";
import { makeStyles } from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

const TradeTable = ({ dataRows }) => {
  const classes = useStyles();

  return (
    <>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell align="right">ID</TableCell>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Username</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dataRows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align="right">{row.id}</TableCell>
                <TableCell align="right">{row.name}</TableCell>
                <TableCell align="right">{row.username}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default TradeTable;
