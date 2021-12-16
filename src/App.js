import './App.css';
import {Router} from '@reach/router';
import Home from './components/Home';
import Cuatro from './components/4';
import Hello from './components/Hello';
import HelloBlueRed from './components/Hello-Blue-Red';

function App() {
  return (
    <div className="App" >
      <Router>
        <Home path="/home" />
        <Home path="/home/:home" />
        <Cuatro path="/4" />
        <Cuatro path="/4/:num" />
        <Hello path="/hello" />
        <Hello path="/hello/:word" />
        <HelloBlueRed path="/:hello/:blue/:red" />
      </Router>
    </div>
  );
}

export default App;
