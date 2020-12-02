import React, { useState } from 'react';
import AmbienteJefeDeTienda from './Views/AmbienteJefeDeTienda/AmbienteJefeDeTienda.jsx';
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
// hola
// Import de la base de datos

function App() {
  const [todos, setTodos] = useState([]);
  const [titulo, setTitulo] = useState('');

  return <AmbienteJefeDeTienda />;
}

export default App;
