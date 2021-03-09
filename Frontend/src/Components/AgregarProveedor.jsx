import React, { useState, useEffect } from 'react';
import { AvForm, AvInput } from 'availity-reactstrap-validation';
import axios from 'axios';
import { Button, Modal, ModalBody, Row, Col, Label } from 'reactstrap';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import { Confirm } from './Confirm';

import '../Styles/Forms.css';

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
};

const AgregarProveedor = (props) => {
  const [data, setData] = useState([]);

  const cerrarModal = () => {
    props.change();
  };

  const fetchData = async () => {
    await axios.get('http://Localhost:3001/api/proveedor').then((response) => {
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
        agencia: values.agencia,
        nombre: values.nombre,
        apellidos: values.apellidos,
        email: values.email,
        telefono: values.telefono,
        direccion: values.direccion,
        ciudad: values.ciudad,
        departamento: values.departamento,
        pais: values.pais,
        comentario: values.comentario,
      };

      if (isAvailable(payload)) {
        const response = await axios.post('http://Localhost:3001/api/proveedor', payload);
        Confirm.open({
          title: 'Proveedor Agregado',
          message: 'El proveedor ha sido agregado exitosamente',
          onok: () => {
            cerrarModal();
          },
        });
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
    <Modal isOpen={props.isOpen} style={{ maxWidth: '1600px', width: '800px' }}>
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
                <Row noGutters>
                  <Label style={{ color: '#62d162' }}>Compañía</Label>
                  <Col style={{ paddingBottom: '20px' }}>
                    <AvInput
                      name="company"
                      label="Compañía"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Pais</Label>
                    <AvInput name="pais" label="País" type="text" style={styles.input} />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Departamento/Estado</Label>
                    <AvInput
                      style={styles.input}
                      name="departamento"
                      label="Departamento"
                      type="text"
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Ciudad</Label>
                    <AvInput style={styles.input} name="ciudad" label="Ciudad" type="text" />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Dirección</Label>
                    <AvInput
                      name="direccion"
                      label="Dirección"
                      type="textarea"
                      rows="3"
                      style={styles.textarea}
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
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label style={{ color: '#62d162' }}>Nombre</Label>
                    <AvInput
                      name="nombre"
                      label="Nombre"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label style={{ color: '#62d162' }}>Apellido</Label>
                    <AvInput
                      name="apellidos"
                      label="Apellido de Vendedor"
                      type="text"
                      style={{ ...styles.input, ...styles.required }}
                      validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                    />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label style={{ color: '#62d162' }}>Teléfono</Label>
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
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Correo</Label>
                    <AvInput name="email" label="Email" type="email" style={styles.input} />
                  </Col>
                </Row>
                <Row noGutters>
                  <Col style={{ paddingBottom: '20px' }}>
                    <Label>Comentario</Label>
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
              className="submit-button"
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
