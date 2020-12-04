import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';

const items = [
  {
    name: '3er Precio',
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
    name: 'Proveedores',
    to: '/a',
    icon: <img src={Usuario} style={{ width: '1em', height: '1em', marginRight: '0.5rem' }} />,
  },
];

const AmbienteAdministradorProveedores = () => (
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

export default AmbienteAdministradorProveedores;
