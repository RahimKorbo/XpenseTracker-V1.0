import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import Login from "./Components/Login";
import MakeTransaction from "./Components/MakeTransaction";
import FetchTransaction from "./Components/FetchTransaction"

export function Main() {
  return (
    <main>
      
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dash" component={Dashboard} />
        <Route exact path="/makeTransactions" component={MakeTransaction} />
        <Route exact path="/fetchTransactions" component={FetchTransaction} />
      
      </Switch>
    </main>
  );
}
