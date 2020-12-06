import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Factura from '../Components/Factura.jsx';
import Facturar from '../Icons/Facturar.svg';
import Devolucion from '../Icons/Devolucion.svg';

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

// Landing page para Jefe de tienda
const AmbienteJefeTiendaFactura = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Factura />
    </Container>
    <h1>Ambiente Jefe De Tienda</h1>
  </div>
);

export default AmbienteJefeTiendaFactura;
