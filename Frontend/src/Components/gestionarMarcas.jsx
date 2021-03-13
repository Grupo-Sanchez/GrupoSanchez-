import React, { useState, useContext, useEffect } from 'react';
import {
  UncontrolledCarousel,
  Collapse,
  Row,
  Col,
  Card,
  CardBody,
  Label,
  Input,
  Button,
  Spinner,
} from 'reactstrap';
import { Redirect, useLocation, useHistory, Link } from 'react-router-dom';

// Helper de base de datos
import axios from 'axios';

import { DivButton } from './Elements.jsx';

import AgregarMarca from './AgregarMarca.jsx';
import ModificarMarca from './modificarMarca.jsx';

import '../Styles/marcas.css';

// Iconos de edicion/eliminacion
import edit from '../Icons/edit.svg';
import plus from '../Icons/plus.svg';

const gestionarDepartamentos = () => {
  const [ingresando, setIngresando] = useState(true);

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalModificar, setModalModificar] = useState(false);

  const [data, setData] = useState(null);
  const [marcas, setMarcas] = useState(null);

  const [idMarcaSeleccionada, setIdMarcaSeleccionada] = useState(null);

  const [plusIsOpen, setPlusIsOpen] = useState(false);

  const togglePlus = () => setPlusIsOpen(!plusIsOpen);

  const location = useLocation();
  const history = useHistory();

  const getData = () => {
    axios.get('http://Localhost:3001/api/marcas').then(setData);
  };

  useEffect(() => {
    getData();
    setTimeout(() => setIngresando(false), 1500);
  }, []);

  useEffect(() => {
    getData();
    setTimeout(() => setIngresando(false), 1500);
  }, [ingresando]);

  return (
    <>
      <AgregarMarca
        datos={{ setIngresando }}
        isOpen={modalAgregar}
        change={() => {
          setModalAgregar(!modalAgregar);
        }}
      />
      <ModificarMarca
        datos={{ idMarca: idMarcaSeleccionada, setIngresando }}
        isOpen={modalModificar}
        change={() => {
          setModalModificar(!modalModificar);
        }}
      />

      {ingresando ? (
        <Spinner className="Spinner" type="grow" />
      ) : (
        <div className="pageContent">
          <div className="globalContainer">
            <div className="upContainer">
              <div className="buttonOptions">
                <div className="plusIconContainer">
                  <DivButton
                    className="plusDivButton"
                    action={() => {
                      togglePlus();
                      setModalAgregar(!modalAgregar);
                    }}
                  >
                    <img alt={'Icono de edición'} src={plus} className="plusIcon" />
                  </DivButton>
                </div>
                {/* <div className="colapseDiv">
                  <Collapse isOpen={plusIsOpen}>
                    <DivButton className="label">Agregar nueva marca</DivButton>
                  </Collapse>
                </div> */}
              </div>
              <div className="titleLabelContainer">
                <Label className="titleLabel">Marcas</Label>
              </div>
            </div>
            <Col>
              <hr />
            </Col>
            <div className="marcas_container">
              {data.data.marcas.map((marca) => (
                <div className="departmentBox">
                  <DivButton
                    className="editIcon"
                    action={() => {
                      setIdMarcaSeleccionada(marca._id);
                      setModalModificar(!modalModificar);
                    }}
                  >
                    <img alt={'Icono de edición'} src={edit} className="editIcon" />
                  </DivButton>
                  <img
                    alt={`Icono ${marca.nombre}`}
                    src={marca.imagenMarca}
                    className="backgroundSVG"
                  />
                  <div className="departmentLabel">Editar</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default gestionarDepartamentos;
