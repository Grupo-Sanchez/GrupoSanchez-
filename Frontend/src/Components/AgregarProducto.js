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
import SelectSearch from 'react-select-search';
import '../Styles/SearchBarInterfazProductos.css';
import '../Styles/ConfirmStyle.css';
import axios from 'axios';
import { Confirm } from './Confirm';

export default function AgregarProducto(props) {
  const dataApuntes = [];
  const [cod, setcod] = useState('');
  const [cod1, setcod1] = useState('');
  const [cod2, setcod2] = useState('');
  const [cod3, setcod3] = useState('');
  const [cod4, setcod4] = useState('');
  const [cod5, setcod5] = useState('');
  const [cod6, setcod6] = useState('');
  const [marca, setMarca] = useState('');
  const [cod7, setcod7] = useState('');
  const [size, setSize] = useState('1');
  const [size2, setSize2] = useState('2');
  const [size3, setSize3] = useState('3');
  const [size4, setSize4] = useState('4');
  const [size5, setSize5] = useState('5');
  const [size6, setSize6] = useState('6');
  const [size7, setSize7] = useState('7');
  const proveedoresSeleccionados = [];
  const [modalInsertarPrecio, setModalInsertarPrecio] = useState(false);
  const [modalInsertarCodigo, setModalInsertarCodigo] = useState(false);
  const [modalInsertarProveedor, setModalInsertarProveedor] = useState(false);
  const [inputcod2, setinputcod2] = useState(false);
  const [inputcod3, setinputcod3] = useState(false);
  const [inputcod4, setinputcod4] = useState(false);
  const [inputcod5, setinputcod5] = useState(false);
  const [inputcod6, setinputcod6] = useState(false);
  const [inputcod7, setinputcod7] = useState(false);
  const [inputprov2, setinputprov2] = useState(false);
  const [inputprov3, setinputprov3] = useState(false);
  const [inputprov4, setinputprov4] = useState(false);
  const [inputprov5, setinputprov5] = useState(false);
  const [inputprov6, setinputprov6] = useState(false);
  const [inputprov7, setinputprov7] = useState(false);
  const [existe, setExiste] = useState(false);
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
  let [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  let [marcas, setMarcas] = useState([]);
  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/proveedor').then((response) => {
        // setData(response.data);
        const proveedoresDB = response.data;
        const proveedoresagregados = [];
        for (let index = 0; index < proveedoresDB.length; index++) {
          const element = proveedoresDB[index];
          proveedoresagregados.push({
            company: element.company,
            value: element._id,
            agencia: element.agencia,
            name: element.nombre,
            apellidos: element.apellidos,
            genero: element.genero,
            email: element.email,
            telefono: element.telefono,
            direccion1: element.direccion1,
            direccion2: element.direccion2,
            ciudad: element.ciudad,
            departamento: element.departamento,
            codigoPostal: element.codigoPostal,
            pais: element.pais,
            comentario: element.comentario,
            _v: element._v,
          });
        }
        setProveedores(proveedoresagregados);
      });
    };
    const fecthMarcas = async () => {
      await axios.get('http://localhost:3001/api/marcas').then((response) => {
        const marcasobtenidas = response.data;
        const marcasAgregar = [];
        for (let index = 0; index < marcasobtenidas.length; index++) {
          const element = marcasobtenidas[index];
          marcasAgregar.push({
            value: element._id,
            name: element.nombre,
            _v: element._v,
          });
        }
        setMarcas(marcasAgregar);
      });
    };
    const fecthProductos = async () => {
      await axios.get('http://localhost:3001/api/productos').then((response) => {
        setProductos(response.data);
      });
    };
    fecthData();
    fecthProductos();
    fecthMarcas();
  }, []);
  const prueba = async () => {
    seleccionado.proveedores = proveedoresSeleccionados;
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
    Confirm.open({
      title: '',
      message: '¡Producto Agregado!',
      onok: () => {},
    });
  };
  /*
  HandleChange(event){
      this.state.codigos.push();
      this.setState({some:'val',arr:this.state.arr})
  }
  */
  const agregarMarca = (idToSearch) => {
    marcas.filter((item) => {
      if (item.value === idToSearch) {
        seleccionado.marca = item;
      }
      return 0;
    });
  };
  const handleChange2 = (e) => {
    agregarMarca(e);
  };
  const handleOnChange = (value) => {
    for (let index = 0; index < proveedores.length; index++) {
      const element = proveedores[index];
      if (element.value === value) {
        proveedoresSeleccionados.push(element);
        seleccionado.proveedores = proveedoresSeleccionados;
      }
    }
    proveedores = proveedores.filter((item) => item.value !== value);
  };

  function limit() {
    const temp = document.getElementById('cantidad_minima');
    const maxValue = document.getElementById('cantidad').value;
    temp.value = Math.min(maxValue, temp.value);
  }
  const manejarCambio = (e) => {
    const { name, value } = e.target;
    setSeleccionado((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const manejarCambiocant = (e, n) => {
    seleccionado.cantidad = e.target.value;
  };

  const manejarCambiocantmin = (e, n) => {
    const num = document.getElementById('cantidad_minima').value;
    const num2 = document.getElementById('cantidad').value;
    if (num > num2) {
      document.getElementById('cantidad_minima').onchange = limit;
    } else {
      document.getElementById('cantidad').onchange = limit;
    }
    seleccionado.cantidad_minima = e.target.value;
    //document.getElementById('cantidad').min = seleccionado.cantidad_minima;
  };
  const GuardarCodigos = () => {
    seleccionado.codigos = [];
    const duplicates = [];
    if (document.getElementById('cod1').value === '') {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Codigo 1.',
        onok: () => {},
      });
      setinputcod2(false);
      setinputcod3(false);
      setinputcod4(false);
      setinputcod5(false);
      setinputcod6(false);
      setinputcod7(false);
    } else {
      // seleccionado.codigos.push(document.getElementById('cod1').value);
      duplicates.push(document.getElementById('cod1').value);
      setinputcod2(true);
      if (document.getElementById('cod2').value !== '') {
        // seleccionado.codigos.push(document.getElementById('cod2').value);
        setinputcod3(true);
        duplicates.push(document.getElementById('cod2').value);
      }
      if (document.getElementById('cod3').value !== '') {
        // seleccionado.codigos.push(document.getElementById('cod3').value);
        setinputcod4(true);
        duplicates.push(document.getElementById('cod3').value);
      }
      if (document.getElementById('cod4').value !== '') {
        // seleccionado.codigos.push(document.getElementById('cod4').value);
        setinputcod5(true);
        duplicates.push(document.getElementById('cod4').value);
      }
      if (document.getElementById('cod5').value !== '') {
        // seleccionado.codigos.push(document.getElementById('cod5').value);
        setinputcod6(true);
        duplicates.push(document.getElementById('cod5').value);
      }
      if (document.getElementById('cod6').value !== '') {
        // seleccionado.codigos.push(document.getElementById('cod6').value);
        setinputcod7(true);
        duplicates.push(document.getElementById('cod6').value);
      }
      if (document.getElementById('cod7').value !== '') {
        // seleccionado.codigos.push(cod7);
        duplicates.push(document.getElementById('cod7').value);
      }
      let entra = false;
      for (let i = 0; i < duplicates.length; i++) {
        for (let j = 0; j < duplicates.length; j++) {
          if (i !== j) {
            if (duplicates[i] === duplicates[j]) {
              entra = true;
              break;
            }
          }
        }
      }
      let yaesta = false;
      let mensaje = [];
      let codigos2 = [];
      let mansajenot = '';
      for (let index = 0; index < productos.length; index++) {
        const element = productos[index];
        for (let p = 0; p < element.codigos.length; p++) {
          const element2 = element.codigos[p];
          for (let j = 0; j < duplicates.length; j++) {
            const element3 = duplicates[j];
            if (element2 === element3) {
              mensaje.push(element.nombre);
              codigos2.push(element2);
              yaesta = true;
            }
          }
        }
      }
      let codigosUnicos = codigos2.filter(
        (ele, ind) => ind === codigos2.findIndex((elem) => elem === ele),
      );
      let productosUnicos = mensaje.filter(
        (ele, ind) => ind === mensaje.findIndex((elem) => elem === ele),
      );
      let codString = '';
      let prodString = '';
      for (let k = 0; k < codigosUnicos.length; k++) {
        const element = codigosUnicos[k];
        codString += ` ${element},`;
      }
      for (let k = 0; k < productosUnicos.length; k++) {
        const element = productosUnicos[k];
        prodString += ` ${element},`;
      }
      if (codigosUnicos.length !== 1) {
        mansajenot = `Los codigos ${codString.substring(
          0,
          codString.length - 1,
        )} ingresados ya se encuentra en los productos ${prodString.substring(
          0,
          prodString.length - 1,
        )}.`;
      } else {
        mansajenot = `El codigo ${codString.substring(
          0,
          codString.length - 1,
        )} ingresado ya se encuentra en los productos ${prodString.substring(
          0,
          prodString.length - 1,
        )}.`;
      }
      if (entra) {
        Confirm.open({
          title: 'Error',
          message: 'Existen códigos duplicados, verifique e intente nuevamente.',
          onok: () => {},
        });
        entra = false;
      } else if (yaesta) {
        Confirm.open({
          title: 'Error',
          message: mansajenot,
          onok: () => {},
        });
      } else {
        seleccionado.codigos = duplicates;
        setModalInsertarCodigo(false);
      }
    }
  };
  const insertarCodigos = () => {
    setModalInsertarCodigo(true);
  };
  const GuardarPrecio = () => {
    seleccionado.precio = [];
    let precio1 = '';
    let precio2 = '';
    let precio3 = '';
    if (document.getElementById('precio1').value != null) {
      precio1 = document.getElementById('precio1').value;
    }
    if (document.getElementById('precio2').value != null) {
      precio2 = document.getElementById('precio2').value;
    }
    if (document.getElementById('precio3').value != null) {
      precio3 = document.getElementById('precio3').value;
    }
    if (precio1.toString().trim() === '') {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Precio 1.',
        onok: () => {},
      });
    } else {
      seleccionado.precio.push(precio1);
      if (precio2.toString().trim() !== '') {
        seleccionado.precio.push(precio2);
      }
      if (precio3.toString().trim() !== '') {
        seleccionado.precio.push(precio3);
      }
      setModalInsertarPrecio(false);
    }
    /*
    seleccionado.precio.push(document.getElementById('precio1').value);
    seleccionado.precio.push(document.getElementById('precio2').value);
    seleccionado.precio.push(document.getElementById('precio3').value);
    setModalInsertarPrecio(false);
    alert(seleccionado.precio[0]);
    */
  };
  const GuardarProveedores = () => {
    if (size === '1') {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Proveedor 1.',
        onok: () => {},
      });
    } else {
      seleccionado.proveedores = proveedoresSeleccionados;
      setModalInsertarProveedor(false);
    }
  };
  const maxLengthCheck = (object) => {
    if (object.target.value.length > object.target.maxLength) {
      object.target.value = object.target.value.slice(0, object.target.maxLength);
    }
  };
  const handleChange = (e, num) => {
    if (num === 2) {
      setinputcod2(e.target.value);
      if (inputcod2 === false) {
        console.log('entra');
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
  const handleChangeProv = (e, num) => {
    if (num === 2) {
      setinputprov2(e.target.value);
      setinputprov3(false);
      setinputprov4(false);
      setinputprov5(false);
      setinputprov6(false);
      setinputprov7(false);
    } else if (num === 3) {
      setinputprov3(e.target.value);
      setinputprov4(false);
    } else if (num === 4) {
      setinputprov4(e.target.value);
      setinputprov5(false);
    } else if (num === 5) {
      setinputprov5(e.target.value);
      setinputprov6(false);
    } else if (num === 6) {
      setinputprov6(e.target.value);
      setinputprov7(false);
    } else if (num === 7) {
      setinputprov7(e.target.value);
    }
  };
  const insertar = () => {
    const valorInsertar = seleccionado;
    const dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    seleccionado.descripcion_corta = document.getElementById('descripcion1').value;
    seleccionado.descripcion_larga = document.getElementById('descripcion2').value;
    if (
      seleccionado.codigos.length > 0 &&
      seleccionado.proveedores.length > 0 &&
      seleccionado.precio.length > 0 &&
      seleccionado.nombre.toString().trim() !== '' &&
      seleccionado.area.toString().trim() !== '' &&
      seleccionado.descripcion_corta.toString().trim() !== ''
    ) {
      prueba();
      props.change();
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Al parecer tiene algun campo del producto incompleto/vacio.',
        onok: () => {},
      });
    }
  };
  const cerrarModalAgregarCodigos = () => {
    setinputcod2(false);
    setinputcod3(false);
    setinputcod4(false);
    setinputcod5(false);
    setinputcod6(false);
    setinputcod7(false);
    if (seleccionado.codigos && seleccionado.codigos.length) {
      if (document.getElementById('cod1').value !== '') {
        setinputcod2(true);
      }
      if (document.getElementById('cod2').value !== '') {
        setinputcod3(true);
      }
      if (document.getElementById('cod3').value !== '') {
        setinputcod4(true);
      }
      if (document.getElementById('cod4').value !== '') {
        setinputcod5(true);
      }
      if (document.getElementById('cod5').value !== '') {
        setinputcod6(true);
      }
      if (document.getElementById('cod6').value !== '') {
        setinputcod6(true);
      }
      if (document.getElementById('cod7').value !== '') {
        setinputcod7(true);
      }
    }
    setModalInsertarCodigo(false);
  };
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  const cerrarModalAgregarProducto = () => {
    props.change();
    seleccionado.nombre = '';
    seleccionado.area = '';
    seleccionado.ubicacion = '';
  };
  const provseleccionados = [];
  const proveedorSeleccionado = (provSel) => {
    if (document.getElementById('prov1').value !== '') {
      //alert(document.getElementById('prov1').value);
      seleccionado.proveedores.push(document.getElementById('prov1').value);
    }
  };
  const options = [
    { value: 's', name: 'Small' },
    { value: 'm', name: 'Medium' },
    { value: 'l', name: 'Large' },
  ];
  return (
    <div id="target">
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
      >
        <ModalHeader>
          <div>
            <h3>AGREGAR PRODUCTOS</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div>
            <Button onClick={() => insertarCodigos()} color="primary">
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
          <Modal
            style={{
              height: '95vh',
              'overflow-y': 'auto',
              top: '20px',
              maxWidth: '550px',
            }}
            isOpen={modalInsertarCodigo}
          >
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
                  value={seleccionado.codigos[0]}
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
                  value={seleccionado.codigos[1]}
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
                  value={seleccionado.codigos[2]}
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
                  value={seleccionado.codigos[3]}
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
                  value={seleccionado.codigos[4]}
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
                  value={seleccionado.codigos[5]}
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
                  value={seleccionado.codigos[6]}
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
              <Button
                onClick={() =>
                  Confirm.open({
                    title: 'Insertar Codigos',
                    message: '¿Esta seguro de que quiere insertar estos codigos?',
                    onok: () => {
                      GuardarCodigos();
                    },
                  })
                }
                color="primary"
              >
                Insertar
              </Button>
              <Button onClick={() => cerrarModalAgregarCodigos()} color="danger">
                Cancelar
              </Button>
            </ModalFooter>
          </Modal>
          <Modal
            style={{
              height: '95vh',
              'overflow-y': 'auto',
              top: '20px',
              maxWidth: '550px',
            }}
            isOpen={modalInsertarProveedor}
          >
            <ModalHeader>
              <div>
                <h3>Agregar Proveedores</h3>
              </div>
            </ModalHeader>
            <ModalBody>
              <div className="form-group">
                <label>Proveedor 1</label>
                <SelectSearch
                  search
                  onChange={setSize}
                  id="prov1"
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size3 &&
                      item.value !== size4 &&
                      item.value !== size5 &&
                      item.value !== size6 &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size)}
                  value={size}
                />
                <br />
                <label>Proveedor 2</label>
                <SelectSearch
                  search
                  id="prov2"
                  onChange={setSize2}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size &&
                      item.value !== size3 &&
                      item.value !== size4 &&
                      item.value !== size5 &&
                      item.value !== size6 &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size2)}
                  value={size2}
                />
                <br />
                <label>Proveedor 3</label>
                <SelectSearch
                  search
                  onChange={setSize3}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size &&
                      item.value !== size4 &&
                      item.value !== size5 &&
                      item.value !== size6 &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size3)}
                  value={size3}
                />
                <br />
                <label>Proveedor 4</label>
                <SelectSearch
                  search
                  onChange={setSize4}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size3 &&
                      item.value !== size &&
                      item.value !== size5 &&
                      item.value !== size6 &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size4)}
                  value={size4}
                />
                <br />
                <label>Proveedor 5</label>
                <SelectSearch
                  search
                  onChange={setSize5}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size3 &&
                      item.value !== size4 &&
                      item.value !== size &&
                      item.value !== size6 &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size5)}
                  value={size5}
                />
                <br />
                <label>Proveedor 6</label>
                <SelectSearch
                  search
                  onChange={setSize6}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size3 &&
                      item.value !== size4 &&
                      item.value !== size5 &&
                      item.value !== size &&
                      item.value !== size7,
                  )}
                  onClick={handleOnChange(size6)}
                  value={size6}
                />
                <br />
                <label>Proveedor 7</label>
                <SelectSearch
                  search
                  onChange={setSize7}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores.filter(
                    (item) =>
                      item.value !== size2 &&
                      item.value !== size3 &&
                      item.value !== size4 &&
                      item.value !== size5 &&
                      item.value !== size6 &&
                      item.value !== size,
                  )}
                  onClick={handleOnChange(size7)}
                  value={size7}
                />
                <br />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                onClick={() =>
                  Confirm.open({
                    title: 'Insertar Proveedores',
                    message: '¿Esta seguro de que quiere insertar estos Proveedores?',
                    onok: () => {
                      GuardarProveedores();
                    },
                  })
                }
              >
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
            <AvForm>
              <AvField
                className="form-control"
                type="text"
                name="area"
                errorMessage="Campo Obligatorio"
                validate={{
                  required: { value: true },
                  minLength: { value: 1 },
                }}
                value={seleccionado ? seleccionado.area : ''}
                onChange={manejarCambio}
              />
            </AvForm>
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
            <h3 align="center">Marca</h3>
            <SelectSearch
              search
              placeholder="Encuentre la Marca del Producto"
              required
              autoComplete
              options={marcas}
              value={marca}
              onChange={(e) => handleChange2(e)}
              // options={this.state.productosEnBodega}
              // onChange={this.handleChange}
            />
          </div>
          <br></br>
          <Button onClick={() => setModalInsertarPrecio(true)} color="primary">
            Precios
          </Button>
          <div>
            <br />
            <h3>Cantidad</h3>
            <input
              className="form-control"
              type="number"
              id="cantidad"
              min={
                document.getElementById('cantidad_minima')
                  ? document.getElementById('cantidad_minima').value
                  : 2
              }
              onChange={(e) => manejarCambiocant(e, 0)}
            />
          </div>
          <div>
            <h3>Cantidad Mínima</h3>
            <input
              className="form-control"
              type="number"
              id="cantidad_minima"
              /*max={
                document.getElementById('cantidad') ? document.getElementById('cantidad').value : 0
              }*/
              min={1}
              onChange={(e) => manejarCambiocantmin(e, 1)}
            />
          </div>
          <div>
            <div>
              <h3>Descripción corta</h3>
              <AvForm>
                <FormGroup class="style">
                  <Label for="exampleText"></Label>
                  <AvField
                    type="textarea"
                    name="text"
                    id="descripcion1"
                    errorMessage="Campo Obligatorio"
                    validate={{
                      required: { value: true },
                      minLength: { value: 1 },
                    }}
                    value={seleccionado ? seleccionado.descripcion_corta : ''}
                    onChange={manejarCambio}
                  />
                </FormGroup>
              </AvForm>
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
          <button
            className="btn btn-primary"
            onClick={() =>
              Confirm.open({
                title: 'Insertar Producto',
                message: '¿Esta seguro de que quiere insertar este producto?',
                onok: () => {
                  insertar();
                },
              })
            }
          >
            Agregar Producto
          </button>
          <button className="btn btn-danger" onClick={cerrarModalAgregarProducto}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Modal
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
        isOpen={modalInsertarPrecio}
      >
        <ModalHeader>
          <div className="text-center">
            <h3>Agregar Precios</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Precio 1</label>
            <AvForm>
              <AvField
                className="form-control"
                type="Number"
                name="precio1"
                id="precio1"
                errorMessage="Este Campo es Obligatorio"
                validate={{
                  required: { value: true },
                }}
                value={seleccionado.precio[0] ? seleccionado.precio[0] : 0}
              />

              <br />
              <label>Precio 2</label>
              <AvField
                className="form-control"
                type="Number"
                name="Fecha"
                name="precio2"
                id="precio2"
                validate={{
                  required: { value: false },
                }}
                value={seleccionado.precio[1] ? seleccionado.precio[1] : ''}
                // value={elementoSeleccionado ? elementoSeleccionado.Fecha : ''}
                // onChange={manejarCambio}
              />
              <br />
              <label>Precio 3</label>
              <AvField
                className="form-control"
                type="Number"
                name="Etiqueta"
                name="precio3"
                id="precio3"
                validate={{
                  required: { value: false },
                }}
                value={seleccionado.precio[2] ? seleccionado.precio[2] : ''}
                // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                // onChange={manejarCambio}
              />
            </AvForm>
          </div>
        </ModalBody>
        <ModalFooter>
          <button
            className="btn btn-primary"
            onClick={() =>
              Confirm.open({
                title: 'Insertar Precios',
                message: '¿Esta seguro de que quiere insertar estos precios?',
                onok: () => {
                  GuardarPrecio();
                },
              })
            }
          >
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
