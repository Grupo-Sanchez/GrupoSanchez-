import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import Formulario from './FormularioBodega';
import CartaBodegas from './CartaBodega';

const CrearBodega = (props) => {
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });

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
          <h3>CREACION DE BODEGAS</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-sm ">
            <CartaBodegas {...form} />
          </div>
          <div className="col-sm">
            <Formulario onChange={handleChange} form={form} />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary">CREAR BODEGA</button>
        <button className="btn btn-danger" onClick={props.change}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CrearBodega;
