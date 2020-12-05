import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap';
import React, { useState, useEffect } from 'react';
import { Button, Table, Label, FormGroup, Input, ButtonGroup } from 'reactstrap';
import './InterfazProducto.css';
import axios from 'axios';
import AgregarProducto from './AgregarProducto'
export default function EliminarProducto() {
 
  const dataApuntes = [ ];

  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalModificar, setModalModificar] = useState(false);
  const [ModalModificarCodigos, setModalModificarCodigos] = useState(false);
  const [ModalModificarProveedores, setModalModificarProveedores] = useState(false);
  const[ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [data, setData] = useState(dataApuntes);
  var [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: '',
    precios: [],
    cantidad:'',
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
  /*Metodo para fuardar codigos del ModalModificar */
  const GuardarCodigos = (i) => {
    console.log(i.codigos[0]);
    seleccionado.codigos[0]=document.getElementById('mcod1').value
    console.log(seleccionado.codigos[0]);
    
    
    seleccionado.codigos[1]=document.getElementById('modcod2').value;
    seleccionado.codigos[2]=document.getElementById('modcod3').value;
    seleccionado.codigos[3]=document.getElementById('modcod4').value;
    seleccionado.codigos[4]=document.getElementById('modcod5').value;
    seleccionado.codigos[5]=document.getElementById('modcod6').value;
    seleccionado.codigos[6]=document.getElementById('modcod7').value;
    setModalModificarCodigos(false);
    alert(seleccionado.codigos[1]);
  };
  /*Metodo para fuardar codigos del ModalModificar */
  const GuardarProveedores = () => {

    seleccionado.proveedores[0]=(document.getElementById('modprov1').value);
    seleccionado.proveedores[1]=(document.getElementById('modprov2').value);
    seleccionado.proveedores[2]=(document.getElementById('modprov3').value);
    seleccionado.proveedores[3]=(document.getElementById('modprov4').value);
    seleccionado.proveedores[4]=(document.getElementById('modprov5').value);
    seleccionado.proveedores[5]=(document.getElementById('modprov6').value);
    seleccionado.proveedores[6]=(document.getElementById('modprov7').value);
    setModalModificarProveedores(false);
    alert(seleccionado.proveedores[0]);
  };
  const GuardarPrecio = () => {

    seleccionado.precios[0]=(document.getElementById('modprecio1').value);
    seleccionado.precios[1]=(document.getElementById('modprecio2').value);
    seleccionado.precios[2]=(document.getElementById('modprecio3').value);
    setModalModificarPrecios(false);
    alert(seleccionado.precios[0]);
  };
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
  

  const updateItem=(Id)=>{
    setModalModificar(false);
    axios.put(`http://localhost:3001/api/productos/${Id}`, {
    nombre: document.getElementById('modnombre').value,
    area: document.getElementById('modarea').value,
    codigos: seleccionado.codigos,
    proveedores: seleccionado.proveedores,
    ubicacion: document.getElementById('modubicacion').value,
    marca: document.getElementById('modmarca').value,
    precios: seleccionado.precios,
    cantidad:document.getElementById('modcantidad').value,
    descripcion_corta:document.getElementById('descripcion1').value,
    descripcion_larga:document.getElementById('descripcion2').value,


    }).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };
  const mostrarCodigos = (i) => {
    setSeleccionado(i);
    console.log(i.nombre);
    setModalVerCodigos(true);
  };
  const Modificar=(elemento)=>{
    setSeleccionado(elemento);
    console.log(elemento.nombre);
    setModalModificar(true)
  }
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
      <div>
      <Modal isOpen={ModalModificar} className="text-center">
        <ModalHeader>
          <div>
            <h3 className = "text-center">MODIFICAR PRODUCTOS</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <Button onClick={() => setModalModificarCodigos(true)} color="primary">
              Insertar Codigo
          </Button>{' '}
          </div>
          <div>
            <label></label>
          </div>
          <div>
            <Button onClick={() => setModalModificarProveedores(true)} color="primary">
              Insertar Proveedor
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
                  id='mcod1'
                />
                <br />
                <label>codigo 2</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo2"
                  id='modcod2'
                //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 3</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo3"
                  id='modcod3'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 4</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo4"
                  id='modcod4'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 5</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo5"
                  id='modcod5'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 6</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo6"
                  id='modcod6'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>codigo 7</label>
                <input
                  className="form-control"
                  type="text"
                  name="modcodigo7"
                  id='modcod7'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => GuardarCodigos(seleccionado)}>Agregar Código</button>
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
                  id='modprov1'
                //value={elementoSeleccionado ? elementoSeleccionado.Apunte : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 2</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor2"
                  id='modprov2'
                //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 3</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor3"
                  id='modprov3'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 4</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor4"
                  id='modprov4'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 5</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor5"
                  id='modprov5'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 6</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor6"
                  id='modprov6'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
                <label>proveedor 7</label>
                <input
                  className="form-control"
                  type="text"
                  name="modproveedor7"
                  id='modprov7'
                //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                //onChange={manejarCambio}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button className="btn btn-primary" onClick={() => GuardarProveedores()}>Modificar Proveedores*</button>
              <button className="btn btn-danger" onClick={() => setModalModificarProveedores(false)}>
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
              id="modarea"
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
              id="modubicacion"
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
              id="modmarca"
              //value={seleccionado ? seleccionado.marca : ''}
              //onChange={manejarCambio}
            />
          </div>
          
          <Button onClick={() => setModalModificarPrecios(true)} color="primary">
            Precios
          </Button>{' '}
          <div>
            <h3>Cantidad</h3>
            <input
              className="form-control"
              type="Number"
              name="cantidad"
              id="modcantida"
              //value={seleccionado ? seleccionado.cantidad : ''}
              //onChange={manejarCambio}
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
          <button className="btn btn-primary" onClick={() => updateItem(seleccionado._id)}>
            Guardar Cambios
        </button>
          <button className="btn btn-danger" onClick={() =>setModalModificar(false) }>
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
              type="text"
              name="modprecio1"
              id='modprecio1'
            />
            <br />
            <label>Precio 2</label>
            <input
              className="form-control"
              type="text"
              name="modprecio2"
              id='modprecio2'
            //value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
            //onChange={manejarCambio}
            />
            <br />
            <label>Precio 3</label>
            <input
              className="form-control"
              type="text"
              name="modprecio3"
              id='modprecio3'
            //value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
            //onChange={manejarCambio}
            />
          </div>
        </ModalBody>
        <ModalFooter>
        <button className="btn btn-primary" onClick={() => GuardarPrecio()}>
            Agregar Producto
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