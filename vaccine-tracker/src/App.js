import {BrowserRouter as Router, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" exact>
        <Login />
      </Route>
      <Route path="/dashboard/:pincode" component={Dashboard} />
    </Router>
  );
}

export default App;
