import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import Agregar from './AgregarProducto';
import AgregarProducto from '../Icons/AgregarProducto.svg';
import EditarProducto from '../Icons/EditarProducto.svg';
import BuscarProducto from '../Icons/BuscarProducto.svg';

const OpcionesProductos = () => {
  const [modalAgregar, setModalAgregar] = useState(false);

  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalListar, setModalListar] = useState(false);

  const items = [
    {
      titulo: 'Agregar Productos',
      icon: (
        <img
          src={AgregarProducto}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
            fill: '#FFFF',
          }}
        />
      ),
      isOpen: () => setModalAgregar(true),
    },
    {
      titulo: 'Gestionar Producto',
      icon: (
        <img
          src={EditarProducto}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/Propietario/Productos/Gestionar',
    },
    {
      titulo: 'Buscar Producto',
      to: '/Propietario/Productos/Buscar',
      icon: (
        <img
          src={BuscarProducto}
          style={{
            width: '220px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
    },
  ];

  return (
    <Container>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Productos</h1>
      <Row md="3" style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon, isOpen }, i) => (
          <Col>
            <CartasOpciones titulo={titulo} to={to} icon={icon} isOpen={isOpen} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OpcionesProductos;
