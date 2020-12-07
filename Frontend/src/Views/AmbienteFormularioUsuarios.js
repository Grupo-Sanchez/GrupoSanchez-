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

// Import de ambientes y form
import FormCliente from '../Components/FormUsuarios';

// Import de styles de clientes
import '../Styles/FormularioCliente.css';

const AmbienteFormularioUsuarios = () => {

  // Crear los modal
  const [modalFormularioUsuarios, setModalFormularioUsuarios] = useState(false);
  const toggleFormularioUsuarios = () => setModalFormularioUsuarios(!modalFormularioUsuarios);

  // useEffect
  useEffect(() => {
    console.log('Se activó por primera vez ambiente de usuarios');
    toggleFormularioUsuarios();
  }, []);

  return (
    <Modal
      size="lg"
      isOpen={modalFormularioUsuarios}
      toggle={toggleFormularioUsuarios}
      backdrop="static"
    >
      <ModalHeader toggle={toggleFormularioUsuarios}>
        <h1 className="FormTitle">Agregar Usuario X</h1>
      </ModalHeader>
      <ModalBody>
        <FormCliente />
      </ModalBody>
      <ModalFooter>
        <Button
          color="primary"
          onClick={() => {
            toggleFormularioUsuarios();
          }}
        >
          Confirmar
        </Button>{' '}
      </ModalFooter>
    </Modal>
  );
};

export default AmbienteFormularioUsuarios;
