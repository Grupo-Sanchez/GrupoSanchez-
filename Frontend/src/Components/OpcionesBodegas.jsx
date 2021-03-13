import React, { useState, useEffect } from 'react';
import {
  Modal,
  Input,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  CustomInput,
  Table,
  Row,
  Col,
  Container,
} from 'reactstrap';
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
import axios from 'axios';
import '../Styles/InterfazProducto.css';
import CardBodega from './CartaBodega';
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';
import { ReactComponent as Plus } from '../Icons/plus.svg';
import home from '../Icons/warehouse.png';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';
import { ReactComponent as BasureroLogo } from '../Icons/delete.svg';

const OpcionesBodegas = (props) => {
  const formulario = [];
  const [Proseleccionado, setProSeleccionado] = useState({
    descripcion: '',
    area: '',
    codigos: [],
    proveedores: [],
    codigoPrincipal: '',
    marca: [],
    precio: [],
    cantidad: 1,
    bodega: [],
    codigoBarra: '',
    descripcion_larga: '',
    cantidad_minima: 1,
    productoExento: false,
  });
  const [dataBodegas, setDataBodegas] = useState(formulario);
  const [dataproductos, setDataproductos] = useState([]);
  const [dataProductosFinal, setDataProductosFinal] = useState([]);
  const [dataproductosDelete, setDataproductosDelete] = useState([]);
  const [ModalProductos, setModalProductos] = useState(false);
  const [ModalCrearBodega, setModalCrearBodega] = useState(false);
  const [ModalModificarBodega, setModalModificarBodega] = useState(false);
  const [ModalMigrarProducto, setModalMigrarProducto] = useState(false);
  const [productos, setProductos] = useState([]);
  const [CantMigrar, setCantMigrar] = useState();
  let cant;
  let InfoMigracion;
  const [existencia, setExistencia] = useState(0);
  const [ProductoMigrar, setProductoMigrar] = useState(); //Producto que se migrara
  const [BodegaProducto, setBodegaProducto] = useState(); //En que bodega esta el producto a migrar

  const [BodegaModificar, setBodegaModificar] = useState({
    numBodega: '',
    descripcion: '',
    encargado: '',
  });

  const [formBodega, setformBodega] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
  });
  const [BodegaSeleccionada, setBodegaSeleccionada] = useState({
    _id: '',
    numBodega: '',
    descripcion: '',
    encargado: '',
  });

  //Metodo para abrir modal de crear bodega
  const AbrirModelBodegas = () => {
    setModalCrearBodega(true);
  };
  //Cancelar la creacion de una bodega
  const CancelarBodega = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        formBodega.numBodega = 0;
        formBodega.Description = '';
        formBodega.Encargado = '';
        setModalCrearBodega(false);
      },
    });
  };
  //Metodo para invalidar creacion de una bodega
  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  //Metodo para crear una bodega
  async function handleValidSubmit(event, values) {
    const campos = {
      numBodega: values.numBodega,
      descripcion: values.Description,
      encargado: values.Encargado,
    };
    await axios
      .post('http://Localhost:3001/api/bodegas', campos)
      .then((res) => {
        if (res.data.message) {
          Confirm.open({
            title: 'aviso',
            message: 'El numero de bodega ya existe',
            onok: () => {},
          });
        } else {
          Confirm.open({
            title: '!exito!',
            message: 'Gestion realizada correctamente',
            onok: () => {},
          });
          setModalCrearBodega(false);
        }
      })
      .catch((error) => {
        Confirm.open({
          title: 'error',
          message: 'ha ocurrido un error',
          onok: () => {},
        });
      });
  }
  //Revisar que el producto tenga la bodega
  const poseeBodega = () => {
    return false;
  };

  //MIGRACION DE UNA BODEGA
  async function handleValidMigrar(event, values) {
    let NewProduct;
    let newBodega;
    const MigrarProducto = {
      CantMigrar: values.requeridos,
      bodegaMigrar: values.bodegaMigrar, //id de bodega donde se migrara
    };
    let intento = MigrarProducto.bodegaMigrar;
    if (MigrarProducto.bodegaMigrar === BodegaSeleccionada._id) {
      Confirm.open({
        title: 'aviso',
        message: 'No puede migrar a la misma bodega',
        onok: () => {},
      });
    } else if (existencia === `${MigrarProducto.CantMigrar}`) {
      let temp = [];
      let bandera = 0;
      let existe = false;
      for (let i = 0; i < ProductoMigrar.bodega.length; i++) {
        if (ProductoMigrar.bodega[i].value === ProductoMigrar.bodega[BodegaProducto].value) {
          console.log('No se agrega bodega');
        } else {
          temp[bandera] = ProductoMigrar.bodega[i];
        }
        if (ProductoMigrar.bodega[i].value === intento) {
          existe = true;
        }
      }
      NewProduct = ProductoMigrar;
      NewProduct.bodega = temp; //YA SE PUEDE MANDAR AL FETCH
      // alert(JSON.stringify(temp));
      if (existe === true) {
        for (let i = 0; i < ProductoMigrar.bodega.length; i++) {
          if (ProductoMigrar.bodega[i].value === intento) {
            let total =
              parseInt(ProductoMigrar.bodega[i].cantBodega, 10) + parseInt(existencia, 10);
            NewProduct.bodega[i].cantBodega = total;
          }
        }
      } else {
        // alert('ENTRO AL ELSE');
        let total = existencia;
        newBodega = {
          name: '..',
          value: MigrarProducto.bodegaMigrar,
          numPasillo: '12',
          cantBodega: total,
        };
        NewProduct.bodega.push(newBodega);
      }

      //////
      //////
      /////ACA SE DEBE ACTUALIZAR EL PRODUCTO, SE TIENE QUE ACTUALIZAR NEW PRODUCT, DENTRO DE ESTE IF
      /////
      ///// EL NUEVO PRODUCTO ES (NewProduct)
      ////
      /////SOLO SE DEBE ACTUALIZAR, NADA MAS.
    } else {
      Confirm.open({
        title: 'aviso',
        message: 'SE VA A IMPLEMENTAR PRONTO',
        onok: () => {},
      });
    }
    setModalMigrarProducto(false);
  }

  //Metodo para modificar una bodega
  async function handleValidSubmitModificar(event, value) {
    const Id = BodegaModificar._id;
    const payload = { value: BodegaModificar._id, name: value.numBodega };
    axios
      .put(`http://Localhost:3001/api/bodegas/${Id}`, {
        numBodega: value.numBodega,
        descripcion: value.Description,
        encargado: value.Encargado,
      })
      .then((res) => {
        if (res.data.message) {
          Confirm.open({
            title: 'aviso',
            message: 'El numero de bodega ya existe',
            onok: () => {},
          });
        } else {
          Confirm.open({
            title: '!exito!',
            message: 'Bodega modificada correctamente',
            onok: () => {},
          });
          setModalModificarBodega(false);
        }
      })
      .catch((error) => {
        Confirm.open({
          title: 'error',
          message: 'ha ocurrido un error',
          onok: () => {},
        });
      });
    setModalModificarBodega(false);
  }

  //Bodega que el usuario esta gestionando

  //Formulario que esta contenido toda la bodega
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
  });

  //Metodo para cargar las bodegas al inicializar la pantalla
  const fecthDataBodegas = async () => {
    await axios.get('http://Localhost:3001/api/bodegas').then((response) => {
      setDataBodegas(response.data);
    });
  };

  //Metodo para cargar los productos de bodega seleccionada
  const fecthDataProductos = (e) => {
    axios.get(`http://Localhost:3001/api/bodegas/filter/${e}`).then((response) => {
      setDataproductos(response.data);
    });
  };

  const fecthDataProductosDelete = async (e) => {
    await axios.get(`http://Localhost:3001/api/bodegas/filter/${e}`).then((response) => {
      setDataproductosDelete(response.data);
    });
  };

  useEffect(() => {
    fecthDataBodegas();
  }, []);

  //controlador de las card de las bodegas
  const handleChange = (e) => {
    setformBodega({
      ...formBodega,
      [e.target.name]: e.target.value,
    });
  };

  //Abril modal donde se listan las bodegas
  const CerrarModalTablaProductos = () => {
    setModalProductos(false);
  };

  //Cuando se presiona click a una bodega
  const ListadoBodegas = (bod) => {
    setBodegaSeleccionada(bod); //Bodega seleccionada
    fecthDataProductos(bod._id); //Selecciono todos los productos de la bodega, con la cantidad actualizada
    setModalProductos(true); //abrir el modal de los productos de la bodega seleccionada
  };

  //Abrir modal para modificar una bodega.
  const ModificarBodega = (i) => {
    setBodegaModificar(i);
    fecthDataProductosDelete(i._id);
    setModalModificarBodega(true);
  };
  const onDelete = (memberId) => {
    axios.delete(`http://178.128.67.247:3001/api/bodegas/${memberId}`);
  };

  //Metodo para eliminar una bodega, se verifica si hay un prodcuto en dicha bodega seleccionada
  const EliminarBodega = (bodega) => {
    if (dataproductosDelete.length === 0) {
      onDelete(BodegaModificar._id);
      Confirm.open({
        title: '!exito!',
        message: 'Bodega eliminada exitosamente! ',
        onok: () => {},
      });
      setModalModificarBodega(false);
    } else {
      Confirm.open({
        title: '!error!',
        message: 'Bodega no puede ser eliminada, debido a que contiene productos.',
        onok: () => {},
      });
    }
  };

  //Cancelar la creacion de una bodega
  const CancelarBodegaModificar = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        formBodega.numBodega = 0;
        formBodega.Description = '';
        formBodega.Encargado = '';
        setModalMigrarProducto(false);
      },
    });
  };
  //Muestra los datos de migracion
  const modalAntesDeMigrar = (bodega, producto) => {
    setModalMigrarProducto(true);
    setExistencia(dataproductos[producto].bodega[bodega].cantBodega); //Existencia a migrar
    setProductoMigrar(dataproductos[producto]); // Producto a migrar
    setBodegaProducto(bodega);
  };

  //metodo para obtener el id de la bodega seleccionada
  const manejarCombobox = (e) => {};

  function paddingAvInput() {
    return {
      'border-radius': '26px',
      'text-align-last': 'center',
    };
  }
  function paddingAvInput2() {
    return {
      'border-radius': '26px',
      width: '260px',
      height: '41px',
      'text-align-last': 'center',
      margin: '0 auto',
    };
  }

  return (
    <div>
      {/* Modal principal, donde se encuentran todos los elementos */}
      <div className="container-fluid mt-4">
        <div className="row">
          <div className="col-md-4 ">
            <Button
              style={{
                'background-color': 'transparent',
                borderColor: 'transparent',
                'border-radius': '26px',
              }}
              onClick={() => AbrirModelBodegas()}
            >
              <Plus width="50px" height="50px" />
            </Button>
          </div>

          <div className="col-md-8  ">
            <h1 className="">LISTADO DE BODEGAS </h1>
          </div>
        </div>
        <hr></hr>
      </div>

      <div className="row">
        <div className="col-md-2"></div>
        <div className="row col-md-8 ">
          {dataBodegas.map((Bodegas) => {
            console.log(Bodegas);
            return (
              <div className="row mr-4 ml-4 mt-3" onDoubleClick={() => ListadoBodegas(Bodegas)}>
                <div className="card-bodegas mx-auto Fitness-Card">
                  <div className="card-body">
                    <div className="row center">
                      <div className="col-6">
                        <img src={home} className="float-right" alt=" not found" />
                      </div>
                      <div className="col-6 Fitness-Card-Info ">
                        <div>
                          <Button
                            style={{
                              'background-color': 'transparent',
                              borderColor: 'transparent',
                              position: 'absolute',
                              marginLeft: '145px',
                            }}
                            onClick={() => ModificarBodega(Bodegas)}
                          >
                            <EditLogo width="30px" height="30px" />
                          </Button>
                        </div>
                        <div>
                          <p className="text-left">
                            <b>descripción:</b> {Bodegas.descripcion}
                          </p>
                          <p className="text-left">
                            <b>Encargado:</b> {Bodegas.encargado}
                          </p>
                          <p className="text-left">
                            <b>No. Bodega</b> {Bodegas.numBodega}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <span>‎ ‏‏‎</span>
              </div>
            );
          })}
        </div>
      </div>
      {/* Modal para listar productos de la bodega seleccionada */}
      <Modal
        isOpen={ModalProductos}
        className="text-center"
        style={{ maxWidth: '1700px', width: '80%' }}
      >
        <ModalHeader>
          <div className="row">
            <h3>PRODUCTOS EN BODEGA</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <Table
              responsive
              striped
              hover
              align="center"
              size="sm"
              id="myTable"
              style={{
                width: '1200px',
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
                <tr style={{ textAlign: 'center' }}>
                  <th>Código de Barra</th>
                  <th>Codigo Principal</th>
                  <th style={{ width: '300px' }}>Descripcion</th>
                  {<th>Marca</th>}
                  <th>Inventario</th>
                  <th>Precio</th>
                  <th>Gestionar</th>
                </tr>
              </thead>
              <tbody>
                {dataproductos.map((elemento, index2) => (
                  <tr>
                    <td>{`${elemento.codigoBarra}`}</td>
                    <td>{elemento.codigoPrincipal}</td>
                    <td style={{ whiteSpace: 'unset' }}>{elemento.descripcion}</td>
                    {<td style={{ whiteSpace: 'unset' }}>{elemento.marca[0].name}</td>}
                    <td>
                      {elemento.bodega.map((item, index) => {
                        cant = '';
                        if (item.value === BodegaSeleccionada._id) {
                          cant = item.cantBodega;
                          InfoMigracion = index;
                        }
                        return cant;
                      })}
                    </td>
                    <td>{elemento.precios}</td>
                    <td onClick={() => modalAntesDeMigrar(InfoMigracion, index2)}>ACCION</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-danger"
            style={{
              margin: '10px',
              'border-radius': '26px',
              'border-color': '#ff9800',
              color: 'red',
              border: '1px solid red',
              'background-color': 'white',
              'font-size': '16px',
              cursor: 'pointer',
            }}
            onClick={() => CerrarModalTablaProductos()}
          >
            CANCELAR
          </button>
        </ModalFooter>
      </Modal>
      {/* MODAL PARA CREAR UNA BODEGA */}
      <Modal
        isOpen={ModalCrearBodega}
        className="text-center"
        style={{ maxWidth: '1700px', width: '80%' }}
      >
        <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
          <ModalHeader>
            <div>
              <h3>CREACION DE BODEGAS</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-sm ">
                <div className="card-bodegas mx-auto Fitness-Card">
                  <div className="card-body">
                    <div className="row center">
                      <div className="col-6">
                        <img src={home} className="float-right" alt=" not found" />
                      </div>
                      <div className="col-6 Fitness-Card-Info ">
                        <div>
                          <p className="text-left">
                            <b>descripción:</b> {formBodega.Description}
                          </p>
                          <p className="text-left">
                            <b>Encargado:</b> {formBodega.Encargado}
                          </p>
                          <p className="text-left">
                            <b>No. Bodega</b> {formBodega.numBodega}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <AvField
                  name="Description"
                  label="Descripcion"
                  type="text"
                  onChange={handleChange}
                  value={formBodega.Description}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                  }}
                />
                <AvField
                  name="Encargado"
                  label="Encargado"
                  type="text"
                  onChange={handleChange}
                  value={formBodega.Encargado}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado' },
                  }}
                />
                <AvField
                  name="numBodega"
                  label="Numero de bodega"
                  type="number"
                  onChange={handleChange}
                  value={formBodega.numBodega}
                  validate={{ required: { value: true, errorMessage: 'Ingrese valor' } }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <FormGroup>
              <Button
                type="submit"
                color="primary"
                style={{
                  'border-radius': '26px',
                  'border-color': '#98ff98',
                  color: 'green',
                  border: '1px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
              >
                Agregar Bodega
              </Button>
              <span>‎ ‏‏‎</span>
              <Button
                className="btn btn-danger"
                style={{
                  margin: '10px',
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'red',
                  border: '1px solid red',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                onClick={CancelarBodega}
              >
                CANCELAR
              </Button>
            </FormGroup>
          </ModalFooter>
        </AvForm>
      </Modal>
      {/* MODAL PARA MODOFICAR UNA BODEGA EN ESPECIFICO */}
      <Modal
        isOpen={ModalModificarBodega}
        className="text-center"
        style={{ maxWidth: '1200px', width: '80%' }}
      >
        <AvForm onValidSubmit={handleValidSubmitModificar} onInvalidSubmit={handleInvalidSubmit}>
          {/* <ModalHeader> */}
          <div className="container-fluid mt-4">
            <div className="row">
              <div className="col-md-10">
                <h1 className="text-left">MODIFICAR DE BODEGAS </h1>
              </div>
              {/* <div className="col-2"></div> */}
              <div className="col-md-2">
                <Button
                  onClick={() => EliminarBodega()}
                  style={{
                    'background-color': 'transparent',
                    borderColor: 'transparent',
                    // 'border-radius': '26px',
                  }}
                  className="boton-basurero"
                >
                  <BasureroLogo fill="#dc0000" width="50px" height="50px" />
                </Button>
              </div>
            </div>
          </div>
          <hr></hr>
          {/* </ModalHeader> */}
          <ModalBody>
            <div className="row">
              <div className="col-sm ">
                <div className="card-bodegas mx-auto Fitness-Card">
                  <div className="card-body">
                    <div className="row center">
                      <div className="col-6">
                        <img src={home} className="float-right" alt=" not found" />
                      </div>
                      <div className="col-6 Fitness-Card-Info ">
                        <div>
                          <p className="text-left">
                            <b>descripción:</b> {formBodega.Description}
                          </p>
                          <p className="text-left">
                            <b>Encargado:</b> {formBodega.Encargado}
                          </p>
                          <p className="text-left">
                            <b>No. Bodega</b> {formBodega.numBodega}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm">
                <AvField
                  name="numBodega"
                  label="Numero de bodega"
                  type="number"
                  onChange={handleChange}
                  value={BodegaModificar.numBodega}
                  validate={{ required: { value: true, errorMessage: 'Ingrese valor' } }}
                />
                <AvField
                  name="Description"
                  label="Descripcion"
                  type="text"
                  onChange={handleChange}
                  value={BodegaModificar.descripcion}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                  }}
                />
                <AvField
                  name="Encargado"
                  label="Encargado"
                  type="text"
                  onChange={handleChange}
                  value={BodegaModificar.encargado}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado' },
                  }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <FormGroup>
              <Button
                type="submit"
                color="primary"
                style={{
                  'border-radius': '26px',
                  'border-color': '#98ff98',
                  color: 'green',
                  border: '1px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
              >
                EDITAR BODEGA
              </Button>
              <span>‎ ‏‏‎</span>
              <Button
                className="btn btn-danger"
                style={{
                  margin: '10px',
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'red',
                  border: '1px solid red',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                onClick={() => CancelarBodegaModificar()}
              >
                CANCELAR
              </Button>
            </FormGroup>
          </ModalFooter>
        </AvForm>
      </Modal>
      {/* Modal para seleccionar migracion de producto */}

      <Modal
        isOpen={ModalMigrarProducto}
        className="text-center"
        style={{ maxWidth: '700px', width: '90%' }}
      >
        <AvForm onValidSubmit={handleValidMigrar} onInvalidSubmit={handleInvalidSubmit}>
          {/* <ModalHeader> */}
          <div className="container-fluid mt-4 mb-4">
            <div className="col-md-12">
              <h1 className="text-center">MOVILIZAR PRODUCTO </h1>
            </div>
          </div>
          <hr></hr>
          {/* </ModalHeader> */}
          <ModalBody>
            <div className="row">
              <div className="container col-md-8 ">
                <h4 className="text-center">DONDE MIGRAR PRODUCTO </h4>
                <AvField
                  style={paddingAvInput()}
                  type="select"
                  name="bodegaMigrar"
                  helpMessage="Orden=> Descripcion, No. Bodega"
                  validate={{ required: { value: true, errorMessage: 'Seleccione una bodega' } }}
                >
                  {dataBodegas.map((bodega) => {
                    return (
                      <option value={bodega._id}>
                        {bodega.descripcion} , {bodega.numBodega}
                      </option>
                    );
                  })}
                </AvField>
                <h4 className="text-center">Cantidad a Migrar </h4>
                <AvField
                  style={paddingAvInput2()}
                  type="number"
                  name="requeridos"
                  min="1"
                  max={existencia}
                  validate={{ required: { value: true, errorMessage: 'Ingrese una cantidad' } }}
                />
                <h4 className="text-center">EXISTENCIA: </h4>
                <h3 className="text-center">{existencia}</h3>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <FormGroup>
              <Button
                type="submit"
                color="primary"
                style={{
                  'border-radius': '26px',
                  'border-color': '#98ff98',
                  color: 'green',
                  border: '1px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
              >
                ENVIAR
              </Button>
              <span>‎ ‏‏‎</span>
              <Button
                className="btn btn-danger"
                style={{
                  margin: '10px',
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'red',
                  border: '1px solid red',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                onClick={() => CancelarBodegaModificar()}
              >
                CANCELAR
              </Button>
            </FormGroup>
          </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
};

export default OpcionesBodegas;
