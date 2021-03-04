import React, { Component, useState, useEffect } from 'react';
import { Button, Table, Row, Col, Label, FormGroup } from 'reactstrap';
import axios from 'axios';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import SelectSearch from 'react-select-search';
import '../Styles/SearchBarVendedor.css';
import { ReactComponent as Plus } from '../Icons/plus.svg';
import { ReactComponent as Delete } from '../Icons/delete.svg';
import { ReactComponent as SegundoPrecio } from '../Icons/SegundoPrecio.svg';

const regex = /^[ña-zA-Z0-9\u00E0-\u00FC-\s]+$/;
export default function Facturas() {
  let [subtotal, setSubtotal] = useState(0);
  let [total, settotal] = useState(0);
  let [impuesto, setimpuesto] = useState(0);
  let [indice, setindice] = useState('');
  let [result, setresult] = useState(0);
  const [precios, setprecios] = useState([]);
  const [quantity, setquantity] = useState(1);
  const [nombre, setnombre] = useState('');
  const [rtn, setrtn] = useState('');
  const [formatopago, setformatopago] = useState('');
  const [productosDevolucion, setproductosDevolucion] = useState([]);
  const [productosEnBodega, setproductosEnBodega] = useState([
    {
      indice: 0,
      descripcion: '',
      value: '',
      codigoPrincipal: '',
      cantidad: 0,
      precioUnitario: 0,
      precioSumado: 0,
      exento: false,
    },
  ]);
  const [productoSeleccionado, setproductoSeleccionado] = useState([]);
  const [productosAfacturar, setproductosAfacturar] = useState([]);
  const getProductos = async () => {
    await axios
      .get('http://localhost:3001/api/productos')
      .then((response) => {
        const productos = response.data;
        const productosagregados = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          if (element.cantidad > 0) {
            productosagregados.push({
              indice: 0,
              name: element.descripcion,
              value: element._id,
              codigoPrincipal: element.codigoPrincipal,
              proveedores: element.proveedores,
              precios: element.precios,
              area: element.area,
              marca: element.marca,
              _v: element._v,
              cantidad: element.cantidad,
              precioUnitario: element.precios,
              precioSumado: 0,
              exento: element.productoExento,
            });
          }
        }
        setproductosEnBodega(productosagregados);
      })
      .catch(() => {
        alert('Error');
      });
  };
  const [cantidadmax, setCantidadmax] = useState(1);
  const [sumatotal, setSumaTotal] = useState(0);
  const [impuestototal, setImpuestoTotal] = useState(0);
  const [totalfinal, setTotalFinal] = useState(0);
  const addRow = (producto) => {
    result += producto.precioSumado;
    if (productoSeleccionado.exento) {
      impuesto += 0;
    } else {
      impuesto += Number(result * 0.15);
    }
    setproductosAfacturar([...productosAfacturar, producto]);
    total += result + impuesto;
    setSumaTotal(result + sumatotal);
    setImpuestoTotal(impuesto + impuestototal);
    setTotalFinal(total + totalfinal);
    setindice(1);
    setquantity(1);
  };

  const b = (idToSearch) => {
    productosEnBodega.filter((item) => {
      if (item.value === idToSearch) {
        setproductoSeleccionado({
          name: item.name,
          value: item.value,
          codigoPrincipal: item.codigoPrincipal,
          cantidad: 1,
          precioUnitario: item.precios[0],
          precioSumado: 0,
          exento: item.exento,
        });
        setCantidadmax(item.cantidad);
      }
      return 0;
    });
  };
  useEffect(() => {
    getProductos();
  }, []);

  const handleChange = (e) => {
    setindice(1);
    b(e);
    setquantity(1);
  };

  const handleValidSubmit = async () => {
    const campos = {
      subtotal: sumatotal,
      impuesto: impuestototal,
      total: totalfinal,
      productosAfacturar: productosAfacturar,
      nombreCliente: nombre,
      rtn: rtn,
    };
    // await axios.post('http://localhost:3001/api/facturas', campos);
    setproductosAfacturar([]);
    setresult(0);
    setindice(1);
    setimpuesto(0);
    settotal(0);
    setImpuestoTotal(0);
    setSumaTotal(0);
    setTotalFinal(0);
    setnombre('');
    setrtn('');
    setquantity(1);
    setproductoSeleccionado({});
  };
  function paddingAvInput() {
    return {
      'margin-left': '15px',
      'border-radius': '26px',
      width: '250px',
    };
  }
  function paddingAvInputCantidadDisponible() {
    return {
      'margin-left': '25px',
      'border-radius': '26px',
      width: '80px',
    };
  }
  const segundoPrecio = (codigo) => {
    setindice(1);
    for (let index = 0; index < productosAfacturar.length; index++) {
      const element = productosAfacturar[index];
      if (element.codigoPrincipal === codigo) {
        for (let i = 0; i < productosEnBodega.length; i++) {
          const element2 = productosEnBodega[i];
          if (element.codigoPrincipal === element2.codigoPrincipal) {
            if (element.precioUnitario !== element2.precios[1]) {
              result -= (element.precioUnitario - element2.precios[1]) * element.cantidad;
              impuesto += Number(result * 0.15);
              total += result + impuesto;
              setSumaTotal(result + sumatotal);
              setImpuestoTotal(impuesto + impuestototal);
              setTotalFinal(total + totalfinal);
              element.precioUnitario = element2.precios[1];
              element.precioSumado = element.cantidad * element.precioUnitario;
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
  const updateTool = async (id) => {
    let cantidad2 = 0;
    for (let index = 0; index < productosEnBodega.length; index++) {
      const element = productosEnBodega[index];
      if (element.value === id) {
        cantidad2 = Number(element.cantidad) - quantity;
        break;
      }
    }
    //axios.put(`http://localhost:3001/api/productos/${id}`, { cantidad: cantidad2 }).then().catch();
    setproductoSeleccionado([]);
    setCantidadmax(1);
    await getProductos();
  };

  const eliminarProducto = async (i, cantidad) => {
    getProductos();
    let cantidad2 = 0;
    for (let index = 0; index < productosEnBodega.length; index++) {
      const element = productosEnBodega[index];
      if (element.value === i) {
        cantidad2 = Number(element.cantidad) + Number(cantidad);
        break;
      }
    }
    function styleButtonSegundoPrecio() {
      return {
        'background-color': 'transparent',
        border: 'none',
        position: 'absolute',
        top: '35px',
        marginLeft: '-40px',
        'font-size': '18px',
        'border-radius': '26px',
        'box-shadow': 'none',
      };
    }
    function styleButtonEliminar() {
      return {
        'background-color': 'transparent',
        border: 'none',
        position: 'absolute',
        top: '35px',
        marginLeft: '-15px',
        'font-size': '18px',
        'border-radius': '26px',
        'box-shadow': 'none',
      };
    }
    const items = productosAfacturar.filter((item) => item.value !== i);
    setproductosAfacturar(items);
    setresult(0);
    setindice(1);
    setimpuesto(0);
    settotal(0);
    setImpuestoTotal(0);
    setSumaTotal(0);
    setTotalFinal(0);
    setproductoSeleccionado([]);
    setCantidadmax(1);
    getProductos();
  };
  const handleChangeNombe = (event) => {
    setnombre(event.target.value);
  };
  const handleChangertn = (event) => {
    setrtn(event.target.value);
  };
  const agregarProductoaTabla = async () => {
    addRow({
      name: productoSeleccionado.name,
      value: productoSeleccionado.value,
      codigoPrincipal: productoSeleccionado.codigoPrincipal,
      cantidad: quantity,
      precioUnitario: Number(productoSeleccionado.precioUnitario),
      precioSumado: quantity * Number(productoSeleccionado.precioUnitario),
    });
    updateTool(productoSeleccionado.value);
  };
  function limit() {
    const temp = document.getElementById('cantidad');
    const maxValue = cantidadmax;
    temp.value = Math.min(maxValue, temp.value);
  }
  const handleQuantityChange = (e) => {
    const num = document.getElementById('cantidad').value;
    const num2 = cantidadmax;
    if (num > num2) {
      document.getElementById('cantidad').onchange = limit;
    }
    setquantity(e.target.value);
    setindice(1);
    productoSeleccionado.cantidad = quantity;
  };
  const manejarCambiocantmin = (e, n) => {};
  const regexSoloNumeros = /^[0-9]+$/;
  return (
    <div>
      <h1 align="center">FACTURA</h1>
      <br />
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <Row>
          <h4 style={{ paddingLeft: '200px' }}>Producto:</h4>
          <Col>
            <div style={{ 'margin-left': '-25px' }}>
              <SelectSearch
                search
                placeholder="Encuentre el Producto a Facturar"
                options={productosEnBodega}
                onChange={(e) => handleChange(e)}
                value={productoSeleccionado.value}
              />
            </div>
          </Col>
          <br />
          <label style={{ marginLeft: '380px', marginTop: '5px' }}>Cantidad</label>
          <Col style={{ paddingRight: '-100px' }}>
            <div>
              <Row>
                <AvForm>
                  <AvField
                    style={paddingAvInput()}
                    type="number"
                    name="name1"
                    id="cantidad"
                    max={cantidadmax}
                    min={1}
                    value={quantity}
                    onChange={(e) => handleQuantityChange(e)}
                  />
                  <Button
                    style={{
                      'background-color': 'transparent',
                      border: 'none',
                      position: 'absolute',
                      top: '-13px',
                      left: '285px',
                      outline: 'none',
                      'box-shadow': 'none',
                    }}
                    onClick={() => agregarProductoaTabla()}
                  >
                    <Plus width="40px" height="50px" />
                  </Button>
                </AvForm>
              </Row>
              <label style={{ marginLeft: '-80px' }}>
                Cantidad <br />
                Disponible
              </label>
              <input
                style={paddingAvInputCantidadDisponible()}
                type="number"
                id="cantidadDisp"
                disabled={true}
                value={cantidadmax}
              />
            </div>
          </Col>
        </Row>
        <br />
      </div>
      <br />
      <h3 style={{ 'margin-left': '862px' }}>Formulario Cliente</h3>
      <Row>
        <Col>
          <div
            style={{
              maxHeight: '750px',
              overflowY: 'auto',
              paddingLeft: '100px',
            }}
          >
            <Table
              responsive
              striped
              hover
              align="center"
              size="sm"
              id="myTable"
              style={{
                width: '1000px',
                'border-collapse': 'separate',
                border: 'solid #ccc 2px',
                '-moz-border-radius': '26px',
                '-webkit-border-radius': '26px',
                'border-radius': '26px',
                '-webkit-box-shadow': '0 1px 1px #ccc',
                '-moz-box-shadow': '0 1px 1px #ccc',
                'box-shadow': '0 1px 1px #ccc',
              }}
            >
              <thead>
                <tr>
                  <th>Cantidad</th>
                  <th>Descripcion</th>
                  <th>Precio</th>
                  <th>Total</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {productosAfacturar.map((row, i) => (
                  <tr key={i}>
                    <th>{row.cantidad}</th>
                    <th>{row.name}</th>
                    <th>{row.precioUnitario}</th>
                    <th>{row.precioSumado}</th>
                    <th style={{ width: '200px' }}>
                      <Button
                        style={{
                          'background-color': 'transparent',
                          border: 'none',
                          marginLeft: '0px',
                          'box-shadow': 'none',
                        }}
                        onClick={() => segundoPrecio(row.codigoPrincipal)}
                      >
                        <SegundoPrecio width="30px" height="30px" />
                      </Button>
                      <Button
                        style={{
                          'background-color': 'transparent',
                          border: 'none',
                          marginLeft: '-5px',
                          'box-shadow': 'none',
                        }}
                        onClick={() => eliminarProducto(row.value, row.cantidad)}
                      >
                        <Delete fill="#dc0000" width="30px" height="30px" />
                      </Button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <label style={{ marginLeft: '120px', marginTop: '30px' }}>Nombre</label>
          <div>
            <label style={{ marginLeft: '120px', marginTop: '25px' }}>RTN</label>
          </div>
        </Col>
        <Col style={{ marginLeft: '-380px' }}>
          <br />
          <div>
            <AvForm>
              <AvField
                style={{
                  'margin-left': '-15px',
                  'border-radius': '26px',
                  width: '250px',
                }}
                className="form-control"
                type="text"
                name="nombre"
                id="nombre"
                errorMessage="Nombre Inválido"
                validate={{
                  pattern: { value: regex },
                  minLength: { value: 1 },
                }}
                value={nombre}
                onChange={(e) => handleChangeNombe(e)}
              />
              <AvField
                errorMessage="RTN Inválido"
                validate={{
                  pattern: { value: regexSoloNumeros },
                  minLength: { value: 14 },
                }}
                style={{
                  'margin-left': '-15px',
                  'border-radius': '26px',
                  width: '250px',
                }}
                maxLength="14"
                className="form-control"
                type="text"
                name="rtn"
                id="rtn"
                value={rtn}
                onChange={(e) => handleChangertn(e)}
              />
              <Button
                style={{ marginLeft: '70px', borderRadius: '25px' }}
                color="primary"
                onClick={handleValidSubmit}
              >
                Facturar
              </Button>
            </AvForm>
          </div>
          <div style={{ paddingTop: '80px', marginLeft: '-81px' }}>
            <h2>Subtotal : {sumatotal.toLocaleString()} Lps.</h2>
            <h2>Impuesto 15% : {impuestototal.toLocaleString()} Lps.</h2>
            <h1>Total: {totalfinal.toLocaleString()} Lps.</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
