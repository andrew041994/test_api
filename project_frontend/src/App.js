
import './App.css';
import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from './containers/Home';
import LogIn from './components/LogIn';

function App() {
  return (
    <BrowserRouter> 
    <Switch>
     <Route component={Home} exact path="/" />
     <Route component={LogIn} exact path="/login" />


   </Switch>
    
    </BrowserRouter>
   
 
  );
}

export default App;
