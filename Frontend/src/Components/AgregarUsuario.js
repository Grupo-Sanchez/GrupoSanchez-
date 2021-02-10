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
  const isAlphanumeric = require('is-alphanumeric');

  const options = [
    { value: 'propietario', name: 'Propietario' },
    { value: 'administrador', name: 'Administrador' },
    { value: 'jefe', name: 'Jefe de tienda' },
    { value: 'ejecutivo', name: 'Ejecutivo de ventas' },
  ];

  const regex = /^[ña-zA-Z\u00E0-\u00FC-\s]+$/;
  const regexSoloNumeros = /^[0-9]+$/;
  const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);
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
    password: '',
  });

  const [marca, setMarca] = useState('');

  const signUpMethod = () => {
    if (seleccionado.rol) {
      const jsonString = {
        email: seleccionado.correo,
        password: seleccionado.password,
        rol: seleccionado.rol.value,
      };

      console.log('Mandando: ', typeof seleccionado.rol.value);
      console.log('Mandando: ', jsonString);
      //     fetch('http://Localhost:3001/api/login', {
      fetch('http://Localhost:3001/api/signup', {
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
        seleccionado.rol = item;
      }
      return 0;
    });
  };

  const handleChange2 = (e) => {
    agregarMarca(e);
  };

  const cerrarModalAgregarUsuario = () => {
    props.change();

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
    if (
      (regexSoloNumeros.test(document.getElementById('identidad').value) &&
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
        seleccionado.rtn.length === 14 &&
        seleccionado.password.length >= 4)
    ) {
      const campos = {
        identidad: seleccionado.identidad,
        nombre: seleccionado.nombre,
        segundo_nombre: seleccionado.segundo_nombre,
        primer_apellido: seleccionado.primer_apellido,
        segundo_apellido: seleccionado.segundo_apellido,
        rtn: seleccionado.rtn,
        telefono: seleccionado.telefono,
        correo: seleccionado.correo,
        rol: seleccionado.rol,
        password: seleccionado.password,
      };
      const res = await axios.post('http://Localhost:3001/api/Users', campos).then(signUpMethod());
      console.log(res);
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
  /*
    HandleChange(event){
        this.state.codigos.push();
        this.setState({some:'val',arr:this.state.arr})
    }
    */

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // handleChange(e) {
  //   this.state.indice = 1;
  //   this.b(e);
  // };

  const insertar = () => {};

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
      >
        <ModalHeader>
          <div>
            <h3>AGREGAR NUEVO USUARIO</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <h3>Identidad</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Primer Nombre</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Segundo Nombre</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Primer Apellido</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Segundo Apellido</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>RTN</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Telefono</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Correo</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Contraseña</h3>
            <AvForm>
              <AvField
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
            </AvForm>
          </div>
          <div>
            <h3>Rol</h3>
            <SelectSearch
              search
              placeholder="Seleccione el rol del usuario"
              required
              autoComplete
              options={options}
              value={marca}
              onChange={(e) => handleChange2(e)}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => escribirUsuario()}>
            Agregar Usuario
          </button>
          <button className="btn btn-danger" onClick={() => descartarCambios()}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
