import React from "react";

let User = function(props) {
  return (
    <div className="user">
      <hr />
      <div>ID:{props.ID}</div>
      <div>Name: {props.name}</div>
      <div>Surname: {props.surname}</div>
      <div>Full name: {props.name + " " + props.surname}</div>
      <button>Change</button>
      <hr />
    </div>
  )
}

export default User;
