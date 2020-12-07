import { useState } from 'react';
import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import Agregar from './AgregarProducto.jsx';
import AgregarProducto from '../Icons/AgregarProducto.svg';
import EditarProducto from '../Icons/EditarProducto.svg';
import EliminarProducto from '../Icons/EliminarProducto.svg';
import BuscarProducto from '../Icons/BuscarProducto.svg';

const OpcionesProductos = () => {
  const [modalInsertar, setModalInsertar] = useState(false);
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
      isOpen: () => setModalInsertar(true),
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
      <Agregar isOpen={modalInsertar} change={() => setModalInsertar(!modalInsertar)} />
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