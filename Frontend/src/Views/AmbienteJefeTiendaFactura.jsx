import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';
import Factura from '../Components/Factura.jsx';
import Facturar from '../Icons/Facturar.svg';
import Devolucion from '../Icons/Devolucion.svg';
import AmbienteJefeTiendaBase from '../Components/AmbienteJefeTiendaBase.jsx';

// Landing page para Jefe de tienda
const AmbienteJefeTiendaFactura = () => (
  <AmbienteJefeTiendaBase>
    <Factura />
  </AmbienteJefeTiendaBase>
);

export default AmbienteJefeTiendaFactura;
