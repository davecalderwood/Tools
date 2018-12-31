import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Calendar from './pages/Calendar';
import Calculator from './pages/Calculator';
import './App.css';


class App extends Component {
 
  render() {
    return (

      <Router>
      <div className="App">   
        <div className="sideBar">
        
          <nav role="navigation">
            <div id="menuToggle">

              <ul id="menu">
                <a href="/"><li>Home</li></a>
                <a href="/about"><li>About</li></a>
                <a href="/calendar"><li>Calendar</li></a>
                <a href="/calculator"><li>Calculator</li></a>
              </ul>
            </div>
          </nav>
          
        </div>

        <div className="main">
          {/* Route paths */}
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/calendar" component={Calendar} />
          <Route path="/calculator" component={Calculator} />
        
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
