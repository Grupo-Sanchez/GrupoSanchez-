import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import AgregarProveedor from './AgregarProveedor.jsx';
import AgregarUsuario from '../Icons/CrearUsuario.svg';
import EliminarUsuario from '../Icons/EliminarUsuario.svg';
import EditarUsuario from '../Icons/EditarUsuario.svg';

const OpcionesProveedor = () => {
  const [modalInsertar, setModalInsertar] = useState(false);
  const items = [
    {
      titulo: 'Agregar Proveedor',
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
      isOpen: () => setModalInsertar(true),
    },
    {
      titulo: 'Gestionar Proveedor',
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
      to: '/Propietario/Proveedores/Gestionar',
    },
    {
      titulo: 'Consultar Proveedor',
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
      <AgregarProveedor isOpen={modalInsertar} change={() => setModalInsertar(!modalInsertar)} />
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Proveedor</h1>
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

export default OpcionesProveedor;
