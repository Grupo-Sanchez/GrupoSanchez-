import React, { Component, useState } from 'react';
import { Table, Container, Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import SelectSearch from 'react-select-search';
import axios from 'axios';
import Header from './Header.jsx';
import Facturar from '../Icons/Facturar.svg';
import '../Styles/SearchBar.css';
import Devolucion from '../Icons/Devolucion.svg';

export default function Devoluciones() {
  /*constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.b = this.b.bind(this);
    this.agregarProductoaTabla = this.agregarProductoaTabla.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.eliminarProducto = this.eliminarProducto.bind(this);
    this.state = {
      productosDevolucion: [],
      indice: 1,
      quantity: 1,
      productosEnBodega: [],
      productoSeleccionado: [],
      nombreCliente: '',
      identificacion: '',
      razonDevolucion: '',
      Estado: '',
      LugarDevolucion: '',
    };
  }*/
  /*addRow(producto) {
    this.state.indice = 1;
    const nextState = this.state;
    nextState.productosDevolucion.push(producto);
    this.setState(nextState);
  }*/
  /*b(idToSearch) {
    this.state.indice = 1;
    this.state.productosEnBodega.filter((item) => {
      if (item.value === idToSearch) {
        this.state.productoSeleccionado = {
          name: item.name,
          value: item.value,
          codigo: item.codigos,
          cantidad: 1,
          precioUnitario: item.precioUnitario,
          precioSumado: item.precioSumado,
        };
      }
      return 0;
    });
  }
  write = async () => {
    const campos = {
      nombreCliente: this.state.nombreCliente,
      identificacion: this.state.identificacion,
      razonDevolucion: this.state.razonDevolucion,
      Estado: this.state.Estado,
      LugarDevolucion: this.state.LugarDevolucion,
      productosDevueltos: this.state.productosDevolucion,
    };
    await axios.post('http://Localhost:178.128.67.247/api/devoluciones', campos);
    window.location.reload();
  };
  componentDidMount = async () => {
    await this.getProductos();
  };

  getProductos = async () => {
    await axios
      .get('http://Localhost:178.128.67.247/api/productos')
      .then((response) => {
        const productos = response.data;
        const productosagregados = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          productosagregados.push({
            indice: 0,
            name: element.nombre,
            value: element._id,
            codigos: element.codigos,
            proveedores: element.proveedores,
            precios: element.precios,
            area: element.area,
            ubicacion: element.ubicacion,
            marca: element.marca,
            _v: element._v,
            cantidad: element.cantidad,
            precioUnitario: 0,
            precioSumado: 0,
          });
        }
        const nextState = this.state;
        nextState.productosEnBodega = productosagregados;
        this.setState(nextState);
      })
      .catch(() => {
        alert('Error');
      });
  };
  updateTool = async (id) => {
    let cantidad2 = 0;
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === id) {
        cantidad2 = Number(element.cantidad) + Number(this.state.productoSeleccionado.cantidad);
        break;
      }
    }
    axios.put(`http://Localhost:178.128.67.247/api/productos/${id}`, { cantidad: cantidad2 });
  };
  eliminarProducto = async (i, cantidad) => {
    this.state.indice = 1;
    let cantidad2 = 0;
    await this.getProductos();
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === i) {
        cantidad2 = Number(element.cantidad) - Number(cantidad);
        break;
      }
    }
    axios.put(`http://Localhost:178.128.67.247/api/productos/${i}`, { cantidad: cantidad2 });
    const items2 = this.state.productosDevolucion.filter((item) => item.value !== i);
    const nextState = this.state;
    nextState.productosDevolucion = items2;
    this.setState(nextState);
  };
  handleChange(e) {
    this.state.indice = 1;
    this.b(e);
  }
  handleQuantityChange(e) {
    this.state.indice = 1;
    const nextState = this.state;
    nextState.quantity = e.target.value;
    nextState.productoSeleccionado.cantidad = nextState.quantity;
    this.setState(nextState);
  }
  agregarProductoaTabla() {
    this.state.indice = 1;
    this.addRow({
      name: this.state.productoSeleccionado.name,
      codigo: this.state.productoSeleccionado.codigo,
      cantidad: this.state.productoSeleccionado.cantidad,
      value: this.state.productoSeleccionado.value,
    });
    this.updateTool(this.state.productoSeleccionado.value);
    const nextState = this.state;
    nextState.quantity = 1;
    this.setState(nextState);
  }*/
  return (
    <div align="center">
      <h1 align="center">DEVOLUCIONES</h1>
      <br />
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <Row>
          <h4 style={{ paddingLeft: '200px' }}>Factura:</h4>
          <Col>
            <div align="center">
              <SelectSearch
                //options={this.state.productosEnBodega}
                search
                placeholder="Encuentre la Factura"
                //onChange={this.handleChange.bind(this)}
              />
            </div>
          </Col>
          <br />
          <Col>
            <div align="center">
              <Row style={{ paddingTop: '10px' }}>
                <h5 style={{ display: 'inline', float: 'center' }}>
                  Cantidad Productos en Factura:
                </h5>
                <input
                  style={{ float: 'center', marginLeft: '8px', width: '150px' }}
                  type="number"
                  id="cantidadDisp"
                  disabled={true}
                  //value={cantidadmax}
                />
              </Row>
              <Row style={{ paddingTop: '10px' }}>
                <h5 style={{ display: 'inline', float: 'center' }}>
                  Cantidad Productos a Devolver:
                </h5>
                <input
                  style={{ float: 'center', marginLeft: '5px', width: '150px' }}
                  type="number"
                  id="cantidadDisp"
                  disabled={true}
                  //value={cantidadmax}
                />
              </Row>
            </div>
          </Col>
        </Row>
        <br />
      </div>
      <br />
      <Row>
        <Col>
          <div
            style={{
              maxHeight: '750px',
              overflowY: 'auto',
              paddingLeft: '100px',
            }}
          >
            <Table height="50" responsive="sm" striped bordered hover align="center" size="lg">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Nombre Producto</th>
                  <th>Codigo</th>
                  <th>Cantidad</th>
                </tr>
              </thead>
              <tbody>
                {/*this.state.productosDevolucion.map((row) => (
              <tr>
                <th>{this.state.indice++}</th>
                <th>{row.name}</th>
                <th>{row.codigo[0]}</th>
                <th>{row.cantidad}</th>
                <th>
                  <Button
                    style={{ marginLeft: '10px' }}
                    classname="btn btn-danger"
                    onClick={() => this.eliminarProducto(row.value, row.cantidad)}
                  >
                    Eliminar
                  </Button>
                </th>
              </tr>
            ))*/}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <h2 align="center">Formulario Devolucion</h2>
          <Form
            style={{
              paddingRight: '100px',
              paddingLeft: '100px',
              height: '36px',
              'text-align': 'left',
            }}
          >
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label for="examplenameCliente">Nombre del Cliente</Label>
                  <Input
                    type="text"
                    name="text"
                    id="examplenameCliente"
                    placeholder="Nombre del Cliente"
                    // value={this.state.nombreCliente}
                    //onChange={(event) =>
                    //  this.setState({ nombreCliente: event.target.value, indice: 1 })
                    // }
                  />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label for="exampleIdentificacion">Identificacion</Label>
                  <Input
                    type="text"
                    name="text"
                    id="exampleIdentificacion"
                    // onChange={(event) =>
                    //   this.setState({ identificacion: event.target.value, indice: 1 })
                    // }
                    placeholder="Identificacion del Cliente"
                  />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup row align="center">
              <Label for="exampleText" sm={5}>
                Razon de Devolucion
              </Label>
              <Col sm={12}>
                <Input
                  // onChange={(event) =>
                  //   this.setState({ razonDevolucion: event.target.value, indice: 1 })
                  //  }
                  type="textarea"
                  name="text"
                  id="exampleText"
                />
              </Col>
            </FormGroup>
            <FormGroup row></FormGroup>
            <FormGroup tag="fieldset" row>
              <legend classname="col-form-label col-sm-2">Estado</legend>
              <Col style={{ display: 'inline', float: 'center' }} sm={10}>
                <FormGroup check>
                  <Label check>
                    <Input
                      // onChange={(event) => this.setState({ Estado: 'Nuevo', indice: 1 })}
                      type="radio"
                      name="radio2"
                    />{' '}
                    Nuevo
                  </Label>
                  <Label style={{ marginLeft: '25px' }} check>
                    <Input
                      //onChange={(event) => this.setState({ Estado: 'Usado', indice: 1 })}
                      type="radio"
                      name="radio2"
                    />{' '}
                    Usado
                  </Label>
                  <Label style={{ marginLeft: '25px' }} check>
                    <Input
                      //onChange={(event) => this.setState({ Estado: 'Defectuoso', indice: 1 })}
                      type="radio"
                      name="radio2"
                    />
                    Defectuoso
                  </Label>
                </FormGroup>
                <FormGroup row>
                  <legend classname="col-form-label col-sm-2">Checkbox</legend>

                  <Col style={{ display: 'inline', float: 'center', marginRight: '25px' }} sm={10}>
                    <FormGroup check>
                      <Label check>
                        <Input
                          //onChange={(event) => this.setState({ LugarDevolucion: 'Tienda', indice: 1 })}
                          type="checkbox"
                          id="checkbox2"
                        />{' '}
                        Tienda
                      </Label>
                      <Label style={{ marginLeft: '25px' }} check>
                        <Input
                          //onChange={(event) => this.setState({ LugarDevolucion: 'Bodega', indice: 1 })}
                          type="checkbox"
                          id="checkbox1"
                        />{' '}
                        Bodega
                      </Label>
                    </FormGroup>
                    <Button
                      color="primary"
                      style={{
                        width: '100px',
                        height: '50px',
                        'font-weight': 'bold',
                        position: 'absolute',
                        marginLeft: '350px',
                        top: '-40px',
                      }}
                      // onClick={this.write}
                    >
                      Devolver
                    </Button>
                  </Col>
                </FormGroup>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
