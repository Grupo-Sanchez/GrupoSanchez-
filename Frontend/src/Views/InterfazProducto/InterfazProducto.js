import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React, { useState } from 'react';
import { Button, Table, Label, FormGroup, Input, ButtonGroup } from 'reactstrap';
import './InterfazProducto.css';
import './SearchBar.css';
import SelectSearch from 'react-select-search';

export default function InterfazProducto() {
  const dataApuntes = [
    { nombre: 'Martillo', area: 'H1', codigo:["0801","0802","0803"],proveedores:["0801","0802","0803"],ubicacion: ['H5-S'] },
    { nombre: 'Llave inglesa',area:'H1', codigo:["0801","0802","0803"] ,proveedores:["0801","0802","0803"], ubicacion: ['H6-S'] },
  ];
  const [modalInsertar, setModalInsertar] = useState(false);
  const [modalModificar, setModalModificar] = useState(false);
  const [modalInsertarCodigo, setModalInsertarCodigo] = useState(false);
  const [modalVerCodigo, setModalVerCodigo] = useState(false);
  const[modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [modalInsertarProveedor, setModalInsertarProveedor] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigo: ['123'],
    ubicacion: '',
    marca: '',
    precio: '',
  });
  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
  ];
  /* Simple example */
  const abrirModalInsertar = () => {
    //setElementoSeleccionado(null);
  };
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  /*const insertar = () => {
    var valorInsertar = seleccionado;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    localStorage.setItem('Apunte', JSON.stringify(valorInsertar))
    setData(dataNueva);
    setModalInsertar(false);
  }*/
  const insertar = () => {
    var valorInsertar = seleccionado;
    //valorInsertar.N = data[data.length].N + 1;
    var dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    setModalInsertar(false);
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento.nombre !== i));
  };
  const mostrarCodigos = (i) => {
    setSeleccionado(i);
    setModalVerCodigo(true);

  };
  return (
    <div className="text-center">
      <div align="center">
        <SelectSearch search placeholder="Encuentre el Producto a Facturar" options={options} />
      </div>
      <Button onClick={() => setModalInsertar(true)}>Agregar</Button>
      <Button>Eliminar</Button>
      <Modal isOpen={modalInsertar} className="text-center">
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
                  //value={elementoSeleccionado ? elementoSeleccionado.nombre : ''}
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
          <button className="btn btn-primary" onClick={() => insertar(0)}>
            Agregar Producto
          </button>
          <button className="btn btn-danger" onClick={() => setModalInsertar(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Modal
        isOpen={modalModificar}
        className="text-center" /*-------------------MODAL MODIFICAR--------------------------------------*/
      >
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
                Agregar Código
              </button>
              <button className="btn btn-danger" onClick={() => setModalInsertarCodigo(false)}>
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={modalInsertarProveedor}>
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
              <button className="btn btn-danger" onClick={() => setModalInsertarProveedor(false)}>
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
            <h3>Nombre</h3>
            <input
              className="form-control"
              type="text"
              name="nombre"
              //value={seleccionado ? seleccionado.nombre : ''}
              //onChange={manejarCambio}
            />
          </div>
          <div>
            <h3>Área</h3>
            <input
              className="form-control"
              type="text"
              name="area"
              //value={seleccionado ? seleccionado.area : ''}
              //onChange={manejarCambio}
            />
          </div>
          <div>
            <h3>Ubicación</h3>
            <input
              className="form-control"
              type="text"
              name="ubicacion"
              //value={seleccionado ? seleccionado.ubicacion : ''}
              //onChange={manejarCambio}
            />
          </div>
          <div>
            <h3>Marca</h3>
            <input
              className="form-control"
              type="text"
              name="marca"
              //value={seleccionado ? seleccionado.marca : ''}
              //onChange={manejarCambio}
            />
          </div>
          <div>
            <h3>Precio</h3>
            <input
              className="form-control"
              type="text"
              name="precio"
              //value={seleccionado ? seleccionado.precio : ''}
              //onChange={manejarCambio}
            />
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
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" />
            </div>
            <div>
              <Button color="success" onClick={() => insertar(0)}>
                Agregar Producto
              </Button>
              <Button color="danger" onClick={() => setModalModificar(false)}>
                Cancelar
              </Button>
            </div>
          </div>
        </ModalBody>
      </Modal>
      <div>
        <Modal isOpen={modalVerCodigo}>
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
                value={seleccionado.codigo[0]}
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
                value={seleccionado.codigo[0]}
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
                readOnly
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
              />
              <br />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => setModalVerCodigo(false)}>
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
        <Modal isOpen = {modalVerDescripciones}>
          <ModalHeader></ModalHeader>
          <ModalBody>
            <div>
              <div>
                <h3>Descripción corta</h3>
              </div>
              <FormGroup class="style">
                <Label for="exampleText"></Label>
                <Input type="textarea" name="text" id="exampleText" readOnly/>
              </FormGroup>
            </div>
            <div>
              <div>
                <h3>Descripción larga </h3>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" readOnly/>
              </div>
            </div>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </Modal>
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
                  <Button color="primary" onClick={() =>mostrarCodigos(elemento)}>
                    Ver
                  </Button>
                </td>
                <td>
                  <Button color="primary" onClick={() => setModalVerProveedor(true)}>
                    Ver
                  </Button>
                </td>
                <td>
                  <Button color="primary" onClick = {() => setModalVerProveedor(true)}>Ver</Button>
                </td>
                <td>
                  <Button onClick={() => setModalModificar(true)} color="success">
                    Modificar
                  </Button>{' '}
                </td>
                <td>
                  <Button onClick={() => eliminar(elemento.nombre)} color="danger">
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
}
