import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import Header from './Header.jsx';
import { rutasPropietario } from './utils/constants.jsx';

export default function AmbientePropietarioBase({ children }) {
  return (
    <>
      <Container fluid style={{ height: '100%', padding: '0' }}>
        <Row noGutters>
          <Col>
            <Header items={rutasPropietario} />
          </Col>
        </Row>
        <Row noGutters style={{ height: '100%' }}>
          <Col>{children}</Col>
        </Row>
      </Container>
    </>
  );
}
