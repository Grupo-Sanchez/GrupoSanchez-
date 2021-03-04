import React, { Component, useState } from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table, Container, Row, Col } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Facturar from '../Icons/Facturar.svg';

import SelectSearch from 'react-select-search';
import '../Styles/SearchBarVendedor.css';
import axios from 'axios';

const items = [
  {
    name: 'Facturar',
    to: '/Vendedor/Facturacion',
    icon: <img src={Facturar} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
];
export default class Facturas extends Component {
  constructor(props) {
    super(props);
    this.addRow = this.addRow.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleQuantityChange = this.handleQuantityChange.bind(this);
    this.agregarProductoaTabla = this.agregarProductoaTabla.bind(this);
    this.eliminarProducto = this.eliminarProducto.bind(this);
    this.state = {
      subtotal: 0,
      total: 0,
      impuesto: 0,
      indice: 1,
      result: 0,
      precios: [],
      quantity: 1,
      productosDevolucion: [],
      productosEnBodega: [
        {
          indice: 0,
          name: '',
          value: '',
          codigo: '',
          cantidad: 0,
          precioUnitario: 0,
          precioSumado: 0,
        },
      ],
      productoSeleccionado: [],
      productosSeleccionado: [],
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
          codigo: item.codigos[0],
          cantidad: 1,
          precioUnitario: item.precioUnitario[0],
          precioSumado: item.precioSumado,
        };
      }
    });
  }
  componentDidMount = async () => {
    await this.getProductos();
  };
  getProductos = async () => {
    await axios
      .get('http://178.128.67.247:3001/api/productos')
      .then((response) => {
        const productos = response.data;
        var productosagregados = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          console.log(index + ': ' + element.name);
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
            precioUnitario: element.precios,
            precioSumado: 0,
          });
        }
        var nextState = this.state;
        nextState.productosEnBodega = productosagregados;
        this.setState(nextState);
      })
      .catch(() => {
        alert('Error');
      });
  };
  handleChange(e) {
    this.state.indice = 1;
    this.b(e);
  }

  write = async () => {
    var newLine = '\r\n';
    const campos = {
      subtotal: this.state.result,
      impuesto: this.state.impuesto,
      total: this.state.total,
      productosSeleccionado: this.state.productosSeleccionado,
    };
    await axios.post('http://178.128.67.247:3001/api/facturas', campos);
    window.location.reload();
  };
  updateTool = async (id) => {
    var cantidad2 = 0;
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === id) {
        cantidad2 = Number(element.cantidad) - Number(this.state.productoSeleccionado.cantidad);
        break;
      }
    }
    axios
      .put(`http://178.128.67.247:3001/api/productos/${id}`, { cantidad: cantidad2 })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
  };
  handleQuantityChange(e) {
    this.state.indice = 1;
    var nextState = this.state;
    nextState.quantity = e.target.value;
    nextState.productoSeleccionado.cantidad = nextState.quantity;
    this.setState(nextState);
  }
  eliminarProducto = async (i, cantidad) => {
    var cantidad2 = 0;
    await this.getProductos();
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === i) {
        cantidad2 = Number(element.cantidad) + Number(cantidad);
        break;
      }
    }

    axios
      .put(`http://178.128.67.247:3001/api/productos/${i}`, { cantidad: cantidad2 })
      .then(function (response) {})
      .catch(function (error) {
        console.log(error);
      });
    const items = this.state.productosSeleccionado.filter((item) => item.value !== i);
    var nextState = this.state;
    nextState.productosSeleccionado = items;
    this.state.result = 0;
    this.state.indice = 1;
    this.state.impuesto = 0;
    this.state.total = 0;
    this.setState(nextState);
  };
  agregarProductoaTabla() {
    this.state.indice = 1;

    this.addRow({
      name: this.state.productoSeleccionado.name,
      value: this.state.productoSeleccionado.value,
      codigo: this.state.productoSeleccionado.codigo,
      cantidad: this.state.productoSeleccionado.cantidad,
      precioUnitario: Number(this.state.productoSeleccionado.precioUnitario),
      precioSumado:
        this.state.productoSeleccionado.cantidad * this.state.productoSeleccionado.precioUnitario,
    });
    this.updateTool(this.state.productoSeleccionado.value);
    var nextState = this.state;
    nextState.quantity = 1;
    this.setState(nextState);
  }
  render() {
    if (this.state.productosSeleccionado && this.state.productosSeleccionado.length) {
      //your code here
      this.state.result = this.state.productosSeleccionado.reduce(function (prev, current) {
        return prev + current.precioSumado;
      }, 0);
      this.state.impuesto = this.state.result * (15 / 100);
      this.state.total = this.state.result + this.state.impuesto;
    }
    return (
      <div>
        <div>
          <Container fluid style={{ padding: '0' }}>
            <Row noGutters>
              <Col>
                <Header items={items} />
              </Col>
            </Row>
            <Row noGutters></Row>
          </Container>
        </div>
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
            maxHeight: '450px',
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
              {this.state.productosSeleccionado &&
                this.state.productosSeleccionado.map((row, i) => (
                  <tr key={i}>
                    <th>{(row.indice = this.state.indice++)}</th>
                    <th>{row.name}</th>
                    <th>{row.codigo}</th>
                    <th>{row.cantidad}</th>
                    <th>{row.precioUnitario}</th>
                    <th>{row.precioSumado}</th>
                    <th>
                      <Button
                        style={{ marginLeft: '10px' }}
                        className="btn btn-danger"
                        onClick={() => this.eliminarProducto(row.value, row.cantidad)}
                      >
                        Eliminar
                      </Button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </Table>
        </div>
        <div>
          <h1>Subtotal : {this.state.result.toLocaleString()} Lps.</h1>
          <h2>Impuesto 15% : {this.state.impuesto.toLocaleString()} Lps.</h2>
          <h2>Total: {this.state.total.toLocaleString()} Lps.</h2>
          <div style={{ 'text-align': 'center' }}>
            <Button
              color="primary"
              style={{
                width: '100px',
                height: '50px',
                'font-weight': 'bold',
              }}
              onClick={this.write}
            >
              Facturar
            </Button>
          </div>
        </div>
      </div>
    );
  }
}
