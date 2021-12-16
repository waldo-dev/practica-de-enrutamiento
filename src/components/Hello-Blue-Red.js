import React from 'react';

const HelloBlueRed = (props) => {
  
  let word = 'Hello';
  let color = 'blue';
  let background = 'red';
  
  if(props.blue){
    color = props.blue 
  }
  if(props.red){
    background = props.red
  } 

  console.log(background)

  let styleh1 = {
    backgroundColor: background,
    color: color
  }
  console.log(styleh1)
  const verficar = (props) => {
    if(props.hello){
      word = props.hello
    }
  }
  verficar(props)
  return (
    <div>
      <h1 style={styleh1}>The word is: {word}</h1>    
    </div>
  );
}

export default HelloBlueRed;
