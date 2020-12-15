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
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import Formulario from './FormularioBodega';
import CartaBodegas from './CartaBodega';
import { STATES } from 'mongoose';

const ModificarBodega = (props) => {
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });

  const cerrarModal = () => {
    props.change();
    form.numBodega = 0;
    form.Description = '';
    form.Encargado = '';
    form.cantPasillos = 0;
  };

  const EscribirBodegas = async () => {

    //if(form.numBodega !== false && form.Description !== false && form.Encargado !== false && form.CantPasillos !== false){
      const campos = {
        numBodega: form.numBodega,
        descripcion: form.Description,
        encargado: form.Encargado,
        cantPasillos: form.CantPasillos,
      };
      const res = await axios.post('http://localhost:3001/api/bodegas', campos);
      console.log(res);
      alert('¡Bodega Agregada!');
      cerrarModal();
    //}else{
      //alert('Error en la creacion!')
      //cerrarModal();
    //}
    
  };

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
      <ModalHeader>
        <div>
          <h3>Modificacion DE BODEGAS</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-sm ">
            <CartaBodegas {...form} />
          </div>
          <div className="col-sm">
            {/* <Formulario onChange={handleChange} form={form} /> */}
            <AvForm>
              <AvField
                name="numBodega"
                label="Numero de bodega"
                type="number"
                onChange={handleChange}
                value={form.numBodega}
              />
              <AvField
                name="Description"
                label="Descripcion"
                type="text"
                onChange={handleChange}
                value={form.Description}
                validate={{
                  required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                  pattern: {
                    value: '^[A-Za-z0-9]',
                    errorMessage: 'Este campo debe estar compuesto solo de letras y numeros',
                  },
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
                  pattern: {
                    value: '^[A-Za-z0-9]',
                    errorMessage: 'Este Campo debe ser llenado con letras y numeros',
                  },
                }}
              />
              <AvField
                name="CantPasillos"
                label="Cantidad de pasillos"
                type="number"
                onChange={handleChange}
                value={form.CantPasillos}
              />
            </AvForm>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <FormGroup>
          <div className="row">
            <Button className="btn btn-primary" onClick={() => EscribirBodegas()}>
              Modificar
            </Button>
            <Button className="btn btn-primary" onClick={props.change}>
              CANCELAR
            </Button>
          </div>
        </FormGroup>
      </ModalFooter>
    </Modal>
  );
};

export default ModificarBodega;