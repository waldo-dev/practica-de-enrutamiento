import React from 'react';

const Cuatro = (props) => {
  
  let num = 4
  const verificar = (props) => {
    if(props.num){
      num = props.num
    }
  };
  verificar(props);

  return (
    <div>
      <h1>The number is: {num}</h1>
    </div>
  );
}

export default Cuatro;
