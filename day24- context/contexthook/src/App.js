import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createContext } from 'react';
import Header from "./components/header"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from "./pages/Home";
import About from "./pages/About";

import Profile from "./pages/Profile";

import Dashboard from "./pages/Dashboard";

const Shows = createContext()
function App() {
  return (
    <>

      <Router>
      <Shows.Provider value={false}>
        <Header/>

        <Switch>
          <Route path="/Home" component={Home}   exact></Route>
          <Route path="/About" component={About}  exact></Route>
          <Route path="/Profile" component={Profile} exact></Route>
          <Route path="/Dashboard" component={Dashboard} exact></Route>

        </Switch>
        </Shows.Provider>
      </Router>

    </>
  );
}
export default App;
export {Shows}
