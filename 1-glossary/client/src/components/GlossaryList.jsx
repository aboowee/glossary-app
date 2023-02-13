import React from 'react';
import ReactDom from 'react-dom';

var GlossaryList = () => {

  const {useState} = React;

  const [selectedItem, setItem] = useState('');

  return (
    <div>
      <div>Word Here</div>
      <div> Description Here </div>
      <button>Update</button>
      <button>Delete</button>
    </div>
  )

}

export default GlossaryList;