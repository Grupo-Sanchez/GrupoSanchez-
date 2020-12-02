import React from 'react';
import AmbienteAdministrador from './Views/AmbienteAdministrador.jsx';
import AmbienteFormularioCliente from './Views/AmbienteFormularioCliente';
import './App.css';

function App() {
  return (
    <>
      <AmbienteFormularioCliente />
      <AmbienteAdministrador />
    </>
  );
}

export default App;
