import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import UpdateForm from './UpdateForm.jsx';

var GlossaryWord = (props) => {

  const { useState } = React;
  const [showForm, setForm] = useState(false);

return (
  <div id={props.word.word}>
    <div>Word: {props.word.word}</div>
    <div>Definition: {props.word.description}</div>
    <button onClick={()=>setForm(true)}>Update</button>
    <button onClick={()=> {props.delete(props.word.word)}}>Delete</button>
    {showForm ? <UpdateForm update={props.update} word={props.word} hideForm={setForm}/> : null}
  </div>
)

}

export default GlossaryWord;