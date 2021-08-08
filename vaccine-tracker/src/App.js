import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/login" exact>
        <Login />
      </Route>
      <Route path="/dashboard" exact>
        <Dashboard />
      </Route>
    </Router>
  );
}

export default App;
