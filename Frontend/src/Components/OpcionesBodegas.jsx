import { Col, Container, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import CrearBodega from '../Icons/CrearBodega.svg';
import EliminarBodega from '../Icons/EliminarBodega.svg';
import EditarBodega from '../Icons/EditarBodega.svg';
import ConsultarBodega from '../Icons/ConsultarBodega.svg';
import AgregarBodega from "../Views/CrearBodega.jsx";

const OpcionesBodegas = () => {
  const items = [
    {
      titulo: 'Crear Bodegas',
      icon: (
        <img
          src={CrearBodega}
          style={{
            width: '240px',
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
            width: '240px',
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
            width: '240px',
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
      titulo: 'Consultar Bodegas',
      icon: (
        <img
          src={ConsultarBodega}
          style={{
            width: '240px',
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

export default OpcionesBodegas;