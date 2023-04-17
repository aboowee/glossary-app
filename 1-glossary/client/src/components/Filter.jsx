import React from 'react';
import ReactDom from 'react-dom';
import $ from 'jquery';

var Filter = (props) => {

return (
  <div>
    <form>
      <div>Filter By Word: <input type="text" id="filterInput"></input></div>
    </form>
      <button onClick={()=>{props.filter($('#filterInput').val())}}>Filter</button>
  </div>
)

}

export default Filter;