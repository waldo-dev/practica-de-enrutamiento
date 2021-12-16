import React from 'react';

const Hello = (props) => {

  let word = 'hello';

  const verficar = (props) => {
    if(props.word){
      word = props.word
    }
  }

  verficar(props)
  return (
    <div>
      <h1 >The word is: {word}</h1>
    </div>
  );
}

export default Hello;