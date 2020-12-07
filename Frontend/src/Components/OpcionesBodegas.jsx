import { useState } from 'react';
import { Col, Container, Row } from 'reactstrap';
import CartasOpciones from './CartasOpciones.jsx';
import Agregar from './CrearBodega.jsx';
import Listar from './ListarBodegas.jsx';
import Modificar from './ModificarEliminarBodegas.jsx';
import CrearBodega from '../Icons/CrearBodega.svg';
import EliminarBodega from '../Icons/EliminarBodega.svg';
import EditarBodega from '../Icons/EditarBodega.svg';
import ConsultarBodega from '../Icons/ConsultarBodega.svg';

const OpcionesBodegas = () => {
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalEliminar, setModalEliminar] = useState(false);
  const [modalConsultar, setModalConsultar] = useState(false);
  const [modalModificar, setModalModificar] = useState(false);
  const items = [
    {
      titulo: 'Crear Bodegas',
      icon: (
        <img
          src={CrearBodega}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
      isOpen: () => setModalAgregar(true),
    },
    {
      titulo: 'Modificar Bodegas',
      icon: (
        <img
          src={EditarBodega}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
      isOpen: () => setModalModificar(true),
    },
    {
      titulo: 'Eliminar Bodegas',
      icon: (
        <img
          src={EliminarBodega}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
      isOpen: () => setModalEliminar(true),
    },
    {
      titulo: 'Consultar Bodegas',
      icon: (
        <img
          src={ConsultarBodega}
          style={{
            width: '240px',
            height: 'auto',
            paddingBottom: '20px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        />
      ),
      to: '/',
      isOpen: () => setModalConsultar(true),
    },
  ];

  return (
    <Container fluid="md" style={{ padding: '0' }}>
      <h1 style={{ textAlign: 'center', paddingTop: '25px' }}>Bodegas</h1>
      <Agregar isOpen={modalAgregar} change={() => setModalAgregar(!modalAgregar)} />
      <Listar isOpen={modalConsultar} change={() => setModalConsultar(!modalConsultar)} />
      <Modificar isOpen={modalModificar} change={() => setModalModificar(!modalModificar)} />
      <Row md="4" style={{ paddingTop: '25px' }}>
        {items.map(({ titulo, to, icon, isOpen }, i) => (
          <Col>
            <CartasOpciones titulo={titulo} to={to} icon={icon} isOpen={isOpen} />
          </Col>
        ))}
        ;
      </Row>
    </Container>
  );
};

export default OpcionesBodegas;
