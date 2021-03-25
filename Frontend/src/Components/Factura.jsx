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
  Alert,
} from 'reactstrap';
import axios from 'axios';
import _ from 'lodash';
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
import { Confirm } from './Confirm';
import FacturaImprimir from './FacturaImprimir.jsx';

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
  const [seleccionoBodega, setSeleccionoBodega] = useState(false);
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
  const options = [
    { value: 'Code', name: 'Código' },
    { value: 'BarCode', name: 'Código de Barra' },
    { value: 'Nombre', name: 'Descripción' },
  ];
  const [bodegasProductoSeleccionado, setbodegasProductoSeleccionado] = useState([]);
  const [valueBodegaProducto, setvalueBodegaProducto] = useState([]);
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [recibo, setrecibo] = useState([]);
  const [productoSeleccionado, setproductoSeleccionado] = useState([]);
  const [productosAfacturar, setproductosAfacturar] = useState([]);
  const [facturas, setfacturas] = useState([]);
  const fecthFacturas = () => {
    axios.get('http://localhost:3001/api/facturas').then((response) => {
      setfacturas(response.data);
    });
  };
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
              descripcion: element.descripcion,
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
  const getProductosPorCodigo = async () => {
    await axios
      .get('http://localhost:3001/api/productos')
      .then((response) => {
        const productos = response.data;
        const productosagregadosPorCodigo = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          if (element.cantidad > 0) {
            productosagregadosPorCodigo.push({
              indice: 0,
              name: element.codigoPrincipal,
              value: element._id,
              descripcion: element.descripcion,
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
        setproductosEnBodega(productosagregadosPorCodigo);
      })
      .catch(() => {
        alert('Error');
      });
  };
  const getProductosPorCodigoDeBarra = async () => {
    await axios
      .get('http://localhost:3001/api/productos')
      .then((response) => {
        const productos = response.data;
        const productosagregadosPorCodigoDeBarra = [];
        for (let index = 0; index < productos.length; index++) {
          const element = productos[index];
          if (element.cantidad > 0) {
            productosagregadosPorCodigoDeBarra.push({
              indice: 0,
              name: element.codigoBarra,
              value: element._id,
              descripcion: element.descripcion,
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
        setproductosEnBodega(productosagregadosPorCodigoDeBarra);
      })
      .catch(() => {
        alert('Error');
      });
  };
  const [cantidadmax, setCantidadmax] = useState('');
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
    setbodegasProductoSeleccionado([]);
    setCantidadmax('');
    setvalueBodegaProducto([]);
    let bodegasTemp = [];
    productosEnBodega.filter((item) => {
      if (item.value === idToSearch) {
        setproductoSeleccionado({
          name: item.name,
          value: item.value,
          descripcion: item.descripcion,
          codigoPrincipal: item.codigoPrincipal,
          cantidad: 1,
          precioUnitario: item.precios[0],
          precioSumado: 0,
          exento: item.exento,
          bodega: item.bodega,
        });
        if (item.bodega.length === 0) {
          setCantidadmax(item.cantidad);
          setSeleccionoBodega(true);
        } else {
          //setbodegasProductoSeleccionado(item.bodega);
          setSeleccionoBodega(false);
          bodegasTemp = item.bodega;
        }
      }
      return 0;
    });
    setbodegasProductoSeleccionado(bodegasTemp.filter((item) => item.cantBodega > 0));
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
  const handleChangeOpcionDeBusqueda = (e) => {
    if (e === 'Code') {
      getProductosPorCodigo();
    } else if (e === 'BarCode') {
      getProductosPorCodigoDeBarra();
    } else if (e === 'Nombre') {
      getProductos();
    }
  };
  const tempOpciones = '';
  const [bodegaSeleccionada, setbodegaSeleccionada] = useState('');
  const [idBodega, setidBodega] = useState('');
  const handleChangeBodega = (e) => {
    setindice(1);
    setquantity(1);
    bodegasProductoSeleccionado.filter((item) => {
      if (item.value === e) {
        setidBodega(e);
        setCantidadmax(item.cantBodega);
        setSeleccionoBodega(true);
        setbodegaSeleccionada(item);
      }
      return 0;
    });
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
      if (productosAfacturar.length !== 0) {
        let nombretemp = nombre;
        let rtntemp = rtn;
        if (nombre === '') {
          nombretemp = 'Consumidor Final';
        }
        if (rtn === '') {
          rtntemp = '----------';
        }
        //let numeroFactura = invNum.next('10000000');
        campos = {
          subtotal: sumatotal,
          impuesto: impuestototal,
          total: totalfinal,
          productosSeleccionado: productosAfacturar,
          nombreCliente: nombretemp,
          identificacion: rtntemp,
          invoiceNumber: Number(facturas[facturas.length - 1].invoiceNumber) + 1,
          fecha: new Date(),
        };
        for (let i = 0; i < productosEnBodega.length; i++) {
          const element = productosEnBodega[i];
          if (element.bodega.length === 0) {
            axios.put(`http://localhost:3001/api/productos/${element.value}`, {
              cantidad: element.cantidad,
            });
          } else {
            axios.put(`http://localhost:3001/api/productos/${element.value}`, {
              bodega: element.bodega,
            });
          }
        }
        getProductos();
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
    }
  };
  function paddingAvInput() {
    return {
      'margin-left': '15px',
      'border-radius': '26px',
      width: '80px',
    };
  }
  function paddingAvInputCantidadDisponible() {
    return {
      'margin-left': '0px',
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
            if (element2.precios[1]) {
              if (element.precioUnitario !== element2.precios[1]) {
                result -= (element.precioUnitario - element2.precios[1]) * element.cantidad;
                if (element2.exento) {
                  impuesto += 0;
                } else {
                  impuesto += Number(result * 0.15);
                }
                total += result + impuesto;
                setSumaTotal(result + sumatotal);
                setImpuestoTotal(impuesto + impuestototal);
                setTotalFinal(total + totalfinal);
                element.precioUnitario = element2.precios[1];
                element.precioSumado = element.cantidad * element.precioUnitario;
                Confirm.open({
                  title: '',
                  message: 'Segundo precio aplicado!',
                  onok: () => {},
                });
                break;
              } else {
                Confirm.open({
                  title: '',
                  message: 'El segundo precio ya fue aplicado.',
                  onok: () => {},
                });
                break;
              }
            } else {
              Confirm.open({
                title: '',
                message: 'No existe un segundo precio para este producto.',
                onok: () => {},
              });
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
    result = 0;
    total = 0;
    impuesto = 0;
    setCantidadmax(1);
    for (let index = 0; index < items.length; index++) {
      const element = items[index];
      result += element.precioUnitario * element.cantidad;
      if (element.exento) {
        impuesto += 0;
      } else {
        impuesto += Number(result * 0.15);
      }
      total += result + impuesto;
    }
    setSumaTotal(result);
    setImpuestoTotal(impuesto);
    setTotalFinal(total);
    setproductosAfacturar(items);
    getProductos();
  };
  const handleChangeNombe = (event) => {
    setnombre(event.target.value);
  };
  const handleChangertn = (event) => {
    setrtn(event.target.value);
  };
  const cantidadSel = (e, codPrincipal) => {
    const cant = e.target.value;
    for (let index = 0; index < productosAfacturar.length; index++) {
      const element = productosAfacturar[index];
      if (element.codigoPrincipal === codPrincipal) {
        element.cantidad = cant;
        element.precioSumado = Number(element.precioUnitario) * cant;
        break;
      }
    }
    /*const tempTot = 0;
    let tempImp = 0;
    const tempSubTot = 0;
    setSumaTotal(0);
    for (let index = 0; index < productosAfacturar.length; index++) {
      const element = productosAfacturar[index];
      setSumaTotal(Number(productosAfacturar.precioSumado) + sumatotal);
      if (!element.exento) {
        tempImp += Number(element.precioSumado) * 0.15;
      }
    }
    alert(tempSubTot);
    setImpuestoTotal(Number(tempImp));
    setTotalFinal(Number(tempSubTot + tempImp));
    */
  };
  const agregarProductoaTabla = async () => {
    let sumar = false;
    let producto = [];
    if (productoSeleccionado.length !== 0) {
      for (let index = 0; index < productosAfacturar.length; index++) {
        const element = productosAfacturar[index];
        if (element.codigoPrincipal === productoSeleccionado.codigoPrincipal) {
          element.cantidad = Number(Number(quantity) + Number(element.cantidad));
          result -= element.precioSumado;
          element.precioSumado = Number(element.precioUnitario) * element.cantidad;
          producto = element;
          sumar = true;
          break;
        }
      }
      if (!seleccionoBodega) {
        Confirm.open({
          title: 'Error',
          message: 'Debe elegir una bodega primero.',
          onok: () => {},
        });
      } else {
        if (bodegaSeleccionada) {
          productoSeleccionado.bodega = [];
          productoSeleccionado.bodega = bodegaSeleccionada;
          productoSeleccionado.bodega.cantBodega = cantidadmax;
        } else {
          productoSeleccionado.cantidadInventario = cantidadmax;
        }

        if (!sumar) {
          addRow({
            name: productoSeleccionado.descripcion,
            value: productoSeleccionado.value,
            codigoPrincipal: productoSeleccionado.codigoPrincipal,
            cantidad: quantity,
            bodega: productoSeleccionado.bodega,
            cantidadInventario: productoSeleccionado.cantidadInventario,
            precioUnitario: Number(productoSeleccionado.precioUnitario),
            precioSumado: quantity * Number(productoSeleccionado.precioUnitario),
            exento: productoSeleccionado.exento,
          });
          setSeleccionoBodega(false);
        } else {
          result += producto.precioSumado;
          if (productoSeleccionado.exento) {
            impuesto += 0;
          } else {
            impuesto += Number(result * 0.15);
          }
          total += result + impuesto;
          setSumaTotal(result + sumatotal);
          setImpuestoTotal(impuesto + impuestototal);
          setTotalFinal(total + totalfinal);
          setindice(1);
          setquantity(1);
        }
        /*
        if (productoSeleccionado.bodega.length === 0) {
          for (let index = 0; index < productosEnBodega.length; index++) {
            const element = productosEnBodega[index];
            if (element.value === productoSeleccionado.value) {
              element.cantidad -= quantity;
              break;
            }
          }
        } else {
          for (let index = 0; index < productosEnBodega.length; index++) {
            const element = productosEnBodega[index];
            if (element.value === productoSeleccionado.value) {
              for (let index2 = 0; index2 < element.bodega.length; index2++) {
                const element2 = element.bodega[index2];
                if (element2.value === idBodega) {
                  element2.cantBodega -= quantity;
                  break;
                }
              }
            }
          }
        }
        */
        setproductosEnBodega(
          productosEnBodega.filter(
            (item) => item.codigoPrincipal !== productoSeleccionado.codigoPrincipal,
          ),
        );
        setbodegasProductoSeleccionado([]);
        setvalueBodegaProducto([]);
        setproductoSeleccionado([]);
        setCantidadmax('');
      }
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Debe elegir un producto primero.',
        onok: () => {},
      });
    }
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
        <Row style={{ 'font-size': '23px' }}>
          <h style={{ paddingLeft: '200px' }}>
            Opción de <br />
            búsqueda
          </h>
          <Col style={{ maxWidth: '390px' }}>
            <div style={{ 'margin-left': '-25px' }}>
              <SelectSearch
                search
                placeholder="Elija opción de búsqueda"
                options={options}
                value={tempOpciones}
                onChange={(e) => handleChangeOpcionDeBusqueda(e)}
              />
            </div>
          </Col>
          <label style={{ marginLeft: '15px', position: 'relative' }}>Encuentre el Producto</label>
          <Col style={{ marginLeft: '-50px' }}>
            <SelectSearch
              search
              placeholder="Encuentre el Producto"
              options={productosEnBodega}
              onChange={(e) => handleChange(e)}
              value={productoSeleccionado.value}
            />
          </Col>
          <br />
          <label style={{ marginLeft: '-85px', marginTop: '5px' }}>Cantidad</label>
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
                      left: '110px',
                      outline: 'none',
                      'box-shadow': 'none',
                    }}
                    onClick={() => agregarProductoaTabla()}
                  >
                    <Plus width="40px" height="50px" />
                  </Button>
                </AvForm>
              </Row>
              <Row>
                <Col style={{ top: '10px' }}>
                  <AvForm>
                    <AvField
                      style={paddingAvInputCantidadDisponible()}
                      type="number"
                      name="name1"
                      id="cantidadDisp"
                      disabled={true}
                      value={cantidadmax}
                    />
                  </AvForm>
                </Col>
                <Col>
                  <label style={{ marginLeft: '-360px', top: '50px' }}>
                    Cantidad <br />
                    Disponible
                  </label>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
        <Row style={{ 'font-size': '23px' }}>
          <Col style={{ marginLeft: '184px', top: '-45px' }}>
            <h>Bodega</h>
          </Col>
          <Col style={{ marginLeft: '-1540px', top: '-45px' }}>
            <SelectSearch
              search
              placeholder="Seleccione la bodega del Producto"
              options={bodegasProductoSeleccionado}
              onChange={(e) => handleChangeBodega(e)}
              value={valueBodegaProducto}
            />
          </Col>
        </Row>
        <br />
      </div>
      <br />
      <h3 style={{ 'margin-left': '945px' }}>Formulario Cliente</h3>
      <Row>
        <Col style={{ marginTop: '-45px' }}>
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
                          id={`select${row.codigoPrincipal}`}
                          onChange={(e) => cantidadSel(e, row.codigoPrincipal)}
                        >
                          {_.times(
                            row.cantidadInventario ? row.cantidadInventario : row.bodega.cantBodega,
                            (i2) => (
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
                            ),
                          )}
                        </Input>
                      </FormGroup>
                    </th>
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
          <label style={{ marginLeft: '160px', marginTop: '30px', 'font-size': '23px' }}>
            Nombre
          </label>
          <div>
            <label style={{ marginLeft: '160px', marginTop: '15px', 'font-size': '23px' }}>
              RTN
            </label>
          </div>
        </Col>
        <Col style={{ marginLeft: '-250px', top: '10px' }}>
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
