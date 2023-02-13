import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

var GlossaryList = (props) => {

  const {useState} = React;

  const [selectedItem, setItem] = useState('');

  return (
    <div>
      {props.glossary.map((word, index) => {
        return(
          <div>
            <div id='thisTest'>{word.word}</div>
            <div>{word.description}</div>
            <button>Update</button>
            <button onClick={(target)=> {console.log(index)}}>Delete</button>
          </div>
        )
      })}
    </div>
  )

}

export default GlossaryList;