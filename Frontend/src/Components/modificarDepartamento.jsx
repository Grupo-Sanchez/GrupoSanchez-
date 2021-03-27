import React, { useEffect, useState, useCallback } from 'react';
import { Redirect, Route } from 'react-router-dom';
// import { useHistory } from 'react-router';

import Snackbar from '@material-ui/core/Snackbar';

import Alert from '@material-ui/lab/Alert';

import {
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Row,
  Card,
  Label,
  Input,
  Spinner,
  Col,
} from 'reactstrap';

// import { withRouter } from 'react-router-dom';

// Para el dropzone
import Dropzone from 'react-dropzone';

// import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// Helper de base de datos
import axios from 'axios';

import { DivButton } from './Elements.jsx';

// Iconos del dropzone
import check from '../Icons/check.svg';
import lock from '../Icons/lock.svg';
import deleteSvg from '../Icons/delete.svg';

// Plugins
import { Confirm } from './Confirm';

// Css usado
import '../Styles/ModalMarcas.css';

const modificarMarca = ({ isOpen, change, datos }) => {
  // Use state variables

  const [idMarca, setIdMarca] = useState(null);
  const [ingresando, setIngresando] = useState(true);

  const [departamento, setDepartamento] = useState(null);

  const [nombreDepartamento, setnombreDepartamento] = useState(null);
  const [descripcionDepartamento, setDescripcionDepartamento] = useState(null);
  const [imagenDepartamento, setImagenDepartamento] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  // Validaciones UI
  const [validNom, setValidNom] = useState(false);
  const [invalidNom, setInvalidNom] = useState(false);

  const [openNotification, setOpenNotification] = useState(false);

  const [data, setData] = useState(null);

  // State para spinner
  const [cargando, setCargando] = useState(true);

  // procedures
  const cerrarModal = () => {
    change();
  };

  const clean = () => {
    setImagenDepartamento(null);
    setnombreDepartamento(null);
    setDescripcionDepartamento(null);

    setValidNom(false);
    setInvalidNom(false);
  };

  const getDepartamento = () => {
    axios
      .get(`http://Localhost:3001/api/departamentos/${datos.idDepartamento}`)
      .then(setDepartamento);
  };

  const deleteDepartamento = () => {
    axios
      .delete(`http://Localhost:3001/api/departamentos/${datos.idDepartamento}`, {
        headers: {
          Authorization: `token ${'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBydWViYUBwcnVlYmEuY29tIiwidXNlcklkIjoiNWZkZTVhNTg0MDE5OGJkNTlkZjA5ZDdiIiwiaWF0IjoxNjE2NzkwMDQ2LCJleHAiOjE2MTY3OTAxNjZ9.7AWe8RLJSBAzdqM-u7ToQ46-SsnbSo50QoQc8970ais'}`,
        },
      })
      .then((resp) => {
        console.log('Resp: ', resp);
        datos.setIngresando(true);

        cerrarModal();
        clean();
        // alert('Deberia haber eliminado');
      })
      .catch((e) => {
        console.log('error: ', e);
      });
  };

  useEffect(() => {
    setTimeout(() => setIngresando(false), 1500);
  }, []);

  useEffect(() => {
    if (datos.idDepartamento !== null) {
      getDepartamento();
    }
  }, [datos.idDepartamento]);

  useEffect(() => {
    if (departamento !== null) {
      setnombreDepartamento(departamento.data.departamento.nombre);
      setDescripcionDepartamento(departamento.data.departamento.descripcion);
      setImagenDepartamento(departamento.data.departamento.imagenDepartamento);
      console.log('Departamento: ', departamento);
    }
  }, [departamento]);

  // // Asignar imagen al state
  // const onDropImage = useCallback((f) => {
  //   console.log('Dropped image', f);
  //   setImagenMarca(f[0]);
  // });

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotification(false);
  };

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'nombre':
        setnombreDepartamento(event.value);
        setValidNom(!emptyVal);
        setInvalidNom(emptyVal);
        break;
      case 'descripcion':
        setDescripcionDepartamento(event.value);
        break;
      case 'imagenMarca':
        setImagenDepartamento(event.target.files[0]);
        break;
      default:
    }
  };

  // const writeMarca = () => {
  //   if (nombreMarca) {
  //     const requestBody = {
  //       nombre: nombreMarca,
  //       descripcion: descripcionMarca,
  //       imagenMarca: imagenMarca,
  //     };

  //     console.log('Lleva: ', requestBody);
  //     axios
  //       .post('http://Localhost:3001/api/marcas/create', requestBody)
  //       .then((response) => console.log(response));

  //     console.log('Deberia haber escrito');
  //   } else {
  //     alert('Debe llenar el campo requerido');
  //   }
  // };

  const handleChange = (event) => {
    // console.log('===>', event);
    // if (previewFile) {
    setPreviewFile(URL.createObjectURL(event.target.files[0]));
    // }
  };

  return (
    <Modal isOpen={isOpen}>
      <Snackbar
        open={openNotification}
        autoHideDuration={2500}
        onClose={handleClose}
        className="notification"
      >
        <Alert onClose={handleClose} severity="error">
          Debe agregar una nueva imagen!
        </Alert>
      </Snackbar>
      <div className="modalUpContainer">
        <div className="titleLabelContainer">
          <Label className="titleLabel">Modificar Departamento</Label>
        </div>
        <div className="deleteIconContainer">
          <DivButton
            className="deleteIconContainer"
            action={() => {
              deleteDepartamento();
            }}
          >
            <img alt={'Icono de edición'} src={deleteSvg} className="deleteIcon" />
          </DivButton>{' '}
        </div>
      </div>
      <Col>
        <hr />
      </Col>
      <ModalBody>
        {ingresando ? (
          <Spinner className="Spinner" type="grow" />
        ) : (
          <form
            className="form-items"
            action="http://Localhost:3001/api/departamentos/create"
            method="post"
            enctype="multipart/form-data"
            target=""
          >
            <div className="imagesDiv">
              <div className="labelImageContainer ">
                <Label className="imagesLabel">Imagen anterior</Label>
                <div className="imageContainer">
                  {previewFile ? (
                    <img alt="Imagen seleccionada" src={previewFile} className="marcaIcon" />
                  ) : (
                    <img alt={'Icono de marca'} src={imagenDepartamento} className="marcaIcon" />
                  )}
                </div>
              </div>
              <div className="labelImageContainer ">
                <Label className="imagesLabel">Seleccionar nueva imagen</Label>
                <input
                  className="dropzoneContainer"
                  onChange={handleChange}
                  type="file"
                  name="imagenDepartamento"
                />
              </div>
            </div>
            {/* <div className="plusIcon">
              <img alt={'Icono de edición'} src={imagenMarca} className="plusIcon" />
            </div> */}
            {/* ------- Fields comienzan ------- */}
            <div className="labelInputForm">
              <div className="labelInputInnerForm">
                <Label className="labelFormLogin"> Nombre </Label>
                <Input
                  className="inputFormLogin"
                  name="nombre"
                  id="nombre"
                  value={nombreDepartamento}
                  invalid={invalidNom}
                  valid={validNom}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </div>
              <div className="labelInputInnerForm">
                <Label className="labelFormLogin"> Descripción </Label>
                <Input
                  className="bigInputFormLogin"
                  name="descripcion"
                  id="descripcion"
                  value={descripcionDepartamento}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </div>
              <div className="buttonsContainer">
                <Button
                  className="buttonAgregar"
                  type="submit"
                  color="primary"
                  onClick={() => {
                    if (typeof imagenDepartamento === 'string') {
                      setOpenNotification(!openNotification);
                    } else {
                      console.log(typeof imagenDepartamento);

                      deleteDepartamento();
                      datos.setIngresando(true);

                      clean();
                      cerrarModal();
                    }
                  }}
                >
                  Confirmar Cambios
                </Button>

                <Button
                  className="buttonCancelar"
                  style={{ marginLeft: '1em' }}
                  color="danger"
                  onClick={() => {
                    clean();
                    cerrarModal();
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </div>
            {/* ------- Fields terminan ------- */}
            {/* <button type="submit"> Agregar</button> */}
          </form>
        )}
      </ModalBody>
      {/* <ModalFooter>
        <div className="buttonsContainer">
          <Button
            type="submit"
            color="primary"
            onClick={() => {
              writeMarca();
              clean();
              cerrarModal();
            }}
          >
            Agregar Marca
          </Button>

          <Button
            style={{ marginLeft: '1em' }}
            color="danger"
            onClick={() => {
              clean();
              cerrarModal();
            }}
          >
            Cancelar
          </Button>
        </div>
      </ModalFooter> */}
    </Modal>
  );
};

export default modificarMarca;
