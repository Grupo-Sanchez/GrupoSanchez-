import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import OpcionesUsuarios from '../Components/OpcionesUsuarios.jsx';
import Informes from '../Icons/Informes.svg';
import Productos from '../Icons/Productos.svg';
import Bodegas from '../Icons/Bodegas.svg';
import Notificacion from '../Icons/Notificacion.svg';
import Usuario from '../Icons/Usuario.svg';
import NuevaNotificacion from '../Icons/NuevaNotificacion.svg';

const items = [
  {
    name: 'Productos',
    to: '/Propietario/Productos',
    icon: (
      <img
        src={Productos}
        style={{ width: '2em', height: '2em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
  {
    name: 'Usuarios',
    to: '/Propietario/Usuarios',
    icon: <img src={Usuario} style={{ width: '2em', height: '2em', marginRight: '0.5rem' }} />,
  },
  {
    name: 'Bodegas',
    to: '/Propietario/Bodegas',
    icon: (
      <img
        src={Bodegas}
        style={{ width: '2em', height: '2em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
  {
    name: 'Reportes',
    to: '/EnConstruccion',
    icon: (
      <img
        src={Informes}
        style={{ width: '2em', height: '2em', marginRight: '0.5rem' }}
        alt="logo"
      />
    ),
  },
];

const AmbientePropietarioUsuarios = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>
      <Row noGutters>
        <OpcionesUsuarios />
      </Row>
    </Container>
  </div>
);

export default AmbientePropietarioUsuarios;