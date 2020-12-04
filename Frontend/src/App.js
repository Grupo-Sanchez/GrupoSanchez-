// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import AgregarProducto from './Views/InterfazProducto/AgregarProducto';
import EliminarProducto from './Views/InterfazProducto/EliminarProducto';
import InterfazProducto from './Views/InterfazProducto/InterfazProducto';

// Importaciones de react

const writeSomething = (titulo) => {
  const jsonString = { titulo, terminado: false };
  console.log(jsonString);
  fetch('http://localhost:3001/api/administrador', {
    method: 'post',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(jsonString),
  })
    .then((res) => res.json())
    .then((json) => {
      console.log(json);
    });
};
// Import de la base de datos

function App() {
  const [todos, setTodos] = useState([]);
  const [titulo, setTitulo] = useState('');

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //   </header>
    // </div>
    <div >
      <AgregarProducto/>
    </div>
  );
}

export default App;
