import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import CardBodega from './CartaBodega';

const ListarBodegas = (props) => (
  <Modal isOpen={props.isOpen} className="text-center">
    <ModalHeader>
      <div>
        <h3>LISTADO DE BODEGAS </h3>
      </div>
    </ModalHeader>
    <ModalBody>
      <div>
      </div>
    </ModalBody>
    <ModalFooter>
      <button className="btn btn-danger" onClick={props.change}>
        CANCELAR
      </button>
    </ModalFooter>
  </Modal>
);

export default ListarBodegas;
