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
import { useDropzone } from 'react-dropzone';

// import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';

// Helper de base de datos
import axios from 'axios';

//import para el boton de quitar imagen
import { ReactComponent as Remove } from '../Icons/remove.svg';

// Iconos del dropzone
import check from '../Icons/check.svg';
import drag from '../Icons/drag.svg';

// Plugins
import { Confirm } from './Confirm';

// Css usado
import '../Styles/ModalMarcas.css';

// eddas
const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: -160,
  'margin-left': '300px',
  paddingRight: '50px',
  margin: 'auto',
  width: '1%',
};
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  borderWidth: 2,
  height: '200px',
  borderRadius: 2,
  borderColor: 'black',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  paddingTop: '-85px',
  maxWidth: '350px',
  'margin-right': '-50px',
  paddingRight: '50px',
  transition: 'border .24s ease-in-out',
  'border-radius': '26px',
};
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 150,
  height: 150,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

const AgregarMarca = ({ isOpen, change, datos }) => {
  // Use state variables
  const [files, setFiles] = useState([]);
  let [singleFiles, setSingleFiles] = useState([]);

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

  //eddas
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>{<img src={file.preview} style={img} />}</div>
    </div>
  ));

  const removerImagen = () => {
    setFiles([]);
    setSingleFiles([]);
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

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
      setSingleFiles(acceptedFiles); //este es el que se manda singleFiles[0]
    },
  });

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
          <Row style={{ marginTop: '-25px' }}>
            <Col style={{ 'margin-left': '-50px' }}>
              <h style={{ 'margin-left': '150px' }}>Imagen del Producto</h>
              <Button
                style={{
                  'background-color': 'transparent',
                  borderColor: 'transparent',
                  'margin-left': '30px',
                  'border-radius': '26px',
                }}
                onClick={() => removerImagen()}
              >
                <Remove width="25px" height="25px" />
              </Button>
              <section style={{ paddingLeft: '100px' }} className="container">
                <div style={baseStyle} {...getRootProps({ className: 'dropzone' })}>
                  <input {...getInputProps()} />
                  <br />
                  <br />
                  <p>Arrastre la imagen aqui o de clic para seleccionar</p>
                </div>
              </section>
              <Col>
                <div style={{ marginTop: -170, marginRight: '350px' }}>
                  <aside style={thumbsContainer}>{thumbs}</aside>
                </div>
              </Col>
            </Col>
          </Row>

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
