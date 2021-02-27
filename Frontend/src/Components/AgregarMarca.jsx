import React from 'react';
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Row, Col } from 'reactstrap';

const AgregarProveedor = (props) => {
  const cerrarModal = () => {
    props.change();
  };

  async function handleValidSubmit(event, values) {
    try {
      const payload = {
        nombre: values.nombre,
        descripcion: values.descripcion,
      };
      console.log(payload);
      const response = await axios.post('http://localhost:3001/api/marcas', payload);
      console.log(response);
      cerrarModal();
    } catch (err) {
      console.err(err.response.payload);
    }
  }

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <Modal isOpen={props.isOpen} style={{ maxWidth: '1400px', width: '60%' }}>
      <ModalHeader>
        <h3>Agregar Marca</h3>
      </ModalHeader>
      <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
        <ModalBody>
          <AvGroup>
            <AvField
              name="nombre"
              label="Nombre de la Marca"
              type="text"
              validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
            />
            <AvField name="descripcion" label="Descripcion" type="textarea" rows="3" />
          </AvGroup>
        </ModalBody>
        <ModalFooter>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button type="submit" color="primary">
              Agregar Marca
            </Button>

            <Button style={{ marginLeft: '1em' }} color="danger" onClick={cerrarModal}>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </AvForm>
    </Modal>
  );
};

export default AgregarProveedor;
