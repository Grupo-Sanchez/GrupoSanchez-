import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from 'reactstrap';
import Devoluciones from './Devoluciones.jsx';
import Factura from './Factura.jsx';

class AmbienteJefeDeTienda extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDevoluciones: false,
      showFactura: false,
      showAutorizacion: false,
      showComponent: false,
      shouldShowButton: false,
      regresasHome: true,
      buttoncerrar: 'Iniciar Session',
    };
    this.logout = this.logout.bind(this);
    this.OnButtonDevoluciones = this.OnButtonDevoluciones.bind(this);
    this.onButtonAutorizacion = this.onButtonAutorizacion.bind(this);
    this.onButtonFactura = this.onButtonFactura.bind(this);
    // this.onUnload = this.onUnload.bind(this);
    this.HomeClickJefeTienda = this.HomeClickJefeTienda.bind(this);
  }
  // componentDidMount() {}

  componentWillUnmount() {
    window.removeEventListener('onbeforeunload', this.onUnload);
  }

  // onUnload() {}

  logout() {
    if (this.state.buttoncerrar === 'Iniciar Session') {
      this.setState((prevState) => ({
        buttoncerrar: 'Cerrar Session',
      }));
    } else {
      this.setState((prevState) => ({
        buttoncerrar: 'Iniciar Session',
      }));
    }
  }

  OnButtonDevoluciones() {
    this.setState((prevState) => ({
      showDevoluciones: true,
      showFactura: false,
      showAutorizacion: false,
    }));
  }

  onButtonFactura() {
    this.setState((prevState) => ({
      showFactura: true,
      showAutorizacion: false,
      showDevoluciones: false,
    }));
  }

  onButtonAutorizacion() {
    this.setState({
      showFactura: false,
      showAutorizacion: true,
      showDevoluciones: false,
    });
  }

  HomeClickJefeTienda() {
    this.setState({
      showFactura: false,
      showAutorizacion: false,
      showDevoluciones: false,
      regresasHome: true,
    });
  }

  render() {
    return (
      <div>
        <Navbar color="dark" light expand="md">
          <NavbarBrand style={{ color: 'white' }} onClick={this.OnButtonDevoluciones}>
            Ferreteria Sanchez
          </NavbarBrand>
          <NavbarToggler />
          <Collapse navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink style={{ color: 'white' }} onClick={this.OnButtonDevoluciones} href="#">
                  Devoluciones
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{ color: 'white' }} onClick={this.onButtonFactura} href="#">
                  Facturar
                </NavLink>
              </NavItem>
              {/*<NavItem>
                <NavLink style={{ color: "white" }} onClick={this.onButtonAutorizacion} href="#">
                  Autorizacion 2do Precio
                </NavLink>
              </NavItem>*/}
            </Nav>
            <Button onClick={this.logout} color="primary">
              {this.state.buttoncerrar}
            </Button>
          </Collapse>
        </Navbar>
        <div style={{ 'padding-top': '30px' }}>
          {this.state.showDevoluciones ? (
            <>
              <Devoluciones />
            </>
          ) : null}
        </div>
        <div style={{ 'padding-top': '30px' }}>
          {this.state.showFactura ? (
            <>
              <Factura />
            </>
          ) : null}
        </div>
      </div>
    );
  }
}
export default AmbienteJefeDeTienda;
