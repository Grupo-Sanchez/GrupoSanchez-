import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import AgregarUsuario from '../Icons/CrearUsuario.svg';
import EliminarUsuario from '../Icons/EliminarUsuario.svg';
import EditarUsuario from '../Icons/EditarUsuario.svg';
import Agregar from './AgregarUsuario';

const OpcionesUsuarios = () => {
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalAgregar, setModalAgregar] = useState(false);
  const items = [
    {
      titulo: 'Agregar Usuarios',
      icon: (
        <img
          src={AgregarUsuario}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/asd',
      isOpen: () => setModalAgregar(true),
    },
    {
      titulo: 'Eliminar Usuarios',
      icon: (
        <img
          src={EliminarUsuario}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/asd',
    },
    {
      titulo: 'Modificar Usuarios',
      icon: (
        <img
          src={EditarUsuario}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/asd',
    },
  ];

  return (
    <Container>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Usuarios</h1>
      <Row md="3" style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon, isOpen }, i) => (
          <Col>
            <CartasOpciones titulo={titulo} to={to} icon={icon} isOpen={isOpen} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default OpcionesUsuarios;
