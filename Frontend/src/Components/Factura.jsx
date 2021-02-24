import React, { Component, useState, useEffect } from 'react';
import {
  Button,
  Table,
  Row,
  Col,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
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
import FacturaImprimir from './FacturaImprimir.jsx';
import '../Styles/SearchBarVendedor.css';
import { Confirm } from './Confirm';

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
  let invNum = require('invoice-number');
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [productosDevolucion, setproductosDevolucion] = useState([]);
  const [recibo, setrecibo] = useState([]);
  const [productosEnBodega, setproductosEnBodega] = useState([
    {
      indice: 0,
      name: '',
      value: '',
      codigo: '',
      cantidad: 0,
      precioUnitario: 0,
      precioSumado: 0,
    },
  ]);
  const [facturas, setfacturas] = useState([]);
  const fecthFacturas = () => {
    axios.get('http://localhost:3001/api/facturas').then((response) => {
      setfacturas(response.data);
    });
  };
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
          if (element.cantidad > 0) {
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
    setproductosSeleccionado([...productosSeleccionado, producto]);
  };

  const b = (idToSearch) => {
    productosEnBodega.filter((item) => {
      if (item.value === idToSearch) {
        setproductoSeleccionado({
          name: item.name,
          value: item.value,
          codigo: item.codigos[0],
          cantidad: 1,
          precioUnitario: item.precios[0],
          precioSumado: 0,
        });
        setCantidadmax(item.cantidad);
      }
      return 0;
    });
  };
  useEffect(() => {
    getProductos();
    fecthFacturas();
  }, []);

  const handleChange = (e) => {
    setindice(1);
    b(e);
    setquantity(1);
  };
  let campos = {};
  const handleValidSubmit = async () => {
    if (rtn.length !== 14 && rtn !== '') {
      Confirm.open({
        title: 'Error',
        message: 'Campo de RTN invalido',
        onok: () => {},
      });
    } else {
      if (productosSeleccionado.length !== 0) {
        let nombretemp = nombre;
        let rtntemp = rtn;
        if (nombre === '') {
          nombretemp = '----------';
        }
        if (rtn === '') {
          rtntemp = '----------';
        }
        //let numeroFactura = invNum.next('10000000');
        //alert(numeroFactura);
        campos = {
          subtotal: sumatotal,
          impuesto: impuestototal,
          total: totalfinal,
          productosSeleccionado: productosSeleccionado,
          nombreCliente: nombretemp,
          identificacion: rtntemp,
          invoiceNumber: Number(facturas[facturas.length - 1].invoiceNumber) + 1,
          fecha: new Date(),
        };
        setrecibo(campos);
        await axios.post('http://localhost:3001/api/facturas', campos);
        fecthFacturas();
        setModalModificarPrecios(true);
      } else {
        Confirm.open({
          title: 'Error',
          message: 'Debe tener productos seleccionados para poder facturar',
          onok: () => {},
        });
      }
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
    }
  };

  const segundoPrecio = (codigo) => {
    setindice(1);
    for (let index = 0; index < productosSeleccionado.length; index++) {
      const element = productosSeleccionado[index];
      if (element.codigo === codigo) {
        for (let i = 0; i < productosEnBodega.length; i++) {
          const element2 = productosEnBodega[i];
          if (element.codigo === element2.codigos[0]) {
            if (element.precioUnitario !== element2.precios[1]) {
              result -= (element.precioUnitario - element2.precios[1]) * element.cantidad;
              impuesto += Number(result * 0.15);
              total += result + impuesto;
              setSumaTotal(result + sumatotal);
              setImpuestoTotal(impuesto + impuestototal);
              setTotalFinal(total + totalfinal);
              element.precioUnitario = element2.precios[1];
              element.precioSumado = element.cantidad * element.precioUnitario;
              Confirm.open({
                title: 'Descuento',
                message: '¡Segundo Precio Aplicado!',
                onok: () => {},
              });
              break;
            } else {
              Confirm.open({
                title: 'Error',
                message: 'El segundo precio ya fue aplicado!',
                onok: () => {},
              });
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
    // alert(cantidad2);
    //axios.put(`http://localhost:3001/api/productos/${i}`, { cantidad: cantidad2 });
    const items = productosSeleccionado.filter((item) => item.value !== i);
    setproductosSeleccionado(items);
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
    let sumar = false;
    for (let index = 0; index < productosSeleccionado.length; index++) {
      const element = productosSeleccionado[index];
      if (element.codigo === productoSeleccionado.codigo) {
        element.cantidad = Number(Number(quantity) + Number(element.cantidad));
        element.precioSumado = Number(element.precioUnitario) * element.cantidad;
        sumar = true;
        break;
      }
    }
    if (!sumar) {
      addRow({
        name: productoSeleccionado.name,
        value: productoSeleccionado.value,
        codigo: productoSeleccionado.codigo,
        cantidad: quantity,
        precioUnitario: Number(productoSeleccionado.precioUnitario),
        precioSumado: quantity * Number(productoSeleccionado.precioUnitario),
      });
    }
    result += quantity * Number(productoSeleccionado.precioUnitario);
    impuesto += Number(result * 0.15);
    total += result + impuesto;
    setSumaTotal(result + sumatotal);
    setImpuestoTotal(impuesto + impuestototal);
    setTotalFinal(total + totalfinal);
    setindice(1);
    setquantity(1);
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
    <div class="hide-on-print">
      <Modal isOpen={ModalModificarPrecios}>
        <ModalBody>
          <FacturaImprimir
            productos={recibo}
            change={() => setModalModificarPrecios(!ModalModificarPrecios)}
          />
        </ModalBody>
      </Modal>
      <h1 align="center">FACTURA</h1>
      <br />
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <Row>
          <h4 style={{ paddingLeft: '200px' }}>Producto:</h4>
          <Col>
            <div align="center">
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
          <Col style={{ paddingRight: '100px' }}>
            <div align="center">
              <Row>
                <h4 style={{ display: 'inline', float: 'center' }}>Cantidad:</h4>
                <input
                  style={{ float: 'center', marginLeft: '5px', width: '200px' }}
                  type="number"
                  id="cantidad"
                  max={cantidadmax}
                  min={1}
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
              </Row>
              <Row style={{ paddingTop: '10px' }}>
                <h5 style={{ display: 'inline', float: 'center' }}>Cantidad Disponible:</h5>
                <input
                  style={{ float: 'center', marginLeft: '5px', width: '150px' }}
                  type="number"
                  id="cantidadDisp"
                  disabled={true}
                  value={cantidadmax}
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
                  <th>Precio Unitario</th>
                  <th>Precio Sumado</th>
                  <th>Accion</th>
                </tr>
              </thead>
              <tbody>
                {productosSeleccionado.map((row, i) => (
                  <tr key={i}>
                    <th>{indice++}</th>
                    <th>{row.name}</th>
                    <th>{row.codigo}</th>
                    <th>{row.cantidad}</th>
                    <th>{row.precioUnitario}</th>
                    <th>{row.precioSumado}</th>
                    <th>
                      <Button color="primary" onClick={() => segundoPrecio(row.codigo)}>
                        Autorizar 2do Precio
                      </Button>
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
              <Button
                style={{ marginLeft: '10px' }}
                color="primary"
                onClick={() =>
                  Confirm.open({
                    title: '!Advertencia!',
                    message: '¿Esta seguro de que tiene todos los productos en la factura?',
                    onok: () => {
                      handleValidSubmit();
                    },
                  })
                }
              >
                Facturar
              </Button>
            </AvForm>
          </div>
          <div style={{ paddingTop: '100px' }}>
            <h2>Subtotal : L. {sumatotal.toLocaleString()}</h2>
            <h2>Impuesto 15% : L. {impuestototal.toLocaleString()}</h2>
            <h1>Total: L. {totalfinal.toLocaleString()}</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}
