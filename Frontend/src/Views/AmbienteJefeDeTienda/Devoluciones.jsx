import React, { Component, useState } from 'react';
import { Row, Button, Form, FormGroup, Label, Input, FormText, Col } from 'reactstrap';
import SelectSearch from 'react-select-search';
import './SearchBar.css';
import { Table } from 'reactstrap';
export default class Devoluciones extends Component {
  constructor(props) {
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
      productosEnBodega: [
        {
          indice: 0,
          name: 'Clavos',
          value: 'cla',
          codigo: '00354',
          cantidad: 5,
          precioUnitario: 25,
          precioSumado: 125,
        },
        {
          indice: 0,
          name: 'Guantes',
          value: 'gua',
          codigo: '00254',
          cantidad: 10,
          precioUnitario: 500,
          precioSumado: 5000,
        },
        {
          indice: 0,
          name: 'Mangueras',
          value: 'man',
          codigo: '15423',
          cantidad: 55,
          precioUnitario: 100,
          precioSumado: 5500,
        },
        {
          indice: 0,
          name: 'Llaves',
          value: 'lla',
          codigo: '35695',
          cantidad: 15,
          precioUnitario: 125,
          precioSumado: 1875,
        },
        {
          indice: 0,
          name: 'Martillos',
          value: 'mar',
          codigo: '32564',
          cantidad: 7,
          precioUnitario: 250,
          precioSumado: 1750,
        },
      ],
      productoSeleccionado: [],
    };
  }
  addRow(producto) {
    this.state.indice = 1;
    var nextState = this.state;
    nextState.productosDevolucion.push(producto);
    this.setState(nextState);
  }
  b(idToSearch) {
    this.state.indice = 1;
    return this.state.productosEnBodega.filter((item) => {
      if (item.value === idToSearch) {
        this.state.productoSeleccionado = {
          name: item.name,
          value: item.value,
          codigo: item.codigo,
          cantidad: item.cantidad,
          precioUnitario: item.precioUnitario,
          precioSumado: item.precioSumado,
        };
      }
    });
  }
  eliminarProducto = (i) => {
    this.state.indice = 1;
    const items = this.state.productosDevolucion.filter((item) => item.codigo !== i);
    var nextState = this.state;
    nextState.productosDevolucion = items;
    this.setState(nextState);
  };
  handleChange(e) {
    this.state.indice = 1;
    this.b(e);
  }
  handleQuantityChange(e) {
    this.state.indice = 1;
    var nextState = this.state;
    nextState.quantity = e.target.value;
    this.setState(nextState);
  }
  agregarProductoaTabla() {
    this.state.indice = 1;
    this.addRow({
      name: this.state.productoSeleccionado.name,
      codigo: this.state.productoSeleccionado.codigo,
      cantidad: this.state.quantity,
    });
    var nextState = this.state;
    nextState.quantity = 1;
    this.setState(nextState);
  }
  render() {
    return (
      <div align="center">
        <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
          <div align="center">
            <SelectSearch
              name="productos"
              options={this.state.productosEnBodega}
              search
              placeholder="Encuentre el Producto"
              onChange={this.handleChange.bind(this)}
            />
          </div>
          <div align="center">
            <h4 style={{ display: 'inline', float: 'center' }}>Cantidad:</h4>
            <input
              style={{ float: 'center', marginLeft: '5px' }}
              type="number"
              value={this.state.quantity}
              onChange={this.handleQuantityChange.bind(this)}
            />
            <Button style={{ marginRight: '20px' }} onClick={this.agregarProductoaTabla}>
              Agregar
            </Button>
          </div>
        </div>
        <div
          style={{
            maxHeight: '300px',
            overflowY: 'auto',
          }}
        >
          <Table
            height="50"
            responsive="sm"
            striped
            bordered
            hover
            dark
            align="center"
            size="sm"
            style={{
              'padding-top': '500px',
            }}
          >
            <thead>
              <tr>
                <td className="channel-name">#</td>
                <td className="channel-name">Nombre Producto</td>
                <td className="channel-description">Codigo</td>
                <td className="channel-description">Cantidad</td>
              </tr>
            </thead>
            <tbody>
              {this.state.productosDevolucion.map((row) => (
                <tr>
                  <th>{this.state.indice++}</th>
                  <th>{row.name}</th>
                  <th>{row.codigo}</th>
                  <th>{row.cantidad}</th>
                  <th>
                    <Button
                      style={{ marginLeft: '10px' }}
                      className="btn btn-danger"
                      onClick={() => this.eliminarProducto(row.codigo)}
                    >
                      Eliminar
                    </Button>
                  </th>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <Form
          style={{
            'padding-top': '10px',
            height: '36px',
            width: '500px',
            'text-align': 'left',
          }}
        >
          <Row form>
            <Col md={6}>
              <FormGroup>
                <Label for="exampleNombreCliente">Nombre del Cliente</Label>
                <Input
                  type="text"
                  name="text"
                  id="exampleNombreCliente"
                  placeholder="Nombre del Cliente"
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
              <Input type="textarea" name="text" id="exampleText" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label for="exampleFile" sm={2}>
              File
            </Label>
            <Col sm={10}>
              <Input type="file" name="file" id="exampleFile" />
              <FormText color="muted">
                This is some placeholder block-level help text for the above input. It's a bit
                lighter and easily wraps to a new line.
              </FormText>
            </Col>
          </FormGroup>
          <FormGroup tag="fieldset" row>
            <legend className="col-form-label col-sm-2">Estado</legend>
            <Col style={{ display: 'inline', float: 'center' }} sm={10}>
              <FormGroup check>
                <Label check>
                  <Input type="radio" name="radio2" /> Nuevo
                </Label>
                <Label style={{ marginLeft: '25px' }} check>
                  <Input type="radio" name="radio2" /> Usado
                </Label>
                <Label style={{ marginLeft: '25px' }} check>
                  <Input type="radio" name="radio2" />
                  Defectuoso
                </Label>
              </FormGroup>
              <FormGroup row>
                <Label for="checkbox2" sm={2}>
                  Checkbox
                </Label>
                <Col style={{ display: 'inline', float: 'center', marginRight: '25px' }} sm={10}>
                  <FormGroup check>
                    <Label check>
                      <Input type="checkbox" id="checkbox2" /> Tienda
                    </Label>
                    <Label style={{ marginLeft: '25px' }} check>
                      <Input type="checkbox" id="checkbox1" /> Bodega
                    </Label>
                  </FormGroup>
                </Col>
              </FormGroup>
            </Col>
            <Button style={{ marginLeft: '230px' }}>Sign in</Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}
