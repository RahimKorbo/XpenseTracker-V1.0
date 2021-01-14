import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import MakeTransaction from "./Components/MakeTransaction";


export function Main() {
  return (
    <main>
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/makeTransactions" component={MakeTransaction} />
      
      </Switch>
    </main>
  );
}
