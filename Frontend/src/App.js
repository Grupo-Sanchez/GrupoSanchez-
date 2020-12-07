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

// Import de funcionalidades admin
import AmbientePropietarioProductos from './Views/AmbientePropietarioProductos.jsx';
import AmbientePropietarioBodegas from './Views/AmbientePropietarioBodegas.jsx';
import AmbientePropietarioUsuarios from './Views/AmbientePropietarioUsuarios.jsx';

// Import de funcionalidades jefe  de tienda
import AmbienteJefeTiendaDevoluciones from './Views/AmbienteJefeTiendaDevoluciones.jsx';
import AmbienteJefeTiendaFacturar from './Views/AmbienteJefeTiendaFacturar.jsx';
import AmbienteJefeDeTienda from './Views/AmbienteJefeDeTienda.jsx';

// Import de funcionalidades vendedor
import AmbienteVendedorFacturacion from './Views/AmbienteVendedorFacturacion.jsx';

// Import de funcionalidades administrador
import AmbienteAdministradorProveedores from './Views/AmbienteAdministradorProveedores.jsx';

// Import de pagina en construccion y error
import EnConstruccion from './Views/PaginaEnConstruccion.jsx';

// import para paginas de bodegas
import CrearBodega from './Views/CrearBodega.jsx';

// Instancia de la react app
const App = () => {
  console.log('Hola desde app.js');
  return (
    <Router>
      {/* Prueba de rutas  */}
      <Route exact path="/">
        <LoginSignup />
      </Route>
      {/*  Login  */}
      <Route exact path="/login"></Route>
      {/* Ambientes propietario */}
      <Route exact path="/Propietario">
        <AmbientePropietario />
      </Route>
      <Route exact path="/Propietario/Bodegas">
        <AmbientePropietarioBodegas />
      </Route>
      <Route exact path="/Propietario/Productos">
        <AmbientePropietarioProductos />
      </Route>
      <Route exact path="/Propietario/Usuarios">
        <AmbientePropietarioUsuarios />
      </Route>
      {/* Ambientes administrador */}
      <Route exact path="/Administrador">
        <AmbienteAdministrador />
      </Route>
      {/* Ambientes propietario */}
      <Route exact path="/JefeTienda">
        <AmbienteJefeTienda />
      </Route>
      <Route exact path="/JefeTienda/Facturar">
        <AmbienteJefeTiendaFacturar />
      </Route>
      <Route exact path="/JefeTienda/Devoluciones">
        <AmbienteJefeTiendaDevoluciones />
      </Route>
      {/*  Ambientes vendedor */}
      <Route exact path="/Vendedor">
        <AmbienteVendedor />
      </Route>
      <Route exact path="/Vendedor/Facturacion">
        <AmbienteVendedorFacturacion />
      </Route>
      {/* Pagina en construccion o error */}
      <Route exact path="/EnConstruccion">
        <EnConstruccion />
      </Route>
    </Router>
  );
};

export default App;
