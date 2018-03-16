import React, { Component } from 'react';
import{BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Home from "./pages/Home";
import Exercise from "./pages/Exercise";
import Game from "./pages/Game";
import Instructions from "./pages/Instructions";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Stats from "./pages/Stats";
import Whole from "./pages/WholeNote";
import Half from "./pages/HalfNote";
import Quarter from "./pages/QuarterNote";
import Eighth from "./pages/EighthNote";
import OnOff from "./pages/OnOff";
import FunkyTomEx from "./pages/FunkyTomEx";
import LogOut from "./pages/LogOut";


const App = () => 
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/exercise" component={Exercise} />
      <Route exact path="/game" component={Game} />
      <Route exact path="/instructions" component={Instructions} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/stats" component={Stats} />
      <Route exact path="/whole" component={Whole} />
      <Route exact path="/half" component={Half} />
      <Route exact path="/quarter" component={Quarter} />
      <Route exact path="/eighth" component={Eighth} />
      <Route exact path="/onoff" component={OnOff} />
      <Route exact path="/funkytomex" component={FunkyTomEx} />
      <Route exact path="/logout" component={LogOut} />
    </Switch>
  </Router>


export default App;
