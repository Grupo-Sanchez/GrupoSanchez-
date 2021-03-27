import React, { useState, useContext, useEffect } from 'react';
import {
  UncontrolledCarousel,
  Container,
  Row,
  Col,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Spinner,
} from 'reactstrap';
import { Redirect, useLocation, useHistory, Link } from 'react-router-dom';

import axios from 'axios';

import { DivButton } from './Elements.jsx';

import '../Styles/department.css';
import ModificarDepartamento from './modificarDepartamento.jsx';

import '../Styles/marcas.css';

// Iconos de edicion/eliminacion
import edit from '../Icons/edit.svg';
import plus from '../Icons/plus.svg';
import lock from '../Icons/lock.svg';

// ------- Imports temporales de iconos en duro -------

import madera from '../Icons/madera.svg';
import hogar from '../Icons/hogar.svg';
import jardineria from '../Icons/jardineria.svg';
import electricidad from '../Icons/electricidad.svg';
import materialesContruccion from '../Icons/materialesContruccion.svg';
import papeleria from '../Icons/papeleria.svg';
import pintura from '../Icons/pintura.svg';
import ofertas from '../Icons/ofertas.svg';
import mascotas from '../Icons/mascotas.svg';
import comestibles from '../Icons/comestibles.svg';
import herramientas from '../Icons/herramientas.svg';
import tornilleria from '../Icons/tornilleria.svg';
import fontaneria from '../Icons/fontaneria.svg';
import automotriz from '../Icons/automotriz.svg';
import cerrajeria from '../Icons/cerrajeria.svg';
import AgregarDepartamento from './AgregarDepartamento.jsx';

// -------- Fin imports temporales de iconos en duro -------

const gestionarDepartamentos = () => {
  const [ingresando, setIngresando] = useState(true);

  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalModificar, setModalModificar] = useState(false);

  const [data, setData] = useState(null);

  const [idDepartamentoSeleccionado, setIdDepartamentoSelecionado] = useState(null);

  const [plusIsOpen, setPlusIsOpen] = useState(false);

  const togglePlus = () => setPlusIsOpen(!plusIsOpen);

  const location = useLocation();
  const history = useHistory();

  // ------------ Departamentos datos en duro ---------------
  const items = [
    {
      icon: madera,
      altText: 'Icono madera',
      nombre: 'Madera',
    },
    {
      icon: hogar,
      altText: 'Icono hogar',
      nombre: 'Hogar',
    },
    {
      icon: jardineria,
      altText: 'Icono jardineria',
      nombre: 'Jardinería',
    },
    {
      icon: electricidad,
      altText: 'Icono electricidad',
      nombre: 'Electricidad',
    },
    {
      icon: materialesContruccion,
      altText: 'Icono materialesContruccion',
      nombre: 'Materiales de construcción',
    },
    {
      icon: papeleria,
      altText: 'Icono papeleria',
      nombre: 'Papelería',
    },
    {
      icon: pintura,
      altText: 'Icono pintura',
      nombre: 'Pintura',
    },
    {
      icon: ofertas,
      altText: 'Icono ofertas',
      nombre: 'Ofertas',
    },
    {
      icon: mascotas,
      altText: 'Icono mascotas',
      nombre: 'Mascotas',
    },
    {
      icon: comestibles,
      altText: 'Icono comestibles',
      nombre: 'Comestibles',
    },
    {
      icon: herramientas,
      altText: 'Icono herramientas',
      nombre: 'Herramientas',
    },
    {
      icon: tornilleria,
      altText: 'Icono tornilleria',
      nombre: 'Tornilleria',
    },
    {
      icon: fontaneria,
      altText: 'Icono fontaneria',
      nombre: 'Fontanería',
    },
    {
      icon: automotriz,
      altText: 'Icono automotriz',
      nombre: 'Automotriz',
    },
    {
      icon: cerrajeria,
      altText: 'Icono cerrajeria',
      nombre: 'Cerrajería',
    },
  ];

  // ------------ Fin Departamentos datos en duro ---------------
  const getData = () => {
    axios.get('http://Localhost:3001/api/departamentos').then(setData);
  };

  useEffect(() => {
    setTimeout(() => setIngresando(false), 1500);
  }, []);

  useEffect(() => {
    getData();
    setTimeout(() => setIngresando(false), 1500);
    // window.stop();
  }, [ingresando]);

  return (
    <>
      <AgregarDepartamento
        datos={{ setIngresando }}
        isOpen={modalAgregar}
        change={() => {
          setModalAgregar(!modalAgregar);
        }}
      />
      <ModificarDepartamento
        datos={{ idDepartamento: idDepartamentoSeleccionado, setIngresando }}
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
                <Label className="titleLabel">Departamentos</Label>
              </div>
            </div>
            <Col>
              <hr />
            </Col>
            <div className="marcas_container">
              {items.map((departamento) => (
                <div className="MarcasBox">
                  {/* <DivButton className="MarcaeditIcon">
                    <img alt={'Icono de edición'} src={lock} className="MarcaeditIcon" />
                  </DivButton> */}
                  <img
                    alt={`Icono ${departamento.nombre}`}
                    src={departamento.icon}
                    className="MarcabackgroundSVG"
                  />
                  <div className="marcasLabel">{departamento.nombre}</div>
                </div>
              ))}
              {data.data.departamentos.map((departamento) => (
                <div className="MarcasBox">
                  <DivButton
                    className="MarcaeditIcon"
                    action={() => {
                      setIdDepartamentoSelecionado(departamento._id);
                      setModalModificar(!modalModificar);
                    }}
                  >
                    <img alt={'Icono de edición'} src={edit} className="MarcaeditIcon" />
                  </DivButton>
                  <img
                    alt={`Icono ${departamento.nombre}`}
                    src={departamento.imagenDepartamento}
                    className="MarcabackgroundSVG"
                  />
                  <div className="marcasLabel">Editar</div>
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
