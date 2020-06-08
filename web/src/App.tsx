import React, { useState } from 'react';
import './App.css';

import Routes from './Routes';

function App() {
  return (
    <Routes />
  );
}

export default App;

// retornar um array com [valor do estado, função para atualizar o valor do estado]
// const [counter, setCounter] = useState(0);