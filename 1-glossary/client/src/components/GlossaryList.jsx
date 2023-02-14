import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import FormInput from './FormInput.jsx';

var GlossaryList = (props) => {

  const {useState, useEffect} = React;

  const [filterSearch, setSearch] = useState ('');

  const filterGlossary = (input) => {
    setSearch(input.target.value);
  }

  return (
    <div>
      <form>
        <div>Filter By Word: <input type="text" id="filterInput" onChange={(target)=>{filterGlossary(target)}}></input></div>
      </form>
      {props.glossary.filter((word) => {
        if (filterSearch === '' || word.word.includes(filterSearch)) {
          return true;
        } else {
          return false;
        }
      }).map((word, index) => {
        return(
          <div id={word.word}>
            <div>Word: {word.word}</div>
            <div>Definition: {word.description}</div>
            <button>Update</button>
            <button onClick={()=> {props.delete(word.word)}}>Delete</button>
          </div>
        )
      })}
    </div>
  )

}

export default GlossaryList;