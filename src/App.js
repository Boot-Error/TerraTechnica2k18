import React, { Component } from 'react';
import { Router, Route,browserHistory } from 'react-router'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import logo from './logo.svg';
import './App.css';


// Components Modules
import NavBar from './components/navbar'
import Footer from './components/footer'
import OpenMenu from './components/openmenu'
import MenuButton from './components/menubutton'
// Pages Modules
import Home from './pages/home/home'
import Events from './pages/events/events'
import Team from './pages/team/team.js'
import NotFound from './notfound.js'
import OpenEvent from './pages/events/event/openevent.js'


// Parent Component
class App extends Component {
  render() {
    return (
      <div className="App">
             <MuiThemeProvider>
                  <div>
                    <MenuButton/>
                    <OpenMenu/>
                    <Router history={browserHistory}>
                       <Route path="/" component={Home}/>
                       <Route path="/events" component={Events}/>
                       <Route path="/team" component={Team}/>
                       <Route path="/events/:id" component={OpenEvent}/>
                       <Route path="*" component={NotFound}/>
                    </Router>
                    {/*<Footer/>*/}
                  </div>
             </MuiThemeProvider>
      </div>
    );
  }
}

export default App;
