import React, { useState, useEffect } from 'react';
import {
  Modal,
  Input,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  CustomInput,
  Table,
} from 'reactstrap';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import axios from 'axios';
import '../Styles/InterfazProducto.css';
import CardBodega from './CartaBodega';
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';

const ListarBodegas = (props) => {
  const formulario = [];
  const [data, setData] = useState(formulario);
  const [bodega, setBodega] = useState();
  const [dataproductos, setDataproductos] = useState([]);
  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalVerPrecios, setModalVerPrecios] = useState(false);

  const [abrir, setAbrir] = useState(false);
  const [SeleccionMigrar, setSeleccionMigrar] = useState();
  const [modalmigrar, setModalmigrar] = useState(false);
  const [Seleccionado, setSeleccionado] = useState({
    _id: '',
    numBodega: '',
    descripcion: '',
    encargado: '',
    cantPasillos: '',
    CantProductos: '',
  });
  const [seleccionadoPro, setSeleccionadoPro] = useState({
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

  const onDelete = (memberId) => {
    axios.delete(`http://Localhost:178.128.67.247/api/bodegas/${memberId}`);
    // window.location.reload(false);
  };
  const [ModalModificarBodega, setModalModificarBodega] = useState(false);
  const eliminar = (i) => {
    // console.log('eliminar');
    // console.log(i.CantProductos);
    if (i.CantProductos === '0') {
      setData(data.filter((elemento) => elemento._id !== i));
      onDelete(i._id);
      Confirm.open({
        title: '!exito!',
        message: 'bodega Eliminada correctamente',
        onok: () => {},
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      Confirm.open({
        title: 'error',
        message: 'La bodega no debe contener productos para poder eliminarla',
        onok: () => {},
      });
    }
  };
  const mostrarCodigos = (i) => {
    setSeleccionadoPro(i);
    console.log(i.nombre);
    setModalVerCodigos(true);
  };
  const mostrarProveedores = (i) => {
    setSeleccionadoPro(i);
    setModalVerProveedor(true);
  };
  const mostrarPrecios = (elemento) => {
    setSeleccionadoPro(elemento);
    setModalVerPrecios(true);
  };
  const mostrarDescripciones = (elemento) => {
    setSeleccionadoPro(elemento);
    setmodalVerDescripciones(true);
  };
  const recargar = () => {
    // props.change;
    window.location.reload(false);
  };

  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });

  const fecthData = async () => {
    await axios.get('http://Localhost:178.128.67.247/api/bodegas').then((response) => {
      setData(response.data);
      // alert(data[0]);
    });
  };
  const fecthDataProductos = async () => {
    await axios.get('http://Localhost:178.128.67.247/api/productos').then((response) => {
      setDataproductos(response.data);
      // alert(dataproductos[0]);
    });
  };
  useEffect(() => {
    fecthData();
    fecthDataProductos();
  }, []);

  useEffect(() => {
    fecthData();
    fecthDataProductos();
  }, [dataproductos, data]);
  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };
  async function handleValidSubmit(event, values) {
    const Id = Seleccionado._id;
    axios
      .put(`http://Localhost:178.128.67.247/api/bodegas/${Id}`, {
        numBodega: values.numBodega,
        descripcion: values.Description,
        encargado: values.Encargado,
        cantPasillos: values.CantPasillos,
      })
      .then((res) => {
        if (res.data.message) {
          Confirm.open({
            title: 'aviso',
            message: 'El numero de bodega ya existe',
            onok: () => {},
          });
        } else {
          Confirm.open({
            title: '!exito!',
            message: 'bodega modificada correctamente',
            onok: () => {},
          });
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
      })
      .catch((error) => {
        Confirm.open({
          title: 'error',
          message: 'ha ocurrido un error',
          onok: () => {},
        });
      });
    setModalModificarBodega(false);
  }

  const llenar = (i) => {
    setSeleccionado(i); //Bodega seleccionada
    setAbrir(true); //abrir el modal de los productos de la bodega seleccionada
    props.change();
    setBodega(i.numBodega); //Numero de bodega seleccionada
  };

  const migrarBodega = () => {
    //Abrir modal para seleccionar a donde se migraran los datos
    setModalmigrar(true);
  };

  const seleccionarAMigrar = (bodegaMigrar) => {
    setModalmigrar(false); //cierro modal donde selecciono donde iran los productos
    setSeleccionMigrar(bodegaMigrar._id); //Nueva bodega de los productos
    const Id = Seleccionado._id;
    const payload = { value: bodegaMigrar._id, name: bodegaMigrar.numBodega };
    //hacer migracion
    for (let i = 0; i < dataproductos.length; i++) {
      if (dataproductos[i].bodega[0].value === Id) {
        dataproductos[i].bodega[0] = payload;
        axios
          .put(`http://Localhost:178.128.67.247/api/productos/${dataproductos[i]._id}`, {
            nombre: dataproductos[i].nombre,
            area: dataproductos[i].area,
            codigos: dataproductos[i].codigos,
            proveedores: dataproductos[i].proveedores,
            ubicacion: dataproductos[i].ubicacion,
            marca: dataproductos[i].marca,
            bodega: payload,
            precios: dataproductos[i].precios,
            cantidad: dataproductos[i].cantidad,
            descripcion_corta: dataproductos[i].descripcion_corta,
            descripcion_larga: dataproductos[i].descripcion_larga,
            cantidad_minima: dataproductos[i].cantidad_minima,
            fecha_creacion: dataproductos[i].fecha_creacion,
          })
          .then((response) => {
            console.log(response);
            Confirm.open({
              title: '!exito!',
              message: 'Migracion de datos exitosamente',
              onok: () => {},
            });
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
    setModalModificarBodega(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{ maxWidth: '1700px', width: '60%' }}
      >
        <ModalHeader>
          <div>
            <h3>LISTADO DE BODEGAS </h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            {data.map((Bodegas) => {
              console.log(Bodegas);
              return (
                <div onClick={() => llenar(Bodegas)}>
                  <CardBodega
                    numBodega={Bodegas.numBodega}
                    Description={Bodegas.descripcion}
                    Encargado={Bodegas.encargado}
                    CantPasillos={Bodegas.cantPasillos}
                  />
                  <span>‎ ‏‏‎</span>
                </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={props.change}>
            CANCELAR
          </button>
        </ModalFooter>
      </Modal>
      {/* Modal para gestionar bodega especifica */}
      <Modal isOpen={abrir} className="text-center" style={{ maxWidth: '1700px', width: '80%' }}>
        <ModalHeader>
          <div className="row">
            <h3>PRODUCTOS EN BODEGA</h3>
            <div style={{ paddingLeft: '1px' }}>
              <button className="btn btn-danger" onClick={() => migrarBodega()}>
                MIGRAR
              </button>
            </div>

            {/* <Button className="btn btn-danger"> MIGRAR PRODUCTOS</Button> */}
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
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
                </tr>
              </thead>
              <tbody>
                {dataproductos
                  .filter((dataPro) => dataPro.bodega[0].name.includes(bodega))
                  .map((elemento, index) => (
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
                    </tr>
                  ))}
              </tbody>
            </Table>
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={() => recargar()}>
            CANCELAR
          </button>
        </ModalFooter>
      </Modal>
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
              value={seleccionadoPro.codigos[0]}
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
              value={seleccionadoPro.codigos[1]}
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
              value={seleccionadoPro.codigos[2]}
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
              value={seleccionadoPro.codigos[3]}
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
              value={seleccionadoPro.codigos[4]}
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
              value={seleccionadoPro.codigos[5]}
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
              value={seleccionadoPro.codigos[6]}
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
              value={seleccionadoPro.proveedores[0] ? seleccionadoPro.proveedores[0].name : ''}
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
              value={seleccionadoPro.proveedores[1] ? seleccionadoPro.proveedores[1].name : ''}
              // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
              // onChange={manejarCambio}
            />
            <br />
            <label>proveedor 3</label>
            <input
              className="form-control"
              type="text"
              name="Etiqueta"
              value={seleccionadoPro.proveedores[2] ? seleccionadoPro.proveedores[2].name : ''}
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
              value={seleccionadoPro.proveedores[3] ? seleccionadoPro.proveedores[3].name : ''}
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
              value={seleccionadoPro.proveedores[4] ? seleccionadoPro.proveedores[4].name : ''}
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
              value={seleccionadoPro.proveedores[5] ? seleccionadoPro.proveedores[5].name : ''}
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
              value={seleccionadoPro.proveedores[6] ? seleccionadoPro.proveedores[6].name : ''}
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
                value={seleccionadoPro.descripcion_corta}
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
                value={seleccionadoPro.descripcion_larga}
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
              value={seleccionadoPro.precios[0]}
              readOnly
            />
            <br />
            <label>Precio 2</label>
            <input
              className="form-control"
              type="text"
              name="modprecio2"
              id="verprecio2"
              value={seleccionadoPro.precios[1]}
              readOnly
            />
            <br />
            <label>Precio 3</label>
            <input
              className="form-control"
              type="text"
              name="modprecio3"
              id="verprecio3"
              value={seleccionadoPro.precios[2]}
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
      {/* Modal para seleccionar a bodega que se migraran productos */}
      <Modal
        isOpen={modalmigrar}
        className="text-center"
        style={{ maxWidth: '1700px', width: '60%' }}
      >
        <ModalHeader>
          <div>
            <h3>ELIJA BODEGA A DONDE MIGRAR PRODUCTOS </h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            {data.map((Bodegass) => {
              console.log(Bodegass);
              return (
                <div onClick={() => seleccionarAMigrar(Bodegass)}>
                  <CardBodega
                    numBodega={Bodegass.numBodega}
                    Description={Bodegass.descripcion}
                    Encargado={Bodegass.encargado}
                    CantPasillos={Bodegass.cantPasillos}
                  />
                  <span>‎ ‏‏‎</span>
                </div>
              );
            })}
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-danger" onClick={props.change}>
            CANCELAR
          </button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ListarBodegas;
