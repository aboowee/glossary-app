import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

var FormInput = ({onSubmit}) => {

  const { useState } = React;

  const [glossaryInput, setInput] = useState({})
  const [wordValue, setWord] = useState('')
  const [descValue, setDesc] = useState('')

  const inputHandler = () => {
    onSubmit({word: wordValue,
    description: descValue});
  }


return (
  <div>
    <form>
      <div>Insert Word Here: <input type="text" id="wordForm" onChange={(e)=>{setWord(e.target.value)}}></input></div>
      <div>Insert Description Here: <input type="text" id="descForm" onChange={(e)=>{setDesc(e.target.value)}}></input></div>
    </form>
    <button onClick={inputHandler} disabled={!wordValue || !descValue}>Submit</button>
  </div>
)

}

export default FormInput;