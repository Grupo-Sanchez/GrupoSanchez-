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

import { DivButton } from './Elements.jsx';

import '../Styles/department.css';

// Iconos de edicion/eliminacion
import edit from '../Icons/edit.svg';

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

// -------- Fin imports temporales de iconos en duro -------

const gestionarDepartamentos = () => {
  const [ingresando, setIngresando] = useState(true);

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

  useEffect(() => {
    setTimeout(() => setIngresando(false), 1500);
  }, []);

  return (
    <>
      {ingresando ? (
        <Spinner className="Spinner" type="grow" />
      ) : (
        <div className="globalContainer">
          <div className="titleLabelContainer">
            <Label className="titleLabel">Departamentos</Label>
          </div>
          <Col>
            <hr />
          </Col>
          <div className="departmentBoxesContainer">
            {items.map((departamento) => (
              <div className="departmentBox">
                <DivButton className="editIcon">
                  <img alt={'Icono de edición'} src={edit} className="editIcon" />
                </DivButton>
                <img
                  alt={`Icono ${departamento.nombre}`}
                  src={departamento.icon}
                  className="backgroundSVG"
                />
                <div className="departmentLabel">{departamento.nombre}</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default gestionarDepartamentos;
