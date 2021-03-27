import React, { useEffect, useState, useCallback } from 'react';
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

import Snackbar from '@material-ui/core/Snackbar';

import Alert from '@material-ui/lab/Alert';

// Para el dropzone
import Dropzone from 'react-dropzone';

// import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// Helper de base de datos
import axios from 'axios';

// Iconos del dropzone
import check from '../Icons/check.svg';
import drag from '../Icons/drag.svg';

// Plugins
import { Confirm } from './Confirm';

// Css usado
import '../Styles/ModalMarcas.css';

const AgregarDepartamento = ({ isOpen, change, datos }) => {
  // Use state variables
  const [marcas, setMarcas] = useState(null);

  const [nombreDepartamento, setnombreDepartamento] = useState(null);
  const [descripcionDepartamento, setDescripcionDepartamento] = useState(null);
  const [imagenDepartamento, setImagenDepartamento] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  // Validaciones UI
  const [validNom, setValidNom] = useState(false);
  const [invalidNom, setInvalidNom] = useState(false);

  const [openNotification, setOpenNotification] = useState(false);

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
    setPreviewFile(null);

    setValidNom(false);
    setInvalidNom(false);
  };

  const handleChange = (event) => {
    // console.log('===>', event);
    // if (previewFile) {
    setPreviewFile(URL.createObjectURL(event.target.files[0]));
    // }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenNotification(false);
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
          Asegurese de agregar nombre e imagen!
        </Alert>
      </Snackbar>
      <div className="titleLabelContainer">
        <Label className="titleLabel">Crear Departamento</Label>
      </div>
      <Col>
        <hr />
      </Col>
      <ModalBody>
        <form
          className="form-items"
          action="http://Localhost:3001/api/departamentos/create"
          method="post"
          enctype="multipart/form-data"
        >
          <div className="imagesDiv">
            <div className="labelImageContainer ">
              {previewFile ? (
                <Label className="imagesLabel">Imagen seleccionada</Label>
              ) : (
                <Label className="imagesLabel">Seleccione una imagen</Label>
              )}
              <div className="imageContainer">
                {previewFile ? (
                  <img alt="Imagen seleccionada" src={previewFile} className="marcaIcon" />
                ) : (
                  <img alt="Seleccione imagen" src={drag} className="marcaIcon" />
                )}
              </div>
            </div>
            <div className="labelImageContainer ">
              <Label className="imagesLabel">Seleccionar imagen</Label>
              <input
                className="dropzoneContainer"
                onChange={handleChange}
                type="file"
                name="imagenDepartamento"
              />
            </div>
          </div>
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
              />
            </div>
            <div className="labelInputInnerForm">
              <Label className="labelFormLogin"> Descripción </Label>
              <Input
                className="bigInputFormLogin"
                name="descripcion"
                id="descripcion"
                value={descripcionDepartamento}
              />
            </div>
            <div className="buttonsContainer">
              <Button
                className="buttonAgregar"
                type="submit"
                color="primary"
                onClick={() => {
                  // if (imagenDepartamento == null || nombreDepartamento == null) {
                  //   setOpenNotification(!openNotification);
                  // } else {
                  datos.setIngresando(true);
                  clean();
                  cerrarModal();
                  // }
                }}
              >
                Agregar Departamento
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
      </ModalBody>
    </Modal>
  );
};

export default AgregarDepartamento;
