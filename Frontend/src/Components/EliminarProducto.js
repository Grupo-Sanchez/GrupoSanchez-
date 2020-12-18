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
import SelectSearch from 'react-select-search';
import axios from 'axios';
import AvField from 'availity-reactstrap-validation/lib/AvField';
import AvForm from 'availity-reactstrap-validation/lib/AvForm';
import imagePath from '../Icons/lupa1.jpeg';
import { Confirm } from './Confirm';

export default function EliminarProducto(props) {
  const dataApuntes = [];
  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
    { name: 'patito', value: 'patito' },
  ];
  const [size, setSize] = useState('1');
  const [size2, setSize2] = useState('2');
  const [size3, setSize3] = useState('3');
  const [size4, setSize4] = useState('4');
  const [size5, setSize5] = useState('5');
  const [size6, setSize6] = useState('6');
  const [size7, setSize7] = useState('7');
  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalModificar, setModalModificar] = useState(false);
  const [ModalModificarCodigos, setModalModificarCodigos] = useState(false);
  const [ModalModificarProveedores, setModalModificarProveedores] = useState(false);
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [ModalVerPrecios, setModalVerPrecios] = useState(false);
  const [inputcod2, setinputcod2] = useState(false);
  const [inputcod3, setinputcod3] = useState(false);
  const [inputcod4, setinputcod4] = useState(false);
  const [inputcod5, setinputcod5] = useState(false);
  const [inputcod6, setinputcod6] = useState(false);
  const [inputcod7, setinputcod7] = useState(false);
  const [data, setData] = useState(dataApuntes);
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
  const [cantsel, setCantsel] = useState(seleccionado.cantidad);
  const [cantminsel, setCantminsel] = useState(seleccionado.cantidad_minima);
  let [proveedores, setProveedores] = useState([]);
  let [marcas, setMarcas] = useState([]);
  const fecthData = async () => {
    await axios.get('http://localhost:3001/api/productos').then((response) => {
      setData(response.data);
    });
    // alert(JSON.stringify(data));
  };
  const fecthProveedores = async () => {
    await axios.get('http://localhost:3001/api/proveedor').then((response) => {
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
  useEffect(() => {
    fecthProveedores();
    fecthData();
    fecthMarcas();
  }, [data]);
  const proveedoresSeleccionados = [];
  const handleOnChange = (value) => {
    for (let index = 0; index < proveedores.length; index++) {
      const element = proveedores[index];
      if (element.value === value) {
        proveedoresSeleccionados.push(element);
      }
    }
    proveedores = proveedores.filter((item) => item.value !== value);
    console.log(JSON.stringify(proveedores));
  };
  /*
  Metodo para fuardar codigos del ModalModificar
   */

  const handleChange = (e, num) => {
    if (num === 2) {
      setinputcod2(e.target.value);
      setinputcod3(false);
      setinputcod4(false);
      setinputcod5(false);
      setinputcod6(false);
      setinputcod7(false);
    } else if (num === 3 && document.getElementById('modcod4').value === null) {
      setinputcod3(e.target.value);
      setinputcod4(false);
    } else if (num === 4 && document.getElementById('modcod5').value === null) {
      setinputcod4(e.target.value);
      setinputcod5(false);
    } else if (num === 5 && document.getElementById('modcod6').value === null) {
      setinputcod5(e.target.value);
      setinputcod6(false);
    } else if (num === 6 && document.getElementById('modcod7').value === null) {
      setinputcod6(e.target.value);
      setinputcod7(false);
    } else if (num === 7) {
      setinputcod7(e.target.value);
    }
  };

  /* Metodo para fuardar codigos del ModalModificar */
  const GuardarProveedores = () => {
    if (document.getElementById('modprov1') === null) {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Proveedor 1.',
        onok: () => {},
      });
    } else {
      seleccionado.proveedores[0] = document.getElementById('modprov1').value;
      seleccionado.proveedores[1] = document.getElementById('modprov2').value;
      seleccionado.proveedores[2] = document.getElementById('modprov3').value;
      seleccionado.proveedores[3] = document.getElementById('modprov4').value;
      seleccionado.proveedores[4] = document.getElementById('modprov5').value;
      seleccionado.proveedores[5] = document.getElementById('modprov6').value;
      seleccionado.proveedores[6] = document.getElementById('modprov7').value;
      setModalModificarProveedores(false);
    }
  };
  const GuardarPrecio = () => {
    seleccionado.precios[0] = document.getElementById('modprecio1').value;
    seleccionado.precios[1] = document.getElementById('modprecio2').value;
    seleccionado.precios[2] = document.getElementById('modprecio3').value;
    setModalModificarPrecios(false);
  };
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/productos/${memberId}`);
  };
  const eliminar = (i) => {
    /*Confirm.open({
      title: '',
      message: 'Producto Eliminado Exitosamente',
      onok: () => {},
    });*/
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
  };
  const regex = /^[ña-zA-Z0-9\u00E0-\u00FC-\s]+$/;
  const isAlphanumeric = require('is-alphanumeric');
  const [marcaSel, setMarcaSel] = useState([]);
  const updateItem = async (Id) => {
    for (let index = 0; index < marcas.length; index++) {
      const element = marcas[index];
      if (element.value === marcaSel) {
        for (let i = 0; i < data.length; i++) {
          const element2 = data[i];
          if (element2._id === Id) {
            seleccionado.marca = element;
            break;
          }
        }
      }
    }
    if (
      seleccionado.codigos.length > 0 &&
      seleccionado.proveedores.length > 0 &&
      seleccionado.precios.length > 0 &&
      seleccionado.nombre.toString().trim() !== '' &&
      seleccionado.area.toString().trim() !== '' &&
      seleccionado.descripcion_corta.toString().trim() !== ''
    ) {
      if (
        regex.test(document.getElementById('modnombre').value) &&
        regex.test(document.getElementById('modarea').value)
        //isAlphanumeric(document.getElementById('modnombre').value) &&
        // isAlphanumeric(document.getElementById('modarea').value)
      ) {
        setModalModificar(false);
        axios
          .put(`http://localhost:3001/api/productos/${Id}`, {
            nombre: document.getElementById('modnombre').value,
            area: document.getElementById('modarea').value,
            codigos: seleccionado.codigos,
            proveedores: seleccionado.proveedores,
            ubicacion: document.getElementById('modubicacion').value,
            marca: seleccionado.marca,
            precios: seleccionado.precios,
            cantidad: document.getElementById('modcantidad').value,
            descripcion_corta: document.getElementById('descripcion1').value,
            descripcion_larga: document.getElementById('descripcion2').value,
            cantidad_minima: document.getElementById('modcantidad_minima').value,
          })
          .then(
            Confirm.open({
              title: '',
              message: `Producto ${seleccionado.nombre} modificado exitosamente`,
              onok: () => {},
            }),
          )
          .catch((error) => {
            console.log(error);
          });
      } else {
        Confirm.open({
          title: 'Error',
          message: 'Al parecer tiene algun campo del producto con simbolos invalidos.',
          onok: () => {},
        });
      }
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Al parecer tiene algun campo del producto incompleto/vacio.',
        onok: () => {},
      });
    }
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
  const agregarMarca = (idToSearch) => {
    marcas.filter((item) => {
      if (item.value === idToSearch) {
        setMarcaSel(item.value);
        //alert(marcaSel);
      }
      return 0;
    });
  };
  const handleChange2 = (e) => {
    agregarMarca(e);
    // alert('sadf');
  };
  const verificarCodigo = () => {
    /*
    if (seleccionado.codigos[0] !== null) {
      setinputcod2(true);
    }
    if (seleccionado.codigos[1] !== null) {
      setinputcod3(true);
    }
    if (seleccionado.codigos[2] !== null) {
      setinputcod4(true);
    }
    if (seleccionado.codigos[3] !== null) {
      setinputcod5(true);
    }
    if (seleccionado.codigos[4] !== null) {
      setinputcod6(true);
    }
    if (seleccionado.codigos[5] !== null) {
      setinputcod7(true);
    }
    */
    /*if (document.getElementById('modcod2').value() != null) {
      seleccionado.codigos;
    }
    */
  };
  /*const colocarValorMarca = () => {
    alert(marca);
    for (let index = 0; index < options.length; index++) {
      const element = options[index];
      if (element.name === marca) {
        return marca;
      }
    }
    return 0;
  };*/
  const [nombreProducto, setNombre] = useState('');
  const Modificar = (element) => {
    setSeleccionado(element);
    setCantminsel(element.cantidad_minima);
    setCantsel(element.cantidad);
    setMarcaSel(element.marca[0].value);
    setNombre(element.nombre);
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
  const GuardarCodigos = (i) => {
    const array = [];
    if (
      isAlphanumeric(codigo1) &&
      isAlphanumeric(codigo2) &&
      isAlphanumeric(codigo3) &&
      isAlphanumeric(codigo4) &&
      isAlphanumeric(codigo5) &&
      isAlphanumeric(codigo6) &&
      isAlphanumeric(codigo7)
    ) {
      if (i.codigos[0] === '') {
        Confirm.open({
          title: 'Error',
          message: `El Codigo 1 de ${seleccionado.nombre} esta vacio`,
          onok: () => {},
        });
      } else {
        array.push(codigo1);
      }
      if (i.codigos[1] !== '') {
        array.push(codigo2);
      }
      if (i.codigos[2] !== '') {
        array.push(codigo3);
      }
      if (i.codigos[3] !== '') {
        array.push(codigo4);
      }
      if (i.codigos[4] !== '') {
        array.push(codigo5);
      }
      if (i.codigos[5] !== '') {
        array.push(codigo6);
      }
      if (i.codigos[6] !== '') {
        array.push(codigo7);
      }
      let entra = false;
      for (let ind = 0; ind < array.length; ind++) {
        for (let j = 0; j < array.length; j++) {
          if (ind !== j) {
            if (array[ind] === array[j]) {
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
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        if (element._id !== seleccionado._id) {
          for (let p = 0; p < element.codigos.length; p++) {
            const element2 = element.codigos[p];
            for (let j = 0; j < array.length; j++) {
              const element3 = array[j];
              if (element2 === element3) {
                mensaje.push(element.nombre);
                codigos2.push(element2);
                yaesta = true;
              }
            }
          }
        }
      }
      //const codigosUnicos = new Set(codigos2);
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
          onok: () => {
            setCodigo1(seleccionado.codigos[0]);
            setCodigo2(seleccionado.codigos[1]);
            setCodigo3(seleccionado.codigos[2]);
            setCodigo4(seleccionado.codigos[3]);
            setCodigo5(seleccionado.codigos[4]);
            setCodigo6(seleccionado.codigos[5]);
            setCodigo7(seleccionado.codigos[6]);
          },
        });
      } else {
        seleccionado.codigos = [];
        seleccionado.codigos = array;
        setModalModificarCodigos(false);
        Confirm.open({
          title: '',
          message: 'Códigos Agregados Exitosamente',
          onok: () => {},
        });
      }
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Los Codigos solo pueden ser Alfanumericos',
        onok: () => {},
      });
    }
  };
  const [proveedor1, setproveedor1] = useState('');
  const [proveedor2, setproveedor2] = useState('');
  const [proveedor3, setproveedor3] = useState('');
  const [proveedor4, setproveedor4] = useState('');
  const [proveedor5, setproveedor5] = useState('');
  const [proveedor6, setproveedor6] = useState('');
  const [proveedor7, setproveedor7] = useState('');

  const changeProveedor = () => {
    if (seleccionado.proveedores[0] !== undefined) {
      setSize(seleccionado.proveedores[0].value);
    }
    if (seleccionado.proveedores[1] !== undefined) {
      setSize2(seleccionado.proveedores[1].value);
    }
    if (seleccionado.proveedores[2] !== undefined) {
      setSize3(seleccionado.proveedores[2].value);
    }
    if (seleccionado.proveedores[3] !== undefined) {
      setSize4(seleccionado.proveedores[3].value);
    }
    if (seleccionado.proveedores[4] !== undefined) {
      setSize5(seleccionado.proveedores[4].value);
    }
    if (seleccionado.proveedores[5] !== undefined) {
      setSize6(seleccionado.proveedores[5].value);
    }
    if (seleccionado.proveedores[6] !== undefined) {
      setSize7(seleccionado.proveedores[6].value);
    }
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
  function limit() {
    const temp = document.getElementById('modcantidad_minima');
    const maxValue = document.getElementById('modcantidad').value;
    temp.value = Math.min(maxValue, temp.value);
  }
  const manejarCambiocant = (e, n) => {
    setCantsel(e.target.value);
  };

  const manejarCambiocantmin = (e, n) => {
    const num = document.getElementById('modcantidad_minima').value;
    const num2 = document.getElementById('modcantidad').value;
    if (num > num2) {
      document.getElementById('modcantidad_minima').onchange = limit;
      // seleccionado.cantidad_minima = e.target.value;
    } else {
      document.getElementById('modcantidad').onchange = limit;
      //seleccionado.cantidad_minima = e.target.value;
    }
    setCantminsel(e.target.value);
    //document.getElementById('cantidad').min = seleccionado.cantidad_minima;
  };
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
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
                <td>{elemento.marca[0].name}</td>
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
                  <Button
                    onClick={() =>
                      Confirm.open({
                        title: 'Eliminar Producto',
                        message: `Esta seguro de que quiere eliminar el Producto ${elemento.nombre}?`,
                        onok: () => {
                          eliminar(elemento._id);
                        },
                      })
                    }
                    color="danger"
                  >
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
            maxWidth: '550px',
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
            <Modal
              style={{
                height: '95vh',
                'overflow-y': 'auto',
                top: '20px',
                maxWidth: '550px',
              }}
              isOpen={ModalModificarCodigos}
            >
              <ModalHeader>
                <div className="text-center">
                  <h3>Modificar Códigos</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <AvForm>
                    <label>Codigo 1</label>
                    <AvField
                      className="form-control"
                      type="text"
                      name="mcodigo1"
                      id="mcod1"
                      // placeholder = {seleccionado.codigos[0]}
                      value={codigo1}
                      required
                      errorMessage="Este codigo es requerido"
                      validate={{
                        required: { value: true },
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onKeyDown={handleKeyDown}
                      // onClick={verificarCodigo()}
                      onChange={(event) => setCodigo1(event.target.value)}
                      //onChange={(e) => handleChange(e, 2)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 2</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo2"
                      id="modcod2"
                      value={codigo2}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onChange={(event) => setCodigo2(event.target.value)}
                      onKeyDown={handleKeyDown}
                      // disabled={!inputcod2}
                      // onChange={(e) => handleChange(e, 3)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 3</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo3"
                      id="modcod3"
                      value={codigo3}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onChange={(event) => setCodigo3(event.target.value)}
                      onKeyDown={handleKeyDown}
                      // disabled={!inputcod3}
                      // onChange={(e) => handleChange(e, 4)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 4</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo4"
                      id="modcod4"
                      value={codigo4}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onChange={(event) => setCodigo4(event.target.value)}
                      onKeyDown={handleKeyDown}
                      // disabled={!inputcod4}
                      // onChange={(e) => handleChange(e, 5)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 5</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo5"
                      id="modcod5"
                      value={codigo5}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onChange={(event) => setCodigo5(event.target.value)}
                      onKeyDown={handleKeyDown}
                      // disabled={!inputcod5}
                      // onChange={(e) => handleChange(e, 6)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 6</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo6"
                      id="modcod6"
                      value={codigo6}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onChange={(event) => setCodigo6(event.target.value)}
                      onKeyDown={handleKeyDown}
                      // disabled={!inputcod6}
                      // onChange={(e) => handleChange(e, 7)}
                    />
                  </AvForm>
                  <br />
                  <label>Codigo 7</label>
                  <AvForm>
                    <AvField
                      className="form-control"
                      type="text"
                      name="modcodigo7"
                      id="modcod7"
                      value={codigo7}
                      validate={{
                        pattern: { value: '^[A-Za-z0-9]+$' },
                        minLength: { value: 1 },
                      }}
                      onKeyDown={handleKeyDown}
                      onChange={(event) => setCodigo7(event.target.value)}
                      // disabled={!inputcod7}
                    />
                  </AvForm>
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    Confirm.open({
                      title: 'Modificar Codigos',
                      message: 'Esta seguro de que quiere modificar estos codigos?',
                      onok: () => {
                        GuardarCodigos(seleccionado);
                      },
                    })
                  }
                >
                  Modificar Código
                </button>
                <button className="btn btn-danger" onClick={() => setModalModificarCodigos(false)}>
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
              isOpen={ModalModificarProveedores}
            >
              <ModalHeader>
                <div>
                  <h3>Modificar Proveedores</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div className="form-group">
                  <label>Proveedor 1</label>
                  <SelectSearch
                    search
                    required
                    autoComplete
                    onChange={setSize}
                    options={proveedores.filter(
                      (item) =>
                        item.value !== size2 &&
                        item.value !== size3 &&
                        item.value !== size4 &&
                        item.value !== size5 &&
                        item.value !== size6 &&
                        item.value !== size7,
                    )}
                    placeholder={
                      seleccionado.proveedores[0]
                        ? seleccionado.proveedores[0].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    onClick={handleOnChange(size)}
                    value={size}
                  />
                  <br />
                  <label>Proveedor 2</label>
                  <SelectSearch
                    search
                    required
                    autoComplete
                    onChange={setSize2}
                    options={proveedores.filter(
                      (item) =>
                        item.value !== size &&
                        item.value !== size3 &&
                        item.value !== size4 &&
                        item.value !== size5 &&
                        item.value !== size6 &&
                        item.value !== size7,
                    )}
                    placeholder={
                      seleccionado.proveedores[1]
                        ? seleccionado.proveedores[1].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size2}
                    onClick={handleOnChange(size2)}
                  />
                  <br />
                  <label>Proveedor 3</label>
                  <SelectSearch
                    search
                    required
                    autoComplete
                    onChange={setSize3}
                    options={proveedores.filter(
                      (item) =>
                        item.value !== size2 &&
                        item.value !== size &&
                        item.value !== size4 &&
                        item.value !== size5 &&
                        item.value !== size6 &&
                        item.value !== size7,
                    )}
                    placeholder={
                      seleccionado.proveedores[2]
                        ? seleccionado.proveedores[2].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size3}
                    onClick={handleOnChange(size3)}
                  />
                  <br />
                  <label>Proveedor 4</label>
                  <SelectSearch
                    search
                    required
                    onChange={setSize4}
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
                    placeholder={
                      seleccionado.proveedores[3]
                        ? seleccionado.proveedores[3].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size4}
                    onClick={handleOnChange(size4)}
                  />
                  <br />
                  <label>Proveedor 5</label>
                  <SelectSearch
                    search
                    required
                    onChange={setSize5}
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
                    placeholder={
                      seleccionado.proveedores[4]
                        ? seleccionado.proveedores[4].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size5}
                    onClick={handleOnChange(size5)}
                  />
                  <br />
                  <label>Proveedor 6</label>
                  <SelectSearch
                    search
                    onChange={setSize6}
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
                    placeholder={
                      seleccionado.proveedores[5]
                        ? seleccionado.proveedores[5].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size6}
                    onClick={handleOnChange(size6)}
                  />
                  <br />
                  <label>Proveedor 7</label>
                  <SelectSearch
                    search
                    required
                    onChange={setSize7}
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
                    placeholder={
                      seleccionado.proveedores[6]
                        ? seleccionado.proveedores[6].name
                        : 'Encuentre el Proveedor del Producto'
                    }
                    value={size7}
                    onClick={handleOnChange(size7)}
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
              <AvForm>
                <h3>Nombre</h3>
                <AvField
                  //className="form-control"
                  type="text"
                  name="nombre"
                  id="modnombre"
                  value={seleccionado ? seleccionado.nombre : ''}
                  errorMessage="Nombre Inválido"
                  validate={{
                    required: { value: true },
                    pattern: { value: regex },
                    minLength: { value: 1 },
                  }}
                  onChange={(e) => manejarCambio(e)}
                />
              </AvForm>
            </div>
            <div>
              <AvForm>
                <h3>Área</h3>
                <AvField
                  className="form-control"
                  type="text"
                  name="area"
                  id="modarea"
                  errorMessage="Campo Obligatorio"
                  validate={{
                    required: { value: true },
                    pattern: { value: regex },
                    minLength: { value: 1 },
                  }}
                  value={seleccionado ? seleccionado.area : ''}
                  onChange={(e) => manejarCambio(e)}
                />
              </AvForm>
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
              <SelectSearch
                search
                /*placeholder={
                  seleccionado.marca[0]
                    ? seleccionado.marca[0].name
                    : 'Encuentre el Marca del Producto'
                }*/
                options={marcas}
                value={marcaSel}
                //onChange={setMarcaSel}
                onChange={(e) => handleChange2(e)}
              />
              <br />
            </div>
            <Button onClick={() => changePrecio()} color="primary">
              Precios
            </Button>
            <div>
              <br />
              <div>
                <h3>Cantidad</h3>
              </div>
              <input
                className="form-control"
                type="number"
                id="modcantidad"
                //placeholder={seleccionado.cantidad}
                min={cantminsel}
                value={cantsel}
                onChange={(e) => manejarCambiocant(e, 0)}
              />
            </div>
            <div>
              <h3>Cantidad Mínima</h3>
              <input
                className="form-control"
                type="number"
                id="modcantidad_minima"
                //placeholder={seleccionado.cantidad_minima}
                max={cantsel}
                value={cantminsel}
                //min={seleccionado.cantidad_minima}
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
            <button
              className="btn btn-primary"
              onClick={() =>
                Confirm.open({
                  title: 'Guardar Cambios',
                  message: `Esta seguro de que quiere modificar la/el ${nombreProducto}?`,
                  onok: () => {
                    updateItem(seleccionado._id);
                  },
                })
              }
            >
              Guardar Cambios
            </button>
            <button className="btn btn-danger" onClick={() => setModalModificar(false)}>
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
          isOpen={ModalModificarPrecios}
        >
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
            <button
              className="btn btn-primary"
              onClick={() =>
                Confirm.open({
                  title: 'Modificar Precios',
                  message: 'Esta seguro de que quiere modificar estos precios?',
                  onok: () => {
                    GuardarPrecio();
                  },
                })
              }
            >
              Modificar Precio
            </button>
            <button className="btn btn-danger" onClick={() => setModalModificarPrecios(false)}>
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <Modal
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
        isOpen={modalVerCodigos}
      >
        <ModalHeader>
          <div className="text-center">
            <h3>Codigos de {seleccionado.nombre}</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Codigo 1</label>
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
            <label>Codigo 2</label>
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
            <label>Codigo 3</label>
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
            <label>Codigo 4</label>
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
            <label>Codigo 5</label>
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
            <label>Codigo 6</label>
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
            <label>Codigo 7</label>
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
          maxWidth: '550px',
        }}
        isOpen={modalVerProveedor}
      >
        <ModalHeader>
          <div>
            <h3>Proveedores de {seleccionado.nombre}</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label>Proveedor 1</label>
            <input
              className="form-control"
              type="text"
              name="Apunte"
              value={seleccionado.proveedores[0] ? seleccionado.proveedores[0].name : ''}
              readOnly
              // onChange={manejarCambio}
            />
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
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
            <br />
          </div>
        </ModalBody>
        <ModalFooter>
          <button className="btn btn-primary" onClick={() => setModalVerProveedor(false)}>
            OK
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
        isOpen={modalVerDescripciones}
      >
        <ModalHeader></ModalHeader>
        <ModalBody>
          <div>
            <div>
              <h3>Descripción corta de {seleccionado.nombre}</h3>
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
              <h3>Descripción larga de {seleccionado.nombre}</h3>
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
      <Modal
        style={{
          height: '95vh',
          'overflow-y': 'auto',
          top: '20px',
          maxWidth: '550px',
        }}
        isOpen={ModalVerPrecios}
      >
        <ModalHeader>
          <div className="text-center">
            <h3>Precios de {seleccionado.nombre}</h3>
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
