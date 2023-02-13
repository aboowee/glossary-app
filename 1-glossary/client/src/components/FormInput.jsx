import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

var FormInput = ({onSubmit}) => {

  const { useState } = React;

  const [glossaryInput, setInput] = useState({})
  const [clicked, setClick] = useState(false);

  const Handler = () => {
    setInput({word: $('#wordForm').val(),
    description: $('#descForm').val()});
    setClick(!clicked);
  }


return (
  <div>
    <form>
      <div>Insert Word Here: <input type="text" id="wordForm"></input></div>
      <div>Insert Description Here: <input type="text" id="descForm"></input></div>
    </form>
    <button onClick={Handler}>Submit</button>
    <button onClick={()=>{setClick(!clicked); onSubmit(glossaryInput)}} disabled={!clicked}>Add To List!</button>
  </div>
)

}

export default FormInput;