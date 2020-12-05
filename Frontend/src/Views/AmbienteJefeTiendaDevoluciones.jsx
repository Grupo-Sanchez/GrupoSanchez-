import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Proveedores from '../Icons/Proveedores.svg';

const items = [
  {
    name: 'Facturar',
    to: '/JefeTienda/Facturar',
    icon: <img src={Facturar} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
  {
    name: 'Devoluciones',
    to: '/JefeTienda/Devoluciones',
    icon: <img src={Devolucion} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
];

const AmbienteJefeTiendaDevoluciones = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Row noGutters></Row>
    </Container>
  </div>
);

export default AmbienteJefeTiendaDevoluciones;
