import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

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

//hola
// Import de la base de datos
// adios

function App() {
  const [todos, setTodos] = useState([]);
  const [titulo, setTitulo] = useState('');

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
      </div>
      <div>
        <input
          value={titulo}
          onChange={(e) => {
            setTitulo(e.target.value);
          }}
        ></input>
        <button
          onClick={() => {
            writeSomething(titulo);
            fetch('http://localhost:3001/api/administrador')
              .then((res) => res.json())
              .then((json) => {
                setTodos(json.values);
              });
          }}
        >
          Agregar a mongo
        </button>
      </div>
    </>
  );
}

export default App;
