import React, { Component } from 'react';
import LinkList from './components/LinkList';
import CreateLink from './components/CreateLink';
import Login from './components/Login';
import Header from './Header';
import { Switch, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="center w85">
        <Header />
        <div clssName="ph3 pv1 background-gray">
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/" component={LinkList} />
            <Route exact path="/create" component={CreateLink} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
