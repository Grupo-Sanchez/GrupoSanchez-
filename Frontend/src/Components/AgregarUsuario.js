/// Recio
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  Input,
  Row,
  Col,
  Container,
} from 'reactstrap';
import React, { useState, useEffect } from 'react';
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

import '../Styles/SearchBarInterfazProductos.css';
import axios from 'axios';
import SelectSearch from 'react-select-search';
import { Confirm } from './Confirm';

export default function AgregarUsuario(props) {
  function paddingclose() {
    return {
      display: 'block',
      width: '20px',
      height: '20px',
      'line-height': '16px',
      'text-align': 'center',
      'font-size': '20px',
      'margin-left': '60px',
      color: 'white',
      'border-radius': '50%',
      background: '#f60000',
      cursor: 'pointer',
    };
  }
  function paddingmain() {
    return {
      width: 'auto',
      height: '32px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      color: '#282c34',
      padding: '0 8px',
      'font-size': '20px',
      'list-style': 'none',
      margin: '0 8px 8px 0',
      'border-radius': '25px',
      'margin-top': '7px',
      background: '#e9e3e3',
    };
  }
  function paddingdiv() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '48px',
      width: '400px',
      border: 'none',
      'border-radius': '10px',
      padding: '0 8px',
      'margin-left': '80px',
    };
  }
  function paddingInput() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '40px',
      width: '320px',
      border: '1px solid #0052cc',
      'border-radius': '26px',
      padding: '0 8px',
    };
  }
  function paddingAvInput() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      width: '260px',
    };
  }
  function paddingAvInputGreen() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      'border-color': '#62d162',
      width: '260px',
      maxWidth: '260px',
    };
  }
  function paddingAvInputGreen2() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      'border-color': '#62d162',
      width: '260px',
      maxWidth: '260px',
    };
  }
  function paddingAvInputCantidades() {
    return {
      'border-radius': '26px',
      width: '100px',
    };
  }
  function paddingAvInputCantidadesCreacionRapida() {
    return {
      'border-radius': '26px',
      width: '200px',
    };
  }
  function paddingDescripciones() {
    return {
      'border-radius': '26px',
      width: '320px',
      height: '100px',
    };
  }
  function paddingDescripcionesCreacionRapida() {
    return {
      'border-radius': '26px',
      width: '380px',
      height: '100px',
    };
  }
  function paddingHeader() {
    return {
      'margin-left': '-350px',
    };
  }
  function paddingtitle() {
    return {
      'margin-top': '3px',
    };
  }
  function paddingul() {
    return {
      'flex-wrap': 'wrap',
      padding: '0',
      paddingLeft: '45px',
      margin: '8px 0 0 0',
    };
  }

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  const isAlphanumeric = require('is-alphanumeric');

  const options = [
    { value: 'default', name: 'Seleccione el rol' },
    { value: 'propietario', name: 'Propietario' },
    { value: 'administrador', name: 'Administrador' },
    { value: 'jefetienda', name: 'Jefe de tienda' },
    { value: 'ejecutivoventas', name: 'Ejecutivo de ventas' },
  ];

  const regex = /^[ña-zA-Z\u00E0-\u00FC-\s]+$/;
  const regexSoloNumeros = /^[0-9]+$/;
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    identidad: '',
    nombre: '',
    alias: '',
    segundo_nombre: '',
    primer_apellido: '',
    segundo_apellido: '',
    rtn: '',
    telefono: '',
    correo: '',
    rol: '',
    password: '',
  });

  const [rol, setRol] = useState('');

  const signUpMethod = () => {
    if (seleccionado.rol) {
      const jsonString = {
        correo: seleccionado.correo,
        password: seleccionado.password,
        rol: seleccionado.rol.value,
      };

      console.log('Mandando: ', typeof seleccionado.rol.value);
      console.log('Mandando: ', jsonString);
      //     fetch('http://localhost:3001/api/login', {
      fetch('http://localhost:3001/api/signup', {
        method: 'post',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(jsonString),
      })
        // .then((res) => {
        //   res.json();
        //   console.log('Response: ', res);
        // })
        // .then((json) => {
        //   console.log('JSON: ', json);
        // });
        .then((res) => res.json())
        .then((json) => {
          console.log('JSON SIGNUP: ', json);
        });
    }
  };

  const agregarMarca = (idToSearch) => {
    options.filter((item) => {
      if (item.value === idToSearch) {
        seleccionado.rol = item.value;
      }
      console.log(seleccionado.rol);
      return 0;
    });
  };

  const handleChange2 = (e) => {
    agregarMarca(e);
  };

  const cerrarModalAgregarUsuario = () => {
    props.change();
    seleccionado.alias = '';
    seleccionado.identidad = '';
    seleccionado.nombre = '';
    seleccionado.segundo_nombre = '';
    seleccionado.primer_apellido = '';
    seleccionado.segundo_apellido = '';
    seleccionado.rtn = '';
    seleccionado.telefono = '';
    seleccionado.correo = '';
    seleccionado.rol = '';
    seleccionado.password = '';
  };

  const descartarCambios = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        cerrarModalAgregarUsuario();
      },
    });
  };
  const escribirUsuario = async () => {
    // alert(JSON.stringify(document.getElementById('password').value));
    // alert(JSON.stringify(document.getElementById('passwordConfirm').value));
    if (
      seleccionado.rol !== '' &&
      seleccionado.rol !== 'Seleccione el rol' &&
      regexSoloNumeros.test(document.getElementById('identidad').value) &&
      seleccionado.identidad.length === 13 &&
      seleccionado.password.length >= 4 &&
      regex.test(document.getElementById('nombre').value) &&
      regex.test(document.getElementById('primer_apellido').value) &&
      seleccionado.alias !== '' &&
      (seleccionado.rtn.length === 14 || seleccionado.rtn === '') &&
      document.getElementById('password').value === document.getElementById('passwordConfirm').value
      // (regEmail.test(document.getElementById('correo').value || document.getElementById('correo').value === ''))
      // (regex.test(document.getElementById('segundo_nombre').value) ||
      //   seleccionado.segundo_nombre === '') &&
      // regex.test(document.getElementById('primer_apellido').value) &&
      // (regex.test(document.getElementById('segundo_apellido').value) ||
      //   seleccionado.segundo_apellido === '') &&
      // //(regexSoloNumeros.test(document.getElementById('rtn').value)) &&
      // regexSoloNumeros.test(document.getElementById('telefono').value) &&
      // // regEmail.test(document.getElementById('correo').value) &&
      // seleccionado.identidad.length === 13 &&
      // //(seleccionado.rtn.length === 14 || seleccionado.rtn === '') &&
    ) {
      const campos = {
        identidad: seleccionado.identidad,
        primerNombre: seleccionado.nombre,
        segundoNombre: seleccionado.segundo_nombre,
        primerApellido: seleccionado.primer_apellido,
        segundoApellido: seleccionado.segundo_apellido,
        rtn: seleccionado.rtn,
        telefono: seleccionado.telefono,
        correo: seleccionado.correo,
        alias: seleccionado.alias,
        rol: seleccionado.rol,
        password: seleccionado.password,
      };
      console.log('=>', campos);
      axios
        .post('http://localhost:3001/api/signup', campos)
        .then((res) => console.log('res:', res));
      Confirm.open({
        title: 'Exito',
        message: 'Usuario agregado exitosamente.',
        onok: () => {
          cerrarModalAgregarUsuario();
        },
      });
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Al parecer tiene algunos campos con simbolos invalidos o campos vacios.',
        onok: () => {},
      });
    }
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const insertar = () => {};

  return (
    <AvForm onValidSubmit={escribirUsuario} onInvalidSubmit={handleInvalidSubmit}>
      <div>
        <Modal
          isOpen={props.isOpen}
          className="text-center"
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
            maxWidth: '1200px',
          }}
        >
          <br />
          <div>
            <h3
              style={{
                top: '50px',
              }}
            >
              AGREGAR NUEVO USUARIO
            </h3>
          </div>
          <ModalBody>
            <div style={{ margin: '15px 0px' }}>
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                <Col>
                  <label style={{ color: '#62d162' }}>Tipo de usuario</label>
                </Col>
                <Col>
                  <div>
                    {/* <SelectSearch
                      style={paddingAvInputGreen2()}
                      search
                      placeholder="Seleccione el rol del usuario"
                      required
                      autoComplete
                      options={options}
                      value={marca}
                      onChange={(e) => handleChange2(e)}
                    /> */}
                    <Input
                      style={paddingAvInputGreen2()}
                      type="select"
                      name="select"
                      id="exampleSelect"
                      value={rol}
                      onChange={(e) => {
                        seleccionado.rol = e.target.value;
                        setRol(seleccionado.rol);
                        console.log(seleccionado.rol);
                      }}
                    >
                      {options.map((option) => {
                        return <option>{option.name}</option>;
                      })}
                    </Input>
                  </div>
                </Col>
                <Col>
                  <label>Teléfono</label>
                </Col>
                <Col>
                  <AvField
                    style={paddingAvInput()}
                    errorMessage="Teléfono Inválido"
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
              </Row>
            </div>

            <div style={{ margin: '15px 0px' }}>
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
            </div>

            <div style={{ margin: '15px 0px' }}>
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
            </div>

            <div style={{ margin: '15px 0px' }}>
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
                    name="alias"
                    id="alias"
                    value={seleccionado ? seleccionado.alias : ''}
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
            </div>
            <div style={{ margin: '15px 0px' }}>
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
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
                <Col>
                  <label>RTN</label>
                </Col>
                <Col>
                  <AvField
                    style={paddingAvInput()}
                    errorMessage="RTN Inválido"
                    validate={{
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
            </div>

            <div>
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                <Col>
                  <label style={{ color: '#62d162' }}>Confirmar constraseña</label>
                </Col>
                <Col>
                  <AvField
                    style={paddingAvInputGreen()}
                    errorMessage="Deben ser iguales."
                    validate={{
                      required: { value: true },
                      minLength: { value: 4 },
                    }}
                    className="form-control"
                    type="password"
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value=""
                    // onChange={manejarCambio}
                  />
                </Col>
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
              </Row>
            </div>
          </ModalBody>
          <ModalFooter>
            {' '}
            <div>
              <Button
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
                onClick={() => descartarCambios()}
              >
                Cancelar
              </Button>
              <Button
                style={{
                  'border-radius': '26px',
                  'border-color': '#98ff98',
                  color: 'green',
                  border: '1px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                outline
                color="success"
                onClick={() => escribirUsuario()}
              >
                Agregar
              </Button>
            </div>
          </ModalFooter>
        </Modal>
      </div>
    </AvForm>
  );
}
