import React from "react";
import axios from "axios";
import User from "./User";

var UserList = React.createClass({
  getInitialState: function() {
    return {
      users: []
    }
  },

  componentDidMount: function() {
    var xhr = new XMLHttpRequest();
      xhr.open("GET", "http://cardslessons.com/user", true);
      xhr.onload = function () {
        console.log(xhr.responseText);
      };
      xhr.send();
   },

  render: function() {
    return (
      <div>
        <User />
      </div>
    )
  }
})

export default UserList
