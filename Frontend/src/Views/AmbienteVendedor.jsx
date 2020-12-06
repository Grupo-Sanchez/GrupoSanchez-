import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import SegundoPrecio from '../Icons/SegundoPrecio.svg';
import Facturar from '../Icons/Facturar.svg';
import Devolucion from '../Icons/Devolucion.svg';

const items = [
  {
    name: 'Facturar',
    to: '/Vendedor/Facturacion',
    icon: <img src={Facturar} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
];

// Landing page para Jefe de tienda
const AmbienteVendedor = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Row noGutters></Row>
    </Container>
    <h1>Ambiente Vendedor</h1>
  </div>
);

export default AmbienteVendedor;
