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
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';

const ModificarEliminarProveedor = () => {
  const [modificar, setModificar] = useState({});
  const [data, setData] = useState([]);
  const [modal, setModal] = useState(false);
  const [input, setInput] = useState('');

  const fetchData = async () => {
    await axios.get('http://localhost:3001/api/marcas').then((response) => {
      setData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const modifyMarca = async (values) => {
    try {
      const payload = {
        nombre: values.nombre,
        descripcion: values.descripcion,
      };
      setModal(false);
      await axios
        .put(`http://localhost:3001/api/marcas/${modificar._id}`, payload)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      setModal(false);
      fetchData();
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
    await axios.delete(`http://localhost:3001/api/marcas/${data[i]._id}`);
    fetchData();
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <div>
      <Modal isOpen={modal} style={{ maxWidth: '1400px', width: '60%' }}>
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

              <Button style={{ marginLeft: '1em' }} color="danger" onClick={() => setModal(false)}>
                Cancelar
              </Button>
            </div>
          </ModalFooter>
        </AvForm>
      </Modal>
      <h4 class="text-center">Marcas</h4>
      <Row noGutters style={{ paddingBottom: '20px' }}>
        <Col md={{ size: 6, offset: 3 }}>
          <Input onChange={handleChange} />
        </Col>
      </Row>
      <Table
        responsive={true}
        striped
        bordered
        hover
        dark
        align="center"
        size="sm"
        id="myTable"
        style={{ width: '500px' }}
      >
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
              <td style={{ whiteSpace: 'normal' }}>{elemento.descripcion}</td>
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
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default ModificarEliminarProveedor;