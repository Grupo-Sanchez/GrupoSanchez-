import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Factura from '../Components/Factura.jsx';
import SegundoPrecio from '../Icons/SegundoPrecio.svg';
import Facturar from '../Icons/Facturar.svg';
import Devolucion from '../Icons/Devolucion.svg';
//087 017 019
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

const AmbienteJefeTienda2doPrecio = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Factura />
    </Container>
  </div>
);

export default AmbienteJefeTienda2doPrecio;
