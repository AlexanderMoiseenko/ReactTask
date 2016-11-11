import React from "react";
import RegField from "./RegField";
import $jsonp from "./jsonp";

var CreateUser = React.createClass({

  getInitialState: function() {
    return {
      step: 0
    }
  },

  openRegField: function() {
    this.setState({
      step: 1
    });
  },

  render: function() {
    switch (this.state.step) {
      case 0:
        return ( <button onClick={this.openRegField}>New user</button> )
      case 1:
        return <RegField  />
    }
  }
});

export default CreateUser
