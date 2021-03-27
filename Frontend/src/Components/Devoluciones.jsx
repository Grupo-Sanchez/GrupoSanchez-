import React, { Component, useEffect, useState } from 'react';
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
import {
  Table,
  Modal,
  ModalBody,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from 'reactstrap';
import SelectSearch from 'react-select-search';
import axios from 'axios';
import _ from 'lodash';
import Header from './Header.jsx';
import Facturar from '../Icons/Facturar.svg';
import '../Styles/SearchBar.css';
import { ReactComponent as Check } from '../Icons/check.svg';
import Devolucion from '../Icons/Devolucion.svg';
import { Confirm } from './Confirm';
import DevolucionImprimir from './DevolucionImprimir.jsx';

export default function Devoluciones() {
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
  const [facturas, setFacturas] = useState([]);
  let [subtotal, setSubtotal] = useState(0);
  let [total, settotal] = useState(0);
  let [impuesto, setimpuesto] = useState(0);
  let [indice, setindice] = useState('');
  let [result, setresult] = useState(0);
  const [precios, setprecios] = useState([]);
  const [recibo, setrecibo] = useState([]);
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [quantity, setquantity] = useState(1);
  const [nombre, setnombre] = useState('');
  const [rtn, setrtn] = useState('');
  const [razon, setrazon] = useState('');
  const [formatopago, setformatopago] = useState('');
  const [productosDevolucion, setproductosDevolucion] = useState([]);
  const [facturaSeleccionada, setfacturaSeleccionada] = useState([]);
  const [nombreCliente, setnombreCliente] = useState('');
  const [id, setid] = useState('');
  const [estado, setestado] = useState('');
  const [checkAll, setcheckAll] = useState(false);
  let [bodegas, setBodegas] = useState([]);
  const [bodegaSel, setBodegaSel] = useState([]);
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
  /*
  write = async () => {
    const campos = {
      nombreCliente: this.state.nombreCliente,
      identificacion: this.state.identificacion,
      razonDevolucion: this.state.razonDevolucion,
      Estado: this.state.Estado,
      LugarDevolucion: this.state.LugarDevolucion,
      productosDevueltos: this.state.productosDevolucion,
    };
    await axios.post('http://localhost:3001/api/devoluciones', campos);
    window.location.reload();
  };
  componentDidMount = async () => {
    await this.getProductos();
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
    axios.put(`http://localhost:3001/api/productos/${id}`, { cantidad: cantidad2 });
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
    axios.put(`http://localhost:3001/api/productos/${i}`, { cantidad: cantidad2 });
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
  let factSele = [];
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
              bodega: element.bodega,
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
  const getFacturas = async () => {
    await axios
      .get('http://localhost:3001/api/facturas')
      .then((response) => {
        const facturas2 = response.data;
        const facturas3 = facturas2.map((obj) => ({
          ...obj,
          seleccionado: false,
        }));
        const facturas1 = facturas3.map((obj) => ({
          ...obj,
          cantidadAdevolver: 0,
        }));
        const facturasagregar = [];
        for (let index = 0; index < facturas1.length; index++) {
          const element = facturas1[index];
          for (let i = 0, len = element.productosSeleccionado.length; i < len; i++) {
            element.productosSeleccionado[i].seleccionado = false;
          }
          for (let i = 0, len = element.productosSeleccionado.length; i < len; i++) {
            element.productosSeleccionado[i].cantidadAdevolver = 0;
          }
          facturasagregar.push({
            id: element._id,
            productosSeleccionado: element.productosSeleccionado,
            subtotal: element.subtotal,
            impuesto: element.impuesto,
            value: element.invoiceNumber,
            total: element.total,
            nombreCliente: element.nombreCliente,
            identificacion: element.identificacion,
            name: element.invoiceNumber,
            fecha: element.fecha,
          });
        }
        setFacturas(facturasagregar);
      })
      .catch(() => {
        alert('Error');
      });
  };
  const fecthBodegas = async () => {
    await axios.get('http://localhost:3001/api/bodegas').then((response) => {
      const bodegasobtenidas = response.data;
      const bodegasAgregar = [];
      for (let index = 0; index < bodegasobtenidas.length; index++) {
        const element = bodegasobtenidas[index];
        bodegasAgregar.push({
          value: element._id,
          name: `Bodega ${element.numBodega}`,
        });
      }
      setBodegas(bodegasAgregar);
    });
  };
  const guardarDevolucion = () => {};
  let campos = {};

  const [cantSel, setcantSel] = useState(0);
  const handleValidSubmit = async () => {
    // alert(JSON.stringify(productosDevolucion));
    let productosSumar = [];
    //alert(JSON.stringify(bodegaSel));
    const nombreCliente2 = document.getElementById('nameCliente').value;
    const id2 = document.getElementById('Identificacion').value;
    const razonDev = document.getElementById('razonDev').value;
    for (let index = 0; index < facturas.length; index++) {
      const element = facturas[index];

      if (element.value === facturaSeleccionada.value) {
        for (let i = 0; i < element.productosSeleccionado.length; i++) {
          const fac = element.productosSeleccionado[i];
          for (let j = 0; j < productosDevolucion.length; j++) {
            const facSel = productosDevolucion[j];
            if (facSel.seleccionado && fac.value === facSel.value) {
              fac.cantidad -= facSel.cantidadAdevolver;
            }
            productosSumar.push(facSel);
          }
        }
      }
    }
    // alert(JSON.stringify(productosSumar));
    let bodencontrada = false;
    for (let i = 0; i < productosEnBodega.length; i++) {
      const element = productosEnBodega[i];
      for (let j = 0; j < productosSumar.length; j++) {
        const element2 = productosSumar[j];
        if (element.value === element2.value) {
          for (let k = 0; k < element.bodega.length; k++) {
            const element3 = element.bodega[k];
            if (element3.value === bodegaSel.value && !bodencontrada) {
              element3.cantBodega =
                Number(element3.cantBodega) + Number(element2.cantidadAdevolver);
              element.cantidad += Number(element2.cantidadAdevolver);
              bodencontrada = true;
            }
          }
        }
      }
    }
    let productosFacturaNueva = [];
    let productosDevueltos = [];
    let nuevototal = 0;
    let nuevosubtotal = 0;
    let nuevoimpuesto = 0;
    for (let index = 0; index < productosDevolucion.length; index++) {
      const element = productosDevolucion[index];
      if (element.cantidadAdevolver > 0) {
        element.precioSumado = Number(element.cantidad) * Number(element.precioUnitario);
        productosDevueltos.push({
          name: element.name,
          value: element.value,
          codigoPrincipal: element.codigoPrincipal,
          precioUnitario: element.precioUnitario,
          precioSumado: Number(element.cantidadAdevolver) * Number(element.precioUnitario),
          cantidadAdevolver: element.cantidadAdevolver,
        });
      }
      nuevosubtotal += Number(element.cantidad) * Number(element.precioUnitario);
      if (!element.exento) {
        nuevoimpuesto += Number(element.precioSumado) * 0.15;
      }
    }
    nuevototal = Number(nuevosubtotal) + Number(nuevoimpuesto);
    for (let index = 0; index < productosDevolucion.length; index++) {
      const element = productosDevolucion[index];
      if (element.cantidad > 0) {
        productosFacturaNueva.push({
          name: element.name,
          value: element.value,
          codigoPrincipal: element.codigoPrincipal,
          cantidad: element.cantidad,
          precioUnitario: element.precioUnitario,
          precioSumado: element.precioSumado,
          exento: element.exento,
        });
      }
    }
    await axios
      .put(`http://localhost:3001/api/facturas/${facturaSeleccionada.id}`, {
        productosSeleccionado: productosFacturaNueva,
        subtotal: nuevosubtotal,
        impuesto: nuevoimpuesto,
        total: nuevototal,
        fecha: new Date(),
      })
      .catch((error) => {
        alert(error);
      });
    for (let index = 0; index < productosEnBodega.length; index++) {
      const element = productosEnBodega[index];
      axios
        .put(`http://localhost:3001/api/productos/${element.value}`, {
          bodega: element.bodega,
          cantidad: element.cantidad,
        })
        .then((res) => {
          //  alert(JSON.stringify(res.data));
        })
        .catch((error) => {
          alert(error);
        });
    }
    campos = {
      subtotal: nuevosubtotal,
      impuesto: nuevoimpuesto,
      total: nuevototal,
      productosSeleccionado: productosFacturaNueva,
      nombreCliente: nombreCliente2,
      identificacion: id2,
      razon: razonDev,
      invoiceNumber: facturaSeleccionada.name,
      fecha: new Date(),
      estado: estado,
    };
    if (productosFacturaNueva.length !== 0) {
      setrecibo(campos);
    } else {
      Confirm.open({
        title: 'Exito',
        message: 'Productos devueltos exitosamente',
        onok: () => {},
      });
    }
    setModalModificarPrecios(true);
    const campos2 = {
      nombreCliente: nombreCliente2,
      identificacion: id2,
      razonDevolucion: razonDev,
      Estado: estado,
      LugarDevolucion: 'Bodega',
      productosDevueltos: productosDevueltos,
    };
    await axios.post('http://localhost:3001/api/devoluciones', campos2);
    getFacturas();
    setproductosDevolucion([]);
    setBodegaSel([]);
    fecthBodegas();
    setcantSel(0);
    document.getElementById('nameCliente').value = '';
    document.getElementById('Identificacion').value = '';
    document.getElementById('razonDev').value = '';
  };
  const b = (idToSearch) => {
    setindice(1);
    facturas.filter((item) => {
      if (item.value === idToSearch) {
        setproductosDevolucion(item.productosSeleccionado);

        factSele = item;
        setnombreCliente(item.nombreCliente);
        if (item.identificacion !== '----------') {
          setid(item.identificacion);
        } else {
          setid('');
        }
      }
      return 0;
    });
    setfacturaSeleccionada(factSele);
  };

  const cantpro = () => {
    if (checkAll) {
      setcantSel(productosDevolucion.length);
    } else {
      setcantSel(0);
    }
  };
  const todosTrue = async () => {
    productosDevolucion.map((row) => (row.seleccionado = !checkAll));
    setcheckAll(!checkAll);
    for (let index = 0; index < productosDevolucion.length; index++) {
      const element = productosDevolucion[index];
      if (!checkAll) {
        document.getElementById(`select${element.codigoPrincipal}`).value = element.cantidad;
        element.cantidadAdevolver = element.cantidad;
        setcantSel(productosDevolucion.length);
        productosDevolucion.seleccionado = true;
        document.getElementById(`select${element.codigoPrincipal}`).disabled = false;
        document.getElementById(`checkbox_pro${element.codigoPrincipal}`).checked = true;
      } else {
        document.getElementById(`select${element.codigoPrincipal}`).value = 1;
        document.getElementById(`select${element.codigoPrincipal}`).disabled = true;
        setcantSel(0);
        productosDevolucion.seleccionado = false;
        document.getElementById(`checkbox_pro${element.codigoPrincipal}`).checked = false;
      }
    }
    if (checkAll) {
      document.getElementById('cantidadDisp2').value = productosDevolucion.length;
    } else {
      document.getElementById('cantidadDisp2').value = 0;
    }
  };
  const unoTrue = (item) => {
    const es = false;
    item.seleccionado = !item.seleccionado;
    let cant = Number(document.getElementById('cantidadDisp2').value);
    if (item.seleccionado) {
      setcantSel(cant + 1);
      if (cant === productosDevolucion.length - 1) {
        document.getElementById('checkbox2').checked = true;
        setcheckAll(!es);
        for (let index = 0; index < productosDevolucion.length; index++) {
          const element = productosDevolucion[index];
          document.getElementById(`checkbox_pro${element.codigoPrincipal}`).checked = true;
          document.getElementById(`select${element.codigoPrincipal}`).value = element.cantidad;
          element.cantidadAdevolver = element.cantidad;
        }
      } else {
        item.cantidadAdevolver = 1;
      }
      document.getElementById(`select${item.codigoPrincipal}`).disabled = false;
    } else {
      setcantSel(cant - 1);
      setcheckAll(false);
      item.cantidadAdevolver = 0;
      document.getElementById('checkbox2').checked = false;
      document.getElementById(`select${item.codigoPrincipal}`).value = 1;
      document.getElementById(`select${item.codigoPrincipal}`).disabled = true;
    }
  };
  const handleChange = (e) => {
    setindice(1);
    b(e);
    document.getElementById('checkbox2').checked = false;
    setcheckAll(false);
    for (let index = 0; index < productosDevolucion.length; index++) {
      const element = productosDevolucion[index];
      document.getElementById(`checkbox_pro${element.codigoPrincipal}`).checked = false;
      document.getElementById('cantidadDisp2').value = 0;
      document.getElementById(`select${element.codigoPrincipal}`).value = 1;
      document.getElementById(`select${element.codigoPrincipal}`).disabled = true;
      setcantSel(0);
    }
  };
  const handleChange2 = (e) => {
    //alert(e);
    bodegas.filter((item) => {
      if (item.value === e) {
        setBodegaSel(item);
      }
      return 0;
    });
    //alert(JSON.stringify(bodegaSel));
  };
  useEffect(() => {
    getProductos();
    getFacturas();
    fecthBodegas();
  }, []);
  const cantidadSel = (e, codPrincipal) => {
    const cant = e.target.value;
    for (let index = 0; index < productosDevolucion.length; index++) {
      const element = productosDevolucion[index];
      if (element.codigoPrincipal === codPrincipal) {
        element.cantidadAdevolver = cant;
        break;
      }
    }
  };
  return (
    <div class="hide-on-print">
      <Modal style={{ width: '500px' }} isOpen={ModalModificarPrecios}>
        <ModalBody>
          <DevolucionImprimir
            productos={recibo}
            change={() => setModalModificarPrecios(!ModalModificarPrecios)}
          />
        </ModalBody>
      </Modal>
      <h1 align="center">DEVOLUCIONES</h1>
      <br />
      <div style={{ display: 'inline-block', position: 'relative', width: '100%' }}>
        <Row>
          <h4 style={{ marginLeft: '140px' }}>Factura:</h4>
          <Col style={{ marginLeft: '-200px' }}>
            <div align="center">
              <SelectSearch
                search
                options={facturas}
                placeholder="Encuentre la Factura"
                onChange={(e) => handleChange(e)}
              />
            </div>
          </Col>
          <br />
          <Col style={{ marginLeft: '550px', marginTop: '-25px' }}>
            <div align="center">
              <Row style={{ paddingTop: '10px' }}>
                <h5 style={{ display: 'inline', float: 'center' }}>
                  Cantidad Productos en Factura:
                </h5>
                <input
                  style={{
                    float: 'center',
                    marginLeft: '8px',
                    'border-radius': '26px',
                    width: '100px',
                  }}
                  type="number"
                  id="cantidadDisp"
                  disabled={true}
                  value={productosDevolucion ? productosDevolucion.length : ''}
                />
              </Row>
              <Row style={{ paddingTop: '10px' }}>
                <h5 style={{ display: 'inline', float: 'center' }}>
                  Cantidad Productos a Devolver:
                </h5>
                <input
                  style={{
                    float: 'center',
                    marginLeft: '8px',
                    'border-radius': '26px',
                    width: '100px',
                  }}
                  type="number"
                  id="cantidadDisp2"
                  disabled={true}
                  value={cantSel}
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
            <Table
              height="50"
              responsive="sm"
              striped
              bordered
              hover
              align="center"
              size="lg"
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
                  <th>Descripción</th>
                  <th>Código</th>
                  <th>Cantidad</th>
                  <th>Precio Unitario</th>
                  <th>Precio Sumado</th>
                  <th>
                    Cantidad a <br />
                    Devolver
                  </th>
                  <th style={{ width: '100px' }}>
                    <Label check>
                      <Input onClick={() => todosTrue()} type="checkbox" id="checkbox2" />{' '}
                      <Check width="30px" height="30px" />
                    </Label>
                  </th>
                </tr>
              </thead>
              <tbody>
                {productosDevolucion.map((row, i) => (
                  <tr key={i}>
                    <th>{row.name}</th>
                    <th>{row.codigoPrincipal}</th>
                    <th>{row.cantidad}</th>
                    <th>{row.precioUnitario}</th>
                    <th>{row.precioSumado}</th>
                    <th>
                      <FormGroup>
                        <Input
                          style={{
                            float: 'center',
                            marginLeft: '8px',
                            'border-radius': '26px',
                            width: '100px',
                          }}
                          align="center"
                          type="select"
                          name="select"
                          disabled={true}
                          id={`select${row.codigoPrincipal}`}
                          onChange={(e) => cantidadSel(e, row.codigoPrincipal)}
                        >
                          {_.times(row.cantidad, (i2) => (
                            <>
                              <option
                                style={{
                                  float: 'center',
                                  marginLeft: '8px',
                                  'border-radius': '26px',
                                  width: '100px',
                                }}
                              >
                                {i2 + 1}
                              </option>
                            </>
                          ))}
                        </Input>
                      </FormGroup>
                    </th>
                    <th>
                      <Label check>
                        <Input
                          type="checkbox"
                          id={`checkbox_pro${row.codigoPrincipal}`}
                          onClick={() => unoTrue(row)}
                        />
                        <Check width="30px" height="30px" />
                      </Label>
                    </th>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </Col>
        <Col style={{ marginTop: '-15px' }}>
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
              <Label style={{ marginLeft: '-5px', fontWeight: 'bold' }} for="examplenameCliente">
                Nombre del Cliente
              </Label>
              <FormGroup>
                <Input
                  style={{
                    display: 'flex',
                    'align-items': 'flex-start',
                    'flex-wrap': 'wrap',
                    'min-height': '40px',
                    width: '320px',
                    border: '1px solid #0052cc',
                    'border-radius': '26px',
                    padding: '0 8px',
                    marginLeft: '20px',
                  }}
                  type="text"
                  name="text"
                  id="nameCliente"
                  placeholder="Nombre del Cliente"
                  //onChange={(event) =>
                  //  this.setState({ nombreCliente: event.target.value, indice: 1 })
                  // }
                />
              </FormGroup>
            </Row>
            <Row>
              <Label style={{ marginLeft: '3px', fontWeight: 'bold' }} for="exampleIdentificacion">
                Identificacion
              </Label>
              <Col md={6}>
                <AvForm>
                  <FormGroup>
                    <AvInput
                      style={{
                        display: 'flex',
                        'align-items': 'flex-start',
                        'flex-wrap': 'wrap',
                        'min-height': '40px',
                        width: '320px',
                        border: '1px solid #0052cc',
                        'border-radius': '26px',
                        padding: '0 8px',
                        marginLeft: '30px',
                      }}
                      max={14}
                      type="text"
                      name="text"
                      id="Identificacion"
                      placeholder="Identificacion del Cliente"
                    />
                  </FormGroup>
                </AvForm>
              </Col>
            </Row>
            <FormGroup row>
              <Label style={{ fontWeight: 'bold' }}>
                Razon de
                <br /> Devolucion
              </Label>
              <Col>
                <Input
                  style={{
                    height: '120px',
                    'border-radius': '26px',
                    marginLeft: '70px',
                    width: '320px',
                    border: '1px solid #0052cc',
                  }}
                  type="textarea"
                  name="text"
                  id="razonDev"
                />
              </Col>
            </FormGroup>
            <FormGroup tag="fieldset" row>
              <Row style={{ marginLeft: '15px' }} form>
                <Col>
                  <legend
                    style={{ fontWeight: 'bold', marginLeft: '-20px' }}
                    classname="col-form-label col-sm-2"
                  >
                    Estado
                  </legend>
                  <FormGroup check>
                    <div>
                      <Label check>
                        <Input onChange={() => setestado('Nuevo')} type="radio" name="radio2" />{' '}
                        Nuevo
                      </Label>
                    </div>
                    <div>
                      <Label check>
                        <Input onChange={() => setestado('Usado')} type="radio" name="radio2" />{' '}
                        Usado
                      </Label>
                    </div>
                    <div>
                      <Label check>
                        <Input
                          onChange={() => setestado('Defectuoso')}
                          type="radio"
                          name="radio2"
                        />
                        Defectuoso
                      </Label>
                    </div>
                  </FormGroup>
                </Col>
                {/*<Col style={{ marginLeft: '50px' }}>
                  <legend classname="col-form-label col-sm-2">Checkbox</legend>
                  <FormGroup check>
                    <Label check>
                      <Input
                        //onChange={(event) => this.setState({ LugarDevolucion: 'Tienda', indice: 1 })}
                        type="checkbox"
                        id="checkbox2"
                      />{' '}
                      Tienda
                    </Label>
                    <Label check>
                      <Input
                        //onChange={(event) => this.setState({ LugarDevolucion: 'Bodega', indice: 1 })}
                        type="checkbox"
                        id="checkbox1"
                      />{' '}
                      Bodega
                    </Label>
                  </FormGroup>
                </Col>*/}
              </Row>
            </FormGroup>
            <Row>
              <Label style={{ fontWeight: 'bold' }} classname="col-form-label col-sm-2">
                Bodega
              </Label>
              <Col style={{ marginRight: '60px' }}>
                <div align="center">
                  <SelectSearch
                    search
                    maxHeight="100px"
                    options={bodegas}
                    placeholder="Elija la bodega a la que perteneceran"
                    onChange={(e) => handleChange2(e)}
                  />
                </div>
              </Col>
            </Row>
            <br />
            <br />
            <Row>
              <Button
                color="primary"
                style={{
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'green',
                  border: '2px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  position: 'relative',
                  cursor: 'pointer',
                  top: '15px',
                  marginLeft: '-15px',
                }}
                onClick={handleValidSubmit}
              >
                Procesar Devolucion
              </Button>
            </Row>
          </Form>
        </Col>
      </Row>
    </div>
  );
}
