import React, { Component } from 'react';
import Autorizacion2doPrecio from "./Autorizacion2doPrecio.js";
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import Devoluciones from "./Devoluciones.js";
import Factura from "./Factura.js";
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
            buttoncerrar: "Iniciar Session"
        };
        this.logout = this.logout.bind(this);
        this._OnButtonDevoluciones = this._OnButtonDevoluciones.bind(this);
        this._onButtonAutorizacion = this._onButtonAutorizacion.bind(this);
        this._onButtonFactura = this._onButtonFactura.bind(this);
        this.onUnload = this.onUnload.bind(this);
        this.HomeClickJefeTienda = this.HomeClickJefeTienda.bind(this);
    }
    componentDidMount() {
    }

    componentWillUnmount() {
        window.removeEventListener('onbeforeunload', this.onUnload);
    }
    onUnload() {

    }
    logout() {
        if (this.state.buttoncerrar == "Iniciar Session") {
            this.setState(prevState => ({
                buttoncerrar: "Cerrar Session"
            }));
        } else {
            this.setState(prevState => ({
                buttoncerrar: "Iniciar Session"
            }));
        }
    }
    _OnButtonDevoluciones() {
        this.setState(prevState => ({
            showDevoluciones: true,
            showFactura: false,
            showAutorizacion: false
        }));
    }
    _onButtonFactura() {
        this.setState(prevState => ({
            showFactura: true,
            showAutorizacion: false,
            showDevoluciones: false
        }));
    }
    _onButtonAutorizacion() {
        this.setState(({
            showFactura: false,
            showAutorizacion: true,
            showDevoluciones: false
        }));
    }
    HomeClickJefeTienda() {
        this.setState(({
            showFactura: false,
            showAutorizacion: false,
            showDevoluciones: false,
            regresasHome: true
        }));
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand onClick={this.HomeClickJefeTienda} href="#">Ferreteria Sanchez</NavbarBrand>
                    <NavbarToggler />
                    <Collapse navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink onClick={this._OnButtonDevoluciones} href="#">Devoluciones</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this._onButtonFactura} href="#">Facturar</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink onClick={this._onButtonAutorizacion} href="#">Autorizacion 2do Precio</NavLink>
                            </NavItem>
                        </Nav>
                        <Button onClick={this.logout} color="primary">{this.state.buttoncerrar}</Button>
                    </Collapse>
                </Navbar>
                <div style={{ 'padding-top': '30px' }}>
                    {this.state.showDevoluciones ? (
                        <>
                            <Devoluciones />
                        </>
                    ) : (
                            null
                        )}
                </div>
                <div style={{ 'padding-top': '30px' }}>
                    {this.state.showAutorizacion ? (
                        <>
                            <Autorizacion2doPrecio />
                        </>
                    ) : (
                            null
                        )}
                </div>
                <div style={{ 'padding-top': '30px' }}>
                    {this.state.showFactura ? (
                        <>
                            <Factura />
                        </>
                    ) : (
                            null
                        )}
                </div>
            </div>
        );
    }
}
export default AmbienteJefeDeTienda;