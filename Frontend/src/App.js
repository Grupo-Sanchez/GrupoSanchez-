// Import de react debe ser lo primero
import React, { useEffect, useState } from 'react';

// Import del react router
import { BrowserRouter as Router, Switch, Redirect, Route, Link } from 'react-router-dom';

// Import de Styles
// import './App.css';

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
import AmbientePropietarioMarcas from './Views/AmbientePropietarioMarcas.jsx';
import AmbientePropietarioDepartamentos from './Views/AmbientePropietarioDepartamentos.jsx';
import AmbientePropietarioProveedores from './Views/AmbientePropietarioProveedor.jsx';
import AmbientePropietarioFacturar from './Views/AmbientePropietarioFacturar.jsx';
import AmbientePropietarioDevoluciones from './Views/AmbientePropietarioDevoluciones.jsx';
//ajustar al estadar
import AmbientePropietarioNotificaciones from './Views/AmbientePropietarioNotificaciones.jsx';
//------
import AmbientePropietarioGestionarProductos from './Components/ModificarUsuarios.jsx';
import AmbientePropietarioEliminarProductos from './Components/EliminarUsuarios.jsx';

// Import de funcionalidades jefe  de tienda
import AmbienteJefeTiendaDevoluciones from './Views/AmbienteJefeTiendaDevoluciones.jsx';
import AmbienteJefeTiendaFacturar from './Views/AmbienteJefeTiendaFactura.jsx';

// Import de funcionalidades vendedor
import AmbienteVendedorFacturacion from './Views/AmbienteVendedorFactura.jsx';

// Import de funcionalidades administrador
import AmbienteAdministradorProveedores from './Views/AmbienteAdministradorProveedores.jsx';
import AmbienteAdministradorProducto from './Views/AmbienteAdministradorProducto.jsx';
import AmbienteAdministradorUsuarios from './Views/AmbienteAdministradorUsuarios.jsx';
import AmbienteAdministradorMarcas from './Views/AmbienteAdministradorMarcas.jsx';
import AmbienteAdministradorDepartamentos from './Views/AmbienteAdministradorDepartamentos.jsx';
import AmbienteAdministradorClientes from './Views/AmbienteAdministradorClientes.jsx';
import AmbienteAdministradorBodegas from './Views/AmbienteAdministradorBodegas.jsx';

// Import de pagina en construccion y error
import EnConstruccion from './Views/PaginaEnConstruccion.jsx';
import Header from './Components/Header.jsx';

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
      <Route exact path="/Propietario/Clientes">
        <AmbientePropietarioClientes />
      </Route>
      <Route exact path="/Propietario/Marcas">
        <AmbientePropietarioMarcas />
      </Route>
      <Route exact path="/Propietario/Departamentos">
        <AmbientePropietarioDepartamentos />
      </Route>
      <Route exact path="/Propietario/Proveedores">
        <AmbientePropietarioProveedores />
      </Route>
      <Route exact path="/Propietario/Gestionar/Usuarios">
        <AmbientePropietarioGestionarProductos />
      </Route>
      <Route exact path="/Propietario/Eliminar/Usuarios">
        <AmbientePropietarioEliminarProductos />
      </Route>
      <Route exact path="/Propietario/Notificaciones">
        <AmbientePropietarioNotificaciones />
      </Route>
      <Route exact path="/Propietario/Facturar">
        <AmbientePropietarioFacturar />
      </Route>
      <Route exact path="/Propietario/Devoluciones">
        <AmbientePropietarioDevoluciones />
      </Route>
      {/* Ambientes administrador */}
      <Route exact path="/Administrador">
        <AmbienteAdministrador />
      </Route>
      <Route exact path="/Administrador/Productos">
        <AmbienteAdministradorProducto />
      </Route>
      <Route exact path="/Administrador/Usuarios">
        <AmbienteAdministradorUsuarios />
      </Route>
      <Route exact path="/Administrador/Marcas">
        <AmbienteAdministradorMarcas />
      </Route>
      <Route exact path="/Administrador/Departamentos">
        <AmbienteAdministradorDepartamentos />
      </Route>
      <Route exact path="/Administrador/Clientes">
        <AmbienteAdministradorClientes />
      </Route>
      <Route exact path="/Administrador/Proveedores">
        <AmbienteAdministradorProveedores />
      </Route>
      <Route exact path="/Administrador/Bodegas">
        <AmbienteAdministradorBodegas />
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
      {/* Ambientes vendedor */}
      <Route exact path="/EjecutivoVentas">
        <AmbienteVendedor />
      </Route>
      <Route exact path="/EjecutivoVentas/Facturacion">
        {/* <Route exact path="/Vendedor/Facturar">*/}

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
