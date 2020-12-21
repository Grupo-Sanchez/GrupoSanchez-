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
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      isOpen: () => setModalAgregar(true),
    },
    {
      titulo: 'Gestionar Usuarios',
      icon: (
        <img
          src={EditarUsuario}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/Propietario/Gestionar/Usuarios',
    },
    {
      titulo: 'Eliminar Usuarios',
      icon: (
        <img
          src={EditarUsuario}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/Propietario/Eliminar/Usuarios',
    },
  ];

  return (
    <Container>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Usuarios</h1>
      <Row md="2" style={{ paddingTop: '25px' }}>
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
