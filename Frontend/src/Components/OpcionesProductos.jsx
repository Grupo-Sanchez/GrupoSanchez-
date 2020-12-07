import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import Agregar from './AgregarProducto.js';
import AgregarProducto from '../Icons/AgregarProducto.svg';
import EditarProducto from '../Icons/EditarProducto.svg';
import EliminarProducto from '../Icons/EliminarProducto.svg';
import BuscarProducto from '../Icons/BuscarProducto.svg';
import Eliminar from './EliminarProducto.js';

const OpcionesProductos = () => {
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
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
          }}
        />
      ),
      to: '/asd',
      isOpen: () => setModalAgregar(true),
    },
    {
      titulo: 'Modificar / Eliminar Producto',
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
      to: '/asd',
      isOpen: () => setModalEliminar(true),
    },
    {
      titulo: 'Buscar Producto',
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
      to: '/asd',
    },
  ];

  return (
    <Container>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <Eliminar isOpen={modalEliminar} change={() => setModalEliminar(!modalEliminar)} />
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Productos</h1>
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

export default OpcionesProductos;
