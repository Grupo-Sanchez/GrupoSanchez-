import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Devoluciones from '../Components/Devoluciones.jsx';
import Facturar from '../Icons/Facturar.svg';
import Devolucion from '../Icons/Devolucion.svg';
import AmbienteJefeTiendaBase from '../Components/AmbienteJefeTiendaBase.jsx';

// Landing page para Jefe de tienda
const AmbienteJefeTiendaDevoluciones = () => (
  <AmbienteJefeTiendaBase>
    <Devoluciones />
  </AmbienteJefeTiendaBase>
);

export default AmbienteJefeTiendaDevoluciones;
