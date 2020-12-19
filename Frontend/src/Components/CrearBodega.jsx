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

const CrearBodega = (props) => {
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });
  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }
  const cerrarModal = () => {
    props.change();
    form.numBodega = 0;
    form.Description = '';
    form.Encargado = '';
    form.cantPasillos = 0;
  };
  async function handleValidSubmit(event, values) {
    console.log('aca en handle');
    try {
      const payload = {
        numBodega: values.numBodega,
        descripcion: values.Description,
        encargado: values.Encargado,
        cantPasillos: values.CantPasillos,
      };
      const response = await axios.post('http://localhost:3001/api/bodegas', payload);
      console.log(response);
      cerrarModal();
      window.location.reload(false);
    } catch (err) {
      console.err(err.response.payload);
    }
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
              <CartaBodegas {...form} />
            </div>
            <div className="col-sm">
              <AvField
                name="numBodega"
                label="Numero de bodega"
                type="number"
                onChange={handleChange}
                value={form.numBodega}
                validate={{ required: { value: true, errorMessage: 'Ingrese valor' } }}
              />
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
                name="CantPasillos"
                label="Cantidad de pasillos"
                type="number"
                onChange={handleChange}
                value={form.CantPasillos}
                validate={{
                  required: { value: true, errorMessage: 'Campo debe ser llenado' },
                }}
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <FormGroup>
            <Button type="submit" color="primary">
              Agregar Bodega
            </Button>
            <span>‎      ‏‏‎</span>
            <Button className="btn btn-danger" onClick={cerrarModal}>
              CANCELAR
            </Button>
          </FormGroup>
        </ModalFooter>
      </AvForm>
    </Modal>
  );
};

export default CrearBodega;
