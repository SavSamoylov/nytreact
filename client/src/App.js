import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Header} from "./components";
import {SearchPage, FavoritesPage} from "./pages";


class App extends Component {
  render() {
    return (
      <div className="container">
        <Header />
        <Router>
          <Switch>
            <Route exact path="/" component={SearchPage} />
            <Route exact path="/favorites" component={FavoritesPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
