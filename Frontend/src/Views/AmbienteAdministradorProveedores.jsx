import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Proveedores from '../Icons/Proveedores.svg';

const items = [
  {
    name: 'Proveedores',
    to: '/Administrador/Proveedores',
    icon: <img src={Proveedores} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
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
