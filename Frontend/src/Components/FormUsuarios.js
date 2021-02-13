// Imports
import React, { useState, useContext, useEffect } from 'react';
import axios from 'axios';

import {
  Container,
  Row,
  Col,
  Form,
  Input,
  Label,
  FormGroup,
  Button,
  Spinner,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ButtonGroup,
} from 'reactstrap';

import '../Styles/FormularioCliente.css';

const FormUsuario = () => {
  // States cliente
  const [primerNombre, setPrimerNombre] = useState('');
  const [segundoNombre, setSegundoNombre] = useState('');
  const [primerApellido, setPrimerApellido] = useState('');
  const [segundoApellido, setSegundoApellido] = useState('');
  const [rtn, setRtn] = useState('');
  const [id, setId] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  // State para validaciones
  const [validNom, setValidNom] = useState(false);
  const [invalidNom, setInvalidNom] = useState(false);

  const [validApe, setValidApe] = useState(false);
  const [invalidApe, setInvalidApe] = useState(false);

  // Correo aun no tiene la mascara
  //   const [validCorreo, setValidCorreo] = useState(false);
  //   const [invalidCorreo, setInvalidCorreo] = useState(false);

  // Telefono aun no tiene la mascara
  const [validTelefono, setValidTelefono] = useState(false);
  const [invalidTelefono, setInvalidTelefono] = useState(false);

  // Id todavia no tiene la mascara
  const [validId, setValidId] = useState(false);
  const [invalidId, setInvalidId] = useState(false);

  // RTN todavia no tiene la mascara
  const [validRtn, setValidRtn] = useState(false);
  const [invalidRtn, setInvalidRtn] = useState(false);

  // modal informativo
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  // useEffect

  useEffect(() => {
    console.log('Se activó por primera vez FormCliente');
  }, []);

  const changeValue = (event) => {
    const emptyVal = event.value === '';

    switch (event.name) {
      case 'primerNombre':
        setPrimerNombre(event.value);
        setValidNom(!emptyVal);
        setInvalidNom(emptyVal);
        break;
      case 'segundoNombre':
        setSegundoNombre(event.value);
        break;
      case 'primerApellido':
        setPrimerApellido(event.value);
        setValidApe(!emptyVal);
        setInvalidApe(emptyVal);
        break;
      case 'segundoApellido':
        setSegundoApellido(event.value);
        break;
      case 'correo':
        setCorreo(event.value);
        break;
      case 'telefono':
        setTelefono(event.value);
        setValidTelefono(!emptyVal);
        setInvalidTelefono(emptyVal);
        break;
      case 'id':
        setId(event.value);
        setValidId(!emptyVal);
        setInvalidId(emptyVal);
        break;
      case 'rtn':
        setRtn(event.value);
        setValidRtn(!emptyVal);
        setInvalidRtn(emptyVal);
        break;
      default:
    }
  };

  const prueba = async () => {
    const campos = {
      cedula: id,
      nombre: primerNombre,
      segundo_nombre: segundoNombre,
      primer_apellido: primerApellido,
      segundo_apellido: segundoApellido,
      RTN: rtn,
      tel: telefono,
      email: correo,
    };
    const res = await axios.post('http://178.128.67.247/api/clientes', campos);
    console.log(res);
  };

  // Al hacer click
  const handleClick = () => {
    // Nada aun
  };

  const onSave = async (e) => {
    // e.preventDefault();
    const res = await axios.post('http://178.128.67.247/api/clientes', {
      nombre: 'Eddas',
    });
    console.log(res);
  };

  return (
    <>
      <div>
        <Container>
          <Row>
            <Col>
              <Form id="NegocioForm">
                <h2 className="FormSubtitles">Datos personales 📄</h2>
                <hr />
                <FormGroup row>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">Primer nombre</Label>
                    <Input
                      className="NegocioFormInput"
                      name="primerNombre"
                      id="primerNombre"
                      placeholder="Juan"
                      value={primerNombre}
                      valid={validNom}
                      invalid={invalidNom}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">Segundo nombre</Label>
                    <Input
                      className="NegocioFormInput"
                      name="segundoNombre"
                      id="segundoNombre"
                      placeholder="Fernando"
                      value={segundoNombre}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">Primer apellido</Label>
                    <Input
                      className="NegocioFormInput"
                      name="primerApellido"
                      id="primerApellido"
                      placeholder="Peréz"
                      value={primerApellido}
                      valid={validApe}
                      invalid={invalidApe}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">Segundo apellido</Label>
                    <Input
                      className="NegocioFormInput"
                      name="segundoApellido"
                      id="segundoApellido"
                      placeholder="López"
                      value={segundoApellido}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" sm="5">
                    <Label className="NegocioFormLabel">Correo electrónico</Label>
                    <Input
                      className="NegocioFormInput"
                      name="correo"
                      id="correo"
                      placeholder="ejemplo@ejemplo.com"
                      value={correo}
                      //   valid={validCorreo}
                      //   invalid={invalidCorreo}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </FormGroup>
                <FormGroup row>
                  <Col xs="12" sm="5">
                    <Label className="NegocioFormLabel">Telefono/Celular</Label>
                    <Input
                      className="NegocioFormInput"
                      name="telefono"
                      id="telefono"
                      placeholder="+504 88112233"
                      value={telefono}
                      valid={validTelefono}
                      invalid={invalidTelefono}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">Cedula de ID</Label>
                    <Input
                      className="NegocioFormInput"
                      name="id"
                      id="id"
                      placeholder="ID"
                      value={id}
                      valid={validId}
                      invalid={invalidId}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                  <Col xs="12" sm="6">
                    <Label className="NegocioFormLabel">RTN</Label>
                    <Input
                      className="NegocioFormInput"
                      name="rtn"
                      id="rtn"
                      placeholder="rtn"
                      value={rtn}
                      valid={validRtn}
                      invalid={invalidRtn}
                      onChange={(event) => changeValue(event.currentTarget)}
                    />
                  </Col>
                </FormGroup>

                <FormGroup row>
                  <div
                    style={{
                      width: '100%',
                      display: 'flex',
                      justifyContent: 'flex-end',
                      alignItems: 'center',
                    }}
                  ></div>
                </FormGroup>
                <Button
                  onClick={() => {
                    prueba();
                  }}
                  className="danger"
                >
                  send to db test
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
// export default withRouter(FormularioNegocioDos);
export default FormUsuarios;
