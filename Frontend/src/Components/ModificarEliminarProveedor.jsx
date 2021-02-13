import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  Row,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Col,
  Input,
} from 'reactstrap';
import { AvForm, AvField, AvRadioGroup, AvGroup, AvRadio } from 'availity-reactstrap-validation';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import AgregarProveedor from './AgregarProveedor.jsx';
import '../Styles/ConfirmStyle.css';
import '../Styles/SearchBar.css';
import { Confirm } from './Confirm';
import imagePath from '../Icons/lupa1.jpeg';

const ModificarEliminarProveedor = () => {
  const [modificar, setModificar] = useState({});
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [product, setProduct] = useState('');
  const [modalAgregar, setModalAgregar] = useState(false);

  const fetchData = async () => {
    await axios.get('http://178.128.67.247/api/proveedor').then((response) => {
      setData(response.data);
    });
  };

  const fetchProducts = async () => {
    await axios.get('http://178.128.67.247/api/productos').then((response) => {
      setProduct(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  const modifyProveedor = async (values) => {
    try {
      fetchProducts();
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
      const payloadProduct = {
        company: values.company,
        value: modificar._id,
        agencia: values.agencia,
        name: values.nombre,
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
      setModal(false);
      await axios
        .put(`http://178.128.67.247/api/proveedor/${modificar._id}`, payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      for (let i = 0; i < product.length; i++) {
        for (let j = 0; j < product[i].proveedores.length; j++) {
          if (
            product[i].proveedores[j].value === modificar._id &&
            JSON.stringify(product[i].proveedores[j]) !== JSON.stringify(payloadProduct)
          ) {
            product[i].proveedores[j] = payloadProduct;
            axios
              .put(`http://178.128.67.247/api/productos/${product[i]._id}`, product[i])
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }
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

  const onDelete = async (i) => {
    fetchProducts();
    let isDeletable = true;
    for (let j = 0; j < product.length; j++) {
      for (let k = 0; k < product[j].proveedores.length; k++) {
        if (product[j].proveedores[k].value === data[i]._id) {
          isDeletable = false;
        }
      }
    }
    if (isDeletable) {
      await axios.delete(`http://178.128.67.247/api/proveedor/${data[i]._id}`);
    } else {
      Confirm.open({
        title: 'Advertencia',
        message:
          'No se puede borrar este proveedor. Existen productos que tienen este mismo proveedor',
        onok: () => {},
      });
    }
    fetchData();
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
        <Modal isOpen={modal} style={{ maxWidth: '1600px', width: '80%' }}>
          <ModalHeader>
            <h3>Modificar Proveedor</h3>
          </ModalHeader>
          <AvForm
            onValidSubmit={handleValidSubmit}
            onInvalidSubmit={handleInvalidSubmit}
            model={modificar}
          >
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
                <AvRadioGroup name="genero" label="Género">
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
                    pattern: {
                      value: '^[0-9+]+$',
                      errorMessage: 'Ingrese valores validos (0-9, +)',
                    },
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
                  Modificar Proveedor
                </Button>

                <Button
                  style={{ marginLeft: '1em' }}
                  color="danger"
                  onClick={() => setModal(false)}
                >
                  Cancelar
                </Button>
              </div>
            </ModalFooter>
          </AvForm>
        </Modal>
        <div style={{ justifyContent: '90%' }}>
          <h1>Proveedores</h1>
        </div>

        <div style={{ display: 'flex', paddingBottom: '1em' }}>
          <div style={{ flex: '1 0 auto' }}>
            <Input
              placeholder="Buscar Proveedor"
              type="text"
              style={{
                'background-image': `url('${imagePath}')`,
                'background-position': '10px 10px',
                'background-repeat': 'no-repeat',
                'font-size': '16px',
                border: '1px solid #ddd',
                padding: '12px 20px 12px 40px',
              }}
              onChange={handleChange}
            />
          </div>
          <div style={{ flex: '1 1 auto' }} />
          <div>
            <Button color="primary" onClick={() => setModalAgregar(true)}>
              Agregar Proveedor
            </Button>
          </div>
        </div>

        <Table responsive hover align="center" bordered id="myTable" style={{ width: '500px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th scope="row">Compañía</th>
              <th scope="row">Agencia</th>
              <th scope="row">Nombre</th>
              <th scope="row">Apellidos</th>
              <th scope="row">Género</th>
              <th scope="row">Email</th>
              <th scope="row">Teléfono</th>
              <th scope="row">Dirección 1</th>
              <th scope="row">Dirección 2</th>
              <th class="text-center"> Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{elemento.company}</td>
                <td>{elemento.agencia}</td>
                <td style={{ whiteSpace: 'unset' }}>{elemento.nombre}</td>
                <td>{elemento.apellidos}</td>
                <td>{elemento.genero}</td>
                <td>{elemento.email}</td>
                <td>{elemento.telefono}</td>
                <td>{elemento.direccion1}</td>
                <td>{elemento.direccion2}</td>
                <td>
                  <Button onClick={() => modificarModal(i)} color="success">
                    Modificar
                  </Button>{' '}
                  <Button
                    onClick={() =>
                      Confirm.open({
                        title: 'Eliminar Proveedor',
                        message: '¿Esta seguro de que quiere eliminar proveedor?',
                        onok: () => {
                          onDelete(i);
                        },
                      })
                    }
                    color="danger"
                  >
                    Eliminar
                  </Button>{' '}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default ModificarEliminarProveedor;
