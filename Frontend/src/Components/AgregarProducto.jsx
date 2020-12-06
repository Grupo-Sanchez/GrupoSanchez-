import React, { useState } from 'react';
import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  Input } from 'reactstrap';
import '../Styles/InterfazProducto.css';
// import { PromiseProvider } from 'mongoose';

export default function AgregarProducto(props) {
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    ubicacion: '',
    marca: '',
    precio: '',
  });
  const [data, setData] = useState('');
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const insertar = () => {
    const valorInsertar = seleccionado;
    const dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
  };

  const [modalInsertarCodigo, setModalInsertarCodigo] = useState(false);
  const [modalInsertarProveedor, setModalInsertarProveedor] = useState(false);

  return (
    <Modal isOpen={props.isOpen} className="text-center">
      <ModalHeader>
        <div>
          <h3>AGREGAR PRODUCTOS</h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          <Button onClick={() => setModalInsertarCodigo(true)} color="primary">
            Insertar Codigo
          </Button>{' '}
        </div>
        <div>
          <label></label>
        </div>
        <div>
          <Button onClick={() => setModalInsertarProveedor(true)} color="primary">
            Insertar Proveedor
          </Button>{' '}
        </div>
        <Modal isOpen={modalInsertarCodigo}>
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
                // value={elementoSeleccionado ? elementoSeleccionado.nombre : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 2</label>
              <input
                className="form-control"
                type="text"
                name="Fecha"
                // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 3</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 4</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 5</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 6</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>codigo 7</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => insertar(0)}>
              Agregar Producto
            </button>
            <button className="btn btn-danger" onClick={() => setModalInsertarCodigo(false)}>
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={modalInsertarProveedor}>
          <ModalHeader>
            <div>
              <h3>Agregar Productos</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="form-group">
              <label>proveedor 1</label>
              <input
                className="form-control"
                type="text"
                name="Apunte"
                // value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 2</label>
              <input
                className="form-control"
                type="text"
                name="Fecha"
                // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 3</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 4</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 5</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 6</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>proveedor 7</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => insertar(0)}>
              Agregar Proveedores
            </button>
            <button className="btn btn-danger" onClick={() => setModalInsertarProveedor(false)}>
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
        <div>
          <h3>Nombre</h3>
          <input
            className="form-control"
            type="text"
            name="nombre"
            value={seleccionado ? seleccionado.nombre : ''}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <h3>Área</h3>
          <input
            className="form-control"
            type="text"
            name="area"
            value={seleccionado ? seleccionado.area : ''}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <h3>Ubicación</h3>
          <input
            className="form-control"
            type="text"
            name="ubicacion"
            value={seleccionado ? seleccionado.ubicacion : ''}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <h3>Marca</h3>
          <input
            className="form-control"
            type="text"
            name="marca"
            value={seleccionado ? seleccionado.marca : ''}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <h3>Precio</h3>
          <input
            className="form-control"
            type="text"
            name="precio"
            value={seleccionado ? seleccionado.precio : ''}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <div>
            <h3>Descripción corta</h3>
            <FormGroup class="style">
              <Label for="exampleText"></Label>
              <Input type="textarea" name="text" id="exampleText" />
            </FormGroup>
          </div>
        </div>
        <div>
          <div>
            <h3>Descripción larga </h3>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlTextarea1"></label>
            <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-primary" onClick={(() => insertar(0), props.change)}>
          Agregar Producto
        </button>
        <button className="btn btn-danger" onClick={props.change}>
          Cancelar
        </button>
      </ModalFooter>
    </Modal>
  );
}
