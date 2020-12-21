import React, { Component } from 'react';
import { Button, Table } from 'reactstrap';
import SelectSearch from 'react-select-search';
import axios from 'axios';
import '../Styles/SearchBar.css';

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
    const nextState = this.state;
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
      return 0;
    });
  }
  componentDidMount = async () => {
    await this.getProductos();
  };
  getProductos = async () => {
    await axios
      .get('http://Localhost:3001/api/productos')
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
            precioUnitario: element.precios,
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
  handleChange(e) {
    this.state.indice = 1;
    this.b(e);
  }
  segundoPrecio = (codigo) => {
    const nextState = this.state;
    this.state.indice = 1;
    for (let index = 0; index < nextState.productosSeleccionado.length; index++) {
      const element = nextState.productosSeleccionado[index];
      if (element.codigo === codigo) {
        for (let i = 0; i < nextState.productosEnBodega.length; i++) {
          const element2 = nextState.productosEnBodega[i];
          if (element.codigo === element2.codigos[0]) {
            if (element.precioUnitario !== element2.precioUnitario[1]) {
              element.precioUnitario = element2.precioUnitario[1];
              element.precioSumado = element.cantidad * element.precioUnitario;
              this.setState(nextState);
              alert('Segundo Precio Aplicado');
              break;
            } else {
              alert('El segundo precio ya fue aplicado');
              break;
            }
          }
        }
      }
    }
  };

  write = async () => {
    const newLine = '\r\n';
    const campos = {
      subtotal: this.state.result,
      impuesto: this.state.impuesto,
      total: this.state.total,
      productosSeleccionado: this.state.productosSeleccionado,
    };
    await axios.post('http://Localhost:3001/api/facturas', campos);
    window.location.reload();
  };
  updateTool = async (id) => {
    let cantidad2 = 0;
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === id) {
        cantidad2 = Number(element.cantidad) - Number(this.state.productoSeleccionado.cantidad);
        break;
      }
    }
    axios.put(`http://Localhost:3001/api/productos/${id}`, { cantidad: cantidad2 });
  };
  handleQuantityChange(e) {
    this.state.indice = 1;
    const nextState = this.state;
    nextState.quantity = e.target.value;
    nextState.productoSeleccionado.cantidad = nextState.quantity;
    this.setState(nextState);
  }
  eliminarProducto = async (i, cantidad) => {
    let cantidad2 = 0;
    await this.getProductos();
    for (let index = 0; index < this.state.productosEnBodega.length; index++) {
      const element = this.state.productosEnBodega[index];
      if (element.value === i) {
        cantidad2 = Number(element.cantidad) + Number(cantidad);
        break;
      }
    }
    axios.put(`http://Localhost:3001/api/productos/${i}`, { cantidad: cantidad2 });
    const items2 = this.state.productosSeleccionado.filter((item) => item.value !== i);
    const nextState = this.state;
    this.state.result = 0;
    this.state.indice = 1;
    this.state.impuesto = 0;
    this.state.total = 0;
    nextState.productosSeleccionado = items2;
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
    const nextState = this.state;
    nextState.quantity = 1;
    this.setState(nextState);
  }
  render() {
    this.state.result = this.state.productosSeleccionado.reduce(
      (prev, current) => prev + current.precioSumado,
      0,
    );
    this.state.impuesto = this.state.result * (15 / 100);
    this.state.total = this.state.result + this.state.impuesto;
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
              {this.state.productosSeleccionado.map((row, i) => (
                <tr key={i}>
                  <th>{this.state.indice++}</th>
                  <th>{row.name}</th>
                  <th>{row.codigo}</th>
                  <th>{row.cantidad}</th>
                  <th>{row.precioUnitario}</th>
                  <th>{row.precioSumado}</th>
                  <th>
                    <Button onClick={() => this.segundoPrecio(row.codigo)}>
                      Autorizar 2do Precio
                    </Button>
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
