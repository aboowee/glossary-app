import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import GlossaryWord from './GlossaryWord.jsx';

var GlossaryList = (props) => {

  const {useState, useEffect} = React;

  const [filterSearch, setSearch] = useState('');

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
      }).map((word) => {
        return(
          <GlossaryWord update={props.update} word={word} delete={props.delete}/>
        )
      })}
    </div>
  )

}

export default GlossaryList;