import React, { useState, useEffect } from 'react';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import axios from 'axios';
import { Button, Modal, ModalBody, Row, Col, Label } from 'reactstrap';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import { Confirm } from './Confirm';

import '../Styles/Forms.css';

const styles = {
  input: {
    height: '30px',
    borderRadius: '26px',
    float: 'right',
  },
  textarea: {
    borderRadius: '26px',
    float: 'right',
  },
  required: {
    borderColor: '#62d162',
  },
};

const AgregarProveedor = (props) => {
  const [data, setData] = useState([]);

  const cerrarModal = () => {
    props.change();
  };

  const fetchData = async () => {
    await axios.get('http://localhost:3001/api/proveedor').then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const isAvailable = (value) => {
    fetchData();
    for (let i = 0; i < data.length; i++) {
      if (value.company.toUpperCase() === data[i].company.toUpperCase()) {
        return false;
      }
    }
    return true;
  };

  async function handleValidSubmit(event, values) {
    try {
      const payload = {
        company: values.company,
        nombre: values.nombre,
        apellidos: values.apellidos,
        email: values.email,
        telefono: values.telefono,
        direction: values.direccion,
        ciudad: values.ciudad,
        departamento: values.departamento,
        pais: values.pais,
        comentario: values.comentario,
      };
      console.log(payload);
      if (isAvailable(payload)) {
        const response = await axios.post('http://localhost:3001/api/proveedor', payload);
        fetchData();
        Confirm.open({
          title: 'Proveedor Agregado',
          message: 'El proveedor ha sido agregado exitosamente',
          onok: () => {
            cerrarModal();
          },
        });
        console.log(payload);
        console.log(response);
      } else {
        Confirm.open({
          title: 'Nombre de Compañía duplicado',
          message: 'Valor ingresado de Compañía ya se encuentra registrado',
          onok: () => {},
        });
      }
    } catch (err) {
      console.err(err.response.payload);
    }
  }

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <Modal isOpen={props.isOpen} style={{ maxWidth: '900px', width: '80%', margin: '10px auto' }}>
      <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
        <ModalBody>
          <h1 className="text-muted formTitle">Creación de Proveedor Nuevo</h1>
          <AvGroup>
            <Row>
              <Col md="6">
                <Row noGutters>
                  <Col style={{ textAlign: 'right', paddingBottom: '1em' }}>
                    <Label className="text-right underline big">Información de proveedor</Label>
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label style={{ color: '#62d162' }}>Compañía</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      name="company"
                      label="Compañía"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Pais</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput name="pais" label="País" type="text" style={styles.input} />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Departamento / Estado</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      style={styles.input}
                      name="departamento"
                      label="Departamento"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Ciudad</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput style={styles.input} name="ciudad" label="Ciudad" type="text" />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Dirección</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      style={styles.textarea}
                      name="direccion"
                      label="Dirección"
                      type="textarea"
                      rows="3"
                    />
                  </Col>
                </Row>
              </Col>
              <Col md="6">
                <Row noGutters>
                  <Col style={{ textAlign: 'right', paddingBottom: '1em' }}>
                    <Label className="text-right underline big">Información de contacto</Label>
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label style={{ color: '#62d162' }}>Nombre</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      name="nombre"
                      label="Nombre"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label style={{ color: '#62d162' }}>Apellido</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      name="apellidos"
                      label="Apellido de Vendedor"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label style={{ color: '#62d162' }}>Teléfono</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      name="telefono"
                      label="Teléfono"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{
                        pattern: {
                          value: '^[0-9+]+$',
                          errorMessage: 'Ingrese valores validos (0-9, +)',
                        },
                        required: { value: true, errorMessage: 'Ingrese un teléfono' },
                      }}
                    />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Correo</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput name="email" label="Email" type="email" style={styles.input} />
                  </Col>
                </Row>
                <Row noGutters style={{ paddingBottom: '20px' }}>
                  <Col md="6" sm="12" xs="12">
                    <Label>Comentario</Label>
                  </Col>
                  <Col md="6" sm="12" xs="12">
                    <AvInput
                      style={styles.textarea}
                      name="comentario"
                      label="Comentario"
                      type="textarea"
                      rows="3"
                    />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row noGutters></Row>
            <Row noGutters>
              <Col md={{ size: 5 }}></Col>
            </Row>
            <Row noGutters>
              <Col></Col>
            </Row>
          </AvGroup>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button
              type="submit"
              className="submit-button"
              outline
              color="success"
              style={{ borderRadius: '30px' }}
            >
              Agregar Proveedor
            </Button>

            <Button
              outline
              color="danger"
              style={{ marginLeft: '1em', borderRadius: '30px' }}
              onClick={cerrarModal}
            >
              Cancelar
            </Button>
          </div>
        </ModalBody>
      </AvForm>
    </Modal>
  );
};

export default AgregarProveedor;
