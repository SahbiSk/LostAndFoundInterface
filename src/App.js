import React from "react";
import UserDashboard from "./components/UserDashboard/UserDashboard";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageAccueil from "./components/PageAccueil/PageAccueil";
import Navbar from "./components/Navbar/Navbar";
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route
          path="/profile"
          exact
          render={(props) => (
            <>
              <Navbar {...props} />
              <UserDashboard {...props} />
            </>
          )}
        />
        <Route
          path="/"
          exact
          render={(props) => (
            <>
              <Navbar {...props} />
              <PageAccueil {...props} />
            </>
          )}
        />
        <Route
          path="/admin"
          exact
          render={(props) => (
            <>
             
              <AdminDashboard {...props} />
            </>
          )}
        />
      </Switch>
    </Router>
  );
};

export default App;
