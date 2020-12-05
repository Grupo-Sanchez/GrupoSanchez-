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
  const [ModalModificar, setModalModificar] = useState(false);
  const [ModalModificarCodigo, setModalModificarCodigo] = useState(false);
  const [ModalModificarProveedores, setModalModificarProveedores] = useState(false);
  const [data, setData] = useState(dataApuntes);
  var [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: '',
    precio: [],
    descripcion_corta: '',
    descripcion_larga: '',
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
  const mostrarProveedores = (i) => {
    setSeleccionado(i);
    setModalVerProveedor(true);
  };
  const mostrarDescripciones = (elemento) => {
    setSeleccionado(elemento);
    setmodalVerDescripciones(true);
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
      <h4 class = "text-center">PRODUCTOS EN INVENTARIO</h4>
      <Table striped bordered hover dark align="center" size="sm">
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
            <th class = "text-center">   Acción</th>
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
                <Button color="primary" onClick={() => mostrarProveedores(elemento)}>
                  Ver
                </Button>
              </td>
              <td>
                <Button color="primary" onClick={() => mostrarDescripciones(elemento)}>Ver</Button>
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
      <div>
      <Modal isOpen={ModalModificar} className="text-center">
        <ModalHeader>
          <div>
            <h3>AGREGAR PRODUCTOS</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <Button onClick={() => setModalModificarCodigo(true)} color="primary">
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
          <Modal isOpen={ModalModificarCodigo}>
            <ModalHeader>
              <div className="text-center">
                <h3>Modificar Códigos</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>codigo 1</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo1"
                  id='cod1'
                />
                <br />
                <label>codigo 2</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo2"
                  id='cod2'
                //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 3</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo3"
                  id='cod3'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 4</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo4"
                  id='cod4'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 5</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo5"
                  id='cod5'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 6</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo6"
                  id='cod6'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 7</label>
                <input
                  className="form-control"
                  type="text"
                  name="codigo7"
                  id='cod7'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" /*onClick={() => GuardarCodigos()}*/>Agregar Código</button>
              <button className="btn btn-danger" /*onClick={() => setModalInsertarCodigo(false)}*/>
                Cancelar
            </button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={modalInsertarProveedor}>
            <ModalHeader>
              <div>
                <h3>Modificar Proveedores</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>proveedor 1</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor1"
                  id='prov1'
                //value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 2</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor2"
                  id='prov2'
                //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 3</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor3"
                  id='prov3'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 4</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor4"
                  id='prov4'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 5</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor5"
                  id='prov5'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 6</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor6"
                  id='prov6'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 7</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor7"
                  id='prov7'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => GuardarProveedores()}>Agregar Proveedores</button>
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
          
          <Button onClick={() => setModalInsertarPrecio(true)} color="primary">
            Precios
          </Button>{' '}
          <div>
            <h3>Cantidad</h3>
            <input
              className="form-control"
              type="Number"
              name="cantidad"
              value={seleccionado ? seleccionado.cantidad : ''}
              onChange={manejarCambio}
            />
          </div>
          <div>
            <div>
              <h3>Descripción corta</h3>
              <FormGroup class="style">
                <Label for="exampleText"></Label>
                <Input type="textarea" name="text" id="descripcion1"/>
              </FormGroup>
            </div>
          </div>
          <div>
            <div>
              <h3>Descripción larga </h3>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="descripcion2" rows="5"/>
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
      <Modal isOpen={modalInsertarPrecio}>
        <ModalHeader>
          <div className="text-center">
            <h3>Agregar Precios</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Precio 1</label>
            <input
              className="form-control"
              type="text"
              name="precio1"
              id='precio1'
            />
            <br />
            <label>Precio 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              name="precio2"
              id='precio2'
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>Precio 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              name="precio3"
              id='precio3'
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
          </div>
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary" onClick={() => GuardarPrecio()}>
            Agregar Producto
        </button>
          <button className="btn btn-danger" onClick={() => setModalInsertarPrecio(false)}>
            Cancelar
        </button>
        </ModalFooter>
      </Modal>
    </div>
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
              value={seleccionado.proveedores[0]}
              readOnly
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              readOnly
              value={seleccionado.proveedores[1]}
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>proveedor 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[2]}
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
              value={seleccionado.proveedores[3]}
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
              value={seleccionado.proveedores[4]}
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
              value={seleccionado.proveedores[5]}
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
              value={seleccionado.proveedores[6]}
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
              <Input type="textarea" name="text" id='mostrarDescripcionCorta' value = {seleccionado.descripcion_corta} readOnly />
            </FormGroup>
          </div>
          <div>
            <div>
              <h3>Descripción larga </h3>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="mostrarDescripcionLarga" rows="5" value = {seleccionado.descripcion_larga} readOnly />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color = "primary" onClick = {() => setmodalVerDescripciones(false)}>OK</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}