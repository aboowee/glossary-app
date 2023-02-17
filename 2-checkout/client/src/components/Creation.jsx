import React from "react";

var Creation = () => {

  return (
    <div>
      <label htmlFor="email">Insert Email Address: </label>
      <input type="text" name="email"></input>
      <label htmlFor="username">Insert Username: </label>
      <input type="text" name="username"></input>
      <label htmlFor="password">Insert Password: </label>
      <input type="password" name="password"></input>
      <button>Next</button>
    </div>
  );

}

export default Creation;