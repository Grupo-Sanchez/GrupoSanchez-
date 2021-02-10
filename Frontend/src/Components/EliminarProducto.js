import React, { useState, useEffect } from 'react';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import '../Styles/InterfazProducto.css';
import SelectSearch from 'react-select-search';
import axios from 'axios';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { useDropzone } from 'react-dropzone';
import imagePath from '../Icons/lupa1.jpeg';
import AgregarProveedor from './AgregarProveedor.jsx';
import AgregarBodega from './CrearBodega.jsx';
import Agregar from './AgregarMarca.jsx';
import { Confirm } from './Confirm';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16,
  'margin-left': '200px',
  paddingRight: '50px',
  margin: 'auto',
  width: '1%',
};
const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  padding: '30px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: 'black',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  maxWidth: '800px',
  'margin-right': '-50px',
  paddingRight: '50px',
  transition: 'border .24s ease-in-out',
};
const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 150,
  height: 150,
  padding: 4,
  boxSizing: 'border-box',
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden',
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%',
};

export default function EliminarProducto(props) {
  const dataApuntes = [];
  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
    { name: 'patito', value: 'patito' },
  ];
  const [tagstemp, setTagsTemp] = useState([]);
  const { Canvas } = require('canvas');
  const JsBarcode = require('jsbarcode');
  const [size, setSize] = useState('1');
  let [precioprov1, setPrecioProv1] = useState(true);
  const [codigoBarra, setCodigoBarra] = useState('');
  let [precioprov2, setPrecioProv2] = useState(true);
  const [tags, setTags] = useState([]);
  let [precioprov3, setPrecioProv3] = useState(true);
  let [precioprov4, setPrecioProv4] = useState(true);
  let [precioprov5, setPrecioProv5] = useState(true);
  let [precioprov6, setPrecioProv6] = useState(true);
  let [precioprov7, setPrecioProv7] = useState(true);
  const [modalAgregarBodega, setModalAgregarBodega] = useState(false);
  const [size2, setSize2] = useState('2');
  const [size3, setSize3] = useState('3');
  const [size4, setSize4] = useState('4');
  const [size5, setSize5] = useState('5');
  const [size6, setSize6] = useState('6');
  const [size7, setSize7] = useState('7');
  const [precio1, setprecio1] = useState('');
  const [precio2, setprecio2] = useState('');
  const [precio3, setprecio3] = useState('');
  const [modalVerCodigos, setModalVerCodigos] = useState(false);
  const [modalVerProveedor, setModalVerProveedor] = useState(false);
  const [modalVerDescripciones, setmodalVerDescripciones] = useState(false);
  const [ModalModificar, setModalModificar] = useState(false);
  const [ModalModificarCodigos, setModalModificarCodigos] = useState(false);
  const [ModalModificarProveedores, setModalModificarProveedores] = useState(false);
  const [ModalModificarPrecios, setModalModificarPrecios] = useState(false);
  const [ModalVerPrecios, setModalVerPrecios] = useState(false);
  const [ModalVerCodigoBarra, setModalVerCodigoBarra] = useState(false);
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
    bodega: [],
    marca: [],
    precios: [],
    cantidad: '',
    descripcion_corta: '',
    descripcion_larga: '',
    cantidad_minima: '',
    fecha_creacion: '',
  });
  const [bodega, setBodega] = useState('');
  const [cantsel, setCantsel] = useState(seleccionado.cantidad);
  const [cantminsel, setCantminsel] = useState(seleccionado.cantidad_minima);
  const [precioprovedor1, setPrecioProvedor1] = useState('');
  const [precioprovedor2, setPrecioProvedor2] = useState('');
  const [precioprovedor3, setPrecioProvedor3] = useState('');
  const [precioprovedor4, setPrecioProvedor4] = useState('');
  const [precioprovedor5, setPrecioProvedor5] = useState('');
  const [precioprovedor6, setPrecioProvedor6] = useState('');
  const [precioprovedor7, setPrecioProvedor7] = useState('');
  const isAlphanumeric = require('is-alphanumeric');
  let [proveedores, setProveedores] = useState([]);
  let [marcas, setMarcas] = useState([]);
  let [bodegas, setBodegas] = useState([]);
  const fecthProveedores = async () => {
    await axios.get('http://Localhost:3001/api/proveedor').then((response) => {
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
  const fecthBodegas = async () => {
    await axios.get('http://Localhost:3001/api/bodegas').then((response) => {
      const bodegasobtenidas = response.data;
      const bodegasAgregar = [];
      for (let index = 0; index < bodegasobtenidas.length; index++) {
        const element = bodegasobtenidas[index];
        bodegasAgregar.push({
          value: element._id,
          name: `Bodega ${element.numBodega}`,
        });
      }
      setBodegas(bodegasAgregar);
    });
  };
  let cont = 1;
  const fecthMarcas = async () => {
    await axios.get('http://Localhost:3001/api/marcas').then((response) => {
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
  const fecthData = () => {
    axios.get('http://Localhost:3001/api/productos').then((response) => {
      setData(response.data);
    });
    fecthBodegas();
    fecthMarcas();
    fecthProveedores();
  };

  useEffect(() => {
    fecthData();
  }, []);
  function paddingclose() {
    return {
      display: 'block',
      width: '16px',
      height: '16px',
      'line-height': '16px',
      'text-align': 'center',
      'font-size': '14px',
      'margin-left': '8px',
      color: '#0052cc',
      'border-radius': '50%',
      background: '#fff',
      cursor: 'pointer',
    };
  }
  function paddingmain() {
    return {
      width: 'auto',
      height: '32px',
      display: 'flex',
      'align-items': 'center',
      'justify-content': 'center',
      color: '#fff',
      padding: '0 8px',
      'font-size': '14px',
      'list-style': 'none',
      'border-radius': '6px',
      margin: '0 8px 8px 0',
      background: '#0052cc',
    };
  }
  function paddingdiv() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '48px',
      width: '480px',
      border: '1px solid #0052cc',
      'border-radius': '6px',
      padding: '0 8px',
    };
  }
  function paddingInput() {
    return {
      flex: '1',
      border: 'none',
      height: '46px',
      'font-size': '14px',
      padding: '4px 0 0 0',
      '&': 'focus',
      outline: 'transparent',
    };
  }
  function paddingtitle() {
    return {
      'margin-top': '3px',
    };
  }
  function paddingul() {
    return {
      display: 'flex',
      'flex-wrap': 'wrap',
      padding: '0',
      margin: '8px 0 0 0',
    };
  }
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    if (index === 0) {
      setCodigoBarra(tags[1]);
    }
  };
  const addTags = (event) => {
    if (event.key === 'Enter' && event.target.value !== '' && !isAlphanumeric(event.target.value)) {
      Confirm.open({
        title: 'Error',
        message: `El código tiene caracteres inválidos:${' '}`,
        onok: () => {},
      });
    } else if (event.key === 'Enter' && event.target.value !== '') {
      seleccionado.codigos = [];
      const duplicates = [];
      for (let index = 0; index < tags.length; index++) {
        const tag = tags[index];
        seleccionado.codigos.push(tag);
        duplicates.push(tag);
      }
      let yaesta = false;
      let mensaje = [];
      let codigos2 = [];
      let mansajenot = '';
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
        for (let p = 0; p < element.codigos.length; p++) {
          const element2 = element.codigos[p];
          if (element2 === event.target.value) {
            mensaje.push(element.nombre);
            codigos2.push(element2);
            yaesta = true;
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
      let entra = false;
      for (let i = 0; i < duplicates.length; i++) {
        if (duplicates[i] === event.target.value) {
          entra = true;
          break;
        }
      }
      if (yaesta) {
        Confirm.open({
          title: 'Error',
          message: mansajenot,
          onok: () => {},
        });
      } else if (entra) {
        Confirm.open({
          title: 'Error',
          message: 'Existen códigos duplicados, verifique e intente nuevamente.',
        });
        entra = false;
      } else {
        setTags([...tags, event.target.value]);
      }
      event.target.value = '';
    } else if (
      isAlphanumeric(event.target.value) &&
      event.target.value !== '' &&
      tags.length - 1 < 0
    ) {
      setCodigoBarra(event.target.value);
    }
  };
  let proveedoresSeleccionados = [];
  const manejarCambioPrecioProveedor = (e, value) => {
    if (value === 1) {
      setPrecioProvedor1(e.target.value);
    } else if (value === 2) {
      setPrecioProvedor2(e.target.value);
    } else if (value === 3) {
      setPrecioProvedor3(e.target.value);
    } else if (value === 4) {
      setPrecioProvedor4(e.target.value);
    } else if (value === 5) {
      setPrecioProvedor5(e.target.value);
    } else if (value === 6) {
      setPrecioProvedor6(e.target.value);
    } else if (value === 7) {
      setPrecioProvedor7(e.target.value);
    }
  };

  const handleOnChange = (value) => {
    for (let index = 0; index < proveedores.length; index++) {
      const element = proveedores[index];
      if (element.value === value) {
        const id = element.value;
        const proveedorActual = {
          company: element.company,
          value: id,
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
          precio: '',
        };
        proveedoresSeleccionados.push(proveedorActual);
      }
    }

    if (proveedoresSeleccionados.length - 1 === 0) {
      precioprov1 = false;
    } else if (proveedoresSeleccionados.length - 1 === 1) {
      precioprov2 = false;
    } else if (proveedoresSeleccionados.length - 1 === 2) {
      precioprov3 = false;
    } else if (proveedoresSeleccionados.length - 1 === 3) {
      precioprov4 = false;
    } else if (proveedoresSeleccionados.length - 1 === 4) {
      precioprov5 = false;
    } else if (proveedoresSeleccionados.length - 1 === 5) {
      precioprov6 = false;
    } else if (proveedoresSeleccionados.length - 1 === 6) {
      precioprov7 = false;
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

  const GuardarProveedores = () => {
    if (
      proveedoresSeleccionados[0] !== undefined &&
      proveedoresSeleccionados[0].precio !== undefined
    ) {
      proveedoresSeleccionados[0].precio = precioprovedor1;
    }
    if (
      proveedoresSeleccionados[1] !== undefined &&
      proveedoresSeleccionados[1].precio !== undefined
    ) {
      proveedoresSeleccionados[1].precio = precioprovedor2;
    }
    if (
      proveedoresSeleccionados[2] !== undefined &&
      proveedoresSeleccionados[2].precio !== undefined
    ) {
      proveedoresSeleccionados[2].precio = precioprovedor3;
    }
    if (
      proveedoresSeleccionados[3] !== undefined &&
      proveedoresSeleccionados[3].precio !== undefined
    ) {
      proveedoresSeleccionados[3].precio = precioprovedor4;
    }
    if (
      proveedoresSeleccionados[4] !== undefined &&
      proveedoresSeleccionados[4].precio !== undefined
    ) {
      proveedoresSeleccionados[4].precio = precioprovedor5;
    }
    if (
      proveedoresSeleccionados[5] !== undefined &&
      proveedoresSeleccionados[5].precio !== undefined
    ) {
      proveedoresSeleccionados[5].precio = precioprovedor6;
    }
    if (
      proveedoresSeleccionados[6] !== undefined &&
      proveedoresSeleccionados[6].precio !== undefined
    ) {
      proveedoresSeleccionados[6].precio = precioprovedor7;
    }
    seleccionado.proveedores = proveedoresSeleccionados;

    if (seleccionado.proveedores[0] === null) {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Proveedor 1.',
        onok: () => {},
      });
    } else {
      Confirm.open({
        title: 'Modificar Proveedores',
        message: '¿Está seguro que desea guardar estos cambios?',
        onok: () => {
          setModalModificarProveedores(false);
        },
      });
    }
  };
  const GuardarPrecio = () => {
    let menor = false;
    seleccionado.precios[0] = parseInt(document.getElementById('modprecio1').value, 10);
    seleccionado.precios[1] = parseInt(document.getElementById('modprecio2').value, 10);
    seleccionado.precios[2] = parseInt(document.getElementById('modprecio3').value, 10);
    if (precio2 !== '' && precio3 === '' && seleccionado.precios[0] > seleccionado.precios[1]) {
      menor = true;
    } else if (
      precio3 !== '' &&
      precio2 === '' &&
      seleccionado.precios[0] > seleccionado.precios[2]
    ) {
      menor = true;
    } else if (
      precio2 !== '' &&
      precio3 !== '' &&
      seleccionado.precios[0] > seleccionado.precios[1] &&
      seleccionado.precios[1] > seleccionado.precios[2]
    ) {
      menor = true;
    } else if (precio2 === '' && precio3 === '') {
      menor = true;
    }
    if (!menor) {
      seleccionado.precio = [];
      Confirm.open({
        title: 'Error',
        message: 'Los precios deben ser diferentes y descendentes.',
        onok: () => {},
      });
    } else {
      setModalModificarPrecios(false);
    }
  };
  const onDelete = (memberId) => {
    axios.delete(`http://Localhost:3001/api/productos/${memberId}`);
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
  const [marcaSel, setMarcaSel] = useState([]);
  const [bodegaSel, setBodegaSel] = useState([]);
  const updateItem = async (Id) => {
    let marcaMod = [];
    let bodegaMod = [];
    for (let index = 0; index < marcas.length; index++) {
      const element = marcas[index];
      if (element.value === marcaSel) {
        for (let i = 0; i < data.length; i++) {
          const element2 = data[i];
          if (element2._id === Id) {
            marcaMod = element;
            break;
          }
        }
      }
    }

    for (let index = 0; index < bodegas.length; index++) {
      const element = bodegas[index];
      if (element.value === bodegaSel) {
        for (let i = 0; i < data.length; i++) {
          const element2 = data[i];
          if (element2._id === Id) {
            bodegaMod = element;
            alert(JSON.stringify(bodegaMod));
            break;
          }
        }
      }
    }
    if (
      seleccionado.bodega.length > 0 &&
      seleccionado.codigos.length > 0 &&
      seleccionado.proveedores.length > 0 &&
      seleccionado.precios.length > 0 &&
      seleccionado.nombre.toString().trim() !== '' &&
      seleccionado.area.toString().trim() !== '' &&
      seleccionado.descripcion_corta.toString().trim() !== '' &&
      document.getElementById('modcantidad').value > 0 &&
      document.getElementById('modcantidad_minima').value > 0
    ) {
      if (
        regex.test(document.getElementById('modnombre').value) &&
        regex.test(document.getElementById('modarea').value)
        //isAlphanumeric(document.getElementById('modnombre').value) &&
        // isAlphanumeric(document.getElementById('modarea').value)
      ) {
        setModalModificar(false);
        axios
          .put(`http://Localhost:3001/api/productos/${Id}`, {
            nombre: document.getElementById('modnombre').value,
            area: document.getElementById('modarea').value,
            codigos: seleccionado.codigos,
            proveedores: seleccionado.proveedores,
            ubicacion: document.getElementById('modubicacion').value,
            marca: marcaMod,
            bodega: bodegaMod,
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
              onok: () => {
                fecthData();
              },
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
  const agregarProveedor = (idToSearch) => {
    proveedores.filter((item) => {
      if (item.value === idToSearch) {
        setMarcaSel(item.value);
        //alert(marcaSel);
      }
      return 0;
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
  const agregarBodega = (idToSearch) => {
    bodegas.filter((item) => {
      if (item.value === idToSearch) {
        setBodegaSel(item.value);
      }
      return 0;
    });
  };
  const handleChange3 = (e) => {
    agregarBodega(e);
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
    setSize('');
    setSize2('');
    setSize3('');
    setSize4('');
    setSize5('');
    setSize6('');
    setSize7('');
    setPrecioProvedor1('');
    setPrecioProvedor2('');
    setPrecioProvedor3('');
    setPrecioProvedor4('');
    setPrecioProvedor5('');
    setPrecioProvedor6('');
    setPrecioProvedor7('');
    setCantminsel(element.cantidad_minima);
    setCantsel(element.cantidad);
    setMarcaSel(element.marca[0].value);
    setBodegaSel(element.bodega[0].value);
    setNombre(element.nombre);
    setTagsTemp(element.codigos);
    setCodigoBarra(element.codigos[0]);
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
  const cerrarModalModificarCodigos = (n) => {
    setTags(tagstemp);
    setCodigoBarra(tagstemp[0]);
    setModalModificarCodigos(false);
  };
  const changeCode = () => {
    setTags(tagstemp);
    setModalModificarCodigos(true);
  };
  const descartarcambios = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los cambios?',
      onok: () => {
        setModalModificar(false);
      },
    });
  };
  const GuardarCodigos = (i) => {
    if (tags.length > 0) {
      seleccionado.codigos = tags;
      setTagsTemp(tags);
      setModalModificarCodigos(false);
    } else {
      Confirm.open({
        title: 'Códigos vacios',
        message: 'No puede insertar si no existe ningun código',
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
      if (seleccionado.proveedores[0].precio !== undefined) {
        setPrecioProvedor1(seleccionado.proveedores[0].precio);
      }
      setPrecioProv1(false);
    }
    if (seleccionado.proveedores[1] !== undefined) {
      setSize2(seleccionado.proveedores[1].value);
      if (seleccionado.proveedores[1].precio !== undefined) {
        setPrecioProvedor2(seleccionado.proveedores[1].precio);
      }
      setPrecioProv2(false);
    }
    if (seleccionado.proveedores[2] !== undefined) {
      setSize3(seleccionado.proveedores[2].value);
      if (seleccionado.proveedores[2].precio !== undefined) {
        setPrecioProvedor3(seleccionado.proveedores[2].precio);
      }
      setPrecioProv3(false);
    }
    if (seleccionado.proveedores[3] !== undefined) {
      setSize4(seleccionado.proveedores[3].value);
      if (seleccionado.proveedores[3].precio !== undefined) {
        setPrecioProvedor4(seleccionado.proveedores[3].precio);
      }
      setPrecioProv4(false);
    }
    if (seleccionado.proveedores[4] !== undefined) {
      setSize5(seleccionado.proveedores[4].value);
      if (seleccionado.proveedores[4].precio !== undefined) {
        setPrecioProvedor5(seleccionado.proveedores[4].precio);
      }
      setPrecioProv5(false);
    }
    if (seleccionado.proveedores[5] !== undefined) {
      setSize6(seleccionado.proveedores[5].value);
      if (seleccionado.proveedores[5].precio !== undefined) {
        setPrecioProvedor6(seleccionado.proveedores[5].precio);
      }
      setPrecioProv6(false);
    }
    if (seleccionado.proveedores[6] !== undefined) {
      setSize7(seleccionado.proveedores[6].value);
      if (seleccionado.proveedores[6].precio !== undefined) {
        setPrecioProvedor7(seleccionado.proveedores[6].precio);
      }
      setPrecioProv6(false);
    }
    setModalModificarProveedores(true);
  };
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
  const mostrarCodigoBarra = (elemento) => {
    setSeleccionado(elemento);
    setModalVerCodigoBarra(true);
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
  const Barcode = require('react-barcode');
  function padding(a, b, c, d) {
    return {
      paddingTop: a,
      paddingRight: b ? b : a,
      paddingBottom: c ? c : a,
      paddingLeft: d ? d : b ? b : a,
    };
  }

  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          }),
        ),
      );
    },
  });

  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img src={file.preview} style={img} />
      </div>
    </div>
  ));
  const [modalAgregar, setModalAgregar] = useState(false);
  const [modalInsertar, setModalInsertar] = useState(false);
  const mostrarModalMarca = () => {
    setModalAgregar(true);
  };
  const cerraroAbrirModalMarca = () => {
    setModalAgregar(!modalAgregar);
    fecthMarcas();
  };
  const mostarModalProveedor = () => {
    setModalInsertar(true);
  };

  const cerraroAbrirModal = () => {
    setModalInsertar(!modalInsertar);
    fecthProveedores();
  };
  const mostrarModalBodega = () => {
    setModalAgregarBodega(true);
  };
  const cerraroAbrirModalBodega = () => {
    setModalAgregarBodega(!modalAgregarBodega);
    fecthBodegas();
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
              <th>Código de Barra</th>
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
                  <Button color="primary" onClick={() => mostrarCodigoBarra(elemento)}>
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
            maxWidth: '1500px',
          }}
        >
          <ModalHeader>
            <div>
              <h3 className="text-center">MODIFICAR PRODUCTOS</h3>
            </div>
          </ModalHeader>
          <ModalBody
            style={{
              'margin-right': '200px',
            }}
          >
            <Row>
              <Col
                style={{
                  'margin-left': '450px',
                }}
                md={{ size: 5 }}
              >
                <Barcode value={codigoBarra} />
              </Col>
              <Col
                style={{
                  'margin-left': '70px',
                  maxWidth: '700px',
                }}
                md={{ size: 2 }}
              >
                <Button onClick={() => mostrarModalMarca()} color="danger">
                  Agregar Marca
                </Button>
                <div style={{ paddingTop: '10px' }}>
                  <Button onClick={() => mostrarModalBodega()} color="danger">
                    Agregar Bodega
                  </Button>
                </div>
              </Col>
            </Row>
            <Agregar isOpen={modalAgregar} change={() => cerraroAbrirModalMarca()} />
            <br />
            <div>
              <Row>
                <Col
                  style={{
                    maxWidth: '300px',
                    'margin-left': '325px',
                    paddingRight: '50px',
                  }}
                  md={{ size: 5 }}
                >
                  <Button onClick={() => changeCode()} color="primary">
                    Modificar Códigos
                  </Button>{' '}
                </Col>
                <Col
                  style={{
                    maxWidth: '10px',
                    paddingLeft: '50px',
                    'margin-right': '10px',
                  }}
                >
                  <Button onClick={() => changePrecio()} color="primary">
                    Precios
                  </Button>
                </Col>
                <Col
                  style={{
                    maxWidth: '200px',
                    paddingRight: '10px',
                    'margin-left': '180px',
                  }}
                >
                  <Button onClick={() => changeProveedor()} color="primary">
                    Modificar Proveedor
                  </Button>{' '}
                </Col>
              </Row>
            </div>
            <br />
            <Modal
              style={{
                height: '95vh',
                'overflow-y': 'auto',
                top: '20px',
                maxWidth: '550px',
                paddingTop: '300px',
              }}
              isOpen={ModalModificarCodigos}
            >
              <ModalHeader>
                <div className="text-center">
                  <h3>Modificar Códigos</h3>
                </div>
              </ModalHeader>
              <ModalBody>
                <div style={paddingdiv()}>
                  <ul style={paddingul()}>
                    {tags.map((tag, index) => (
                      <li style={paddingmain()} key={index}>
                        <span style={paddingtitle()}>{tag}</span>
                        <i style={paddingclose()} onClick={() => removeTags(index)}>
                          x
                        </i>
                      </li>
                    ))}
                  </ul>
                  <input
                    style={paddingInput()}
                    updatable={true}
                    type="text"
                    onKeyUp={(event) => addTags(event)}
                    placeholder="Press enter to add tags"
                    onKeyDown={handleKeyDown}
                  />
                </div>
              </ModalBody>
              <ModalFooter>
                <button
                  className="btn btn-primary"
                  onClick={() =>
                    Confirm.open({
                      title: 'Modificar Codigos',
                      message: '¿Está seguro de que quiere modificar estos codigos?',
                      onok: () => {
                        GuardarCodigos(seleccionado);
                      },
                    })
                  }
                >
                  Modificar Código
                </button>
                <button className="btn btn-danger" onClick={() => cerrarModalModificarCodigos()}>
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
              <AgregarProveedor isOpen={modalInsertar} change={() => cerraroAbrirModal()} />
              <ModalHeader>
                <Row>
                  <h3 style={{ paddingLeft: '25px' }}>Modificar Proveedores</h3>
                  <Col style={{ paddingLeft: '100px' }} md={{ size: 1 }}>
                    <Button onClick={() => mostarModalProveedor()} color="danger">
                      Agregar Proveedor
                    </Button>
                  </Col>
                </Row>
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
                  <label>Precio Proveedor 1</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov1"
                    disabled={precioprov1}
                    min={1}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 1)}
                    value={precioprovedor1}
                  />
                  <br />
                  <label>Proveedor 2</label>
                  <SelectSearch
                    search
                    required
                    disabled={precioprov1}
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
                  <label>Precio Proveedor 2</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov2"
                    min={1}
                    disabled={precioprov2}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 2)}
                    value={precioprovedor2}
                  />
                  <br />
                  <label>Proveedor 3</label>
                  <SelectSearch
                    search
                    required
                    autoComplete
                    disabled={precioprov2}
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
                  <label>Precio Proveedor 3</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov3"
                    min={1}
                    disabled={precioprov3}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 3)}
                    value={precioprovedor3}
                  />
                  <br />
                  <label>Proveedor 4</label>
                  <SelectSearch
                    search
                    required
                    disabled={precioprov3}
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
                  <label>Precio Proveedor 4</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov4"
                    min={1}
                    disabled={precioprov4}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 4)}
                    value={precioprovedor4}
                  />
                  <br />
                  <label>Proveedor 5</label>
                  <SelectSearch
                    search
                    required
                    disabled={precioprov4}
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
                  <label>Precio Proveedor 5</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov5"
                    min={1}
                    disabled={precioprov5}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 5)}
                    value={precioprovedor5}
                  />
                  <br />
                  <label>Proveedor 6</label>
                  <SelectSearch
                    search
                    onChange={setSize6}
                    required
                    autoComplete
                    disabled={precioprov5}
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
                  <label>Precio Proveedor 6</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov6"
                    min={1}
                    disabled={precioprov6}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 6)}
                    value={precioprovedor6}
                  />
                  <br />
                  <label>Proveedor 7</label>
                  <SelectSearch
                    search
                    required
                    onChange={setSize7}
                    autoComplete
                    disabled={precioprov6}
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
                  <label>Precio Proveedor 7</label>
                  <input
                    className="form-control"
                    type="number"
                    id="precioprov3"
                    min={1}
                    disabled={precioprov7}
                    onChange={(e) => manejarCambioPrecioProveedor(e, 7)}
                    value={precioprovedor7}
                  />
                  <br />
                </div>
              </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => GuardarProveedores()}>
                  Modificar Proveedores
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
                <Row>
                  <Col
                    style={{
                      maxWidth: '700px',
                      'margin-left': '200px',
                      paddingRight: '50px',
                    }}
                    md={{ size: 5 }}
                  >
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
                  </Col>
                  <Col
                    style={{
                      maxWidth: '700px',
                      paddingRight: '50px',
                    }}
                  >
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
                  </Col>
                </Row>
              </AvForm>
            </div>
            <div>
              <Row>
                <Col
                  style={{
                    maxWidth: '700px',
                    'margin-left': '200px',
                    paddingRight: '50px',
                  }}
                  md={{ size: 5 }}
                >
                  <h3>Ubicación</h3>
                  <input
                    className="form-control"
                    type="text"
                    name="ubicacion"
                    id="modubicacion"
                    value={seleccionado ? seleccionado.ubicacion : ''}
                    onChange={manejarCambio}
                  />
                </Col>
                <Col
                  style={{
                    maxWidth: '700px',
                    paddingRight: '50px',
                  }}
                >
                  <h3>Marca</h3>
                  <SelectSearch
                    search
                    options={marcas}
                    value={marcaSel}
                    onChange={(e) => handleChange2(e)}
                  />
                </Col>
              </Row>
              <br />
            </div>
            <div>
              <Row>
                <Col
                  style={{
                    maxWidth: '700px',
                    'margin-left': '200px',
                    paddingRight: '50px',
                  }}
                  md={{ size: 5 }}
                >
                  <h3>Cantidad</h3>

                  <input
                    className="form-control"
                    type="number"
                    id="modcantidad"
                    //placeholder={seleccionado.cantidad}
                    min={cantminsel}
                    value={cantsel}
                    onChange={(e) => manejarCambiocant(e, 0)}
                  />
                </Col>
                <Col
                  style={{
                    maxWidth: '700px',
                    paddingRight: '50px',
                  }}
                >
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
                </Col>
              </Row>
            </div>
            <div>
              <Row>
                <Col
                  style={{
                    maxWidth: '700px',
                    'margin-left': '200px',
                    paddingRight: '50px',
                  }}
                  md={{ size: 5 }}
                >
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
                </Col>
                <Col
                  style={{
                    maxWidth: '700px',
                    paddingRight: '50px',
                  }}
                >
                  <h3>Bodega</h3>
                  <br />
                  <SelectSearch
                    search
                    placeholder="Encuentre la Bodega del Producto"
                    options={bodegas}
                    value={bodegaSel}
                    onChange={(e) => handleChange3(e)}
                  />
                </Col>
              </Row>
            </div>
            <Row>
              <Col
                style={{
                  maxWidth: '700px',
                  'margin-left': '200px',
                  paddingRight: '50px',
                }}
                md={{ size: 5 }}
              >
                <h3>Descripción larga </h3>
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
              </Col>
              <Col
                style={{
                  maxWidth: '800px',
                  paddingRight: '60px',
                  'margin-right': '30px',
                }}
              >
                <h3>Imagen del Producto</h3>
                <br />
                <section className="container">
                  <div style={baseStyle} {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    <p>Arrastre la imagen aqui o de clic para seleccionar</p>
                  </div>
                  <aside style={thumbsContainer}>{thumbs}</aside>
                </section>
              </Col>
            </Row>
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
            <button className="btn btn-danger" onClick={() => descartarcambios()}>
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
      <AgregarBodega isOpen={modalAgregarBodega} change={() => cerraroAbrirModalBodega()} />
    </div>
  );
}
