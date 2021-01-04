import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";


export function Main() {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={Dashboard} />
      </Switch>
    </main>
  );
}
