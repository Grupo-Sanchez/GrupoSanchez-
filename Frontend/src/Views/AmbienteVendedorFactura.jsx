import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Facturar from '../Icons/Facturar.svg';
import FacturaVendedor from '../Components/FacturaVendedor.jsx';

const items = [
  {
    name: 'Facturar',
    to: '/Vendedor/Facturacion',
    icon: <img src={Facturar} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
];

const AmbienteVendedorFactura = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <FacturaVendedor />
    </Container>
  </div>
);

export default AmbienteVendedorFactura;
