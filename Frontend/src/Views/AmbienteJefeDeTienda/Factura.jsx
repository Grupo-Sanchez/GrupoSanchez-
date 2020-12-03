import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
import SelectSearch from 'react-select-search';
import './SearchBar.css';
export default class Facturas extends Component {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.segundoPrecio = this.segundoPrecio.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.agregarProductoaTabla = this.agregarProductoaTabla.bind(this);
    this.eliminarProducto = this.eliminarProducto.bind(this);
    this.state = {
      subtotal: 0,
      total: 0,
      indice: 1,
      precios: [],
      quantity: 1,
      productosDevolucion: [],
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
      productosSeleccionado: [
        {
          indice: 0,
          name: 'Taladro',
          value: 'tala',
          codigo: '36579',
          cantidad: 20,
          precioUnitario: 250,
          precioSumado: 5000,
        },
      ],
      productoSeleccionado: '',
    };
  }
  addRow(producto) {
    var nextState = this.state;
    nextState.productosSeleccionado.push(producto);
    this.setState(nextState);
  }
  b(idToSearch) {
    this.state.productosEnBodega.filter((item) => {
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
  handleChange(e) {
    this.state.indice = 1;
    this.b(e);
  }
  segundoPrecio() {
    alert('Segundo Precio Autorizado');
  }
  handleQuantityChange(e) {
    this.state.indice = 1;
    var nextState = this.state;
    nextState.quantity = e.target.value;
    this.setState(nextState);
  }
  eliminarProducto = (i) => {
    this.state.indice = 1;
    const items = this.state.productosSeleccionado.filter((item) => item.codigo !== i);
    var nextState = this.state;
    nextState.productosSeleccionado = items;
    this.setState(nextState);
  };
  agregarProductoaTabla() {
    this.state.indice = 1;
    this.addRow({
      name: this.state.productoSeleccionado.name,
      value: this.state.productoSeleccionado.value,
      codigo: this.state.productoSeleccionado.codigo,
      cantidad: this.state.quantity,
      precioUnitario: this.state.productoSeleccionado.precioUnitario,
      precioSumado: this.state.quantity * this.state.productoSeleccionado.precioUnitario,
    });
    var nextState = this.state;
    nextState.quantity = 1;
    this.setState(nextState);
  }
  render() {
    const result = this.state.productosSeleccionado.reduce(function (prev, current) {
      return prev + current.precioSumado;
    }, 0);
    const impuesto = result * (15 / 100);
    const total = result + impuesto;
    return (
      <div>
        <h1 align="center">FACTURA</h1>
        <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
          <div align="center">
            <SelectSearch
              search
              placeholder="Encuentre el Producto a Facturar"
              options={this.state.productosEnBodega}
              onChange={this.handleChange}
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
            maxHeight: '500px',
            overflowY: 'auto',
          }}
        >
          <Table height="50" responsive="sm" striped bordered hover dark align="center" size="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre Producto</th>
                <th>Codigo</th>
                <th>Cantidad</th>
                <th>Precio Unitario</th>
                <th>Precio Sumado</th>
              </tr>
            </thead>
            <tbody>
              {this.state.productosSeleccionado.map((row, i) => (
                <tr key={i}>
                  <th>{(row.indice = this.state.indice++)}</th>
                  <th>{row.name}</th>
                  <th>{row.codigo}</th>
                  <th>{row.cantidad}</th>
                  <th>{row.precioUnitario}</th>
                  <th>{row.precioSumado}</th>
                  <th>
                    <Button onClick={this.segundoPrecio}>Autorizar 2do Precio</Button>
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
        <h1>Subtotal : {result.toLocaleString()} Lps.</h1>
        <h2>Impuesto 15% : {impuesto.toLocaleString()} Lps.</h2>
        <h2>Total: {total.toLocaleString()} Lps.</h2>
      </div>
    );
  }
}
