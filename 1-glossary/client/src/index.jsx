import React from 'react';
import ReactDom from 'react-dom';
import GlossaryList from './components/glossaryList.jsx';
import FormInput from './components/formInput.jsx';
import axios from 'axios';


var App = () => {

  const { useState, useEffect } = React;

  const [wordsList, setWords] = useState([]);

  const getWords = () => {
    axios({
      method: "get",
      url: "/words",
    })
    .then((data) =>
    {
      setWords(data.data);
    })
    .catch((err) => {
      console.log('Could not get data: ', err);
    })
  }

  const sendWords = (wordInput) => {
    axios({
      method: "post",
      url: "/words",
      data: {
        word: wordInput.word,
        description: wordInput.description
      }
    })
    .then((data) =>
    {
      getWords();
    })
    .catch((err) => {
      console.log('Could not send data: ', err);
    })
  }

  const deleteWord = (word) => {
    axios({
      method: "post",
      url: "/delete",
      data: {
        word: word,
      }
    })
    .then((data) =>
    {
      getWords();
    })
    .catch((err) => {
      console.log('Could not send data: ', err);
    })
  }

  const updateWord = (wordInput) => {
    axios({
      method: "post",
      url: "/update",
      data: {
        word: wordInput.word,
        description: wordInput.description
      }
    })
    .then((data) =>
    {
      getWords();
    })
    .catch((err) => {
      console.log('Could not send data: ', err);
    })
  }

  useEffect(()=>{
    fetch('/words')
    .then(data => (data.json()))
    .then(data => {setWords(data)})
  }, [])

  return (
    <div>
      <h1>IT'S GLOSSARY TIME BABY</h1>
      <FormInput onSubmit={sendWords}/>
      <GlossaryList update={updateWord} glossary={wordsList} delete={deleteWord}/>
    </div>
  )

}

ReactDom.render(<App />, document.getElementById('root'));