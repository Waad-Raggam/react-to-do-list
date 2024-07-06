import React from 'react';
import logo from './logo.svg';
import './App.css';
import List from './List';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'bootstrap-icons/font/bootstrap-icons.css';

function App() {
  return (
    <div className="App">
      <main className="App-header">
        <List/>
      </main>
    </div>
  );
}

export default App;
