import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Button, Table, Label, FormGroup, Input, ButtonGroup } from 'reactstrap';
import './InterfazProducto.css';
import axios from 'axios';
import AgregarProducto from './AgregarProducto'
export default function EliminarProducto() {
  const dataApuntes = [
  ];


  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: '',
    precio: [],
  });
  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/productos')
        .then(res => {
          setData(res.data);
          console.log(res.data);
        });
    };
    fecthData();
  }, []);
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
  };
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/productos/${memberId}`)
      .then(res => {
        console.log(res)
        console.log('it works')
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const mostrarCodigos = (i) => {
    setSeleccionado(i);
    setModalVerCodigos(true);

  };
  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
  ];

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Area</th>
            <th>Ubicación</th>
            <th>Marca</th>
            <th>Códigos</th>
            <th>Proveedores </th>
            <th>Descripciones </th>
          </tr>
        </thead>
        <tbody>
          {data.map((elemento) => (
            <tr>
              <td>{elemento.N}</td>
              <td>{elemento.nombre}</td>
              <td>{elemento.area}</td>
              <td>{elemento.ubicacion}</td>
              <td>{elemento.marca}</td>
              <td>
                <Button color="primary" onClick={() => mostrarCodigos(elemento)}>
                  Ver
                </Button>
              </td>
              <td>
                <Button color="primary" onClick={() => setModalVerProveedor(true)}>
                  Ver
                </Button>
              </td>
              <td>
                <Button color="primary" onClick={() => setModalVerProveedor(true)}>Ver</Button>
              </td>
              <td>
                <Button onClick={() => setModalModificar(true)} color="success">
                  Modificar
                </Button>{' '}
              </td>
              <td>
                <Button onClick={() => eliminar(elemento._id)} color="danger">
                  Eliminar
                </Button>{' '}
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Modal isOpen={modalVerCodigos}>
        <ModalHeader>
          <div className="text-center">
            <h3>Agregar Productos</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>codigo 1</label>
            <input
              className="form-control"
              type="text"
              name="nombre"
              value={seleccionado.codigos[0]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.nombre : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              value={seleccionado.codigos[1]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[2]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[3]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[4]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[5]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[6]}
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModalVerCodigos(false)}>
            OK
            </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalVerProveedor}>
        <ModalHeader>
          <div>
            <h3>Modificar Productos</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>proveedor 1</label>
            <input
              className="form-control"
              type="text"
              name="Apunte"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              readOnly
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModalVerProveedor(false)}>
            OK
            </button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={modalVerDescripciones}>
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div>
            <div>
              <h3>Descripción corta</h3>
            </div>
            <FormGroup class="style">
              <Label for="exampleText"></Label>
              <Input type="textarea" name="text" id="exampleText" readOnly />
            </FormGroup>
          </div>
          <div>
            <div>
              <h3>Descripción larga </h3>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" readOnly />
            </div>
          </div>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </Modal>
    </div>
  );
}