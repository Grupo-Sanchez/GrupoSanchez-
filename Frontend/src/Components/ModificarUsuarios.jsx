import React, { useState, useEffect } from 'react';
import '../Styles/SearchBar.css';
import '../Styles/estilosLuisTablaUsuarios.css';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
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
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import Agregar from './AgregarUsuario';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';
import { ReactComponent as BasureroLogo } from '../Icons/delete.svg';
import { ReactComponent as AgregarLogo } from '../Icons/plus.svg';
import LupaIcon from '../Icons/lupa1.jpeg';
import { Confirm } from './Confirm';

export default function ModificarUsuario(props) {
  const regex = /^[ña-zA-Z\u00E0-\u00FC-\s]+$/;
  const regexSoloNumeros = /^[0-9]+$/;
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const options = [
    { value: 'propietario', name: 'Propietario' },
    { value: 'administrador', name: 'Administrador' },
    { value: 'jefe', name: 'Jefe de tienda' },
    { value: 'ejecutivo', name: 'Ejecutivo de ventas' },
  ];

  const [marcaSel, setMarcaSel] = useState([]);

  const agregarMarca = (idToSearch) => {
    options.filter((item) => {
      if (item.value === idToSearch) {
        setMarcaSel(item.value);
        // alert(marcaSel);
      }
      return 0;
    });
  };
  function paddingAvInput() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      width: '320px',
    };
  }
  function paddingAvInputGreen() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      'border-color': '#62d162',
      width: '320px',
    };
  }
  const handleChange2 = (e) => {
    agregarMarca(e);
  };

  const [modalModificar, setModalModificarUsuario] = useState(false);

  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/users/${memberId}`);
    setModalModificarUsuario(false);
  };

  const [data, setData] = useState([]);

  const fecthData = async () => {
    await axios.get('http://localhost:3001/api/users').then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fecthData();
  }, [data]);

  const [seleccionado, setSeleccionado] = useState({
    identidad: '',
    nombre: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    rtn: '',
    telefono: '',
    correo: '',
    rol: '',
  });

  const modificar = (elemento) => {
    setSeleccionado(elemento);
    setMarcaSel(elemento.rol[0].value);
    setModalModificarUsuario(true);
  };

  const modificarUsuario = async () => {
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      if (element.value === marcaSel) {
        for (let i = 0; i < data.length; i++) {
          const element2 = data[i];
          if (element2._id === seleccionado._id) {
            seleccionado.rol = element;
            break;
          }
        }
      }
    }
    if (
      regexSoloNumeros.test(document.getElementById('identidad').value) &&
      regex.test(document.getElementById('nombre').value) &&
      (regex.test(document.getElementById('segundo_nombre').value) ||
        seleccionado.segundo_nombre === '') &&
      regex.test(document.getElementById('primer_apellido').value) &&
      (regex.test(document.getElementById('segundo_apellido').value) ||
        seleccionado.segundo_apellido === '') &&
      (regexSoloNumeros.test(document.getElementById('rtn').value) || seleccionado.rtn === '') &&
      regexSoloNumeros.test(document.getElementById('telefono').value) &&
      regEmail.test(document.getElementById('correo').value) &&
      seleccionado.rol !== '' &&
      seleccionado.identidad.length === 13 &&
      seleccionado.rtn.length === 14
    ) {
      setModalModificarUsuario(false);
      axios
        .put(`http://localhost:3001/api/users/${seleccionado._id}`, {
          identidad: seleccionado.identidad,
          nombre: seleccionado.nombre,
          segundo_nombre: seleccionado.segundo_nombre,
          primer_apellido: seleccionado.primer_apellido,
          segundo_apellido: seleccionado.segundo_apellido,
          rtn: seleccionado.rtn,
          telefono: seleccionado.telefono,
          correo: seleccionado.correo,
          rol: seleccionado.rol,
        })
        .then(
          Confirm.open({
            title: 'Alerta',
            message: `Usuario ${seleccionado.nombre} modificado exitosamente`,
            onok: () => {},
          }),
        )
        .catch((error) => {
          console.log(error);
        });
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Al parecer tiene algunos campos con simbolos invalidos o campos vacios.',
        onok: () => {},
      });
    }
  };

  const myFunction = () => {
    // alert("eentoroo");
    const input = document.getElementById('myInput');
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    if (input != null) {
      filter = input.value.toUpperCase();
      table = document.getElementById('myTable');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    }
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalVerUsuario, setModalVerUsuario] = useState(false);

  const cerraroAbrirModal = () => {
    setModalAgregar(!modalAgregar);
    fecthData();
  };

  const mostrarModal = () => {
    setModalAgregar(true);
  };

  function paddinginputVerUsuario() {
    return {
      display: 'flex',
      'align-items': 'left',
      'flex-wrap': 'wrap',
      'min-height': '40px',
      width: '320px',
      border: '0px solid',
      padding: '0 8px',
      outline: 'none',
    };
  }

  const mostrarModalVerUsuario = (elemento) => {
    setSeleccionado(elemento);
    setMarcaSel(elemento.rol[0].value);
    setModalVerUsuario(true);
  };

  const cerrarModalVerUsuario = () => {
    setModalVerUsuario(false);
  };

  return (
    <div align="center">
      <h1 class="text-center">USUARIOS</h1>
      <Row>
        <Col sm="3">
          <Button
            style={{
              'background-color': 'transparent',
              borderColor: 'transparent',
              'margin-left': '20px',
              'border-radius': '26px',
            }}
            onClick={() => mostrarModal()}
          >
            <AgregarLogo width="50px" height="50px" />
          </Button>
        </Col>
        <Col sm={{ size: 6, order: 2, offset: 0 }}>
          <input
            type="text"
            id="myInput"
            onChange={() => myFunction()}
            placeholder="Buscar por identificacion"
            title="Type in a name"
            style={{
              'background-image': `url('${LupaIcon}')`,
              'background-position': '10px 10px',
              'background-repeat': 'no-repeat',
              width: '90%',
              'font-size': '16px',
              padding: '12px 20px 12px 40px',
              'border-radius': '26px',
            }}
          ></input>
        </Col>
      </Row>
      <div
        style={{
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <Table
          responsive="sm"
          striped
          hover
          align="center"
          size="sm"
          id="myTable"
          style={{
            'max-width': '360px',
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
              <th>Identidad</th>
              <th>Primer Nombre</th>
              <th>Primer Apellido</th>
              <th>Tipo de usuario</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Accion</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr onDoubleClick={() => mostrarModalVerUsuario(elemento)}>
                <td>{elemento.identidad}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.primer_apellido}</td>
                <td>{elemento.rol[0].name}</td>
                <td>{elemento.telefono}</td>
                <td>{elemento.correo}</td>
                <td>
                  <Button
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                    }}
                    onClick={() => modificar(elemento)}
                    color="primary"
                  >
                    <EditLogo width="30px" height="30px" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Modal
          isOpen={modalModificar}
          className="text-center"
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
            maxWidth: '1200px',
          }}
        >
          <div>
            <h3>MODIFICAR USUARIO</h3>
          </div>

          <Button
            style={{
              'background-color': 'transparent',
              borderColor: 'transparent',
              marginLeft: '1050px',
              top: '-20px',
              position: 'relative',
            }}
            color="danger"
            onClick={() =>
              Confirm.open({
                title: '¡Advertencia!',
                message: '¿Esta seguro que desea eliminar el usuario?.',
                onok: () => {
                  onDelete(seleccionado._id);
                },
              })
            }
          >
            <BasureroLogo fill="#dc0000" width="50px" height="50px" />
          </Button>

          <ModalBody>
            <div>
              <AvForm>
                <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                  <Col>
                    <label style={{ color: '#62d162' }}>Primer nombre</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInputGreen()}
                      errorMessage="Nombre Inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regex },
                        minLength: { value: 1 },
                      }}
                      className="form-control"
                      type="text"
                      name="nombre"
                      id="nombre"
                      value={seleccionado ? seleccionado.nombre : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>
                    <label style={{ color: '#62d162' }}>Primer apellido</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInputGreen()}
                      errorMessage="Apellido Inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regex },
                        minLength: { value: 1 },
                      }}
                      className="form-control"
                      type="text"
                      name="primer_apellido"
                      id="primer_apellido"
                      value={seleccionado ? seleccionado.primer_apellido : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                </Row>
              </AvForm>
            </div>

            <div>
              <AvForm>
                <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                  <Col>
                    <label>Segundo nombre</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Nombre Inválido"
                      validate={{
                        required: { value: false },
                        pattern: { value: regex },
                        minLength: { value: 1 },
                      }}
                      className="form-control"
                      type="text"
                      name="segundo_nombre"
                      id="segundo_nombre"
                      value={seleccionado ? seleccionado.segundo_nombre : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>
                    <label>Segundo apellido</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Apellido Inválido"
                      validate={{
                        required: { value: false },
                        pattern: { value: regex },
                        minLength: { value: 1 },
                      }}
                      className="form-control"
                      type="text"
                      name="segundo_apellido"
                      id="segundo_apellido"
                      value={seleccionado ? seleccionado.segundo_apellido : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                </Row>
              </AvForm>
            </div>

            <div>
              <AvForm>
                <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                  <Col>
                    <label style={{ color: '#62d162' }}>Nombre de usuario</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInputGreen()}
                      errorMessage="Revise el formato"
                      className="form-control"
                      type="text"
                      name="usuario"
                      id="usuario"
                      //value={seleccionado ? seleccionado.usuario : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>
                    <label style={{ color: '#62d162' }}>No. Identidad</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInputGreen()}
                      errorMessage="Numero de identidad inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regexSoloNumeros },
                        minLength: { value: 13 },
                      }}
                      maxLength="13"
                      className="form-control"
                      type="text"
                      name="identidad"
                      id="identidad"
                      value={seleccionado ? seleccionado.identidad : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                </Row>
              </AvForm>
            </div>
            <div>
              <AvForm>
                <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                  <Col>
                    <label>Telefono</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Telefono Inválido"
                      validate={{
                        required: { value: false },
                        pattern: { value: regexSoloNumeros },
                        minLength: { value: 1 },
                      }}
                      className="form-control"
                      type="text"
                      name="telefono"
                      id="telefono"
                      value={seleccionado ? seleccionado.telefono : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>
                    <label>RTN</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="RTN Inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regexSoloNumeros },
                        minLength: { value: 14 },
                      }}
                      maxLength="14"
                      className="form-control"
                      type="text"
                      name="rtn"
                      id="rtn"
                      value={seleccionado ? seleccionado.rtn : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                </Row>
              </AvForm>
            </div>

            <div>
              <AvForm>
                <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                  <Col>
                    <label>Correo electronico</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Revise el formato"
                      validate={{
                        email: true,
                        minLength: { value: 5 },
                      }}
                      className="form-control"
                      type="text"
                      name="correo"
                      id="correo"
                      value={seleccionado ? seleccionado.correo : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>
                    <label style={{ color: '#62d162' }}>Constraseña</label>
                  </Col>
                  <Col>
                    <AvField
                      style={paddingAvInputGreen()}
                      errorMessage="Constraseña debe tener mas de 4 caracteres"
                      validate={{
                        required: { value: true },
                        minLength: { value: 4 },
                      }}
                      className="form-control"
                      type="password"
                      name="password"
                      id="password"
                      value={seleccionado ? seleccionado.password : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                </Row>
              </AvForm>
            </div>
            <div>
              <label style={{ color: '#62d162', fontSize: '23px' }}>Tipo de usuario</label>
              <Row>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <SelectSearch
                    search
                    options={options}
                    value={marcaSel}
                    onChange={(e) => handleChange2(e)}
                  />
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
              style={{
                'border-radius': '26px',
                'border-color': '#98ff98',
                color: 'green',
                border: '1px solid green',
                'background-color': 'white',
                'font-size': '16px',
                cursor: 'pointer',
              }}
              className="btn btn-primary"
              onClick={() => modificarUsuario()}
            >
              Modificar
            </button>
            <button
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
              className="btn btn-danger"
              onClick={() => setModalModificarUsuario(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
        {/* =========================== VER USUARIOS ============================== */}
        <Modal
          isOpen={modalVerUsuario}
          className="text-center"
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
            maxWidth: '1200px',
          }}
        >
          <div>
            <h3>INFORMACION DETALLADA</h3>
          </div>
          <ModalBody>
            <div>
              <Row style={{ 'text-align': 'left' }}>
                <Col>
                  <label>Nombre de usuario:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="usuario"
                    id="usuario"
                    //value={seleccionado ? seleccionado.usuario : ''}
                    readOnly
                  />
                </Col>
                <Col>
                  <label>Tipo de usuario:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="identidad"
                    id="identidad"
                    //value="Jefe de Tienda"
                    value={seleccionado ? seleccionado.rol[0].name : ''}
                    readOnly
                  />
                </Col>
              </Row>
            </div>

            <div>
              <Row style={{ 'text-align': 'left' }}>
                <Col>
                  <label>Primer nombre:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="nombre"
                    id="nombre"
                    //value={seleccionado ? seleccionado.nombre : ''}
                    value="Jefe de tienda"
                    readOnly
                  />
                </Col>
                <Col>
                  <label>Primer apellido:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="primer_apellido"
                    id="primer_apellido"
                    value={seleccionado ? seleccionado.primer_apellido : ''}
                    readOnly
                  />
                </Col>
              </Row>
            </div>

            <div>
              <Row style={{ 'text-align': 'left' }}>
                <Col>
                  <label>Segundo nombre:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="segundo_nombre"
                    id="segundo_nombre"
                    value={seleccionado ? seleccionado.segundo_nombre : ''}
                    readOnly
                  />
                </Col>
                <Col>
                  <label>Segundo apellido:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="segundo_apellido"
                    id="segundo_apellido"
                    value={seleccionado ? seleccionado.segundo_apellido : ''}
                    readOnly
                  />
                </Col>
              </Row>
            </div>

            <div>
              <Row style={{ 'text-align': 'left' }}>
                <Col>
                  <label>No. Identidad:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="identidad"
                    id="identidad"
                    value={seleccionado ? seleccionado.identidad : ''}
                    readOnly
                  />
                </Col>
                <Col>
                  <label>Telefono:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="telefono"
                    id="telefono"
                    value={seleccionado ? seleccionado.telefono : ''}
                    readOnly
                  />
                </Col>
              </Row>
            </div>
            <div>
              <Row style={{ 'text-align': 'left' }}>
                <Col>
                  <label>RTN:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="rtn"
                    id="rtn"
                    value={seleccionado ? seleccionado.rtn : ''}
                    readOnly
                  />
                </Col>
                <Col>
                  <label>Correo:</label>
                </Col>
                <Col>
                  <input
                    style={paddinginputVerUsuario()}
                    type="text"
                    name="correo"
                    id="correo"
                    value={seleccionado ? seleccionado.correo : ''}
                    readOnly
                  />
                </Col>
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            <button
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
              className="btn btn-danger"
              onClick={() => cerrarModalVerUsuario()}
            >
              Cerrar
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <Agregar isOpen={modalAgregar} change={() => cerraroAbrirModal()} />
    </div>
  );
}
