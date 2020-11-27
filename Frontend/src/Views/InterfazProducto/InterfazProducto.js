import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { Button, Label, FormGroup, Input, ButtonGroup} from 'reactstrap';
import './InterfazProducto.css';


export default function InterfazProducto() {
  const [modalInsertarCodigo, setModalInsertarCodigo] = useState(false);
  const [modalInsertarProveedor, setModalInsertarProveedor] = useState(false);
  const abrirModalInsertar = () => {
    //setElementoSeleccionado(null);
    setModalInsertarCodigo(true);
  }
  const insertar = () => {
    /*var valorInsertar = elementoSeleccionado;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    localStorage.setItem('Apunte', JSON.stringify(valorInsertar))
    setData(dataNueva);
    setModalInsertar(false);
    */


  }
  return (
    <div className="text-center">
      <div>
        <Button onClick={() => setModalInsertarCodigo(true)} color="primary">Insertar Codigo</Button>{' '}
      </div>
      <div>
        <label>
        </label>
      </div>
      <div>
        <Button onClick={() => setModalInsertarProveedor(true)} color="primary">Insertar Proveedor</Button>{' '}
      </div>
      <Modal isOpen={modalInsertarCodigo}>
        <ModalHeader>
          <div>
            <h3>Agregar Productos</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>codigo 1</label>
            <input
              className="form-control"
              type="text"
              name="Apunte"
            //value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>codigo 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>codigo 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>codigo 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>codigo 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>codigo 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar(0)}>
            Agregar Producto
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertarCodigo(false)}
          >
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
            //value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>proveedor 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>proveedor 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>proveedor 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
            <label>proveedor 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}

            />
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar(0)}>
            Agregar Proveedores
          </button>
          <button
            className="btn btn-danger"
            onClick={() => setModalInsertarProveedor(false)}
          >
            Cancelar
          </button>
        </ModalFooter>
      </Modal>

      <div>
        <div>
          <h3>Area</h3>
        </div>
        <Label for="exampleEmail"></Label>
        <input type="text" name="Area" id="Area" placeholder="" />
      </div>
      <div>
        <div>
          <h3>Descripción corta</h3>
        </div>
        <FormGroup class="style">
          <Label for="exampleText"></Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>

      </div>
      <div>
        <div>
          <h3>Descripción larga </h3>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">
          </label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="5"
          />
        </div>
        <div>
          <Button color="success" /*onClick={() => insertar(0)}*/>
            Agregar Producto
          </Button>
        </div>
      </div>
    </div>

  );
}