import React, { useState, useEffect } from 'react';
import {
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Table,
  Button,
  Label,
  FormGroup,
  Input,
} from 'reactstrap';
import axios from 'axios';

const ModificarEliminarBodegas = (props) => {
  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });
  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/bodegas').then((response) => {
        setData(response.data);
      });
    };
    fecthData();
  }, []);
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/bodegas/${memberId}`);
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      className="text-center"
      style={{ maxWidth: '1700px', width: '80%' }}
    >
      <ModalHeader>
        <div>
          <h3>CREACION DE BODEGAS</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <Table
            responsive
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
                <th>BODEGA</th>
                <th>DESCRIPCION</th>
                <th>ENCARGADO</th>
                <th>CANTIDAD DE PASILLOS</th>
                <th class="text-center"> Acción</th>
              </tr>
            </thead>
            <tbody>
              {data.map((elemento, index) => (
                <tr>
                  <td>{(index += 1)}</td>
                  <td>{elemento.numBodega}</td>
                  <td>{elemento.descripcion}</td>
                  <td>{elemento.encargado}</td>
                  <td>{elemento.cantPasillos}</td>
                  <td>
                    <Button color="success">Modificar</Button>
                  </td>
                  <td>
                    <Button onClick={() => eliminar(elemento._id)} color="danger">
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.change}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ModificarEliminarBodegas;
