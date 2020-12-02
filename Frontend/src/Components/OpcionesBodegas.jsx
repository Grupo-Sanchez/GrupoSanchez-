import { Col, Container, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import CrearBodega from '../Icons/CrearBodega.svg';
import EliminarBodega from '../Icons/EliminarBodega.svg';
import EditarBodega from '../Icons/EditarBodega.svg';

const OpcionesBodegas = () => {
  const items = [
    {
      titulo: 'Crear Bodegas',
      icon: (
        <img
          src={CrearBodega}
          style={{
            width: '275px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
    },
    {
      titulo: 'Modificar Bodegas',
      icon: (
        <img
          src={EditarBodega}
          style={{
            width: '275px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
    },
    {
      titulo: 'Eliminar Bodegas',
      icon: (
        <img
          src={EliminarBodega}
          style={{
            width: '275px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
    },
  ];

  return (
    <Container fluid="md" style={{ padding: '0' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Bodegas</h1>

      <Row style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon }, i) => (
          <Col md="4">
            <CartasOpciones titulo={titulo} to={to} icon={icon} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default OpcionesBodegas;
