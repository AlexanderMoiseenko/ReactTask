import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Popup from "react-popup";
import { Router, Route, IndexRoute, browserHistory, Link, IndexLink } from "react-router";

//Import custom components

import CreateUser from "./CreateUser";
import UserList from "./UserList";

const app = document.getElementById("app");

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1>Simple SPA</h1>
        <ul className="header">
          <li>
            <IndexLink to="/" activeClassName="active">
              New User
            </IndexLink>
          </li>
          <li>
            <Link to="/userlist" activeClassName="active">
              User List
            </Link>
          </li>
        </ul>
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
});


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={CreateUser} />
      <Route path="userlist" component={UserList} />
    </Route>
  </Router>
), app)
