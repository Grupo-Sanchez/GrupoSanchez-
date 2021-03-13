import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from './Header.jsx';
import { rutasJefeTienda } from './utils/constants.jsx';

export default function AmbienteJefeTiendaBase({ children }) {
  return (
    <>
      <Container fluid style={{ height: '100%', padding: '0' }}>
        <Row noGutters>
          <Col>
            <Header items={rutasJefeTienda} />
          </Col>
        </Row>
        <Row noGutters style={{ height: '100%' }}>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
