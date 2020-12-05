import { Col, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import CrearBodega from '../Icons/CrearBodega.svg';
import EliminarBodega from '../Icons/EliminarBodega.svg';
import EditarBodega from '../Icons/EditarBodega.svg';

const OpcionesBodegas = () => {
  const items = [
    {
      titulo: 'Crear Bodegas',
      icon: <img src={CrearBodega} />,
      to: '/',
    },
    {
      titulo: 'Modificar Bodegas',
      icon: <img src={EditarBodega} />,
      to: '/',
    },
    {
      titulo: 'Eliminar Bodegas',
      icon: <img src={EliminarBodega} />,
      to: '/',
    },
  ];

  return (
    <Row style={{ paddingTop: '25px' }}>
      {items.map(({ titulo, to, icon }, i) => (
        <Col md="4">
          <CartasOpciones titulo={titulo} to={to} icon={icon} />
        </Col>
      ))}
      ;
    </Row>
  );
};

export default OpcionesBodegas;
