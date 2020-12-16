// Import de react debe ser lo primero
import React, { useEffect, useState } from 'react';

// Import del react router
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

// Import de Styles
import './App.css';

// Import de login & landingpages

import LoginSignup from './Views/Login';

import AmbientePropietario from './Views/AmbientePropietario.jsx';
import AmbienteJefeTienda from './Views/AmbienteJefeTienda.jsx';
import AmbienteVendedor from './Views/AmbienteVendedor.jsx';
import AmbienteAdministrador from './Views/AmbienteAdministrador.jsx';

// Import de funcionalidades propietario
import AmbientePropietarioProductos from './Views/AmbientePropietarioProductos.jsx';
import AmbientePropietarioBodegas from './Views/AmbientePropietarioBodegas.jsx';
import AmbientePropietarioUsuarios from './Views/AmbientePropietarioUsuarios.jsx';
import AmbientePropietarioClientes from './Views/AmbientePropietarioClientes.jsx';

// Import de funcionalidades jefe  de tienda
import AmbienteJefeTiendaDevoluciones from './Views/AmbienteJefeTiendaDevoluciones.jsx';
import AmbienteJefeTiendaFacturar from './Views/AmbienteJefeTiendaFactura.jsx';

// Import de funcionalidades vendedor
import AmbienteVendedorFacturacion from './Views/AmbienteVendedorFactura.jsx';

// Import de funcionalidades administrador
import AmbienteAdministradorProveedores from './Views/AmbienteAdministradorProveedores.jsx';

// Import de pagina en construccion y error
import EnConstruccion from './Views/PaginaEnConstruccion.jsx';

// Import de crear usuarios 
import CrearUsuario from './Components/CrearUsuario.js';

// Instancia de la react app
const App = () => {
  console.log('Hola desde app.js');
  return (
    <CrearUsuario/>
  );
};

export default App;
