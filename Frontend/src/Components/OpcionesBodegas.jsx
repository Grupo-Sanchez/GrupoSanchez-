// import { useState } from 'react';
// import { Col, Container, Row } from 'reactstrap';
// import CartasOpciones from './CartasOpciones.jsx';
// import Agregar from './CrearBodega.jsx';
// import Listar from './ListarBodegas.jsx';
// import Modificar from './ModificarEliminarBodegas.jsx';
// import CrearBodega from '../Icons/CrearBodega.svg';
// import EliminarBodega from '../Icons/EliminarBodega.svg';
// import EditarBodega from '../Icons/EditarBodega.svg';
// import ConsultarBodega from '../Icons/ConsultarBodega.svg';

// const OpcionesBodegas = () => {
//   const [modalAgregar, setModalAgregar] = useState(false);
//   const [modalEliminar, setModalEliminar] = useState(false);
//   const [modalConsultar, setModalConsultar] = useState(false);
//   const [modalModificar, setModalModificar] = useState(false);
//   const items = [
//     {
//       titulo: 'Crear Bodegas',
//       icon: (
//         <img
//           src={CrearBodega}
//           style={{
//             width: '240px',
//             height: 'auto',
//             paddingBottom: '20px',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}
//         />
//       ),
//       to: '/',
//       isOpen: () => setModalAgregar(true),
//     },
//     {
//       titulo: 'Modificar/Eliminar Bodegas',
//       icon: (
//         <img
//           src={EditarBodega}
//           style={{
//             width: '240px',
//             height: 'auto',
//             paddingBottom: '20px',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}
//         />
//       ),
//       to: '/',
//       isOpen: () => setModalModificar(true),
//     },
//     // {
//     //   titulo: 'Eliminar Bodegas',
//     //   icon: (
//     //     <img
//     //       src={EliminarBodega}
//     //       style={{
//     //         width: '240px',
//     //         height: 'auto',
//     //         paddingBottom: '20px',
//     //         marginLeft: 'auto',
//     //         marginRight: 'auto',
//     //       }}
//     //     />
//     //   ),
//     //   to: '/',
//     //   isOpen: () => setModalEliminar(true),
//     // },
//     {
//       titulo: 'Consultar Bodegas',
//       icon: (
//         <img
//           src={ConsultarBodega}
//           style={{
//             width: '240px',
//             height: 'auto',
//             paddingBottom: '20px',
//             marginLeft: 'auto',
//             marginRight: 'auto',
//           }}
//         />
//       ),
//       to: '/',
//       isOpen: () => setModalConsultar(true),
//     },
//   ];

//   return (
//     <Container fluid="md" style={{ padding: '0' }}>
//       <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Bodegas</h1>
//       {/* <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
//       <Listar isOpen={modalConsultar} change={() => setModalConsultar(!modalConsultar)} />
//       <Modificar isOpen={modalModificar} change={() => setModalModificar(!modalModificar)} />
//       <Row md="3" style={{ paddingTop: '25px' }}>
//         {items.map(({ titulo, to, icon, isOpen }, i) => (
//           <Col key={i}>
//             <CartasOpciones titulo={titulo} to={to} icon={icon} isOpen={isOpen} />
//           </Col>
//         ))}
//       </Row> */}
//       <Listar ></Listar>
//     </Container>
//   );
// };

// export default OpcionesBodegas;

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
  const [dataBodegas, setDataBodegas] = useState(formulario);
  const [dataproductos, setDataproductos] = useState([]);
  const [dataProductosFinal, setDataProductosFinal] = useState([]);
  const [dataproductosDelete, setDataproductosDelete] = useState([]);
  const [ModalProductos, setModalProductos] = useState(false);
  const [ModalCrearBodega, setModalCrearBodega] = useState(false);
  const [ModalModificarBodega, setModalModificarBodega] = useState(false);
  const [ModalMigrarProducto, setModalMigrarProducto] = useState(false);
  const [CantMigrar, setCantMigrar] = useState();

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
  const [BodegaSeleccionada, setBodegaSeleccionada] = useState({
    _id: '',
    numBodega: '',
    descripcion: '',
    encargado: '',
  });

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
  const fecthDataProductos = async (e) => {
    await axios.get(`http://Localhost:3001/api/bodegas/filter/${e}`).then((response) => {
      setDataproductos(response.data);
    });
    alert('CANTIDAD DE DATAPRODUCTOS ');
    alert(dataproductos.length);
    alert('QUE TRAE DATAPRODUCTOS');
    alert(JSON.stringify(dataproductos));
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

  const Change = () => {
    let Temporal = [];
    //alert('CAMBIO CANTIDADES');
    //alert(dataproductos.length);
    //Recorro todos los productos
    for (let i = 0; i < dataproductos.length; i++) {
      //Recorro todas las bodegas de los productos
      for (let j = 0; j < dataproductos[i].bodega.length; j++) {
        //comparo si la bodega es la que estoy buscando
        if (dataproductos[i].bodega[j].value === BodegaSeleccionada._id) {
          // alert(JSON.stringify(dataproductos[i].descripcion));
          // alert(JSON.stringify(dataproductos[i].bodega[j].cantBodega));
          let Newproducto;
          Newproducto = dataproductos[i];
          // console.log('NUM');
          // console.log(dataproductos[i].bodega[j].cantBodega);
          Newproducto.cantidad = dataproductos[i].bodega[j].cantBodega;
          Temporal[i] = Newproducto;
        }
      }
    }
    alert(JSON.stringify(Temporal));
    setDataProductosFinal(Temporal);
  };

  //Cuando se presiona click a una bodega
  const ListadoBodegas = (i) => {
    fecthDataProductos(i._id); //cargo los productos de toda la bodega
    setBodegaSeleccionada(i); //Bodega seleccionada
    setModalProductos(true); //abrir el modal de los productos de la bodega seleccionada
    Change(); //actualizo la cantidad exacta que cada producto tiene
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
        setModalModificarBodega(false);
      },
    });
  };

  /////
  /////INICIO DEL RENDER
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
                {dataProductosFinal.map((elemento, index) => (
                  <tr>
                    <td>{`${elemento.codigoBarra}`}</td>
                    <td>{elemento.codigoPrincipal}</td>
                    <td style={{ whiteSpace: 'unset' }}>{elemento.descripcion}</td>
                    {<td style={{ whiteSpace: 'unset' }}>{elemento.marca[0].name}</td>}
                    <td>{elemento.cantidad}</td>
                    <td>{elemento.precios}</td>
                    <td>ACCION</td>
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
        <AvForm onValidSubmit={handleValidSubmitModificar} onInvalidSubmit={handleInvalidSubmit}>
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
    </div>
  );
};

export default OpcionesBodegas;
