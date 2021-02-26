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
import DatePicker from 'react-date-picker';
import '../Styles/DatePicker.css';
import { AvForm, AvField, AvInput, AvRadioGroup, AvRadio } from 'availity-reactstrap-validation';
import { useDropzone } from 'react-dropzone';
import React, { useState, useEffect } from 'react';
import SelectSearch from 'react-select-search';
import '../Styles/ConfirmStyle.css';
import axios from 'axios';
import selectsearch2 from '../Styles/SearchBarInterfazProductos.css';
import AgregarProveedor from './AgregarProveedor.jsx';
import AgregarBodega from './CrearBodega.jsx';
import Agregar from './AgregarMarca.jsx';
import { ReactComponent as Remove } from '../Icons/remove.svg';
import { Confirm } from './Confirm';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: -160,
  'margin-left': '300px',
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
  height: '200px',
  borderRadius: 2,
  borderColor: 'black',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  paddingTop: '-85px',
  maxWidth: '350px',
  'margin-right': '-50px',
  paddingRight: '50px',
  transition: 'border .24s ease-in-out',
  'border-radius': '26px',
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
  const [startDate, setStartDate] = useState(new Date());
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
  const [modalCreacionRapida, setmodalCreacionRapida] = useState(false);
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
  const [tagsProveedores, settagsProveedores] = useState([]);
  let [tempProv, settempProv] = useState([]);
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
    fecha_vencimiento: new Date(),
  });
  const [seleccionadorapido, setSeleccionadorapido] = useState({
    nombre: '',
    area: '',
    codigos: [],
    proveedores: [],
    ubicacion: '',
    marca: [],
    precio: [1],
    cantidad: 1,
    bodega: [],
    descripcion_corta: '',
    descripcion_larga: '',
    exento: false,
    cantidad_minima: 1,
    fecha_creacion: '',
    codigoBarra: '',
    fecha_vencimiento: new Date(),
  });
  const [codigoprincipal, setcodigoprincipal] = useState('');
  const [cantidadRapida, setcantidadRapida] = useState(1);
  const [descripcion, setdescripcion] = useState('');
  const [precioRapida, setprecioRapida] = useState(1);
  const [codigobarra, setCodigobarra] = useState('');
  const [productoExento, setProductoExento] = useState(false);
  const [cantsel, setCantsel] = useState(1);
  const [cantminsel, setCantminsel] = useState(1);
  const [codigoBarra, setCodigoBarra] = useState('');
  let [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  let [marcas, setMarcas] = useState([]);
  let [bodegas, setBodegas] = useState([]);
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
  const [precioprovedor1, setPrecioProvedor1] = useState('');
  const [precioprovedor2, setPrecioProvedor2] = useState('');
  const [precioprovedor3, setPrecioProvedor3] = useState('');
  const [precioprovedor4, setPrecioProvedor4] = useState('');
  const [precioprovedor5, setPrecioProvedor5] = useState('');
  const [precioprovedor6, setPrecioProvedor6] = useState('');
  const [precioprovedor7, setPrecioProvedor7] = useState('');
  const fecthBodegas = async () => {
    await axios.get('http://localhost:3001/api/bodegas').then((response) => {
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
    await axios.get('http://localhost:3001/api/proveedor').then((response) => {
      // setData(response.data);
      const proveedoresDB = response.data;
      const proveedoresagregados = [];
      for (let index = 0; index < proveedoresDB.length; index++) {
        const element = proveedoresDB[index];
        proveedoresagregados.push({
          name: element.company,
          value: element._id,
          agencia: element.agencia,
          representante: element.nombre,
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
  const removeTagsProv = (index) => {
    setProveedores([...proveedores, tagsProveedores[index]]);
    settagsProveedores([
      ...tagsProveedores.filter((tag) => tagsProveedores.indexOf(tag) !== index),
    ]);
  };
  const fecthProductos = async () => {
    await axios.get('http://localhost:3001/api/productos').then((response) => {
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
      fecha_vencimiento: seleccionado.fecha_vencimiento,
    };
    const res = await axios.post('http://localhost:3001/api/productos', campos);
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
    seleccionado.fecha_vencimiento = '';
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
  const handleChangeDate = (date) => {
    setStartDate(date);
    seleccionado.fecha_vencimiento = date;
    alert(JSON.stringify(seleccionado.fecha_vencimiento));
  };
  const handleOnChange = (value) => {
    if (tempProv.length > 0) {
      //setProveedores([...proveedores, tempProv]);
    }
    tempProv.push(proveedores.filter((item) => item.value === value)[0]);
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
  const manejarCambioRapida = (e) => {
    setcodigoprincipal(e.target.value);
  };
  const manejarCambioRapidaDecripcion = (e) => {
    const { name, value } = e.target;
    setSeleccionadorapido((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  const manejarCambioRapidaBarra = (e) => {
    setCodigobarra(e.target.value);
  };
  const manejarCambiocant = (e, n) => {
    if (document.getElementById('cantidad').value <= 0) {
      document.getElementById('cantidad').value = 1;
    } else {
      setCantsel(e.target.value);
    }
  };
  const manejarCambiocantRapida = (e, n) => {
    setcantidadRapida(e.target.value);
  };
  const manejarCambioPrecioRapida = (e, n) => {
    setprecioRapida(e.target.value);
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
    seleccionado.fecha_vencimiento = '';
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
  const GuardarProveedores = () => {
    if (tagsProveedores.length === 0) {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar almenos el Proveedor 1.',
        onok: () => {},
      });
    } else {
      seleccionado.proveedores = tagsProveedores;
    }
  };
  const cerrarModalAgregarProductoCreacionRapida = () => {
    setmodalCreacionRapida(false);
    seleccionadorapido.codigos[0] = codigoprincipal;
    seleccionadorapido.codigoBarra = codigobarra;
    seleccionadorapido.exento = productoExento;
    seleccionadorapido.cantidad = cantidadRapida;
    seleccionadorapido.precio[0] = precioRapida;
    alert(JSON.stringify(seleccionadorapido));
    alert(productoExento);
    setCantsel(1);
    setCantminsel(1);
    setCodigobarra('');
    setcodigoprincipal('');
    setProductoExento(false);
    setcantidadRapida(1);
    setprecioRapida(0);
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
    seleccionado.fecha_vencimiento = '';
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
  const descartarcambiosCreacionRapida = () => {
    Confirm.open({
      title: '¡Advertencia!',
      message: '¿Desea descartar todos los campos?',
      onok: () => {
        cerrarModalAgregarProductoCreacionRapida();
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
  /*const GuardarProveedores = () => {
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
      seleccionado.proveedores = proveedoresSeleccionados;
      setModalInsertarProveedor(false);
    }
  };*/
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
  const onChangeProv = () => {
    tempProv = tempProv.filter((x) => x != null);
    const uniqueData = [...new Set(tempProv)];
    alert(JSON.stringify(tempProv));
    //settagsProveedores([...tagsProveedores, tempProv]);
    tagsProveedores.push(uniqueData[0]);
    alert(JSON.stringify(tagsProveedores));
    //setTagsTempProveedor([...tagstempProveedor, tempProv]);
    setSize6('6');
    settempProv([]);
    setProveedores(proveedores.filter(({ item }) => !tagsProveedores.includes(item)));
  };
  function paddingclose() {
    return {
      display: 'block',
      width: '20px',
      height: '20px',
      'line-height': '16px',
      'text-align': 'center',
      'font-size': '20px',
      'margin-left': '60px',
      color: 'white',
      'border-radius': '50%',
      background: '#f60000',
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
      color: '#282c34',
      padding: '0 8px',
      'font-size': '20px',
      'list-style': 'none',
      margin: '0 8px 8px 0',
      'border-radius': '25px',
      'margin-top': '7px',
      background: '#e9e3e3',
    };
  }
  function paddingdiv() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '48px',
      width: '400px',
      border: 'none',
      'border-radius': '10px',
      padding: '0 8px',
      'margin-left': '80px',
    };
  }
  function paddingInput() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '40px',
      width: '320px',
      border: '1px solid #0052cc',
      'border-radius': '26px',
      padding: '0 8px',
    };
  }
  function paddingAvInput() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      width: '320px',
    };
  }
  function paddingAvInputCantidades() {
    return {
      'border-radius': '26px',
      width: '100px',
    };
  }
  function paddingAvInputCantidadesCreacionRapida() {
    return {
      'border-radius': '26px',
      width: '200px',
    };
  }
  function paddingDescripciones() {
    return {
      'border-radius': '26px',
      width: '320px',
      height: '100px',
    };
  }
  function paddingDescripcionesCreacionRapida() {
    return {
      'border-radius': '26px',
      width: '380px',
      height: '100px',
    };
  }
  function paddingHeader() {
    return {
      'margin-left': '-350px',
    };
  }
  function paddingtitle() {
    return {
      'margin-top': '3px',
    };
  }
  function paddingul() {
    return {
      'flex-wrap': 'wrap',
      padding: '0',
      paddingLeft: '45px',
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
          'border-radius': '36px',
        }}
      >
        <Button
          style={{
            'background-color': 'transparent',
            borderColor: 'transparent',
            position: 'absolute',
            top: '8px',
            left: '16px',
            'font-size': '18px',
            'border-radius': '26px',
          }}
          onClick={() => setmodalCreacionRapida(true)}
        >
          <Remove width="50px" height="50px" />
        </Button>
        <div>
          <h3>AGREGAR PRODUCTOS</h3>
        </div>
        <ModalBody
          style={{
            'margin-right': '-50px',
            paddingLeft: '200px',
          }}
        >
          <br />
          <Modal
            className="text-center"
            style={{
              'overflow-y': 'auto',
              top: '20px',
              maxWidth: '1000px',
              'border-radius': '36px',
            }}
            isOpen={modalCreacionRapida}
          >
            <div>
              <h3>CREACIÓN RÁPIDA DE PRODUCTO NUEVO</h3>
            </div>
            <ModalBody>
              <Row>
                <Col>
                  <h>Código Principal</h>
                  <input
                    style={paddingInput()}
                    updatable={true}
                    type="text"
                    value={codigoprincipal}
                    placeholder="Inserte codigo principal"
                    onChange={manejarCambioRapida}
                  />
                </Col>
                <Col style={{ marginLeft: '60px' }}>
                  <h>Cantidad</h>
                  <input
                    style={paddingAvInputCantidadesCreacionRapida()}
                    className="form-control"
                    type="number"
                    id="cantidad"
                    value={cantidadRapida}
                    min={1}
                    onChange={(e) => manejarCambiocantRapida(e, 0)}
                  />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h>Descripción especifica</h>
                  <Label for="exampleText"></Label>
                  <AvForm>
                    <AvField
                      style={paddingDescripcionesCreacionRapida()}
                      type="textarea"
                      name="descripcion_larga"
                      id="descripcion2"
                      value={seleccionadorapido ? seleccionadorapido.descripcion_larga : ''}
                      onChange={manejarCambioRapidaDecripcion}
                    />
                  </AvForm>
                </Col>
                <Col style={{ marginLeft: '20px' }}>
                  <label>Precio de Venta</label>
                  <AvForm>
                    <AvField
                      style={paddingAvInputCantidades()}
                      className="form-control"
                      type="Number"
                      name="precio1"
                      id="precio1"
                      errorMessage="Este Campo es Obligatorio"
                      validate={{
                        required: { value: true },
                      }}
                      min={1}
                      value={precioRapida}
                      onChange={manejarCambioPrecioRapida}
                    />
                  </AvForm>
                </Col>
              </Row>
              <br />
              <Row>
                <Col>
                  <AvForm>
                    <AvRadioGroup id="exento" inline name="producto_exento" required>
                      <AvRadio
                        onClick={() => setProductoExento(true)}
                        label="Producto Exento"
                        value="exento"
                      />
                      <AvRadio
                        onClick={() => setProductoExento(false)}
                        label="Producto No Exento"
                        value="noexento"
                      />
                    </AvRadioGroup>
                  </AvForm>
                </Col>
              </Row>
              <Row>
                <Col>
                  <h>Código de Barra</h>
                  <input
                    style={paddingInput()}
                    updatable={true}
                    type="text"
                    value={codigobarra}
                    placeholder="Inserte codigo de barra"
                    onChange={manejarCambioRapidaBarra}
                  />
                </Col>
              </Row>
              <br />
              <div style={{ paddingLeft: '100px' }}>
                <Barcode value={codigobarra} />
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
              <button className="btn btn-danger" onClick={(e) => descartarcambiosCreacionRapida()}>
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          <AvForm>
            <Row style={{ marginRight: '200px' }}>
              <h style={{ marginRight: '-20px', paddingRight: '50px' }}>Descripcion</h>
              <Col sm={{ size: 'auto' }}>
                <AvField
                  style={paddingAvInput()}
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
                <Row>
                  <h style={{ paddingRight: '-25px', marginLeft: '-150px' }}>Codigo Principal</h>
                  <Col style={{ paddingRight: '-25px', marginLeft: '30px' }}>
                    <AvField
                      style={paddingAvInput()}
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
                </Row>
              </Col>
              <h style={{ 'margin-left': '30px' }}>Descripción especifica</h>
              <Col sm={{ size: 5 }}>
                <FormGroup>
                  <AvField
                    style={paddingDescripciones()}
                    type="textarea"
                    name="text"
                    id="descripcion2"
                    value={seleccionado ? seleccionado.descripcion_larga : ''}
                    onChange={manejarCambio}
                  />
                </FormGroup>
              </Col>
            </Row>
          </AvForm>
          <Row>
            <h style={{ marginLeft: '-70px' }}>Códigos de Referencia</h>
            <Col style={{ marginRight: '-200px' }}>
              <input
                style={paddingInput()}
                updatable={true}
                type="text"
                onKeyUp={(event) => addTags(event)}
                placeholder="O presione Enter para insertar códigos"
                onKeyDown={handleKeyDown}
              />
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
              </div>
              <div
                style={{
                  position: 'absolute',
                  top: '1px',
                  'margin-left': '525px',
                }}
              >
                <Button
                  style={{
                    'font-size': '20px',
                    'border-radius': '50%',
                    width: '40px',
                    height: '40px',
                    'line-height': '2px',
                    'margin-left': '-350px',
                  }}
                  onClick={() =>
                    Confirm.open({
                      title: 'Insertar Codigos',
                      message: '¿Está seguro de que quiere insertar estos codigos?',
                      onok: () => {
                        GuardarCodigos();
                      },
                    })
                  }
                  color="primary"
                >
                  +
                </Button>
              </div>
              <Row style={{ marginRight: '-150px', marginLeft: '-100px' }}>
                <h>Marca</h>
                <Col sm={{ size: 'auto' }}>
                  <div style={{ marginLeft: '-15px' }}>
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
                  </div>
                  <br />
                  <label style={{ 'margin-left': '380px', paddingTop: '-10px' }}># Pasillo</label>
                  <Row>
                    <h style={{ 'margin-left': '-45px' }}>Bodega</h>
                    <Col sm={{ size: 'auto' }} style={{ 'margin-left': '-25px' }}>
                      <SelectSearch
                        class="selectsearch2"
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
                    <AvForm>
                      <AvField
                        style={{
                          width: '90px',
                          'margin-left': '50px',
                          'border-radius': '26px',
                        }}
                        className="form-control"
                        type="Number"
                        name="precio1"
                        id="precio1"
                        value={seleccionado.precio[0] ? seleccionado.precio[0] : 0}
                      />
                    </AvForm>
                  </Row>
                  <br />
                  <br />
                  <Row style={{ marginLeft: '-60px' }}>
                    <h>Inventario</h>
                    <Col sm={{ size: 'auto' }} style={{ marginLeft: '50px', top: '-20px' }}>
                      <h style={{ 'margin-left': '5px' }}>Cantidad</h>
                      <input
                        style={paddingAvInputCantidades()}
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
                    <Col sm={{ size: 'auto' }} style={{ top: '-20px' }}>
                      <h style={{ 'margin-left': '-15px' }}>Cantidad Mínima</h>
                      <input
                        style={paddingAvInputCantidades()}
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
                  <Row>
                    <h style={{ marginLeft: '-90px' }}>Codigo de Barra</h>
                    <AvForm>
                      <Col style={{ paddingRight: '-25px', marginLeft: '40px' }}>
                        <AvField
                          style={paddingAvInput()}
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
                        <Row>
                          <Col sm={{ size: 'auto' }}>
                            <Barcode value={seleccionado.nombre} />
                          </Col>
                        </Row>
                      </Col>
                    </AvForm>
                  </Row>
                </Col>
              </Row>
            </Col>
            <h style={{ marginLeft: '10px' }}>Área</h>
            <Col style={{ marginLeft: '40px' }}>
              <AvForm>
                <AvField
                  style={{
                    'border-radius': '26px',
                    width: '320px',
                  }}
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
              </AvForm>
              <Row style={{ marginLeft: '-120px' }}>
                <label>Proveedor</label>
                <SelectSearch
                  search
                  onChange={setSize6}
                  placeholder="Encuentre el Proveedor del Producto"
                  required
                  autoComplete
                  options={proveedores}
                  onClick={handleOnChange(size6)}
                  value={size6}
                />
                <Col sm={{ size: 'auto' }} style={{ top: '-15px', marginLeft: '60px' }}>
                  <label style={{ top: '-200px' }}>Precio Proveedor</label>
                  <input
                    style={paddingAvInputCantidades()}
                    className="form-control"
                    type="number"
                    id="precioprov3"
                    onChange={(e) => manejarCambioPrecioProveedor(e, 7)}
                    value={
                      seleccionado.proveedores[0] !== undefined
                        ? seleccionado.proveedores[0].precio
                        : ''
                    }
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '28px',
                      'margin-left': '320px',
                    }}
                  >
                    <Button
                      style={{
                        'font-size': '20px',
                        'border-radius': '50%',
                        width: '40px',
                        height: '40px',
                        'line-height': '2px',
                        'margin-left': '-350px',
                      }}
                      color="primary"
                      onClick={() => onChangeProv()}
                    >
                      +
                    </Button>
                  </div>
                </Col>
                <div style={paddingdiv()}>
                  <ul style={paddingul()}>
                    {tagsProveedores.map((tag, index) => (
                      <li style={paddingmain()} key={index}>
                        <span style={paddingtitle()}>{tag.name}</span>
                        <i style={paddingclose()} onClick={() => removeTagsProv(index)}>
                          x
                        </i>
                      </li>
                    ))}
                  </ul>
                </div>
                <div />

                <br />
                <br />
                <br />
                <br />
                <AvForm>
                  <Row>
                    <label style={{ 'margin-left': '10px' }}>Precios de Venta</label>
                    <Col sm={{ size: 'auto' }} style={{ top: '-35px' }}>
                      <div>
                        <label style={{ paddingRight: '-300px' }}>Precio 1</label>
                        <AvField
                          style={paddingAvInputCantidades()}
                          className="form-control"
                          type="Number"
                          name="precio1"
                          id="precio1"
                          errorMessage="Obligatorio"
                          validate={{
                            required: { value: true },
                          }}
                          value={seleccionado.precio[0] ? seleccionado.precio[0] : 0}
                        />
                      </div>
                    </Col>
                    <Col sm={{ size: 'auto' }} style={{ marginLeft: '-20px', top: '-35px' }}>
                      <label style={{ 'margin-right': '5px' }}>Precio 2</label>
                      <AvField
                        style={paddingAvInputCantidades()}
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
                    </Col>
                    <Col sm={{ size: 'auto' }} style={{ marginLeft: '-20px', top: '-35px' }}>
                      <label style={{ 'margin-left': '10px' }}>Precio 3</label>
                      <AvField
                        style={paddingAvInputCantidades()}
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
                    </Col>
                  </Row>
                </AvForm>
              </Row>
              <Row>
                <Col style={{ 'margin-left': '-50px' }}>
                  <Button
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                      'margin-left': '-20px',
                      'border-radius': '26px',
                    }}
                    onClick={() => setFiles([])}
                  >
                    <Remove width="25px" height="25px" />
                  </Button>
                  <h style={{ 'margin-left': '-240px' }}>Imagen del Producto</h>
                  <section style={{ paddingLeft: '40px' }} className="container">
                    <div style={baseStyle} {...getRootProps({ className: 'dropzone' })}>
                      <input {...getInputProps()} />
                      <br />
                      <br />
                      <p>Arrastre la imagen aqui o de clic para seleccionar</p>
                    </div>
                  </section>
                  <Col>
                    <div style={{ marginTop: -170, marginRight: '350px' }}>
                      <aside style={thumbsContainer}>{thumbs}</aside>
                    </div>
                  </Col>
                </Col>
              </Row>
            </Col>
          </Row>
          <br />
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
      <Agregar isOpen={modalAgregar} change={() => cerraroAbrirModalMarca()} />
      <AgregarProveedor isOpen={modalInsertar} change={() => cerraroAbrirModal()} />
      <AgregarBodega isOpen={modalAgregarBodega} change={() => cerraroAbrirModalBodega()} />
    </div>
  );
}
