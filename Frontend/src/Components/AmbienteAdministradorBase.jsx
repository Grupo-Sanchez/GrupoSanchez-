import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from './Header.jsx';
import { rutasAdministrador } from './utils/constants.jsx';

export default function AmbienteAdministradorBase({ children }) {
  return (
    <>
      <Container fluid style={{ height: '100%', padding: '0' }}>
        <Row noGutters>
          <Col>
            <Header items={rutasAdministrador} />
          </Col>
        </Row>
        <Row noGutters style={{ height: '100%' }}>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
