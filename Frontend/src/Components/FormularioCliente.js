import React, { useState, useContext, useEffect } from 'react';
import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from 'reactstrap';

// Import de ambientes
import FormCliente from './FormCliente';

// Import de Forms

// Import de styles
import '../Styles/FormularioCliente.css';

const FormularioCliente = () => {
  // States
  // Modal
  const [modalFormularioCliente, setModalFormularioCliente] = useState(false);
  const toggleFormularioCliente = () => setModalFormularioCliente(!modalFormularioCliente);

  // useEffect
  useEffect(() => {
    console.log('Se activó por primera vez AmbienteFormularioCliente');
    toggleFormularioCliente();
  }, []);

  return (
    <Modal
      size="lg"
      isOpen={modalFormularioCliente}
      toggle={toggleFormularioCliente}
      backdrop="static"
    >
      <ModalHeader toggle={toggleFormularioCliente}>
        <h1 className="FormTitle">Agregar cliente</h1>
      </ModalHeader>
      <ModalBody>
        <FormCliente />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            toggleFormularioCliente();
          }}
        >
          Confirmar
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default FormularioCliente;
