import React, { useState, useEffect } from 'react';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import axios from 'axios';
import { Button, Modal, ModalHeader, ModalFooter, ModalBody, Row, Col } from 'reactstrap';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import AvRadioGroup from 'availity-reactstrap-validation/lib/AvRadioGroup';
import AvRadio from 'availity-reactstrap-validation/lib/AvRadio';

const AgregarProveedor = (props) => {
  // const [data, setData] = useState({
  //   nombre: '',
  //   descripcion: '',
  // });

  // const [hasError, setHasError] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  //   console.log(data.name);
  // };

  const cerrarModal = () => {
    props.change();
  };

  async function handleValidSubmit(event, values) {
    try {
      const payload = {
        company: values.company,
        agencia: values.agencia,
        nombre: values.nombre,
        apellidos: values.apellidos,
        genero: values.genero,
        email: values.email,
        telefono: values.telefono,
        direccion1: values.direccion1,
        direccion2: values.direccion2,
        ciudad: values.ciudad,
        departamento: values.departamento,
        codigoPostal: values.codigo,
        pais: values.pais,
        comentario: values.comentario,
      };
      const response = await axios.post('http://178.128.67.247/api/proveedor', payload);
      console.log(response);
      cerrarModal();
    } catch (err) {
      console.err(err.response.payload);
    }
  }

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <Modal isOpen={props.isOpen} style={{ maxWidth: '1600px', width: '80%' }}>
      <ModalHeader>
        <h3>Agregar Proveedor</h3>
      </ModalHeader>
      <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
        <ModalBody>
          <AvGroup>
            <AvField
              name="company"
              label="Compañía"
              type="text"
              validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
            />
            <AvField name="agencia" label="Nombre de la Agencia" type="text" />
            <Row noGutters>
              <Col md={{ size: 5 }}>
                <AvField
                  name="nombre"
                  label="Nombre"
                  type="text"
                  validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                  style={{ marginRight: '30px' }}
                />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <AvField
                  name="apellidos"
                  label="Apellidos"
                  type="text"
                  validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                />
              </Col>
            </Row>
            <AvRadioGroup name="genero" label="Genero">
              <Row noGutters>
                <AvRadio label="M" value="M" />
                <AvRadio label="F" value="F" />
              </Row>
            </AvRadioGroup>
            <AvField name="email" label="Email" type="email" />
            <AvField
              name="telefono"
              label="Teléfono"
              type="text"
              validate={{
                pattern: { value: '^[0-9+]+$', errorMessage: 'Ingrese valores validos (0-9, +)' },
              }}
            />
            <Row md="2" noGutters>
              <Col md={{ size: 5 }}>
                <AvField name="direccion1" label="Dirección 1" type="textarea" rows="3" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <AvField name="direccion2" label="Dirección 2" type="textarea" rows="3" />
              </Col>
            </Row>
            <Row noGutters>
              <Col md={{ size: 5 }}>
                <AvField name="ciudad" label="Ciudad" type="text" />
              </Col>
              <Col md={{ size: 5, offset: 1 }}>
                <AvField name="departamento" label="Departamento" type="text" />
              </Col>
            </Row>
            <AvField name="codigo" label="Código Postal" type="text" />
            <AvField name="pais" label="País" type="text" />
            <AvField name="comentario" label="Comentario" type="textarea" rows="3" />
          </AvGroup>
        </ModalBody>
        <ModalFooter>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
            <Button type="submit" color="primary">
              Agregar Proveedor
            </Button>

            <Button style={{ marginLeft: '1em' }} color="danger" onClick={cerrarModal}>
              Cancelar
            </Button>
          </div>
        </ModalFooter>
      </AvForm>
    </Modal>
  );
};

export default AgregarProveedor;
