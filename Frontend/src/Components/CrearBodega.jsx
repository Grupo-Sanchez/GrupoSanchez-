import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  CustomInput,
} from 'reactstrap';
import axios from 'axios';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvButton,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import Formulario from './FormularioBodega';
import CartaBodegas from './CartaBodega';
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';
import home from '../Icons/warehouse.png';

const CrearBodega = (props) => {
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
    CantProductos: '',
  });

  const cerrarModal = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        props.change();
        form.numBodega = 0;
        form.Description = '';
        form.Encargado = '';
      },
    });
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }
  async function handleValidSubmit(event, values) {
    const campos = {
      numBodega: values.numBodega,
      descripcion: values.Description,
      encargado: values.Encargado,
      cantPasillos: values.CantPasillos,
      CantProductos: '0',
    };
    await axios
      .post('http://178.128.67.247:3001/api/bodegas', campos)
      .then((res) => {
        if (res.data.message) {
          Confirm.open({
            title: 'aviso',
            message: 'El numero de bodega ya existe',
            onok: () => {},
          });
        } else {
          Confirm.open({
            title: '!exito!',
            message: 'bodega agregada correctamente',
            onok: () => {},
          });
          cerrarModal();
        }
      })
      .catch((error) => {
        Confirm.open({
          title: 'error',
          message: 'ha ocurrido un error',
          onok: () => {},
        });
      });
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal
      isOpen={props.isOpen}
      className="text-center"
      style={{ maxWidth: '1700px', width: '80%' }}
    >
      <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
        <ModalHeader>
          <div>
            <h3>CREACION DE BODEGAS</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-sm ">
              <div className="card-bodegas mx-auto Fitness-Card">
                <div className="card-body">
                  <div className="row center">
                    <div className="col-6">
                      <img src={home} className="float-right" alt=" not found" />
                    </div>
                    <div className="col-6 Fitness-Card-Info ">
                      <div>
                        <p className="text-left">
                          <b>descripción:</b> {form.Description}
                        </p>
                        <p className="text-left">
                          <b>Encargado:</b> {form.Encargado}
                        </p>
                        <p className="text-left">
                          <b>No. Bodega</b> {form.numBodega}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-sm">
              <AvField
                name="Description"
                label="Descripcion"
                type="text"
                onChange={handleChange}
                value={form.Description}
                validate={{
                  required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                }}
              />
              <AvField
                name="Encargado"
                label="Encargado"
                type="text"
                onChange={handleChange}
                value={form.Encargado}
                validate={{
                  required: { value: true, errorMessage: 'Campo debe ser llenado' },
                }}
              />
              <AvField
                name="numBodega"
                label="Numero de bodega"
                type="number"
                onChange={handleChange}
                value={form.numBodega}
                validate={{ required: { value: true, errorMessage: 'Ingrese valor' } }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <FormGroup>
            <Button
              type="submit"
              color="primary"
              style={{
                'border-radius': '26px',
                'border-color': '#98ff98',
                color: 'green',
                border: '1px solid green',
                'background-color': 'white',
                'font-size': '16px',
                cursor: 'pointer',
              }}
            >
              Agregar Bodega
            </Button>
            <span>‎ ‏‏‎</span>
            <Button
              className="btn btn-danger"
              style={{
                margin: '10px',
                'border-radius': '26px',
                'border-color': '#ff9800',
                color: 'red',
                border: '1px solid red',
                'background-color': 'white',
                'font-size': '16px',
                cursor: 'pointer',
              }}
              onClick={cerrarModal}
            >
              CANCELAR
            </Button>
          </FormGroup>
        </ModalFooter>
      </AvForm>
    </Modal>
  );
};

export default CrearBodega;
