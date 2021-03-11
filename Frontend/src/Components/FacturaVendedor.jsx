import React, { Component, useState, useEffect, alert } from 'react';
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
    },
  ]);
  const [productoSeleccionado, setproductoSeleccionado] = useState([]);
  const [productosSeleccionado, setproductosSeleccionado] = useState([]);
  const getProductos = async () => {
    await axios
      .get('http://localhost:3001/api/productos')
      .then((response) => {
        const productos = response.data;
        const productosagregados = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          productosagregados.push({
            indice: 0,
            descripcion: element.descripcion,
            value: element.value,
            codigoPrincipal: element.codigoPrincipal,
            proveedores: element.proveedores,
            precios: element.precios,
            area: element.area,
            marca: element.marca,
            _v: element._v,
            cantidad: element.cantidad,
            precioUnitario: element.precios,
            precioSumado: 0,
          });
        }
        setproductosEnBodega(productosagregados);
      })
      .catch(() => {
        alert('Error');
      });
  };
  const [sumatotal, setSumaTotal] = useState(0);
  const [impuestototal, setImpuestoTotal] = useState(0);
  const [totalfinal, setTotalFinal] = useState(0);
  const addRow = (producto) => {
    setproductosSeleccionado([...productosSeleccionado, producto]);
    result += producto.precioSumado;
    impuesto += Number(result * 0.15);
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
          descripcion: item.descripcion,
          value: item.value,
          codigoPrincipal: item.codigoPrincipal,
          cantidad: 1,
          precioUnitario: item.precios[0],
          precioSumado: 0,
        });
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
  };

  const handleValidSubmit = async () => {
    const campos = {
      subtotal: sumatotal,
      impuesto: impuestototal,
      total: totalfinal,
      productosSeleccionado: productosSeleccionado,
      nombreCliente: nombre,
      rtn: rtn,
    };
    //alert(JSON.stringify(campos));
    // await axios.post('http://localhost:3001/api/facturas', campos);
    setproductosSeleccionado([]);
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
  const updateTool = async (id) => {
    let cantidad2 = 0;
    for (let index = 0; index < productosEnBodega.length; index++) {
      const element = productosEnBodega[index];
      if (element.value === id) {
        cantidad2 = Number(element.cantidad) - Number(productoSeleccionado.cantidad);
        break;
      }
    }
    axios.put(`http://localhost:3001/api/productos/${id}`, { cantidad: cantidad2 });
  };
  const handleQuantityChange = (e) => {
    setindice(1);
    setquantity(e.target.value);
    productoSeleccionado.cantidad = quantity;
  };
  const eliminarProducto = async (i, cantidad) => {
    let cantidad2 = 0;
    getProductos();
    alert(JSON.stringify(productoSeleccionado));
    for (let index = 0; index < productosEnBodega.length; index++) {
      const element = productosEnBodega[index];
      if (element.value === i) {
        cantidad2 = Number(element.cantidad) + Number(cantidad);
        break;
      }
    }
    axios.put(`http://localhost:3001/api/productos/${i}`, { cantidad: cantidad2 });
    const items = productosSeleccionado.filter((item) => item.value !== i);
    setproductosSeleccionado(items);
    setresult(0);
    setindice(1);
    setimpuesto(0);
    settotal(0);
    setImpuestoTotal(0);
    setSumaTotal(0);
    setTotalFinal(0);
  };
  const handleChangeNombe = (event) => {
    setnombre(event.target.value);
  };
  const handleChangertn = (event) => {
    setrtn(event.target.value);
  };
  const agregarProductoaTabla = async () => {
    addRow({
      descripcion: productoSeleccionado.descripcion,
      value: productoSeleccionado.value,
      codigoPrincipal: productoSeleccionado.codigoPrincipal,
      cantidad: quantity,
      precioUnitario: Number(productoSeleccionado.precioUnitario),
      precioSumado: quantity * Number(productoSeleccionado.precioUnitario),
    });
    updateTool(productoSeleccionado.value);
  };
  const regexSoloNumeros = /^[0-9]+$/;
  return (
    <div>
      <h1 align="center">FACTURA</h1>
      <br />
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <Row>
          <h4 style={{ paddingLeft: '200px' }}>Producto:</h4>
          <Col sm={{ size: 'auto' }}>
            <div style={{ paddingLeft: '200px' }} style={{ 'margin-left': '-25px' }}>
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
          <Col style={{ paddingRight: '400px' }}>
            <div align="center">
              <h4 style={{ display: 'inline', float: 'center' }}>Cantidad:</h4>
              <input
                style={{ float: 'center', marginLeft: '5px' }}
                type="number"
                value={quantity}
                onChange={(e) => handleQuantityChange(e)}
              />
              <Button
                color="primary"
                style={{ marginLeft: '10px' }}
                onClick={agregarProductoaTabla}
              >
                Agregar
              </Button>
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
                  <th>Precio Unitario</th>
                  <th>Precio Sumado</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {productosSeleccionado.map((row, i) => (
                  <tr key={i}>
                    <th>{indice++}</th>
                    <th>{row.descripcion}</th>
                    <th>{row.codigoPrincipal}</th>
                    <th>{row.cantidad}</th>
                    <th>{row.precioUnitario}</th>
                    <th>{row.precioSumado}</th>
                    <th>
                      <Button
                        style={{ marginLeft: '10px' }}
                        className="btn btn-danger"
                        onClick={() => eliminarProducto(row.value, row.cantidad)}
                      >
                        Eliminar
                      </Button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col>
          <h2 align="center">Formulario Factura</h2>
          <div>
            <AvForm>
              <h3>Nombre</h3>
              <AvField
                className="form-control"
                type="text"
                name="nombre"
                id="nombre"
                errorMessage="Nombre Inválido"
                validate={{
                  pattern: { value: regex },
                  minLength: { value: 1 },
                }}
                style={{
                  maxWidth: '600px',
                }}
                value={nombre}
                onChange={(e) => handleChangeNombe(e)}
              />
              <h3>RTN</h3>
              <AvField
                errorMessage="RTN Inválido"
                validate={{
                  pattern: { value: regexSoloNumeros },
                  minLength: { value: 14 },
                }}
                style={{
                  maxWidth: '600px',
                }}
                maxLength="14"
                className="form-control"
                type="text"
                name="rtn"
                id="rtn"
                value={rtn}
                onChange={(e) => handleChangertn(e)}
              />
              <Button style={{ marginLeft: '10px' }} color="primary" onClick={handleValidSubmit}>
                Facturar
              </Button>
            </AvForm>
          </div>
          <div style={{ paddingTop: '100px' }}>
            <h2>Subtotal : {sumatotal.toLocaleString()} Lps.</h2>
            <h2>Impuesto 15% : {impuestototal.toLocaleString()} Lps.</h2>
            <h1>Total: {totalfinal.toLocaleString()} Lps.</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
