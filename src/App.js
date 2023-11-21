import React from 'react';
import './App.css';
import Employee from './Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <Employee />
        </div>
      </header>
    </div>
  );
}

export default App;
