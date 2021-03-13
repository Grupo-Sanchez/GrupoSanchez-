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


    setValidNom(false);
    setInvalidNom(false);
  };

  // // Asignar imagen al state
  // const onDropImage = useCallback((f) => {
  //   console.log('Dropped image', f);
  //   setImagenMarca(f[0]);
  // });

  // const changeValue = (event) => {
  //   const emptyVal = event.value === '';
  //   switch (event.name) {
  //     case 'nombre':
  //       setnombreMarca(event.value);
  //       setValidNom(!emptyVal);
  //       setInvalidNom(emptyVal);
  //       break;
  //     case 'descripcion':
  //       setDescripcionMarca(event.value);
  //       break;
  //     case 'imagenMarca':
  //       setImagenMarca(event.target.files[0]);
  //       break;
  //     default:
  //   }
  // };

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


  return (
    <Modal isOpen={isOpen}>
      <div className="titleLabelContainer">
        <Label className="titleLabel">Crear Marca</Label>
      </div>
      <Col>
        <hr />
      </Col>
      <ModalBody>
        {/* ------- Dropzone comienza ------- */}
        {/* <Dropzone onDrop={onDropImage}>
          {({ getRootProps, getInputProps }) => (
            <div className="dropzoneContainer">
              <div {...getRootProps()}>
                <input
                  type="file"
                  name="imagenMarca"
                  onChange={(event) => changeValue(event.currentTarget)}
                  {...getInputProps()}
                />
                <div>
                  {imagenMarca ? (
                    <div className="innerDropzoneContainer">
                      <img
                        alt={'Icono confirmacion de imagen'}
                        src={check}
                        className="backgroundSVG"
                      />
                      <p>Imagen seleccionada</p>
                    </div>
                  ) : (
                    <div className="innerDropzoneContainer">
                      <img alt={'Icono drag de imagen'} src={drag} className="backgroundSVG" />
                      <p>Arraste imagen aquí</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          )}
        </Dropzone> */}
        {/* ------- Dropzone termina ------- */}

        <form
          className="form-items"
          action="http://Localhost:3001/api/marcas/create"
          method="post"
          enctype="multipart/form-data"
          target="_blank"
        >
          <input
            className="dropzoneContainer "
            onChange={(e) => console.log(e)}
            type="file"
            name="imagenMarca"
          />
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
