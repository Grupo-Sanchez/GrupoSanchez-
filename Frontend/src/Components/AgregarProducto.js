import {
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
  Button,
  Label,
  FormGroup,
  Input,
  Row,
  Col,
} from 'reactstrap';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { useDropzone } from 'react-dropzone';
import React, { useState, useEffect } from 'react';
import SelectSearch from 'react-select-search';
import '../Styles/SearchBarInterfazProductos.css';
import '../Styles/ConfirmStyle.css';
import axios from 'axios';
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
export default function AgregarProducto(props) {
  const dataApuntes = [];
  /* https://stackblitz.com/edit/react-tag-input-1nelrc */
  const [cod1, setcod1] = useState('');
  let cod = '';
  const Barcode = require('react-barcode');
  const regex = /^[ña-zA-Z0-9\u00E0-\u00FC-\s]+$/;
  const [cod2, setcod2] = useState('');
  const [cod3, setcod3] = useState('');
  const [cod4, setcod4] = useState('');
  const [cod5, setcod5] = useState('');
  const [cod6, setcod6] = useState('');
  const [marca, setMarca] = useState('');
  const [bodega, setBodega] = useState('');
  const [modalAgregarBodega, setModalAgregarBodega] = useState(false);
  const [cod7, setcod7] = useState('');
  const [size, setSize] = useState('1');
  const [size2, setSize2] = useState('2');
  const [size3, setSize3] = useState('3');
  const [size4, setSize4] = useState('4');
  const [size5, setSize5] = useState('5');
  const [size6, setSize6] = useState('6');
  const [size7, setSize7] = useState('7');
  let [precioprov1, setPrecioProv1] = useState(true);
  let [precioprov2, setPrecioProv2] = useState(true);
  let [precioprov3, setPrecioProv3] = useState(true);
  let [precioprov4, setPrecioProv4] = useState(true);
  let [precioprov5, setPrecioProv5] = useState(true);
  let [precioprov6, setPrecioProv6] = useState(true);
  let [precioprov7, setPrecioProv7] = useState(true);
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
  const isAlphanumeric = require('is-alphanumeric');
  const [tags, setTags] = useState([]);
  const [tagstemp, setTagsTemp] = useState([]);
  const [seleccionado, setSeleccionado] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: [],
    precio: [],
    cantidad: 1,
    bodega: [],
    descripcion_corta: '',
    descripcion_larga: '',
    cantidad_minima: 1,
    fecha_creacion: '',
  });
  const [cantsel, setCantsel] = useState(1);
  const [cantminsel, setCantminsel] = useState(1);
  const [codigoBarra, setCodigoBarra] = useState('');
  let [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  let [marcas, setMarcas] = useState([]);
  let [bodegas, setBodegas] = useState([]);
  const fecthMarcas = async () => {
    await axios.get('http://178.128.67.247/api/marcas').then((response) => {
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
  const [precioprovedor1, setPrecioProvedor1] = useState('');
  const [precioprovedor2, setPrecioProvedor2] = useState('');
  const [precioprovedor3, setPrecioProvedor3] = useState('');
  const [precioprovedor4, setPrecioProvedor4] = useState('');
  const [precioprovedor5, setPrecioProvedor5] = useState('');
  const [precioprovedor6, setPrecioProvedor6] = useState('');
  const [precioprovedor7, setPrecioProvedor7] = useState('');
  const fecthBodegas = async () => {
    await axios.get('http://178.128.67.247/api/bodegas').then((response) => {
      const bodegasobtenidas = response.data;
      const bodegasAgregar = [];
      for (let index = 0; index < bodegasobtenidas.length; index++) {
        const element = bodegasobtenidas[index];
        bodegasAgregar.push({
          value: element._id,
          name: element.numBodega,
        });
      }
      setBodegas(bodegasAgregar);
    });
  };
  const fecthProveedores = async () => {
    await axios.get('http://178.128.67.247/api/proveedor').then((response) => {
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
  const fecthProductos = async () => {
    await axios.get('http://178.128.67.247/api/productos').then((response) => {
      setProductos(response.data);
    });
  };
  useEffect(() => {
    fecthProveedores();
    fecthProductos();
    fecthMarcas();
    fecthBodegas();
  }, []);
  let hoy = new Date();
  const prueba = async () => {
    const campos = {
      nombre: seleccionado.nombre,
      area: seleccionado.area,
      codigos: seleccionado.codigos,
      proveedores: seleccionado.proveedores,
      ubicacion: seleccionado.ubicacion,
      marca: seleccionado.marca,
      bodega: seleccionado.bodega,
      precios: seleccionado.precio,
      cantidad: cantsel,
      descripcion_corta: seleccionado.descripcion_corta,
      descripcion_larga: seleccionado.descripcion_larga,
      cantidad_minima: cantminsel,
      fecha_creacion: hoy.toLocaleDateString('en-US'),
    };
    const res = await axios.post('http://178.128.67.247/api/productos', campos);
    console.log(res);
    Confirm.open({
      title: '',
      message: '¡Producto Agregado!',
      onok: () => {},
    });
    seleccionado.nombre = '';
    seleccionado.area = '';
    seleccionado.ubicacion = '';
    seleccionado.descripcion_corta = '';
    seleccionado.descripcion_larga = '';
    seleccionado.cantidad = '';
    seleccionado.bodega = [];
    seleccionado.cantidad_minima = '';
    seleccionado.marca = [];
    seleccionado.codigos = [];
    seleccionado.precio = [];
    seleccionado.proveedores = [];
    seleccionado.fecha_creacion = '';
    setcod2('');
    setcod3('');
    setcod4('');
    setcod5('');
    setcod6('');
    setcod7('');
    setinputcod2(false);
    setinputcod3(false);
    setinputcod4(false);
    setinputcod5(false);
    setinputcod6(false);
    setinputcod7(false);
  };
  /*
  HandleChange(event){
      this.state.codigos.push();
      this.setState({some:'val',arr:this.state.arr})
  }
  */
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
  const agregarMarca = (idToSearch) => {
    seleccionado.marca = [];
    marcas.filter((item) => {
      if (item.value === idToSearch) {
        seleccionado.marca.push(item);
      }
      return 0;
    });
  };
  const handleChange2 = (e) => {
    agregarMarca(e);
  };
  const agregarBodega = (idToSearch) => {
    seleccionado.bodega = [];
    bodegas.filter((item) => {
      if (item.value === idToSearch) {
        seleccionado.bodega.push(item);
      }
      return 0;
    });
  };
  const handleChange3 = (e) => {
    agregarBodega(e);
  };

  const handleOnChange = (value) => {
    for (let index = 0; index < proveedores.length; index++) {
      const element = proveedores[index];
      if (element.value === value) {
        const proveedorSel = {
          company: element.company,
          value: element.value,
          agencia: element.agencia,
          name: element.name,
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
        proveedoresSeleccionados.push(proveedorSel);
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
    if (document.getElementById('cantidad').value <= 0) {
      document.getElementById('cantidad').value = 1;
    } else {
      setCantsel(e.target.value);
    }
  };
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
  const cerrarModalAgregarProducto = () => {
    props.change();
    setCantsel(1);
    setCantminsel(1);
    seleccionado.nombre = '';
    seleccionado.area = '';
    seleccionado.ubicacion = '';
    seleccionado.descripcion_corta = '';
    seleccionado.descripcion_larga = '';
    seleccionado.cantidad = '';
    seleccionado.cantidad_minima = '';
    seleccionado.marca = '';
    seleccionado.codigos = [];
    seleccionado.precio = [];
    seleccionado.proveedores = [];
    setSize('');
    setSize2('');
    setSize3('');
    setSize4('');
    setSize5('');
    setSize6('');
    setSize7('');
    setPrecioProv1(true);
    setPrecioProv2(true);
    setPrecioProv3(true);
    setPrecioProv4(true);
    setPrecioProv5(true);
    setPrecioProv6(true);
    setPrecioProv7(true);
  };
  const descartarcambios = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        cerrarModalAgregarProducto();
      },
    });
  };
  const manejarCambiocantmin = (e, n) => {
    const num = document.getElementById('cantidad_minima').value;
    const num2 = document.getElementById('cantidad').value;
    if (num > num2) {
      document.getElementById('cantidad_minima').onchange = limit;
    } else {
      document.getElementById('cantidad').onchange = limit;
    }
    if (num <= 0) {
      document.getElementById('cantidad_minima').value = 1;
    }
    setCantminsel(e.target.value);
    //document.getElementById('cantidad').min = seleccionado.cantidad_minima;
  };
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    if (index === 0) {
      setCodigoBarra(tags[1]);
    }
  };
  const GuardarCodigos = () => {
    if (tags.length > 0) {
      seleccionado.codigos = tags;
      setTagsTemp(tags);
      setModalInsertarCodigo(false);
    } else {
      Confirm.open({
        title: 'Códigos vacios',
        message: 'No puede insertar si no existe ningun código',
        onok: () => {},
      });
    }
  };
  const insertarCodigos = () => {
    setModalInsertarCodigo(true);
  };
  const GuardarPrecio = () => {
    seleccionado.precio = [0, 0, 0];
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
      seleccionado.precio[0] = parseInt(precio1, 10);
      if (precio2.toString() !== '') {
        seleccionado.precio[1] = parseInt(precio2, 10);
      }
      if (precio3.toString() !== '') {
        seleccionado.precio[2] = parseInt(precio3, 10);
      }
      let menor = false;
      if (
        precio2.toString() !== '' &&
        precio3.toString() === '' &&
        seleccionado.precio[0] > seleccionado.precio[1]
      ) {
        menor = true;
      } else if (
        precio3.toString() !== '' &&
        precio2.toString() === '' &&
        seleccionado.precio[0] > seleccionado.precio[2]
      ) {
        menor = true;
      } else if (
        precio2.toString() !== '' &&
        precio3.toString() !== '' &&
        seleccionado.precio[0] > seleccionado.precio[1] &&
        seleccionado.precio[1] > seleccionado.precio[2]
      ) {
        menor = true;
      } else if (precio2.toString() === '' && precio3.toString() === '') {
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
        setModalInsertarPrecio(false);
      }
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
      if (precioprovedor1 !== '') {
        proveedoresSeleccionados[0].precio = precioprovedor1;
      }
      if (precioprovedor2 !== '') {
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
      alert(JSON.stringify(proveedoresSeleccionados));
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
      if (e.target.value === '') {
        setcod2(' ');
        setcod3(' ');
        setcod4(' ');
        setcod5(' ');
        setcod6(' ');
        setcod7(' ');
        setinputcod2(false);
        setinputcod3(false);
        setinputcod5(false);
        setinputcod6(false);
        setinputcod7(false);
        setinputcod4(false);
      }
      setinputcod2(e.target.value);
    } else if (num === 3) {
      if (e.target.value === '') {
        setcod3(' ');
        setcod4(' ');
        setcod5(' ');
        setcod6(' ');
        setcod7(' ');
        setinputcod3(false);
        setinputcod5(false);
        setinputcod6(false);
        setinputcod7(false);
        setinputcod4(false);
      }
      setinputcod3(e.target.value);
      setinputcod4(false);
    } else if (num === 4) {
      if (e.target.value === '') {
        setcod4(' ');
        setcod5(' ');
        setcod6(' ');
        setcod7(' ');
        setinputcod5(false);
        setinputcod6(false);
        setinputcod7(false);
        setinputcod4(false);
      }
      setinputcod4(e.target.value);
      setinputcod5(false);
    } else if (num === 5) {
      if (e.target.value === '') {
        setcod5(' ');
        setcod6(' ');
        setcod7(' ');
        setinputcod5(false);
        setinputcod6(false);
        setinputcod7(false);
      }
      setinputcod5(e.target.value);
      setinputcod6(false);
    } else if (num === 6) {
      if (e.target.value === '') {
        setcod6(' ');
        setcod7(' ');
        setinputcod6(false);
        setinputcod7(false);
      }
      setinputcod6(e.target.value);
      setinputcod7(false);
    } else if (num === 7) {
      if (e.target.value === '') {
        setcod7(' ');
      }
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
      seleccionado.descripcion_corta.toString().trim() !== '' &&
      document.getElementById('cantidad').value > 0 &&
      document.getElementById('cantidad_minima').value > 0 &&
      seleccionado.marca[0] !== undefined
    ) {
      if (
        regex.test(document.getElementById('nombre_agregar').value) &&
        regex.test(document.getElementById('area_agregar').value)
      ) {
        prueba();
        props.change();
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
  const ValidacionesCodigo = () => {
    alert('hola mundo');
    if (isAlphanumeric(tags[1])) {
      alert('uno entra');
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
      for (let index = 0; index < productos.length; index++) {
        const element = productos[index];
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
        setTagsTemp([...tagstemp, event.target.value]);
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
  const cerrarModalAgregarCodigos = (n) => {
    setTags(tagstemp);
    setCodigoBarra(tagstemp[0]);
    setModalInsertarCodigo(false);
  };
  const evaluarespacio = (e) => {
    if (cod2 === ' ') {
      setcod2('');
    }
    if (cod3 === ' ') {
      setcod3('');
    }
    if (cod4 === ' ') {
      setcod4('');
    }
    if (cod5 === ' ') {
      setcod5('');
    }
    if (cod6 === ' ') {
      setcod6('');
    }
    if (cod7 === ' ') {
      setcod7('');
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  const provseleccionados = [];
  const proveedorSeleccionado = (provSel) => {
    if (document.getElementById('prov1').value !== '') {
      //alert(document.getElementById('prov1').value);
      seleccionado.proveedores.push(document.getElementById('prov1').value);
    }
  };
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
  const options = [
    { value: 's', name: 'Small' },
    { value: 'm', name: 'Medium' },
    { value: 'l', name: 'Large' },
  ];
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
    <div id="target">
      <Modal
        isOpen={props.isOpen}
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
            <h3>AGREGAR PRODUCTOS</h3>
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
                <Button onClick={() => insertarCodigos()} color="primary">
                  Insertar Codigo
                </Button>{' '}
              </Col>
              <Col
                style={{
                  maxWidth: '10px',
                  paddingLeft: '50px',
                  'margin-right': '10px',
                }}
              >
                <Button onClick={() => setModalInsertarPrecio(true)} color="primary">
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
                <Button onClick={() => setModalInsertarProveedor(true)} color="primary">
                  Insertar Proveedor
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
            isOpen={modalInsertarCodigo}
          >
            <ModalHeader>
              <div className="text-center">
                <h3>Agregar Códigos</h3>
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
              <Row>
                <h3 style={{ paddingLeft: '25px' }}>Agregar Proveedores</h3>
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
                <label>Precio Proveedor 1</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov1"
                  min={1}
                  disabled={precioprov1}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 1)}
                  value={precioprovedor1}
                />
                <br />
                <label>Proveedor 2</label>
                <SelectSearch
                  search
                  id="prov2"
                  onChange={setSize2}
                  disabled={precioprov1}
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
                  onChange={setSize3}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  disabled={precioprov2}
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
                <label>Precio Proveedor 3</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov3"
                  min={1}
                  disabled={precioprov3}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 3)}
                  value={
                    seleccionado.proveedores[2] !== undefined
                      ? seleccionado.proveedores[2].precio
                      : ''
                  }
                />
                <br />
                <label>Proveedor 4</label>
                <SelectSearch
                  search
                  onChange={setSize4}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  disabled={precioprov3}
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
                <label>Precio Proveedor 4</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov4"
                  min={1}
                  disabled={precioprov4}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 4)}
                  value={
                    seleccionado.proveedores[3] !== undefined
                      ? seleccionado.proveedores[3].precio
                      : ''
                  }
                />
                <br />
                <label>Proveedor 5</label>
                <SelectSearch
                  search
                  onChange={setSize5}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  disabled={precioprov4}
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
                <label>Precio Proveedor 5</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov5"
                  min={1}
                  disabled={precioprov5}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 5)}
                  value={
                    seleccionado.proveedores[4] !== undefined
                      ? seleccionado.proveedores[4].precio
                      : ''
                  }
                />
                <br />
                <label>Proveedor 6</label>
                <SelectSearch
                  search
                  onChange={setSize6}
                  placeholder="Encuentre el Proveedor del Producto"
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
                  onClick={handleOnChange(size6)}
                  value={size6}
                />
                <label>Precio Proveedor 6</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov6"
                  min={1}
                  disabled={precioprov6}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 6)}
                  value={
                    seleccionado.proveedores[5] !== undefined
                      ? seleccionado.proveedores[5].precio
                      : ''
                  }
                />
                <br />
                <label>Proveedor 7</label>
                <SelectSearch
                  search
                  onChange={setSize7}
                  disabled={precioprov6}
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
                <label>Precio Proveedor 7</label>
                <input
                  className="form-control"
                  type="number"
                  id="precioprov3"
                  min={1}
                  disabled={precioprov7}
                  onChange={(e) => manejarCambioPrecioProveedor(e, 7)}
                  value={
                    seleccionado.proveedores[6] !== undefined
                      ? seleccionado.proveedores[6].precio
                      : ''
                  }
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
                    className="form-control"
                    type="text"
                    name="nombre"
                    id="nombre_agregar"
                    errorMessage="Nombre Inválido"
                    validate={{
                      required: { value: true },
                      pattern: { value: regex },

                      minLength: { value: 1 },
                    }}
                    value={seleccionado ? seleccionado.nombre : ''}
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
                    id="area_agregar"
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
                  printOptions="on-focus"
                  search
                  placeholder="Encuentre la Marca del Producto"
                  required
                  autoComplete
                  options={marcas}
                  value={marca}
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
                  id="cantidad"
                  value={cantsel}
                  min={
                    document.getElementById('cantidad_minima')
                      ? document.getElementById('cantidad_minima').value
                      : 0
                  }
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
                  id="cantidad_minima"
                  min={1}
                  max={cantsel}
                  value={cantminsel}
                  onChange={(e) => manejarCambiocantmin(e, 1)}
                />
              </Col>
            </Row>
          </div>
          <br />
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
                  printOptions="on-focus"
                  search
                  placeholder="Encuentre la Bodega del Producto"
                  required
                  autoComplete
                  options={bodegas}
                  value={bodega}
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
                <textarea className="form-control" id="descripcion2" rows="5" />
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
          <button className="btn btn-danger" onClick={(e) => descartarcambios()}>
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
            Agregar Precio
          </button>
          <button className="btn btn-danger" onClick={() => setModalInsertarPrecio(false)}>
            Cancelar
          </button>
        </ModalFooter>
      </Modal>
      <Agregar isOpen={modalAgregar} change={() => cerraroAbrirModalMarca()} />
      <AgregarProveedor isOpen={modalInsertar} change={() => cerraroAbrirModal()} />
      <AgregarBodega isOpen={modalAgregarBodega} change={() => cerraroAbrirModalBodega()} />
    </div>
  );
}
