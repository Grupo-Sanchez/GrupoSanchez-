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
import imagePath from '../Icons/lupa1.jpeg';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';
import { ReactComponent as BasureroLogo } from '../Icons/delete.svg';
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

  const handleChange2 = (e) => {
    agregarMarca(e);
  };

  const onDelete = (memberId) => {
    axios.delete(`http://Localhost:3001/api/users/${memberId}`);
  };

  const [data, setData] = useState([]);

  const [modalModificar, setModalModificarUsuario] = useState(false);

  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://Localhost:3001/api/users').then((response) => {
        setData(response.data);
      });
    };
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
        .put(`http://Localhost:3001/api/users/${seleccionado._id}`, {
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

  return (
    <div align="center">
      <h1 class="text-center">USUARIOS</h1>
      <input
        type="text"
        id="myInput"
        onChange={() => myFunction()}
        placeholder="Buscar por identificacion"
        title="Type in a name"
        style={{
          'background-image': `url('${imagePath}')`,
          'background-position': '10px 10px',
          'background-repeat': 'no-repeat',
          width: '50%',
          'font-size': '16px',
          padding: '12px 20px 12px 40px',
          border: '1px solid #ddd',
          'margin-bottom': '12px',
        }}
      ></input>
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
              <tr>
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
                  <Button
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                    }}
                    color="danger"
                    onClick={() =>
                      Confirm.open({
                        title: '¡Advertencia!',
                        message: '¿Esta seguro que desea eliminar el usuario?.',
                        onok: () => {
                          onDelete(elemento._id);
                        },
                      })
                    }
                  >
                    <BasureroLogo width="30px" height="30px" />
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
          <Row>
            <Col>
              <div>
                <h3>MODIFICAR USUARIO</h3>
              </div>
            </Col>
          </Row>
          <ModalBody>
            <div>
              <AvForm>
                <Row>
                  <Col>Identidad</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Numero de identidad Inválido"
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
                  <Col>Primer Nombre</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
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
                </Row>
              </AvForm>
            </div>
            <div>
              <AvForm>
                <Row>
                  <Col>Segundo nombre</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Nombre Inválido"
                      validate={{
                        required: { value: true },
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
                  <Col>Primer apellido</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
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
                <Row>
                  <Col>Segundo apellido</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Apellido Inválido"
                      validate={{
                        required: { value: true },
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
                  <Col>RTN</Col>
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
                <Row>
                  <Col>Telefono</Col>
                  <Col>
                    <AvField
                      style={paddingAvInput()}
                      errorMessage="Telefono Inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regexSoloNumeros },
                        minLength: { value: 1 },
                      }}
                      maxLength="8"
                      className="form-control"
                      type="text"
                      name="telefono"
                      id="telefono"
                      value={seleccionado ? seleccionado.telefono : ''}
                      onChange={manejarCambio}
                    />
                  </Col>
                  <Col>Correo</Col>
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
                </Row>
              </AvForm>
            </div>
            <div>
              <label>Tipo de usuario</label>
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
      </div>
    </div>
  );
}
