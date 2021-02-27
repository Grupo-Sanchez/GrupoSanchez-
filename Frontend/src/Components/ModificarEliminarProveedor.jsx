import React, { useState, useEffect } from 'react';
import { Button, Table, Row, Modal, ModalBody, Container, Col, Input, Label } from 'reactstrap';
import { AvForm, AvField, AvInput, AvGroup, AvRadio } from 'availity-reactstrap-validation';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import AgregarProveedor from './AgregarProveedor.jsx';
import '../Styles/ConfirmStyle.css';
import '../Styles/SearchBar.css';
import '../Styles/Forms.css';
import { Confirm } from './Confirm';
import imagePath from '../Icons/lupa1.jpeg';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';
import { ReactComponent as BasureroLogo } from '../Icons/delete.svg';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';

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

const ModificarEliminarProveedor = () => {
  const [modificar, setModificar] = useState({});
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [product, setProduct] = useState('');
  const [modalAgregar, setModalAgregar] = useState(false);
  const [position, setPosition] = useState('');

  const fetchData = async () => {
    await axios.get('http://localhost:3001/api/proveedor').then((response) => {
      setData(response.data);
    });
  };

  const fetchProducts = async () => {
    await axios.get('http://localhost:3001/api/productos').then((response) => {
      setProduct(response.data);
    });
  };

  const isAvailable = (value) => {
    fetchData();
    for (let i = 0; i < data.length; i++) {
      if (
        value.company.toUpperCase() === data[i].company.toUpperCase() &&
        modificar._id !== data[i]._id
      ) {
        return false;
      }
    }
    return true;
  };

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  const modifyProveedor = async (values) => {
    try {
      fetchProducts();
      if (isAvailable(values)) {
        const payload = {
          company: values.company,
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
        await axios
          .put(`http://localhost:3001/api/proveedor/${modificar._id}`, payload)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        for (let i = 0; i < product.length; i++) {
          const list = [];
          let flag = false;
          for (let j = 0; j < product[i].proveedores.length; j++) {
            const payloadProduct = {
              company: values.company,
              value: modificar._id,
              name: values.nombre,
              apellidos: values.apellidos,
              email: values.email,
              telefono: values.telefono,
              direccion: values.direccion,
              ciudad: values.ciudad,
              departamento: values.departamento,
              pais: values.pais,
              comentario: values.comentario,
              precio: product[i].proveedores[j].precio,
            };
            if (
              product[i].proveedores[j].value === modificar._id &&
              JSON.stringify(product[i].proveedores[j]) !== JSON.stringify(payloadProduct)
            ) {
              flag = true;
              list.push(payloadProduct);
            } else {
              list.push(product[i].proveedores[j]);
            }
          }
          console.log(list);
          if (flag) {
            axios
              .put(`http://localhost:3001/api/productos/${product[i]._id}`, {
                proveedores: list,
              })
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
      } else {
        Confirm.open({
          title: 'Nombre de Compañía duplicado',
          message: 'Valor ingresado de Compañía ya se encuentra registrado',
          onok: () => {},
        });
      }
      fetchData();
      setModal(false);
    } catch (err) {
      console.err(err.response.payload);
    }
  };

  async function handleValidSubmit(event, values) {
    Confirm.open({
      title: 'Modificar Proveedor',
      message: '¿Esta seguro de que quiere modificar Proveedor?',
      onok: () => {
        modifyProveedor(values);
        fetchData();
      },
    });
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    if (input != null) {
      filter = input.toUpperCase();
      table = document.getElementById('myTable');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    }
  };

  const modificarModal = async (i) => {
    setModificar(data[i]);
    setModal(true);
  };

  const onDelete = async () => {
    fetchProducts();
    let isDeletable = true;
    for (let j = 0; j < product.length; j++) {
      for (let k = 0; k < product[j].proveedores.length; k++) {
        if (product[j].proveedores[k].value === modificar._id) {
          isDeletable = false;
        }
      }
    }
    if (isDeletable) {
      await axios.delete(`http://localhost:3001/api/proveedor/${modificar._id}`);
      Confirm.open({
        title: 'Proveedor Eliminado',
        message: 'Proveedor eliminado exitosamente',
        onok: () => {},
      });
    } else {
      Confirm.open({
        title: 'Advertencia',
        message:
          'No se puede borrar este proveedor. Existen productos que tienen este mismo proveedor',
        onok: () => {},
      });
    }
    fetchData();
    setModal(false);
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  const closeModalAgregar = () => {
    setModalAgregar(!modalAgregar);
    fetchData();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '90%' }}>
        <AgregarProveedor isOpen={modalAgregar} change={() => closeModalAgregar()} />
        <Modal isOpen={modal} style={{ maxWidth: '1600px', width: '800px' }}>
          <AvForm
            onValidSubmit={handleValidSubmit}
            onInvalidSubmit={handleInvalidSubmit}
            model={modificar}
          >
            <ModalBody>
              <Row>
                <Col md="10">
                  <h1 className="text-muted formTitle" style={{ textAlign: 'center' }}>
                    Modificación de Proveedor
                  </h1>
                </Col>
                <Col md="2">
                  <Button
                    onClick={() =>
                      Confirm.open({
                        title: 'Eliminar Proveedor',
                        message: '¿Esta seguro de que quiere eliminar proveedor?',
                        onok: () => {
                          onDelete();
                        },
                      })
                    }
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                      paddingRight: '2rem',
                    }}
                  >
                    <BasureroLogo fill="#dc0000" width="50px" height="50px" />
                  </Button>
                </Col>
              </Row>
              <AvGroup>
                <Row>
                  <Col md="6">
                    <Row noGutters>
                      <Col style={{ textAlign: 'right', paddingBottom: '1em' }}>
                        <Label className="text-right underline big">Información de proveedor</Label>
                      </Col>
                    </Row>
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label style={{ color: '#62d162' }}>Compañía</Label>
                        <AvInput
                          name="company"
                          label="Compañía"
                          type="text"
                          style={{ ...styles.input, ...styles.required }}
                          validate={{
                            required: { value: true, errorMessage: 'Ingrese un nombre' },
                          }}
                        />
                      </Col>
                    </Row>
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label>Pais</Label>
                        <AvInput style={styles.input} name="pais" label="País" type="text" />
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
                          style={styles.textarea}
                          className="float-right paddingAvInput "
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
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label style={{ color: '#62d162' }}>Nombre</Label>
                        <AvInput
                          style={{ ...styles.input, ...styles.required }}
                          name="nombre"
                          label="Nombre"
                          type="text"
                          validate={{
                            required: { value: true, errorMessage: 'Ingrese un nombre' },
                          }}
                        />
                      </Col>
                    </Row>
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label style={{ color: '#62d162' }}>Apellido</Label>
                        <AvInput
                          style={{ ...styles.input, ...styles.required }}
                          name="apellidos"
                          label="Apellido de Vendedor"
                          type="text"
                          validate={{
                            required: { value: true, errorMessage: 'Ingrese un apellido' },
                          }}
                        />
                      </Col>
                    </Row>
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label style={{ color: '#62d162' }}>Teléfono</Label>
                        <AvInput
                          style={{ ...styles.input, ...styles.required }}
                          name="telefono"
                          label="Teléfono"
                          type="text"
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
                        <AvInput
                          style={styles.input}
                          className="float-right paddingAvInput "
                          name="email"
                          label="Email"
                          type="email"
                        />
                      </Col>
                    </Row>
                    <Row noGutters>
                      <Col style={{ paddingBottom: '20px' }}>
                        <Label>Comentario</Label>
                        <AvInput
                          style={styles.textarea}
                          className="float-right paddingAvInput "
                          name="comentario"
                          label="Comentario"
                          type="textarea"
                          rows="3"
                        />
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </AvGroup>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Button type="submit" outline color="success" style={{ borderRadius: '30px' }}>
                  Modificar Proveedor
                </Button>
                <Button
                  outline
                  color="danger"
                  style={{ marginLeft: '1em', borderRadius: '30px' }}
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </Button>
              </div>
            </ModalBody>
          </AvForm>
        </Modal>
        <Container>
          <div style={{ justifyContent: '90%' }}>
            <h1 style={{ textAlign: 'center', paddingTop: '20px' }}>Proveedores</h1>
          </div>

          <Row>
            <Col md="3">
              <Button
                style={{
                  'background-color': 'transparent',
                  borderColor: 'transparent',
                  'border-radius': '26px',
                }}
                className="float-right"
                onClick={() => setModalAgregar(true)}
              >
                <PlusIcon fill="#ff7070" width="50px" height="50px" />
              </Button>
            </Col>
            <Col md="6">
              <Input
                placeholder="Buscar Proveedor"
                type="text"
                style={{
                  'background-image': `url('${imagePath}')`,
                  'background-position': '10px 10px',
                  'background-repeat': 'no-repeat',
                  width: '90%',
                  'font-size': '16px',
                  borderRadius: '26px',
                  padding: '12px 20px 12px 40px',
                }}
                onChange={handleChange}
              />
            </Col>
          </Row>

          <Table
            responsive
            hover
            striped
            align="center"
            id="myTable"
            style={{
              width: '500px',
              'max-width': '360px',
              'border-collapse': 'separate',
              border: 'solid #ccc 2px',
              '-moz-border-radius': '26px',
              '-webkit-border-radius': '26px',
              'border-radius': '26px',
              '-webkit-box-shadow': '0 1px 1px #ccc',
              '-moz-box-shadow': '0 1px 1px #ccc',
              'box-shadow': '0 1px 1px #ccc',
            }}
          >
            <thead>
              <tr>
                <th scope="row">Compañía</th>
                <th scope="row">Nombre de Vendedor</th>
                <th scope="row">Apellido de Vendedor</th>
                <th scope="row">Email</th>
                <th scope="row">Teléfono</th>
                <th class="text-center"> Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento, i) => (
                <tr>
                  <td>{elemento.company}</td>
                  <td style={{ whiteSpace: 'unset' }}>{elemento.nombre}</td>
                  <td>{elemento.apellidos}</td>
                  <td>{elemento.email}</td>
                  <td>{elemento.telefono}</td>
                  <td>
                    <Button
                      onClick={() => modificarModal(i)}
                      style={{
                        'background-color': 'transparent',
                        borderColor: 'transparent',
                      }}
                    >
                      <EditLogo width="30px" height="30px" />
                    </Button>{' '}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Container>
      </div>
    </div>
  );
};

export default ModificarEliminarProveedor;
