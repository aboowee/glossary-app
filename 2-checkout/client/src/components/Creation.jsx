import React from "react";

var Creation = () => {

  return (
    <div>
      <label for="email">Insert Email Address: </label>
      <input type="text" name="email"></input>
      <label for="username">Insert Username: </label>
      <input type="text" name="username"></input>
      <label for="password">Insert Password: </label>
      <input type="password" name="password"></input>
      <button>Next</button>
    </div>
  );

}

export default Creation;