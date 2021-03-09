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

import '../Styles/marcas.css';

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
      icon: 'https://www.truper.com/CatVigente/img/logo_T.svg',
      altText: 'Icono madera',
      nombre: 'Madera',
    },
    {
      icon: 'https://www.brandemia.org/wp-content/uploads/2013/06/stanley_logo_principal.jpg',
      altText: 'Icono hogar',
      nombre: 'Hogar',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/pretul-logo.png',
      altText: 'Icono jardineria',
      nombre: 'Jardinería',
    },
    {
      icon: 'https://1000marcas.net/wp-content/uploads/2020/10/Craftsman-logo-1280x768.png',
      altText: 'Icono electricidad',
      nombre: 'Electricidad',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/vorel-logo.png',
      altText: 'Icono materialesContruccion',
      nombre: 'Materiales de construcción',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/hermex-logo.png',
      altText: 'Icono papeleria',
      nombre: 'Papelería',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/fiero-logo.png',
      altText: 'Icono pintura',
      nombre: 'Pintura',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/teraflex-logo.png',
      altText: 'Icono ofertas',
      nombre: 'Ofertas',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/termoflex-logo.png',
      altText: 'Icono mascotas',
      nombre: 'Mascotas',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/hydrozol-logo.png',
      altText: 'Icono comestibles',
      nombre: 'Comestibles',
    },
    {
      icon: 'https://profimag.bg/wp-content/uploads/toya-logo.png',
      altText: 'Icono herramientas',
      nombre: 'Herramientas',
    },
    {
      icon:
        'https://petrolheadgarage.com/wp-content/uploads/2020/04/Milwaukee-Marca-de-herramientas-Maletines-de-herramientas-PetrolheadGarage-800x450.jpg.webp',
      altText: 'Icono tornilleria',
      nombre: 'Tornilleria',
    },
    {
      icon:
        'https://petrolheadgarage.com/wp-content/uploads/2020/04/Hitachi-Power-Tools-Marca-de-herramientas-PetrolheadGarage-800x450.jpg.webp',
      altText: 'Icono fontaneria',
      nombre: 'Fontanería',
    },
    {
      icon:
        'https://petrolheadgarage.com/wp-content/uploads/2020/04/Irwin-Tools-Marca-de-herramientas-PetrolheadGarage-800x450.jpg.webp',
      altText: 'Icono automotriz',
      nombre: 'Automotriz',
    },
    {
      icon:
        'https://petrolheadgarage.com/wp-content/uploads/2020/04/Makita-Marca-de-herramientas-PetrolheadGarage-800x450.jpg.webp',
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
            <Label className="titleLabel">Marcas</Label>
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
                <div className="departmentLabel">Editar</div>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default gestionarDepartamentos;
