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
import { AvForm, AvField, AvGroup } from 'availity-reactstrap-validation';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import AddMarca from './AgregarMarca.jsx';
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';
import imagePath from '../Icons/lupa1.jpeg';

const ModificarEliminarProveedor = () => {
  const [modificar, setModificar] = useState({});
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');
  const [product, setProduct] = useState('');
  const [modalAddMarca, setModalAddMarca] = useState(false);

  const fetchData = async () => {
    await axios.get('http://localhost:3001/api/marcas').then((response) => {
      setData(response.data);
    });
  };

  const fetchProducts = async () => {
    await axios.get('http://localhost:3001/api/productos').then((response) => {
      setProduct(response.data);
    });
  };

  useEffect(() => {
    fetchData();
    fetchProducts();
  }, []);

  const isAvailable = (value) => {
    fetchData();
    for (let i = 0; i < data.length; i++) {
      if (
        value.nombre.toUpperCase() === data[i].nombre.toUpperCase() &&
        modificar._id !== data[i]._id
      ) {
        return false;
      }
    }
    return true;
  };

  const modifyMarca = async (values) => {
    try {
      fetchProducts();
      if (isAvailable(values)) {
        const payload = {
          nombre: values.nombre,
          descripcion: values.descripcion,
        };
        await axios
          .put(`http://localhost:3001/api/marcas/${modificar._id}`, payload)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
        for (let i = 0; i < product.length; i++) {
          if (
            product[i].marca[0].value === modificar._id &&
            payload.nombre !== product[i].marca[0].name
          ) {
            const marcaNueva = {
              value: modificar._id,
              name: payload.nombre,
            };
            product[i].marca[0] = marcaNueva;
            axios
              .put(`http://localhost:3001/api/productos/${product[i]._id}`, product[i])
              .then((response) => {
                console.log(response);
              })
              .catch((error) => {
                console.log(error);
              });
          }
        }

        setModal(false);
        fetchData();
      } else {
        Confirm.open({
          title: 'Nombre de marca duplicado',
          message: 'Valor ingresado de marca ya se encuentra registrado',
          onok: () => {},
        });
      }
    } catch (err) {
      console.err(err.response.payload);
    }
  };

  function handleValidSubmit(event, values) {
    Confirm.open({
      title: 'Modificar Marca',
      message: '¿Esta seguro de que quiere modificar marca?',
      onok: () => {
        modifyMarca(values);
      },
    });
  }

  const handleChange = (e) => {
    setInput(e.target.value);
    console.log(input);
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

  const modificarModal = (i) => {
    setModificar(data[i]);
    setModal(true);
  };

  const onDelete = async (i) => {
    fetchProducts();
    let isDeletable = true;
    for (let j = 0; j < product.length; j++) {
      if (product[j].marca[0].value === data[i]._id) {
        isDeletable = false;
        console.log(`Marca de producto: ${product[j].marca[0].value} || Marca: ${data[i]._id}`);
        break;
      }
    }
    if (isDeletable) {
      await axios.delete(`http://localhost:3001/api/marcas/${data[i]._id}`);
      console.log('se puede borrar');
    } else {
      Confirm.open({
        title: 'Advertencia',
        message: 'No se puede borrar esta marca. Existen productos que tienen esta misma marca',
        onok: () => {},
      });
    }
    fetchData();
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  const change = () => {
    setModalAddMarca(!modalAddMarca);
    fetchData();
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{ width: '50%' }}>
        <AddMarca isOpen={modalAddMarca} change={() => change()} />
        <Modal isOpen={modal} style={{ maxWidth: '1400px', width: '60%' }}>
          <ModalHeader>
            <h3>Modificar Marca</h3>
          </ModalHeader>
          <AvForm
            onValidSubmit={handleValidSubmit}
            onInvalidSubmit={handleInvalidSubmit}
            model={modificar}
          >
            <ModalBody>
              <AvGroup>
                <AvField
                  name="nombre"
                  label="Nombre de la Marca"
                  type="text"
                  validate={{ required: { value: true, errorMessage: 'Ingrese un nombre' } }}
                />
                <AvField name="descripcion" label="Descripcion" type="textarea" rows="3" />
              </AvGroup>
            </ModalBody>
            <ModalFooter>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                <Button type="submit" color="primary">
                  Modificar Marca
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
          <h1>Marcas</h1>
        </div>
        <div style={{ display: 'flex', paddingBottom: '1em' }}>
          <div style={{ flex: '1 0 auto' }}>
            <Input
              placeholder="Buscar Proveedor"
              onChange={handleChange}
              style={{
                'background-image': `url('${imagePath}')`,
                'background-position': '10px 10px',
                'background-repeat': 'no-repeat',
                'font-size': '16px',
                border: '1px solid #ddd',
                padding: '12px 20px 12px 40px',
              }}
            />
          </div>
          <div style={{ flex: '1 1 auto' }} />
          <div>
            <Button color="primary" onClick={() => setModalAddMarca(!modalAddMarca)}>
              Agregar Marca
            </Button>
          </div>
        </div>

        <Table responsive hover align="center" bordered id="myTable" style={{ width: '500px' }}>
          <thead>
            <tr>
              <th>#</th>
              <th scope="row">Nombre</th>
              <th scope="row">Decripción</th>
              <th scope="row">Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, i) => (
              <tr>
                <td>{i + 1}</td>
                <td>{elemento.nombre}</td>
                <td style={{ whiteSpace: 'unset' }}>{elemento.descripcion}</td>
                <td>
                  <Button onClick={() => modificarModal(i)} color="success">
                    Modificar
                  </Button>{' '}
                  <Button
                    onClick={() =>
                      Confirm.open({
                        title: 'Eliminar Marca',
                        message: '¿Esta seguro de que quiere eliminar marca?',
                        onok: () => {
                          onDelete(i);
                        },
                      })
                    }
                    color="danger"
                  >
                    Eliminar
                  </Button>
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
