import React, { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import Agregar from './AgregarMarca.jsx';
import CrearMarca from '../Icons/Marca.svg';
import EditarUsuario from '../Icons/EditarUsuario.svg';

const OpcionesBodegas = () => {
  const [modalAgregar, setModalAgregar] = useState(false);

  const items = [
    {
      titulo: 'Crear Marca',
      icon: (
        <img
          src={CrearMarca}
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
      titulo: 'Gestionar Marca',
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
      to: '/Propietario/Marcas/Gestionar',
    },
  ];

  return (
    <Container fluid="md" style={{ padding: '0' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Marcas</h1>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <Row md="2" style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon, isOpen }, i) => (
          <Col>
            <CartasOpciones titulo={titulo} to={to} icon={icon} isOpen={isOpen} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OpcionesBodegas;
