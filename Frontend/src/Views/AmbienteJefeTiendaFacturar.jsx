import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';

const items = [
  {
    name: '2do Precio',
    to: '/a',
    icon: (
      <img
        src={Productos}
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
  {
    name: 'Facturar',
    to: '/a',
    icon: <img src={Usuario} style={{ width: '1em', height: '1em', marginRight: '0.5rem' }} />,
  },
  {
    name: 'Devoluciones',
    to: '/a',
    icon: <img src={Usuario} style={{ width: '1em', height: '1em', marginRight: '0.5rem' }} />,
  },
];

const AmbienteJefeTienda2doPrecio = () => (
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

export default AmbienteJefeTienda2doPrecio;
