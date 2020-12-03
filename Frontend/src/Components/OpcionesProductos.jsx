import { Col, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import AgregarProducto from '../Icons/AgregarProducto.svg';
import EditarProducto from '../Icons/EditarProducto.svg';
import EliminarProducto from '../Icons/EliminarProducto.svg';
import BuscarProducto from '../Icons/BuscarProducto.svg';

const OpcionesProductos = () => {
  const items = [
    {
      titulo: 'Agregar Productos',
      icon: <img src={AgregarProducto} style={{ width: '275px', height: 'auto' }} />,
      to: '/asd',
    },
    {
      titulo: 'Modificar Producto',
      icon: <img src={EditarProducto} style={{ width: '275px', height: 'auto' }} />,
      to: '/asd',
    },
    {
      titulo: 'Eliminar Producto',
      icon: <img src={EliminarProducto} style={{ width: '275px', height: 'auto' }} />,
      to: '/asd',
    },
    {
      titulo: 'Buscar Producto',
      icon: <img src={BuscarProducto} style={{ width: '275px', height: 'auto' }} />,
      to: '/asd',
    },
  ];

  return (
    <Row md="4" style={{ paddingTop: '25px' }}>
      {items.map(({ titulo, to, icon }, i) => (
        <Col>
          <CartasOpciones titulo={titulo} to={to} icon={icon} />
        </Col>
      ))}
      ;
    </Row>
  );
};

export default OpcionesProductos;
