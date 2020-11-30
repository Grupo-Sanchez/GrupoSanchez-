import { Col, Row, Container } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import AgregarProducto from '../Icons/AgregarProducto.svg';
import EditarProducto from '../Icons/EditarProducto.svg';
import EliminarProducto from '../Icons/EliminarProducto.svg';
import BuscarProducto from '../Icons/BuscarProducto.svg';

const OpcionesProductos = () => {
  const items = [
    {
      titulo: 'Agregar Productos',
      icon: (
        <img
          src={AgregarProducto}
          style={{ width: '220px', height: 'auto', paddingBottom: '20px' }}
        />
      ),
      to: '/asd',
    },
    {
      titulo: 'Modificar Producto',
      icon: (
        <img
          src={EditarProducto}
          style={{ width: '220px', height: 'auto', paddingBottom: '20px' }}
        />
      ),
      to: '/asd',
    },
    {
      titulo: 'Eliminar Producto',
      icon: (
        <img
          src={EliminarProducto}
          style={{ width: '220px', height: 'auto', paddingBottom: '20px' }}
        />
      ),
      to: '/asd',
    },
    {
      titulo: 'Buscar Producto',
      icon: (
        <img
          src={BuscarProducto}
          style={{ width: '220px', height: 'auto', paddingBottom: '20px' }}
        />
      ),
      to: '/asd',
    },
  ];

  return (
    <Container>
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Bodegas</h1>
      <Row md="4" style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon }, i) => (
          <Col>
            <CartasOpciones titulo={titulo} to={to} icon={icon} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default OpcionesProductos;
