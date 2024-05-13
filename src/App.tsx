import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Greeting from './Greeting';
import Counter from './Counter';

function App() {
  const [valeur, setValeur] = useState("");
  //function to retrieve the value from the event object e and assign it to valeur 
  const getValue = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    setValeur(e.target.value);
  }

  return (
    <div className="App">
      <input type="text" value={valeur} onChange={getValue} />
      <Greeting name={valeur} />
      <Counter />
    </div>
  );
}

export default App;
