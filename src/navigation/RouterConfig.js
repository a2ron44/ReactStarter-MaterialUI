import Home from "pages/Home/Home";
import Test from "pages/Test/Test";
import React from "react";
import { Route, Switch } from "react-router";
import Callback from "./Auth/callback";
import Login from "./Auth/login";
import Logout from "./Auth/logout";
import ProtectedRoute from "./Auth/protectedRoute";
import { NotFound } from "./NotFound";

const RouterConfig = () => {
  return (
    <>
      <Switch>
        <ProtectedRoute path="/test/:id" component={Test} authRole="Any" />
        <Route path="/test" component={Test} />
        <Route path="/logout" component={Logout} />
        <Route path="/login" component={Login} />
        <Route path="/callback" component={Callback} />
        <Route path="/unauthorized" component={NotFound} />
        <Route path="/" exact component={Home} />
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </>
  );
};

export default RouterConfig;
