import React from "react";
import axios from "axios";
import createCORSRequest from "./CORSRequest";
var $ = require("jquery");

var RegField = React.createClass({
  render: function() {
    return (
      <form>

        <label>Name:</label>
        <input className="text-input"
                type="text"
                ref="name"
                defaultValue={null} />

        <label>Surname:</label>
        <input className="text-input"
                type="text"
                ref="surname"
                defaultValue={null} />

              <button onClick={this.sendData}>Create</button>

      </form>
    )
  },

  sendData: function(e) {
    e.preventDefault();
    var data = {
      name   : this.refs.name.value,
      surname: this.refs.surname.value,
    }

    // axios.put("http://cardslessons.com/user", {
    //             first_name: data.name,
    //             last_name: data.surname
    //           }).then(function(response) {
    //             console.log(response);
    //           }).catch(function(error) {
    //             console.log(error);
    //           });

    $.ajax({
      type: "PUT",
      url: "http://cardslessons.com/user",
      contentType: "application/json",
      data: {first_name: data.name, last_name: data.surname},
      xhrFields: {
        withCredentials: false
      },

      success: function(response) {
        console.log(response);
      },

      error: function(error) {
        console.log(error)
      }
    });



  }
});

export default RegField
