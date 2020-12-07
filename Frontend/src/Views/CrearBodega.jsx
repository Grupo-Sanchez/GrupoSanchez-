import React, { useState, useEffect } from "react";
import Formulario from "../Components/FormularioBodega";
import Card from "../Components/CartaBodega";
import { Modal, ModalBody, ModalHeader } from "reactstrap";

const CrearBodega = () => {
  const [form, setForm] = useState({
    numBodega: "",
    Description: "",
    Encargado: "",
    CantPasillos: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isOpen={props.isOpen}className="text-center">
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
        <button className="btn btn-primary" onClick={() => insertar(0)}>
          CREAR BODEGA
        </button>
        <button className="btn btn-danger" onClick={() => setModalInsertarCodigo(false)}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default CrearBodega;