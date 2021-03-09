import React, { useState, useEffect } from 'react';
import '../Styles/SearchBar.css';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Modal,
  Row,
  Col,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import imagePath from '../Icons/lupa1.jpeg';

export default function BuscarProducto(props) {
  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalVerPrecios, setModalVerPrecios] = useState(false);
  const [ModalVerCodigoBarra, setModalVerCodigoBarra] = useState(false);
  const [data, setData] = useState([]);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: [],
    precios: [],
    cantidad: '',
    descripcion_corta: '',
    descripcion_larga: '',
    cantidad_minima: '',
  });

  const fecthData = async () => {
    await axios.get('http://localhost:3001/api/productos').then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fecthData();
  }, []);
  const mostrarCodigos = (i) => {
    setSeleccionado(i);
    console.log(i.nombre);
    setModalVerCodigos(true);
  };
  const mostrarProveedores = (i) => {
    setSeleccionado(i);
    setModalVerProveedor(true);
  };
  const mostrarPrecios = (elemento) => {
    setSeleccionado(elemento);
    setModalVerPrecios(true);
  };
  const mostrarDescripciones = (elemento) => {
    setSeleccionado(elemento);
    setmodalVerDescripciones(true);
  };
  const mostrarCodigoBarra = (elemento) => {
    setSeleccionado(elemento);
    setModalVerCodigoBarra(true);
  };
  const Barcode = require('react-barcode');
  const myFunction = () => {
    // alert("eentoroo");
    const input = document.getElementById('myInput');
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    if (input != null) {
      filter = input.value.toUpperCase();
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

  return (
    <div align="center">
      <h1 class="text-center">PRODUCTOS EN INVENTARIO</h1>
      <input
        type="text"
        id="myInput"
        onChange={() => myFunction()}
        placeholder="Search for names.."
        title="Type in a name"
        style={{
          'background-image': `url('${imagePath}')`,
          'background-position': '10px 10px',
          'background-repeat': 'no-repeat',
          width: '50%',
          'font-size': '16px',
          padding: '12px 20px 12px 40px',
          border: '1px solid #ddd',
          'margin-bottom': '12px',
        }}
      ></input>
      <div
        style={{
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <Table
          responsive
          striped
          bordered
          hover
          align="center"
          size="sm"
          id="myTable"
          style={{ width: '500px' }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre</th>
              <th>Area</th>
              <th>Ubicación</th>
              <th>Marca</th>
              <th>Cantidad Mínima</th>
              <th>Códigos</th>
              <th>Proveedores </th>
              <th>Descripciones </th>
              <th>Precios</th>
              <th>Codigo de Barra</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr>
                <td>{(index += 1)}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.area}</td>
                <td>{elemento.ubicacion}</td>
                <td>{elemento.marca[0].name}</td>
                <td>{elemento.cantidad_minima}</td>
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
                  <Button color="primary" onClick={() => mostrarDescripciones(elemento)}>
                    Ver
                  </Button>
                </td>
                <td>
                  <Button color="primary" onClick={() => mostrarPrecios(elemento)}>
                    Ver
                  </Button>
                </td>
                <td>
                  <Button color="primary" onClick={() => mostrarCodigoBarra(elemento)}>
                    Ver
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
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
              // value={elementoSeleccionado ? elementoSeleccionado.nombre : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              value={seleccionado.codigos[1]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[2]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[3]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[4]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[5]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>codigo 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.codigos[6]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
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
      <Modal
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '1550px',
        }}
        isOpen={modalVerProveedor}
      >
        <ModalHeader>
          <div>
            <h3>Proveedores del Producto {seleccionado.nombre}</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <Row>
            <Col
              style={{
                maxWidth: '700px',
                'margin-left': '200px',
                paddingRight: '50px',
              }}
              md={{ size: 5 }}
            >
              <label>Proveedor 1</label>
              <input
                className="form-control"
                type="text"
                name="Apunte"
                value={seleccionado.proveedores[0] ? seleccionado.proveedores[0].name : ''}
                readOnly
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 1</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[0] && seleccionado.proveedores[0].precio !== ''
                    ? seleccionado.proveedores[0].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
            <Col
              style={{
                maxWidth: '700px',
                paddingRight: '50px',
              }}
            >
              <label>Proveedor 2</label>
              <input
                className="form-control"
                type="text"
                name="Fecha"
                readOnly
                value={seleccionado.proveedores[1] ? seleccionado.proveedores[1].name : ''}
                // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 2</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[1] && seleccionado.proveedores[1].precio !== ''
                    ? seleccionado.proveedores[1].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                maxWidth: '700px',
                'margin-left': '200px',
                paddingRight: '50px',
              }}
              md={{ size: 5 }}
            >
              <label>Proveedor 3</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                value={seleccionado.proveedores[2] ? seleccionado.proveedores[2].name : ''}
                readOnly
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 3</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[2] && seleccionado.proveedores[2].precio !== ''
                    ? seleccionado.proveedores[2].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
            <Col
              style={{
                maxWidth: '700px',
                paddingRight: '50px',
              }}
            >
              <label>Proveedor 4</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                value={seleccionado.proveedores[3] ? seleccionado.proveedores[3].name : ''}
                readOnly
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 4</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[3] && seleccionado.proveedores[3].precio !== ''
                    ? seleccionado.proveedores[3].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
          </Row>
          <Row>
            <Col
              style={{
                maxWidth: '700px',
                'margin-left': '200px',
                paddingRight: '50px',
              }}
              md={{ size: 5 }}
            >
              <label>Proveedor 5</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                value={seleccionado.proveedores[4] ? seleccionado.proveedores[4].name : ''}
                readOnly
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 5</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[4] && seleccionado.proveedores[4].precio !== ''
                    ? seleccionado.proveedores[4].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
            <Col
              style={{
                maxWidth: '700px',
                paddingRight: '50px',
              }}
            >
              <label>Proveedor 6</label>
              <input
                className="form-control"
                type="text"
                name="Etiqueta"
                value={seleccionado.proveedores[5] ? seleccionado.proveedores[5].name : ''}
                readOnly
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
              <label>Precio Proveedor 6</label>
              <input
                className="form-control"
                type="number"
                readOnly
                value={
                  seleccionado.proveedores[5] && seleccionado.proveedores[5].precio !== ''
                    ? seleccionado.proveedores[5].precio
                    : 'No tiene precio asignado'
                }
              />
              <br />
            </Col>
          </Row>
          <div
            style={{
              maxWidth: '1100px',
              paddingLeft: '500px',
            }}
            className="form-group"
          >
            <label>Proveedor 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[6] ? seleccionado.proveedores[6].name : ''}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <label>Precio Proveedor 7</label>
            <input
              className="form-control"
              type="number"
              readOnly
              value={
                seleccionado.proveedores[6] && seleccionado.proveedores[6].precio !== ''
                  ? seleccionado.proveedores[6].precio
                  : 'No tiene precio asignado'
              }
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
              <Input
                type="textarea"
                name="text"
                id="mostrarDescripcionCorta"
                value={seleccionado.descripcion_corta}
                readOnly
              />
            </FormGroup>
          </div>
          <div>
            <div>
              <h3>Descripción larga </h3>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea
                className="form-control"
                id="mostrarDescripcionLarga"
                rows="5"
                value={seleccionado.descripcion_larga}
                readOnly
              />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => setmodalVerDescripciones(false)}>
            OK
          </Button>
        </ModalFooter>
      </Modal>
      <Modal isOpen={ModalVerPrecios}>
        <ModalHeader>
          <div className="text-center">
            <h3>Modificar Precios</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Precio 1</label>
            <input
              className="form-control"
              type="text"
              name="modprecio1"
              id="verprecio1"
              value={seleccionado.precios[0]}
              readOnly
            />
            <br />
            <label>Precio 2</label>
            <input
              className="form-control"
              type="text"
              name="modprecio2"
              id="verprecio2"
              value={seleccionado.precios[1]}
              readOnly
            />
            <br />
            <label>Precio 3</label>
            <input
              className="form-control"
              type="text"
              name="modprecio3"
              id="verprecio3"
              value={seleccionado.precios[2]}
              readOnly
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModalVerPrecios(false)}>
            OK
          </button>
        </ModalFooter>
      </Modal>
      <Modal
        className="scrolling"
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
        isOpen={ModalVerCodigoBarra}
      >
        <ModalHeader>
          <div className="text-center">
            <h3>Codigo de Barra del Producto {seleccionado.nombre}</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div align="center">
            <Barcode value={seleccionado.codigos[0]} />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModalVerCodigoBarra(false)}>
            OK
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
}
