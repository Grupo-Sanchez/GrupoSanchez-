import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import OpcionesProductos from '../Components/OpcionesProductos.jsx';
import OpcionesBodegas from '../Components/OpcionesBodegas.jsx';
import CreacionDepartamentos from '../Components/CreacionDepartamentos.jsx';
import Informes from '../Icons/Informes.svg';
import Productos from '../Icons/Productos.svg';
import Bodegas from '../Icons/Bodegas.svg';
import Notificacion from '../Icons/Notificacion.svg';
import NuevaNotificacion from '../Icons/NuevaNotificacion.svg';

const items = [
  {
    name: 'Productos',
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
    name: 'Bodegas',
    to: '/b',
    icon: (
      <img
        src={Bodegas}
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
  {
    name: 'Informes',
    to: '/c',
    icon: (
      <img
        src={Informes}
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
  {
    name: 'Notificaciones',
    to: '/d',
    icon: (
      <img
        src={Notificacion}
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
];

const AmbienteAdministrador = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Row>
        <CreacionDepartamentos />
      </Row>
    </Container>
  </div>
);

export default AmbienteAdministrador;
