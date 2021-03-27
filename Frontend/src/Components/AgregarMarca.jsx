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

const AgregarMarca = ({ isOpen, change, datos }) => {
  // Use state variables
  const [marcas, setMarcas] = useState(null);

  const [nombreMarca, setnombreMarca] = useState(null);
  const [descripcionMarca, setDescripcionMarca] = useState(null);
  const [imagenMarca, setImagenMarca] = useState(null);
  const [previewFile, setPreviewFile] = useState(null);

  // Validaciones UI
  const [validNom, setValidNom] = useState(false);
  const [invalidNom, setInvalidNom] = useState(false);

  // State para spinner
  const [cargando, setCargando] = useState(true);

  // procedures
  const cerrarModal = () => {
    change();
  };

  const clean = () => {
    setImagenMarca(null);
    setnombreMarca(null);
    setDescripcionMarca(null);
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

  return (
    <Modal isOpen={isOpen}>
      <div className="titleLabelContainer">
        <Label className="titleLabel">Crear Marca</Label>
      </div>
      <Col>
        <hr />
      </Col>
      <ModalBody>
        <form
          className="form-items"
          action="http://Localhost:3001/api/marcas/create"
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
                name="imagenMarca"
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
                value={nombreMarca}
                invalid={invalidNom}
                valid={validNom}
                // onChange={(event) => changeValue(event.currentTarget)}
              />
            </div>
            <div className="labelInputInnerForm">
              <Label className="labelFormLogin"> Descripción </Label>
              <Input
                className="bigInputFormLogin"
                name="descripcion"
                id="descripcion"
                value={descripcionMarca}
                // onChange={(event) => changeValue(event.currentTarget)}
              />
            </div>
            <div className="buttonsContainer">
              <Button
                className="buttonAgregar"
                type="submit"
                color="primary"
                onClick={() => {
                  datos.setIngresando(true);
                  clean();
                  cerrarModal();
                }}
              >
                Agregar Marca
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

export default AgregarMarca;
