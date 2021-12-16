import React from 'react';

const Home = (props) => {
  let palabra = 'Welcome';
  const verificar = (props) => {
    if(props.home){
      palabra = props.home;
    }
  }
  verificar(props)
  return (
    <div>
      <h1>{palabra}</h1>
    </div>
  );
}

export default Home;
