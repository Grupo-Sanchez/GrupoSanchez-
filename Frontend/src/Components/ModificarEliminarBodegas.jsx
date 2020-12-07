import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from 'reactstrap';

const ModificarEliminarBodegas = (props) => (
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
        <div>
          <Table
          responsive
          striped
          bordered
          hover
          dark
          align="center"
          size="sm"
          id="myTable"
          style={{ width: '500px' }}
          >
          <thead>
            <tr>
              <th>#</th>
              <th>BODEGA</th>
              <th>DESCRIPCION</th>
              <th>ENCARGADO</th>
              <th>CANTIDAD DE PASILLOS</th>
              <th class="text-center"> Acción</th>
            </tr>
          </thead>
        </Table>
      </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.change}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
);

export default ModificarEliminarBodegas;
