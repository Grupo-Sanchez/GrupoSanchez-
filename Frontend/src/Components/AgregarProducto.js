import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  Input,
} from 'reactstrap';
import { AvForm, AvField } from 'availity-reactstrap-validation';
import React, { useState, useEffect } from 'react';
import '../Styles/SearchBarInterfazProductos.css';
import axios from 'axios';

export default function AgregarProducto(props) {
  const dataApuntes = [];

  const [modalInsertarPrecio, setModalInsertarPrecio] = useState(false);
  const [modalInsertarCodigo, setModalInsertarCodigo] = useState(false);
  const [modalInsertarProveedor, setModalInsertarProveedor] = useState(false);
  const [inputcod2, setinputcod2] = useState(false);
  const [inputcod3, setinputcod3] = useState(false);
  const [inputcod4, setinputcod4] = useState(false);
  const [inputcod5, setinputcod5] = useState(false);
  const [inputcod6, setinputcod6] = useState(false);
  const [inputcod7, setinputcod7] = useState(false);
  const [cod, setcod] = useState('');
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: '',
    precio: [],
    cantidad: '',
    descripcion_corta: '',
    descripcion_larga: '',
    cantidad_minima: '',
  });
  const prueba = async () => {
    const campos = {
      nombre: seleccionado.nombre,
      area: seleccionado.area,
      codigos: seleccionado.codigos,
      proveedores: seleccionado.proveedores,
      ubicacion: seleccionado.ubicacion,
      marca: seleccionado.marca,
      precios: seleccionado.precio,
      cantidad: seleccionado.cantidad,
      descripcion_corta: seleccionado.descripcion_corta,
      descripcion_larga: seleccionado.descripcion_larga,
      cantidad_minima: seleccionado.cantidad_minima,
    };
    const res = await axios.post('http://localhost:3001/api/productos', campos);
    console.log(res);
    alert('¡Producto Agregado!');
  };
  /*
  HandleChange(event){
      this.state.codigos.push();
      this.setState({some:'val',arr:this.state.arr})
  }
  */

  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const GuardarCodigos = () => {
    let cod1 = '';
    let cod2 = '';
    let cod3 = '';
    let cod4 = '';
    let cod5 = '';
    let cod6 = '';
    let cod7 = '';
    if (document.getElementById('cod1') != null) {
      cod1 = document.getElementById('cod1').value;
    }
    if (document.getElementById('cod2') != null) {
      cod2 = document.getElementById('cod2').value;
    }
    if (document.getElementById('cod3') != null) {
      cod3 = document.getElementById('cod3').value;
    }
    if (document.getElementById('cod4') != null) {
      cod4 = document.getElementById('cod4').value;
    }
    if (document.getElementById('cod5') != null) {
      cod5 = document.getElementById('cod5').value;
    }
    if (document.getElementById('cod6') != null) {
      cod6 = document.getElementById('cod6').value;
    }
    if (document.getElementById('cod7') != null) {
      cod7 = document.getElementById('cod7').value;
    }
    if (cod1.toString().trim() === '') {
      alert('Codigo 1 Vacio');
    } else {
      seleccionado.codigos.push(cod1);
      if (cod2.toString().trim() !== '') {
        seleccionado.codigos.push(cod2);
      }
      if (cod3.toString().trim() !== '') {
        seleccionado.codigos.push(cod3);
      }
      if (cod4.toString().trim() !== '') {
        seleccionado.codigos.push(cod4);
      }
      if (cod5.toString().trim() !== '') {
        seleccionado.codigos.push(cod5);
      }
      if (cod6.toString().trim() !== '') {
        seleccionado.codigos.push(cod6);
      }
      if (cod7.toString().trim() !== '') {
        seleccionado.codigos.push(cod7);
      }
      setModalInsertarCodigo(false);
      alert('Codigos Agregados Exitosamente');
    }
  };
  const GuardarPrecio = () => {
    seleccionado.precio.push(document.getElementById('precio1').value);
    seleccionado.precio.push(document.getElementById('precio2').value);
    seleccionado.precio.push(document.getElementById('precio3').value);
    setModalInsertarPrecio(false);
    alert(seleccionado.precio[0]);
  };
  const GuardarProveedores = () => {
    seleccionado.proveedores.push(document.getElementById('prov1').value);
    seleccionado.proveedores.push(document.getElementById('prov2').value);
    seleccionado.proveedores.push(document.getElementById('prov3').value);
    seleccionado.proveedores.push(document.getElementById('prov4').value);
    seleccionado.proveedores.push(document.getElementById('prov5').value);
    seleccionado.proveedores.push(document.getElementById('prov6').value);
    seleccionado.proveedores.push(document.getElementById('prov7').value);
    setModalInsertarProveedor(false);
    alert(seleccionado.proveedores[0]);
  };
  const handleChange = (e, num) => {
    if (num === 2) {
      setinputcod2(e.target.value);
      setinputcod3(false);
      setinputcod4(false);
      setinputcod5(false);
      setinputcod6(false);
      setinputcod7(false);
      if (inputcod2 === false) {
        alert('entra');
      } else {
        setcod(' ');
      }
    } else if (num === 3) {
      setinputcod3(e.target.value);
      setinputcod4(false);
    } else if (num === 4) {
      setinputcod4(e.target.value);
      setinputcod5(false);
    } else if (num === 5) {
      setinputcod5(e.target.value);
      setinputcod6(false);
    } else if (num === 6) {
      setinputcod6(e.target.value);
      setinputcod7(false);
    } else if (num === 7) {
      setinputcod7(e.target.value);
    }
  };
  const insertar = () => {
    const valorInsertar = seleccionado;
    // valorInsertar.N = data[data.length].N + 1;
    const dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    // setModalInsertar(false);
    seleccionado.descripcion_corta = document.getElementById('descripcion1').value;
    seleccionado.descripcion_larga = document.getElementById('descripcion2').value;
    seleccionado.cantidad_minima = document.getElementsByName('cantidad_minima').value;
    if (
      seleccionado.codigos.length > 0
      && seleccionado.proveedores.length > 0
      && seleccionado.precio.length > 0
    ) {
      prueba();
      props.change();
    } else {
      alert('Campos incompletos');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
        }}
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
              <div className="text-center">
                <h3>Agregar Códigos</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <AvForm>
                <h3>Código 1</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo1"
                  id="cod1"
                  required
                  errorMessage="Este codigo es requerido"
                  validate={{
                    required: { value: true },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  onChange={(e) => handleChange(e, 2)}
                />
                <h3>Código 2</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo2"
                  id="cod2"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  value={cod}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod2}
                  onChange={(e) => handleChange(e, 3)}
                />
                <h3>Código 3</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo3"
                  id="cod3"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod3}
                  onChange={(e) => handleChange(e, 4)}
                />
                <h3>Código 4</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo4"
                  id="cod4"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod4}
                  onChange={(e) => handleChange(e, 5)}
                />
                <h3>Código 5</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo5"
                  id="cod5"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod5}
                  onChange={(e) => handleChange(e, 6)}
                />
                <h3>Código 6</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo6"
                  id="cod6"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod6}
                  onChange={(e) => handleChange(e, 7)}
                />
                <h3>Código 7</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="codigo7"
                  id="cod7"
                  errorMessage="Codigo Invalido"
                  validate={{
                    required: { value: false },
                    pattern: { value: '^[A-Za-z0-9]+$' },
                    minLength: { value: 1 },
                  }}
                  onKeyDown={handleKeyDown}
                  disabled={!inputcod7}
                />
              </AvForm>
            </ModalBody>
            <ModalFooter>
              <Button onClick={() => GuardarCodigos()} color="primary">
                Submit
              </Button>
              <Button onClick={() => setModalInsertarCodigo(false)} color="danger">
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          <Modal isOpen={modalInsertarProveedor}>
            <ModalHeader>
              <div>
                <h3>Agregar Proveedores</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>proveedor 1</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor1"
                  id="prov1"
                  // value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 2</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor2"
                  id="prov2"
                  // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 3</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor3"
                  id="prov3"
                  // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 4</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor4"
                  id="prov4"
                  // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 5</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor5"
                  id="prov5"
                  // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 6</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor6"
                  id="prov6"
                  // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                  // onChange={manejarCambio}
                />
                <br />
                <label>proveedor 7</label>
                <input
                  className="form-control"
                  type="text"
                  name="proveedor7"
                  id="prov7"
                  // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                  // onChange={manejarCambio}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => GuardarProveedores()}>
                Agregar Proveedores
              </button>
              <button className="btn btn-danger" onClick={() => setModalInsertarProveedor(false)}>
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          <div>
            <AvForm>
              <h3>Nombre</h3>
              <AvField
                className="form-control"
                type="text"
                name="nombre"
                errorMessage="Nombre Inválido"
                validate={{
                  required: { value: true },
                  pattern: { value: '^[A-Za-z0-9]+$' },
                  minLength: { value: 1 },
                }}
                value={seleccionado ? seleccionado.nombre : ''}
                onChange={manejarCambio}
              />
            </AvForm>
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
                <Input type="textarea" name="text" id="descripcion1" />
              </FormGroup>
            </div>
          </div>
          <div>
            <div>
              <h3>Descripción larga </h3>
            </div>
            <div className="form-group">
              <label htmlFor="exampleFormControlTextarea1"></label>
              <textarea className="form-control" id="descripcion2" rows="5" />
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => insertar(0)}>
            Agregar Producto
          </button>
          <button className="btn btn-danger" onClick={props.change}>
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
            <input className="form-control" type="Number" name="precio1" id="precio1" />
            <br />
            <label>Precio 2</label>
            <input
              className="form-control"
              type="Number"
              name="Fecha"
              name="precio2"
              id="precio2"
              // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>Precio 3</label>
            <input
              className="form-control"
              type="Number"
              name="Etiqueta"
              name="precio3"
              id="precio3"
              // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
              // onChange={manejarCambio}
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
  );
}
