import React from 'react';
import './App.css';
import Navegacion from './components/Navegacion';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navegacion title="primera"/>
        <Navegacion title="Segunda"/>
      </div>
    );
  }
}

export default App;
