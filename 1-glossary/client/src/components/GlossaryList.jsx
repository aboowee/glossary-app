import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';
import Filter from './Filter.jsx';

var GlossaryList = (props) => {

  const {useState, useEffect} = React;

  const [renderedList, setRender] = useState ([])

  useEffect(() => {
    setRender(props.glossary);
    console.log('test');
    console.log(props.glossary);
  }, [props.glossary])

  const filterGlossary = (input) => {
    let filteredGlossary = [];
    props.glossary.forEach((word)=>{
      if (word.word.includes(input)) {
        filteredGlossary.push(word);
      };
    })
    setRender(filteredGlossary);
  }

  return (
    <div>
      <Filter filter={filterGlossary}/>
      {renderedList.map((word, index) => {
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