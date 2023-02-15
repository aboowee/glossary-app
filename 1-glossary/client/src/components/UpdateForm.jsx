import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

var UpdateForm = (props) => {

  const { useState } = React;

return (
  <div>
    <form>
      <div>Edit Description Here: <input type="text" id="updateDescription"></input></div>
    </form>
    <button onClick={()=>{props.update({word: props.word.word, description: $('#updateDescription').val()}); props.hideForm(false)}}>Update Description</button>
  </div>
)

}

export default UpdateForm;