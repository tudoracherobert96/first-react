import logo from './logo.svg';
import './App.css';
import {render} from "@testing-library/react";
import HelloWorld from './HelloWorld';
import Home from './Views/Home';
import About from './Views/About';
import List from './Views/List';
import Header from './Header';
import{
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

function App() {
    var list = [1,2,3,4];
  return (
      <div>
          <Router>

          <Header />

          <HelloWorld name="Quentin"/>

              <Switch>
                  <Route exact path="/">
                      <Home lst={list} />
                  </Route>
                  <Route path="/about">
                      <About />
                  </Route>
                  <Route path="/list">
                      <List />
                  </Route>
              </Switch>

          </Router>

      </div>
  )
}

export default App;



