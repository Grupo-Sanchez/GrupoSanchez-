import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import imagePath from '../Icons/lupa1.jpeg';

export default function EliminarProducto(props) {
  const dataApuntes = [];

  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalModificar, setModalModificar] = useState(false);
  const [ModalModificarCodigos, setModalModificarCodigos] = useState(false);
  const [ModalModificarProveedores, setModalModificarProveedores] = useState(false);
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [ModalVerPrecios, setModalVerPrecios] = useState(false);
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: '',
    precios: [],
    cantidad: '',
    descripcion_corta: '',
    descripcion_larga: '',
    cantidad_minima: '',
  });
  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/productos').then((response) => {
        setData(response.data);
      });
    };
    fecthData();
  }, []);
  /*
  Metodo para fuardar codigos del ModalModificar
   */
  const GuardarCodigos = (i) => {
    console.log(i.codigos[0]);
    seleccionado.codigos[0] = document.getElementById('mcod1').value;
    console.log(seleccionado.codigos[0]);

    seleccionado.codigos[1] = document.getElementById('modcod2').value;
    seleccionado.codigos[2] = document.getElementById('modcod3').value;
    seleccionado.codigos[3] = document.getElementById('modcod4').value;
    seleccionado.codigos[4] = document.getElementById('modcod5').value;
    seleccionado.codigos[5] = document.getElementById('modcod6').value;
    seleccionado.codigos[6] = document.getElementById('modcod7').value;
    setModalModificarCodigos(false);
    alert(seleccionado.codigos[1]);
  };
  /* Metodo para fuardar codigos del ModalModificar */
  const GuardarProveedores = () => {
    seleccionado.proveedores[0] = document.getElementById('modprov1').value;
    seleccionado.proveedores[1] = document.getElementById('modprov2').value;
    seleccionado.proveedores[2] = document.getElementById('modprov3').value;
    seleccionado.proveedores[3] = document.getElementById('modprov4').value;
    seleccionado.proveedores[4] = document.getElementById('modprov5').value;
    seleccionado.proveedores[5] = document.getElementById('modprov6').value;
    seleccionado.proveedores[6] = document.getElementById('modprov7').value;
    setModalModificarProveedores(false);
    alert(seleccionado.proveedores[0]);
  };
  const GuardarPrecio = () => {
    seleccionado.precios[0] = document.getElementById('modprecio1').value;
    seleccionado.precios[1] = document.getElementById('modprecio2').value;
    seleccionado.precios[2] = document.getElementById('modprecio3').value;
    setModalModificarPrecios(false);
    alert(seleccionado.precios[0]);
  };
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/productos/${memberId}`);
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
  };
  const updateItem = (Id) => {
    setModalModificar(false);
    axios
      .put(`http://localhost:3001/api/productos/${Id}`, {
        nombre: document.getElementById('modnombre').value,
        area: document.getElementById('modarea').value,
        codigos: seleccionado.codigos,
        proveedores: seleccionado.proveedores,
        ubicacion: document.getElementById('modubicacion').value,
        marca: document.getElementById('modmarca').value,
        precios: seleccionado.precios,
        cantidad: document.getElementById('modcantidad').value,
        descripcion_corta: document.getElementById('descripcion1').value,
        descripcion_larga: document.getElementById('descripcion2').value,
        cantidad_minima: document.getElementById('modcantidad_minima').value,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const mostrarCodigos = (i) => {
    setSeleccionado(i);
    console.log(i.nombre);
    setModalVerCodigos(true);
  };
  const onTodoChange = (value) => {
    this.setState({
      name: value,
    });
  };
  const Modificar = (elemento) => {
    setSeleccionado(elemento);
    console.log(elemento.nombre);
    setModalModificar(true);
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

  const [codigo1, setCodigo1] = useState('');
  const [codigo2, setCodigo2] = useState('');
  const [codigo3, setCodigo3] = useState('');
  const [codigo4, setCodigo4] = useState('');
  const [codigo5, setCodigo5] = useState('');
  const [codigo6, setCodigo6] = useState('');
  const [codigo7, setCodigo7] = useState('');

  const changeCode = () => {
    setCodigo1(seleccionado.codigos[0]);
    setCodigo2(seleccionado.codigos[1]);
    setCodigo3(seleccionado.codigos[2]);
    setCodigo4(seleccionado.codigos[3]);
    setCodigo5(seleccionado.codigos[4]);
    setCodigo6(seleccionado.codigos[5]);
    setCodigo7(seleccionado.codigos[6]);
    setModalModificarCodigos(true);
  };
  const [proveedor1, setproveedor1] = useState('');
  const [proveedor2, setproveedor2] = useState('');
  const [proveedor3, setproveedor3] = useState('');
  const [proveedor4, setproveedor4] = useState('');
  const [proveedor5, setproveedor5] = useState('');
  const [proveedor6, setproveedor6] = useState('');
  const [proveedor7, setproveedor7] = useState('');

  const changeProveedor = () => {
    setproveedor1(seleccionado.proveedores[0]);
    setproveedor2(seleccionado.proveedores[1]);
    setproveedor3(seleccionado.proveedores[2]);
    setproveedor4(seleccionado.proveedores[3]);
    setproveedor5(seleccionado.proveedores[4]);
    setproveedor6(seleccionado.proveedores[5]);
    setproveedor7(seleccionado.proveedores[6]);
    setModalModificarProveedores(true);
  };
  const [precio1, setprecio1] = useState('');
  const [precio2, setprecio2] = useState('');
  const [precio3, setprecio3] = useState('');

  const changePrecio = () => {
    setprecio1(seleccionado.precios[0]);
    setprecio2(seleccionado.precios[1]);
    setprecio3(seleccionado.precios[2]);
    setModalModificarPrecios(true);
  };
  const mostrarPrecios = (elemento) => {
    setSeleccionado(elemento);
    setModalVerPrecios(true);
  };

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
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
          width: '60%',
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
          dark
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
              <th>Cantidad</th>
              <th>Cantidad Mínima</th>
              <th>Códigos</th>
              <th>Proveedores </th>
              <th>Descripciones </th>
              <th>Precios</th>
              <th class="text-center"> Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr>
                <td>{(index += 1)}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.area}</td>
                <td>{elemento.ubicacion}</td>
                <td>{elemento.marca}</td>
                <td>{elemento.cantidad}</td>
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
                  <Button onClick={() => Modificar(elemento)} color="success">
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
      </div>
      <div>
        <Modal
          isOpen={ModalModificar}
          className="text-center"
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
          }}
        >
          <ModalHeader>
            <div>
              <h3 className="text-center">MODIFICAR PRODUCTOS</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div>
              <Button onClick={() => changeCode()} color="primary">
                Modificar Códigos
              </Button>{' '}
            </div>
            <div>
              <label></label>
            </div>
            <div>
              <Button onClick={() => changeProveedor()} color="primary">
                Modificar Proveedor
              </Button>{' '}
            </div>
            <Modal isOpen={ModalModificarCodigos}>
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
                    name="mcodigo1"
                    id="mcod1"
                    // placeholder = {seleccionado.codigos[0]}
                    value={codigo1}
                    onChange={(event) => setCodigo1(event.target.value)}
                  />
                  <br />
                  <label>codigo 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo2"
                    id="modcod2"
                    value={codigo2}
                    onChange={(event) => setCodigo2(event.target.value)}
                  />
                  <br />
                  <label>codigo 3</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo3"
                    id="modcod3"
                    value={codigo3}
                    onChange={(event) => setCodigo3(event.target.value)}
                  />
                  <br />
                  <label>codigo 4</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo4"
                    id="modcod4"
                    value={codigo4}
                    onChange={(event) => setCodigo4(event.target.value)}
                  />
                  <br />
                  <label>codigo 5</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo5"
                    id="modcod5"
                    value={codigo5}
                    onChange={(event) => setCodigo5(event.target.value)}
                  />
                  <br />
                  <label>codigo 6</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo6"
                    id="modcod6"
                    value={codigo6}
                    onChange={(event) => setCodigo6(event.target.value)}
                  />
                  <br />
                  <label>codigo 7</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modcodigo7"
                    id="modcod7"
                    value={codigo7}
                    onChange={(event) => setCodigo7(event.target.value)}
                  />
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => GuardarCodigos(seleccionado)}>
                  Modificar Código
                </button>
                <button className="btn btn-danger" onClick={() => setModalModificarCodigos(false)}>
                  Cancelar
                </button>
              </ModalFooter>
            </Modal>
            <Modal isOpen={ModalModificarProveedores}>
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
                    name="modproveedor1"
                    id="modprov1"
                    placeholder={seleccionado.proveedores[0]}
                    value={proveedor1}
                    onChange={(event) => setproveedor1(event.target.value)}
                  />
                  <br />
                  <label>proveedor 2</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor2"
                    id="modprov2"
                    value={proveedor2}
                    onChange={(event) => setproveedor2(event.target.value)}
                  />
                  <br />
                  <label>proveedor 3</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor3"
                    id="modprov3"
                    value={proveedor3}
                    onChange={(event) => setproveedor3(event.target.value)}
                  />
                  <br />
                  <label>proveedor 4</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor4"
                    id="modprov4"
                    value={proveedor4}
                    onChange={(event) => setproveedor4(event.target.value)}
                  />
                  <br />
                  <label>proveedor 5</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor5"
                    id="modprov5"
                    value={proveedor5}
                    onChange={(event) => setproveedor5(event.target.value)}
                  />
                  <br />
                  <label>proveedor 6</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor6"
                    id="modprov6"
                    value={proveedor6}
                    onChange={(event) => setproveedor6(event.target.value)}
                  />
                  <br />
                  <label>proveedor 7</label>
                  <input
                    className="form-control"
                    type="text"
                    name="modproveedor7"
                    id="modprov7"
                    value={proveedor7}
                    onChange={(event) => setproveedor7(event.target.value)}
                  />
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => GuardarProveedores()}>
                  Modificar Proveedores*
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => setModalModificarProveedores(false)}
                >
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
                id="modnombre"
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
                id="modarea"
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
                id="modubicacion"
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
                id="modmarca"
                placeholder={seleccionado.marca}
                value={seleccionado ? seleccionado.marca : ''}
                onChange={manejarCambio}
              />
            </div>
            <Button onClick={() => changePrecio()} color="primary">
              Precios
            </Button>{' '}
            <div>
              <h3>Cantidad</h3>
              <input
                className="form-control"
                type="Number"
                name="cantidad"
                id="modcantidad"
                value={seleccionado ? seleccionado.cantidad : ''}
                onChange={manejarCambio}
              />
            </div>
            <div>
              <h3>Cantidad Mínima</h3>
              <input
                className="form-control"
                type="Number"
                name="cantidad_minima"
                id="modcantidad_minima"
                value={seleccionado ? seleccionado.cantidad_minima : ''}
                onChange={manejarCambio}
              />
            </div>
            <div>
              <div>
                <h3>Descripción corta</h3>
                <FormGroup class="style">
                  <Label for="exampleText"></Label>
                  <Input
                    type="textarea"
                    name="text"
                    id="descripcion1"
                    value={seleccionado ? seleccionado.descripcion_corta : ''}
                    onChange={manejarCambio}
                  />
                </FormGroup>
              </div>
            </div>
            <div>
              <div>
                <h3>Descripción larga </h3>
              </div>
              <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1"></label>
                <textarea
                  className="form-control"
                  id="descripcion2"
                  rows="5"
                  value={seleccionado ? seleccionado.descripcion_larga : ''}
                  onChange={manejarCambio}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => updateItem(seleccionado._id)}>
              Guardar Cambios
            </button>
            <button className="btn btn-danger" onClick={() => setModalModificar(false)}>
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
        <Modal isOpen={ModalModificarPrecios}>
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
                type="Number"
                name="modprecio1"
                id="modprecio1"
                value={precio1}
                onChange={(event) => setprecio1(event.target.value)}
              />
              <br />
              <label>Precio 2</label>
              <input
                className="form-control"
                type="Number"
                name="modprecio2"
                id="modprecio2"
                value={precio2}
                onChange={(event) => setprecio2(event.target.value)}
              />
              <br />
              <label>Precio 3</label>
              <input
                className="form-control"
                type="Number"
                name="modprecio3"
                id="modprecio3"
                value={precio3}
                onChange={(event) => setprecio3(event.target.value)}
              />
            </div>
          </ModalBody>
          <ModalFooter>
            <button className="btn btn-primary" onClick={() => GuardarPrecio()}>
              Modificar Precio
            </button>
            <button className="btn btn-danger" onClick={() => setModalModificarPrecios(false)}>
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
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 2</label>
            <input
              className="form-control"
              type="text"
              name="Fecha"
              readOnly
              value={seleccionado.proveedores[1]}
              // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[2]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 4</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[3]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 5</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[4]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 6</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[5]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 7</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionado.proveedores[6]}
              readOnly
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
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
    </div>
  );
}
