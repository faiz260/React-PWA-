import React from 'react';
import './App.css';
import { configureNotification } from "./Services/firebase-service";

function App() {
  return (
    <div className="App">
     <h1> Hello World </h1>
      <button onClick={configureNotification} >Notification</button>
    </div>
  );
}

export default App;
