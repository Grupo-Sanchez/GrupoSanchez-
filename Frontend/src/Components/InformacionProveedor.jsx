import React from 'react';
import { Button, Modal, Input, ModalBody, Row, Col, Container, Label } from 'reactstrap';
import AvInput from 'availity-reactstrap-validation';

const styles = {
  input: {
    width: '200px',
    height: '30px',
    borderRadius: '30px',
    float: 'right',
  },
  textarea: {
    width: '200px',
    borderRadius: '30px',
    float: 'right',
  },
  required: {
    borderColor: '#62d162',
  },
  labelsTitulo: {
    fontSize: '23px',
  },
};

const InformacionProveedor = (props) => {
  return (
    <Modal
      isOpen={props.isOpen}
      size="lg"
      style={{ maxWidth: '900px', width: '80%', margin: '10px auto' }}
    >
      <ModalBody>
        <h4 className="informationTitle">Información de Proveedor</h4>
        <Container>
          <Row>
            <Col md="6" sm="6" xs="12">
              <Row noGutters>
                <Col style={{ paddingBottom: '5px' }}>
                  <Label className="informationSubTitle">Información de proveedor</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="6" sm="6" xs="6">
                  <Label style={styles.labelsTitulo}>Compañía:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.company}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="6" sm="6" xs="6">
                  <Label style={styles.labelsTitulo}>País:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.pais}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="6" sm="6" xs="6">
                  <Label style={styles.labelsTitulo}>Departamento / Estado:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.departamento}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="6" sm="6" xs="6">
                  <Label style={styles.labelsTitulo}>Ciudad:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.ciudad}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="6" sm="6" xs="6">
                  <Label style={styles.labelsTitulo}>Dirección:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.direccion}</Label>
                </Col>
              </Row>
            </Col>
            <Col md="6" sm="6" xs="12">
              <Row>
                <Col style={{ paddingBottom: '5px' }}>
                  <Label className="informationSubTitle">Información de contacto</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="4" xs="6">
                  <Label style={styles.labelsTitulo}>Nombre:</Label>
                </Col>
                <Col md="6" sm="6" xs="6">
                  <Label>{props.proveedor.nombre}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="4" xs="6">
                  <Label style={styles.labelsTitulo}>Apellido:</Label>
                </Col>
                <Col md="8" xs="6">
                  <Label>{props.proveedor.apellidos}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="4" xs="6">
                  <Label style={styles.labelsTitulo}>Teléfono:</Label>
                </Col>
                <Col md="8" xs="6">
                  <Label>{props.proveedor.telefono}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="4" xs="6">
                  <Label style={styles.labelsTitulo}>Correo:</Label>
                </Col>
                <Col md="8" xs="6">
                  <Label>{props.proveedor.email}</Label>
                </Col>
              </Row>
              <Row noGutters>
                <Col md="4" xs="6">
                  <Label style={styles.labelsTitulo}>Comentario:</Label>
                </Col>
                <Col md="8" xs="6">
                  <Label>{props.proveedor.comentario}</Label>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
          <Button onClick={props.change} outline color="danger" style={{ borderRadius: '30px' }}>
            Cerrar
          </Button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default InformacionProveedor;
