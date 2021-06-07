import React, { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";
import TestTable from "./TestTable";
import http from "services/http";

const Test = () => {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    http
      .get("https://jsonplaceholder.typicode.com/users")
      .then((json) => {
        console.log(json.data);
        setUsers(json.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setUsers([]);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <Typography variant="h5">Users</Typography>
      {isLoading && <Typography variant="h6"> Loading</Typography>}
      {!isLoading && <TestTable dataRows={users}></TestTable>}
    </>
  );
};

export default Test;
