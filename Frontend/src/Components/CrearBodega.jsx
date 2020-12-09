import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import axios from 'axios';
import Formulario from './FormularioBodega';
import CartaBodegas from './CartaBodega';

const CrearBodega = (props) => {
  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });

  const cerrarModal = () => {
    props.change();
    form.numBodega = '';
    form.Description = '';
    form.Encargado = '';
    form.cantPasillos = '';
  };

  const EscribirBodegas = async () => {
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
        <button className="btn btn-primary" onClick = {() => EscribirBodegas()}>CREAR BODEGA</button>
        <button className="btn btn-danger" onClick={props.change}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CrearBodega;
