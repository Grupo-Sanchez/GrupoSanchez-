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
import { Dropdown, DropdownButton } from 'react-bootstrap';
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
import { ReactComponent as Plus } from '../Icons/plus.svg';
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
  const [descripcionRapida, setdescripcionrapida] = useState('');
  const [preciouno, setprecio1] = useState(0);
  const [preciodos, setprecio2] = useState(0);
  const [preciotres, setprecio3] = useState(0);
  const [startDate, setStartDate] = useState(new Date());
  const [marca, setMarca] = useState('');
  const [bodega, setBodega] = useState('');
  const [modalAgregarBodega, setModalAgregarBodega] = useState(false);
  const [cod7, setcod7] = useState('');
  const [size, setSize] = useState('1');
  const [size2, setSize2] = useState('2');
  const [size3, setSize3] = useState('3');
  const [size4, setSize4] = useState('4');
  const [cantidadProducto, setcantidadProducto] = useState(0);
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
  const [tagsBodegas, settagsBodegas] = useState([]);
  let [tempBod, settempBod] = useState([]);
  const [tagstemp, setTagsTemp] = useState([]);
  const [codRef, setCodRef] = useState('');
  const [seleccionado, setSeleccionado] = useState({
    descripcion: '',
    area: '',
    codigos: [],
    proveedores: [],
    codigoPrincipal: '',
    marca: [],
    precio: [],
    cantidad: 1,
    bodega: [],
    codigoBarra: '',
    descripcion_larga: '',
    cantidad_minima: 1,
    productoExento: false,
  });
  const [seleccionadorapido, setSeleccionadorapido] = useState({
    descripcion: '',
    area: '',
    codigos: [],
    proveedores: [],
    codigoPrincipal: '',
    marca: [],
    precio: [],
    cantidad: 1,
    bodega: [],
    codigoBarra: '',
    descripcion_larga: '',
    cantidad_minima: 1,
    productoExento: false,
  });
  const [codigoprincipal, setcodigoprincipal] = useState('');
  const [cantidadRapida, setcantidadRapida] = useState(1);
  const [descripcion, setdescripcion] = useState('');
  const [precioRapida, setprecioRapida] = useState(0);
  const [codigobarra, setCodigobarra] = useState('');
  const [productoExento, setProductoExento] = useState(false);
  const [cantsel, setCantsel] = useState(1);
  const [cantminsel, setCantminsel] = useState(0);
  const [codigoBarra, setCodigoBarra] = useState('');
  let [proveedores, setProveedores] = useState([]);
  const [productos, setProductos] = useState([]);
  let [marcas, setMarcas] = useState([]);
  let [bodegas, setBodegas] = useState([]);
  const fecthMarcas = async () => {
    await axios.get('http://localhost:3001/api/marca').then((response) => {
      const marcasobtenidas = response.data;
      const marcasAgregar = [];
      for (let index = 0; index < marcasobtenidas.length; index++) {
        const element = marcasobtenidas[index];
        marcasAgregar.push({
          value: element._id,
          name: element.nombre,
        });
        alert(element._id);
      }
      setMarcas(marcasAgregar);
    });
  };
  const [precioprovedor1, setPrecioProvedor1] = useState(0);
  const [precioprovedor2, setPrecioProvedor2] = useState('');
  const [precioprovedor3, setPrecioProvedor3] = useState('');
  const [precioprovedor4, setPrecioProvedor4] = useState('');
  const [precioprovedor5, setPrecioProvedor5] = useState('');
  const [precioprovedor6, setPrecioProvedor6] = useState(0);
  const [precioprovedor7, setPrecioProvedor7] = useState(0);
  const fecthBodegas = async () => {
    await axios.get('http://localhost:3001/api/bodegas').then((response) => {
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
          representante: element.nombre,
          apellidos: element.apellidos,
          email: element.email,
          telefono: element.telefono,
          direccion1: element.direccion1,
          ciudad: element.ciudad,
          departamento: element.departamento,
          pais: element.pais,
          comentario: element.comentario,
          _v: element._v,
        });
      }
      setProveedores(proveedoresagregados);
    });
  };
  const removeTagsProv = (index) => {
    let provAgregar = [];
    for (let inde = 0; inde < tagsProveedores.length; inde++) {
      const element2 = tagsProveedores[inde];
      if (inde === index) {
        provAgregar.push(element2);
      }
    }

    //alert(JSON.stringify(provAgregar));
    for (let index2 = 0; index2 < provAgregar.length; index2++) {
      const element = provAgregar[index2];
      proveedores.push(element);
    }
    setProveedores(proveedores);
    //alert(JSON.stringify(proveedores));
    tagsProveedores.splice(index, 1);
  };
  const removeTagsBodega = (index) => {
    //setBodegas([...bodegas, tagsBodegas[index]]);
    let provAgregar = [];
    for (let inde = 0; inde < tagsBodegas.length; inde++) {
      const element2 = tagsBodegas[inde];
      if (inde === index) {
        provAgregar.push(element2);
      }
    }

    //alert(JSON.stringify(provAgregar));
    for (let index2 = 0; index2 < provAgregar.length; index2++) {
      const element = provAgregar[index2];
      bodegas.push(element);
    }
    setBodegas(bodegas);
    //alert(JSON.stringify(proveedores));
    tagsBodegas.splice(index, 1);
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
      descripcion: seleccionado.descripcion,
      area: seleccionado.area,
      codigos: seleccionado.codigos,
      proveedores: seleccionado.proveedores,
      codigoPrincipal: seleccionado.codigoPrincipal,
      marca: seleccionado.marca,
      bodega: seleccionado.bodega,
      precios: seleccionado.precio,
      cantidad: seleccionado.cantidad,
      codigoBarra: seleccionado.codigoBarra,
      descripcion_larga: seleccionado.descripcion_larga,
      cantidad_minima: seleccionado.cantidad_minima,
      productoExento: seleccionado.productoExento,
      fecha_creacion: hoy.toLocaleDateString('en-US'),
    };
    const res = await axios.post('http://localhost:3001/api/productos', campos);
    console.log(res);
    Confirm.open({
      title: '',
      message: '¡Producto Agregado!',
      onok: () => {},
    });
    fecthProductos();
    seleccionado.descripcion = '';
    setcantidadProducto(0);
    seleccionado.area = '';
    seleccionado.codigoPrincipal = '';
    seleccionado.codigoBarra = '';
    seleccionado.descripcion_larga = '';
    seleccionado.cantidad = '';
    seleccionado.bodega = [];
    seleccionado.cantidad_minima = '';
    seleccionado.marca = [];
    seleccionado.codigos = [];
    seleccionado.precio = [];
    seleccionado.proveedores = [];
    seleccionado.fecha_creacion = '';
    setTagsTemp([]);
    settagsBodegas([]);
    settagsProveedores([]);
    setTags([]);
    settempBod([]);
    settempProv([]);
    setprecio1(0);
    setprecio2(0);
    setprecio3(0);
    setCantsel(0);
    setCantminsel(0);
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

  let [singleFiles, setSingleFiles] = useState([]);
  const [files, setFiles] = useState([]);
  const [singleProgress, setSingleProgress] = useState(0);
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
      console.log('ACAAAAAAAAAAAAA');
      setSingleFiles(acceptedFiles);
    },
  });
  const singleFileUpload = async (data1, options1) => {
    try {
      await axios.post('http://localhost:3001/api/SingleFile', data1, options1);
    } catch (error) {
      alert(`ACA: , ${error}`);
    }
    return null;
  };
  const removerImagen = () => {
    setFiles([]);
    setSingleFiles([]);
  };
  const singleFileOptions = {
    onUploadProgress: (progressEvent) => {
      const { loaded, total } = progressEvent;
      const percentage = Math.floor(((loaded / 1000) * 100) / (total / 1000));
      setSingleProgress(percentage);
    },
  };
  const uploadSingleFile = async () => {
    const formData = new FormData();
    /*let valores = {
      idProducto: 'simonn',
      file: singleFiles[0],
    };*/
    singleFiles[0].idProducto = 'asi es';
    formData.append('id', seleccionado.codigoPrincipal);
    formData.append('file', singleFiles[0]);
    await singleFileUpload(formData, singleFileOptions);
  };
  const thumbs = files.map((file) => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>{<img src={file.preview} style={img} />}</div>
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
  };
  const handleOnChange = (value) => {
    if (tempProv.length > 0) {
      //setProveedores([...proveedores, tempProv]);
    }
    tempProv.push(proveedores.filter((item) => item.value === value)[0]);
    proveedores = proveedores.filter((item) => item.value !== value);
  };
  const handleOnChangeBodega = (value) => {
    tempBod.push(bodegas.filter((item) => item.value === value)[0]);
    bodegas = bodegas.filter((item) => item.value !== value);
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
  const manejarCambioCodRef = (e) => {
    setCodRef(e.target.value);
  };
  const manejarCambioRapida = (e) => {
    setcodigoprincipal(e.target.value);
  };
  const manejarCambiodescripcionRapida = (e) => {
    setdescripcionrapida(e.target.value);
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
  const manejarCambioPrecio1 = (e, n) => {
    setprecio1(e.target.value);
  };
  const manejarCambioPrecio2 = (e, n) => {
    setprecio2(e.target.value);
  };
  const manejarCambioPrecio3 = (e, n) => {
    setprecio3(e.target.value);
  };
  const manejarCambioPrecioProveedor = (e) => {
    setPrecioProvedor7(e.target.value);
  };
  const manejarCambioPrecioBodega = (e) => {
    setPrecioProvedor6(e.target.value);
  };
  const manejarCambioCantidadBodega = (e) => {
    setPrecioProvedor1(e.target.value);
  };
  const cerrarModalAgregarProducto = () => {
    props.change();
    seleccionado.descripcion = '';
    seleccionado.area = '';
    seleccionado.codigoPrincipal = '';
    seleccionado.codigoBarra = '';
    seleccionado.descripcion_larga = '';
    seleccionado.cantidad = '';
    seleccionado.bodega = [];
    seleccionado.cantidad_minima = '';
    seleccionado.marca = [];
    seleccionado.codigos = [];
    seleccionado.precio = [];
    seleccionado.proveedores = [];
    seleccionado.fecha_creacion = '';
    setcantidadProducto(0);
    setTagsTemp([]);
    settagsBodegas([]);
    settagsProveedores([]);
    setTags([]);
    settempBod([]);
    settempProv([]);
    setprecio1(0);
    setprecio2(0);
    setprecio3(0);
    setCantsel(0);
    setCantminsel(0);
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
    setCantsel(1);
    setCantminsel(1);
    setCodigobarra('');
    setcodigoprincipal('');
    setProductoExento(false);
    setcantidadRapida(1);
    setdescripcionrapida('');
    setprecioRapida(1);
    seleccionado.area = '';
    seleccionado.codigoPrincipal = '';
    seleccionado.codigoBarra = '';
    seleccionado.descripcion_larga = '';
    seleccionado.descripcion = '';
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
    const num2 = cantidadProducto;
    if (num > num2) {
      document.getElementById('cantidad_minima').onchange = limit;
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
  };
  const insertarRapido = () => {
    seleccionado.cantidad = cantidadRapida;
    seleccionado.cantidad_minima = 1;
    seleccionado.codigoPrincipal = codigoprincipal;
    seleccionado.descripcion = descripcionRapida;
    seleccionado.codigoBarra = codigobarra;

    if (productoExento) {
      seleccionado.productoExento = true;
    }
    if (precioRapida !== 0) {
      seleccionado.precio.push(precioRapida);
    }
    const valorInsertar = seleccionado;
    const dataNueva = data;
    dataNueva.push(valorInsertar);
    setData(dataNueva);
    if (
      seleccionado.codigoPrincipal !== '' &&
      isAlphanumeric(seleccionado.codigoPrincipal) &&
      seleccionado.precio.length > 0 &&
      seleccionado.descripcion.toString().trim() !== '' &&
      isAlphanumeric(seleccionado.codigoBarra) &&
      seleccionado.codigoBarra.toString().trim() !== '' &&
      cantidadRapida > 0
    ) {
      if (regex.test(seleccionado.descripcion)) {
        prueba();
        setprecioRapida(0);
        setProductoExento(false);
        setcantidadRapida(1);
        setcodigoprincipal('');
        setdescripcionrapida('');
        setCodigobarra('');
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
  const insertar = () => {
    let codigoPrincipalRepetido = false;
    for (let index = 0; index < productos.length; index++) {
      const element = productos[index];
      if (element.codigoPrincipal === seleccionado.codigoPrincipal) {
        codigoPrincipalRepetido = true;
        break;
      }
    }
    if (!codigoPrincipalRepetido) {
      seleccionado.cantidad = cantidadProducto;
      seleccionado.cantidad_minima = cantminsel;
      seleccionado.bodega = tagsBodegas;
      seleccionado.codigos = tags;
      seleccionado.proveedores = tagsProveedores;

      if (productoExento) {
        seleccionado.productoExento = true;
      }
      if (preciouno !== 0) {
        seleccionado.precio.push(preciouno);
      }
      if (preciodos !== 0) {
        seleccionado.precio.push(preciodos);
      }
      if (preciotres !== 0) {
        seleccionado.precio.push(preciotres);
      }
      const valorInsertar = seleccionado;
      const dataNueva = data;
      dataNueva.push(valorInsertar);
      setData(dataNueva);
      if (
        seleccionado.codigoPrincipal !== '' &&
        isAlphanumeric(seleccionado.codigoPrincipal) &&
        seleccionado.codigos.length > 0 &&
        seleccionado.proveedores.length > 0 &&
        seleccionado.precio.length > 0 &&
        seleccionado.descripcion.toString().trim() !== '' &&
        seleccionado.area.toString().trim() !== '' &&
        isAlphanumeric(seleccionado.codigoBarra) &&
        seleccionado.codigoBarra.toString().trim() !== '' &&
        document.getElementById('cantidad').value > 0 &&
        document.getElementById('cantidad_minima').value > 0 &&
        seleccionado.marca[0] !== undefined
      ) {
        if (regex.test(seleccionado.descripcion) && regex.test(seleccionado.area)) {
          prueba();
          if (singleFiles) {
            uploadSingleFile();
          }
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
    } else {
      Confirm.open({
        title: 'Error',
        message: 'El codigo principal esta repetido.',
        onok: () => {},
      });
    }
  };
  const addTags = (event) => {
    let duplicadoPrincipal = false;
    if (event.key === 'Enter') {
      for (let index = 0; index < productos.length; index++) {
        if (productos[index].codigoPrincipal === event.target.value) {
          duplicadoPrincipal = true;
        }
      }
    }
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
            mensaje.push(element.descripcion);
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
      if (!duplicadoPrincipal) {
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
          setCodRef('');
        }
        event.target.value = '';
      } else {
        Confirm.open({
          title: 'Error',
          message:
            'Existen códigos duplicados en códigos primarios, verifique e intente nuevamente.',
        });
      }
    } else if (
      isAlphanumeric(event.target.value) &&
      event.target.value !== '' &&
      tags.length - 1 < 0
    ) {
      setCodigoBarra(event.target.value);
    }
  };
  const addTagsClick = (event) => {
    let duplicadoPrincipal = false;
    for (let index = 0; index < productos.length; index++) {
      if (productos[index].codigoPrincipal === event) {
        duplicadoPrincipal = true;
      }
    }
    if (!duplicadoPrincipal) {
      if (event !== '' && !isAlphanumeric(event)) {
        Confirm.open({
          title: 'Error',
          message: `El código tiene caracteres inválidos:${' '}`,
          onok: () => {},
        });
      } else if (event !== '') {
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
            if (element2 === event) {
              mensaje.push(element.descripcion);
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
          if (duplicates[i] === event) {
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
          setTags([...tags, event]);
          setTagsTemp([...tagstemp, event]);
          setCodRef('');
        }
      } else if (isAlphanumeric(event) && event !== '' && tags.length - 1 < 0) {
        setCodigoBarra(event);
      }
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Existen códigos principales con este código, verifique e intente nuevamente.',
      });
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === ' ') {
      e.preventDefault();
    }
  };
  const onChangeProv = () => {
    if (precioprovedor7 !== 0) {
      tempProv = tempProv.filter((x) => x != null);
      const uniqueData = [...new Set(tempProv)];
      //settagsProveedores([...tagsProveedores, tempProv]);
      tagsProveedores.push({
        name: uniqueData[0].name,
        value: uniqueData[0].value,
        representante: uniqueData[0].nombre,
        apellidos: uniqueData[0].apellidos,
        genero: uniqueData[0].genero,
        email: uniqueData[0].email,
        telefono: uniqueData[0].telefono,
        direccion1: uniqueData[0].direccion1,
        direccion2: uniqueData[0].direccion2,
        ciudad: uniqueData[0].ciudad,
        departamento: uniqueData[0].departamento,
        codigoPostal: uniqueData[0].codigoPostal,
        pais: uniqueData[0].pais,
        comentario: uniqueData[0].comentario,
        precio: precioprovedor7,
        _v: uniqueData[0]._v,
      });
      setSize6('6');
      settempProv([]);
      setPrecioProvedor7(0);
      setProveedores(proveedores.filter(({ item }) => !tagsProveedores.includes(item)));
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar el precio del proveedor',
        onok: () => {},
      });
    }
  };
  const onChangeBodega = () => {
    if (precioprovedor6 !== 0 && precioprovedor1 !== 0 && size7 !== '7') {
      tempBod = tempBod.filter((x) => x != null);
      const uniqueData = [...new Set(tempBod)];
      //settagsProveedores([...tagsProveedores, tempProv]);
      tagsBodegas.push({
        name: uniqueData[0].name,
        value: uniqueData[0].value,
        numPasillo: precioprovedor6,
        cantBodega: precioprovedor1,
      });
      //setTagsTempProveedor([...tagstempProveedor, tempProv]);
      setcantidadProducto(Number(precioprovedor1) + Number(cantidadProducto));
      setSize7('6');
      settempBod([]);
      setPrecioProvedor6(0);
      setPrecioProvedor1(0);
      setBodegas(bodegas.filter(({ item }) => !tagsBodegas.includes(item)));
    } else {
      Confirm.open({
        title: 'Error',
        message:
          'Debe seleccionar la bodega, ingresar el pasillo en el que esta el producto y la cantidad correspondiente',
        onok: () => {},
      });
    }
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
  function paddingclosebodega() {
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
      'margin-top': '8px',
      background: '#e9e3e3',
    };
  }
  function paddingmainbodegas() {
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
      'margin-top': '8px',
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
      overflow: 'auto',
      maxHeight: '100px',
    };
  }
  function paddingdivcodigosRef() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '48px',
      width: '300px',
      border: 'none',
      'border-radius': '10px',
      padding: '0 8px',
      'margin-left': '30px',
      overflow: 'auto',
      maxHeight: '100px',
      top: '20px',
    };
  }
  function paddingdivbodegas() {
    return {
      display: 'flex',
      'align-items': 'flex-start',
      'flex-wrap': 'wrap',
      'min-height': '48px',
      width: '400px',
      border: 'none',
      'border-radius': '10px',
      padding: '0 8px',
      'margin-left': '50px',
      paddingRight: '-250px',
      overflow: 'auto',
      maxHeight: '100px',
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
  function paddingAvInputObligatorio() {
    return {
      'margin-left': '-20px',
      'border-radius': '26px',
      width: '320px',
      'border-color': '#62d162',
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
  function paddingtitlebodega() {
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
  function paddingulbodegas() {
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
  const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
    <a
      href=""
      ref={ref}
      onClick={(e) => {
        e.preventDefault();
        onClick(e);
      }}
    >
      <Plus width="50px" height="50px" />
      {children}
    </a>
  ));
  return (
    <div id="target">
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{
          height: '100vh',
          'overflow-y': 'overflow',
          top: '20px',
          width: '1700px',
          maxWidth: '1700px',
          'border-radius': '36px',
          'overflow-x': 'overflow',
        }}
      >
        <Dropdown style={{ marginLeft: '-1560px', top: '20px' }}>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components" />
          <Dropdown.Menu
            style={{
              background: 'transparent',
              border: 'transparent',
              'padding-left': '55px',
              'margin-top': '-40px',
            }}
          >
            <Dropdown.Item
              style={{
                borderRadius: '36px',
                'background-color': '#fff1d6',
                height: '40px',
                'margin-top': '2px',
                'font-size': '23px',
              }}
              eventKey="1"
              onClick={() => setmodalCreacionRapida(true)}
            >
              Creación Rápida
            </Dropdown.Item>
            <Dropdown.Item
              style={{
                borderRadius: '36px',
                'background-color': '#fff1d6',
                height: '40px',
                'margin-top': '2px',
                'font-size': '23px',
              }}
              eventKey="2"
              onClick={() => setModalAgregar(true)}
            >
              Crear Marca
            </Dropdown.Item>
            <Dropdown.Item
              style={{
                borderRadius: '36px',
                'background-color': '#fff1d6',
                height: '40px',
                'margin-top': '2px',
                'font-size': '23px',
              }}
              eventKey="3"
              onClick={() => setModalInsertar(true)}
            >
              Crear Proveedor
            </Dropdown.Item>
            <Dropdown.Item
              style={{
                borderRadius: '36px',
                'background-color': '#fff1d6',
                height: '40px',
                'margin-top': '2px',
                'font-size': '23px',
              }}
              eventKey="4"
              onClick={() => setModalAgregarBodega(true)}
            >
              Crear Bodega
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div>
          <h2>CREACIÓN DE PRODUCTO NUEVO</h2>
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
              maxWidth: '1300px',
              width: '1100px',
              'border-radius': '36px',
              position: 'absolute',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            isOpen={modalCreacionRapida}
          >
            <div>
              <h3>CREACIÓN RÁPIDA DE PRODUCTO NUEVO</h3>
            </div>
            <ModalBody>
              <br />
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                <Col>
                  <label>Código Principal</label>
                </Col>
                <Col style={{ 'margin-left': '-15px ' }}>
                  <input
                    style={paddingInput()}
                    updatable={true}
                    type="text"
                    value={codigoprincipal}
                    placeholder="Inserte codigo principal"
                    onChange={manejarCambioRapida}
                  />
                </Col>
                <Col style={{ marginLeft: '20px' }}>
                  <label>Inventario</label>
                </Col>
                <Col style={{ top: '-25px' }}>
                  <h style={{ 'font-size': '18px' }}>Cantidad</h>
                  <input
                    style={paddingAvInputCantidades()}
                    className="form-control"
                    type="number"
                    id="cantidad"
                    value={cantidadRapida}
                    min={1}
                    onChange={(e) => manejarCambiocantRapida(e, 0)}
                  />
                </Col>
              </Row>
              <br />
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                <Col>
                  <label>Descripción</label>
                </Col>
                <Col style={{ marginLeft: '-30px' }}>
                  <AvForm>
                    <AvInput
                      style={paddingAvInput()}
                      className="form-control"
                      type="text"
                      name="descripcion"
                      id="descripcion"
                      errorMessage="Nombre Inválido"
                      validate={{
                        required: { value: true },
                        pattern: { value: regex },

                        minLength: { value: 1 },
                      }}
                      value={descripcionRapida}
                      onChange={(e) => manejarCambiodescripcionRapida(e)}
                    />
                  </AvForm>
                </Col>
                <Col>
                  <label>Precio de Venta</label>
                </Col>
                <Col style={{ 'margin-left': '-30px' }}>
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
              <Row style={{ 'font-size': '23px', 'text-align': 'left' }}>
                <Col>
                  <label>Producto Exento</label>
                </Col>
                <Col style={{ marginLeft: '-660px' }}>
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
              <br />
              <Row style={{ 'font-size': '23px', 'text-align': 'left', marginLeft: '0px' }}>
                <label>Código de Barra</label>
                <Col style={{ marginLeft: '20px' }}>
                  <input
                    style={paddingInput()}
                    updatable={true}
                    type="text"
                    value={codigobarra}
                    placeholder="Inserte codigo de barra"
                    onChange={manejarCambioRapidaBarra}
                    onKeyDown={handleKeyDown}
                  />
                </Col>
              </Row>
              <br />
              <div style={{ marginLeft: '-250px' }}>
                <Barcode value={codigobarra} />
              </div>
            </ModalBody>
            <ModalFooter>
              <button
                className="btn btn-primary"
                style={{
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'green',
                  border: '2px solid green',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                onClick={() =>
                  Confirm.open({
                    title: 'Insertar Producto',
                    message: '¿Esta seguro de que quiere insertar este producto?',
                    onok: () => {
                      insertarRapido();
                    },
                  })
                }
              >
                Agregar Producto
              </button>
              <button
                style={{
                  'border-radius': '26px',
                  'border-color': '#ff9800',
                  color: 'red',
                  border: '2px solid red',
                  'background-color': 'white',
                  'font-size': '16px',
                  cursor: 'pointer',
                }}
                className="btn btn-danger"
                onClick={(e) => descartarcambiosCreacionRapida()}
              >
                Cancelar
              </button>
            </ModalFooter>
          </Modal>
          <AvForm>
            <Row style={{ marginLeft: '-105px' }}>
              <h
                style={{
                  marginRight: '55px',
                  paddingRight: '60px',
                  color: '#62d162',
                  'font-size': '23px',
                }}
              >
                Descripcion
              </h>
              <Col style={{ marginLeft: '10px ' }}>
                <AvField
                  style={paddingAvInputObligatorio()}
                  className="form-control"
                  type="text"
                  name="descripcion"
                  id="descripcion"
                  errorMessage=" "
                  validate={{
                    required: { value: true },
                    pattern: { value: regex },

                    minLength: { value: 1 },
                  }}
                  value={seleccionado ? seleccionado.descripcion : ''}
                  onChange={(e) => manejarCambio(e)}
                />
                <Row style={{ marginLeft: '-75px' }}>
                  <h
                    style={{
                      paddingRight: '80px',
                      marginLeft: '-185px',
                      color: '#62d162',
                      'font-size': '23px',
                    }}
                  >
                    Codigo Principal
                  </h>
                  <Col>
                    <AvField
                      style={paddingAvInputObligatorio()}
                      className="form-control"
                      type="text"
                      name="codigoPrincipal"
                      id="codigoPrincipal"
                      errorMessage=" "
                      validate={{
                        required: { value: true },
                        pattern: { value: regex },
                        minLength: { value: 1 },
                      }}
                      value={seleccionado ? seleccionado.codigoPrincipal : ''}
                      onChange={(e) => manejarCambio(e)}
                      onKeyDown={handleKeyDown}
                    />
                  </Col>
                </Row>
              </Col>
              <label style={{ 'margin-left': '-100px', fontSize: '23px' }}>
                Descripción
                <br />
                especifica{' '}
              </label>
              <Col style={{ 'margin-left': '35px' }}>
                <FormGroup>
                  <AvField
                    style={paddingDescripciones()}
                    type="textarea"
                    name="descripcion_larga"
                    id="descripcion_larga"
                    value={seleccionado ? seleccionado.descripcion_larga : ''}
                    onChange={manejarCambio}
                  />
                </FormGroup>
              </Col>
            </Row>
          </AvForm>
          <Row>
            <h style={{ marginLeft: '-70px', 'font-size': '23px' }}>Códigos de Referencia</h>
            <Col style={{ marginRight: '-200px' }}>
              <input
                style={paddingInput()}
                updatable={true}
                type="text"
                onKeyUp={(event) => addTags(event)}
                placeholder="O presione Enter para insertar códigos"
                onKeyDown={handleKeyDown}
                value={codRef}
                onChange={(e) => manejarCambioCodRef(e)}
              />
              <br />
              <div style={paddingdivcodigosRef()}>
                <ul style={paddingul()}>
                  {tags.map((tag, index) => (
                    <li style={paddingmain()} key={index}>
                      <span style={paddingtitle()}>{tag}</span>
                      <i style={paddingclose()} onClick={() => removeTags(index)}>
                        <Remove width="20px" height="20px" />
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
                    'background-color': 'transparent',
                    border: 'none',
                    position: 'absolute',
                    top: '-13px',
                    left: '-203px',
                    outline: 'none',
                    'box-shadow': 'none',
                  }}
                  onClick={() => addTagsClick(codRef)}
                >
                  <Plus width="40px" height="50px" />
                </Button>
              </div>
              <Row>
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
              </Row>
              <Row style={{ marginRight: '-100px', marginLeft: '-50px' }}>
                <label style={{ marginLeft: '-190px', 'font-size': '23px' }}>Marca</label>
                <Col>
                  <div style={{ marginLeft: '102px' }}>
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
                  <Row>
                    <h style={{ 'margin-left': '-60px', 'font-size': '23px' }}>Bodega</h>
                    <Col style={{ 'margin-left': '85px' }}>
                      <SelectSearch
                        class="selectsearch2"
                        printOptions="on-focus"
                        search
                        placeholder="Encuentre la Bodega del Producto"
                        required
                        autoComplete
                        options={bodegas}
                        value={size7}
                        onClick={handleOnChangeBodega(size7)}
                        onChange={setSize7}
                      />
                    </Col>
                    <Col
                      style={{
                        width: '90px',
                        'margin-left': '25px',
                      }}
                    >
                      <div>
                        <label
                          style={{
                            fontSize: '14px',
                            top: '-22px',
                            position: 'relative',
                            'margin-left': '-40px',
                          }}
                        >
                          Cantidad
                        </label>
                        <input
                          style={{
                            width: '90px',
                            'border-radius': '26px',
                            top: '-31px',
                            position: 'relative',
                          }}
                          className="form-control"
                          type="Number"
                          onChange={(e) => manejarCambioCantidadBodega(e)}
                          value={precioprovedor1}
                          min={1}
                        />
                      </div>
                    </Col>
                    <Col
                      style={{
                        width: '80px',
                        'margin-left': '-45px',
                      }}
                    >
                      <div>
                        <label
                          style={{
                            fontSize: '14px',
                            top: '-22px',
                            position: 'relative',
                            'margin-left': '-60px',
                          }}
                        >
                          # Pasillo
                        </label>
                        <input
                          style={{
                            width: '70px',
                            'border-radius': '26px',
                            top: '-31px',
                            position: 'relative',
                          }}
                          className="form-control"
                          type="Number"
                          onChange={(e) => manejarCambioPrecioBodega(e)}
                          value={precioprovedor6}
                          min={1}
                        />
                      </div>
                    </Col>
                    <Col style={{ width: '40px' }}>
                      <Button
                        style={{
                          'background-color': 'transparent',
                          border: 'none',
                          position: 'absolute',
                          top: '-13px',
                          outline: 'none',
                          'box-shadow': 'none',
                          'margin-left': '-130px',
                        }}
                        onClick={() => onChangeBodega()}
                      >
                        <Plus width="40px" height="50px" />
                      </Button>
                    </Col>
                    <div style={paddingdivbodegas()}>
                      <ul style={paddingulbodegas()}>
                        {tagsBodegas.map((tag, index) => (
                          <li style={paddingmainbodegas()} key={index}>
                            <span style={paddingtitlebodega()}>
                              {tag.name},# {tag.cantBodega} ,Pasillo {tag.numPasillo}
                            </span>
                            <i style={paddingclosebodega()} onClick={() => removeTagsBodega(index)}>
                              <Remove width="20px" height="20px" />
                            </i>
                          </li>
                        ))}
                        <br />
                      </ul>
                    </div>
                  </Row>
                  <br />
                  <br />
                  <Row style={{ marginLeft: '-60px' }}>
                    <label style={{ 'font-size': '23px' }}>Inventario</label>
                    <Col
                      sm={{ size: 'auto' }}
                      style={{ marginLeft: '95px', top: '-20px', 'font-size': '20px' }}
                    >
                      <h style={{ 'margin-left': '5px', color: '#62d162' }}>Cantidad</h>
                      <input
                        style={paddingAvInputCantidades()}
                        className="form-control"
                        type="number"
                        id="cantidad"
                        value={cantidadProducto}
                        disabled={true}
                        min={
                          document.getElementById('cantidad_minima')
                            ? document.getElementById('cantidad_minima').value
                            : 0
                        }
                        onChange={(e) => manejarCambiocant(e, 0)}
                      />
                    </Col>
                    <Col sm={{ size: 'auto' }} style={{ top: '-20px' }}>
                      <h style={{ 'margin-left': '-15px', 'font-size': '20px' }}>Cantidad Mínima</h>
                      <input
                        style={paddingAvInputCantidades()}
                        className="form-control"
                        type="number"
                        id="cantidad_minima"
                        min={1}
                        max={cantidadProducto}
                        value={cantminsel}
                        onChange={(e) => manejarCambiocantmin(e, 1)}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <h style={{ marginLeft: '-50px', 'font-size': '23px' }}>Codigo de Barra</h>
                    <AvForm>
                      <Col style={{ paddingRight: '-25px', marginLeft: '35px' }}>
                        <AvField
                          style={paddingAvInput()}
                          className="form-control"
                          type="text"
                          name="codigoBarra"
                          id="nombre_agregar"
                          errorMessage="Codigo de Barra Inválido"
                          validate={{
                            required: { value: true },
                            pattern: { value: regex },
                            minLength: { value: 1 },
                          }}
                          value={seleccionado ? seleccionado.codigoBarra : ''}
                          onChange={(e) => manejarCambio(e)}
                          onKeyDown={handleKeyDown}
                        />
                        <Row>
                          <Col sm={{ size: 'auto' }}>
                            <Barcode value={seleccionado.codigoBarra} />
                          </Col>
                        </Row>
                      </Col>
                    </AvForm>
                  </Row>
                </Col>
              </Row>
            </Col>
            <Col style={{ 'max-width': '120px' }}>
              <label style={{ fontSize: '23px', position: 'relative', 'margin-left': '13px' }}>
                Departamento
              </label>
            </Col>
            <Col>
              <AvForm>
                <AvField
                  style={{
                    'border-radius': '26px',
                    width: '320px',
                    marginLeft: '45px',
                  }}
                  className="form-control"
                  type="text"
                  name="area"
                  id="area"
                  errorMessage=" "
                  validate={{
                    required: { value: true },
                    pattern: { value: regex },
                    minLength: { value: 1 },
                  }}
                  value={seleccionado ? seleccionado.area : ''}
                  onChange={(e) => manejarCambio(e)}
                />
              </AvForm>
              <Row style={{ top: '30px', position: 'relative' }}>
                <h style={{ fontSize: '23px', marginLeft: '-90px' }}>Proveedor</h>
                <Col>
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
                </Col>
                <Col style={{ marginLeft: '30px', 'max-width': '90px' }}>
                  <input
                    style={paddingAvInputCantidades()}
                    className="form-control"
                    type="number"
                    id="precioprov3"
                    onChange={(e) => manejarCambioPrecioProveedor(e)}
                    value={precioprovedor7}
                    min={1}
                  />
                </Col>
                <Col style={{ width: '40px' }}>
                  <Button
                    style={{
                      'background-color': 'transparent',
                      border: 'none',
                      position: 'absolute',
                      outline: 'none',
                      'box-shadow': 'none',
                      top: '-10px',
                      marginLeft: '-100px',
                    }}
                    onClick={(e) => onChangeProv(e)}
                  >
                    <Plus width="40px" height="50px" />
                  </Button>
                </Col>
                <div style={paddingdiv()}>
                  <ul style={paddingul()}>
                    {tagsProveedores.map((tag, index) => (
                      <li style={paddingmain()} key={index}>
                        <span style={paddingtitle()}>
                          {tag.name}, L. {tag.precio}
                        </span>
                        <i style={paddingclose()} onClick={() => removeTagsProv(index)}>
                          <Remove width="20px" height="20px" />
                        </i>
                      </li>
                    ))}

                    <br />
                  </ul>
                </div>
                <div />
              </Row>
              <AvForm
                style={{
                  marginTop: '50px',
                }}
              >
                <Row>
                  <label style={{ 'margin-left': '-110px', marginTop: '-20px', fontSize: '23px' }}>
                    Precios de
                    <br /> Venta
                  </label>
                  <Col sm={{ size: 'auto' }} style={{ 'margin-left': '8px', top: '-30px' }}>
                    <div style={{ 'padding-left': '40px' }}>
                      <h
                        style={{
                          paddingRight: '-300px',
                          color: '#62d162',
                          fontSize: '23px',
                          top: '-5px',
                          position: 'relative',
                        }}
                      >
                        Precio 1
                      </h>
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
                        min={1}
                        onChange={(e) => manejarCambioPrecio1(e)}
                        value={preciouno}
                      />
                    </div>
                  </Col>
                  <Col sm={{ size: 'auto' }} style={{ marginLeft: '-20px', top: '-35px' }}>
                    <label style={{ 'margin-right': '5px', fontSize: '23px' }}>Precio 2</label>
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
                      onChange={(e) => manejarCambioPrecio2(e)}
                      value={preciodos}
                    />
                  </Col>
                  <Col sm={{ size: 'auto' }} style={{ marginLeft: '-20px', top: '-35px' }}>
                    <label style={{ 'margin-left': '10px', fontSize: '23px' }}>Precio 3</label>
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
                      onChange={(e) => manejarCambioPrecio3(e)}
                      value={preciotres}
                    />
                  </Col>
                </Row>
              </AvForm>
              <Row style={{ marginTop: '-25px' }}>
                <Col style={{ 'margin-left': '-50px' }}>
                  <Button
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                      'margin-left': '-20px',
                      'border-radius': '26px',
                    }}
                    onClick={() => removerImagen()}
                  >
                    <Remove width="25px" height="25px" />
                  </Button>
                  <h style={{ 'margin-left': '-240px' }}>Imagen del Producto</h>
                  <section style={{ paddingLeft: '100px' }} className="container">
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
          .....
          <br />
        </ModalBody>
        <ModalFooter>
          <button
            style={{
              'border-radius': '26px',
              'border-color': '#ff9800',
              color: 'green',
              border: '2px solid green',
              'background-color': 'white',
              'font-size': '16px',
              position: 'relative',
              cursor: 'pointer',
            }}
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
          <button
            style={{
              'border-radius': '26px',
              'border-color': '#ff9800',
              color: 'red',
              border: '2px solid red',
              'background-color': 'white',
              'font-size': '16px',
              cursor: 'pointer',
            }}
            className="btn btn-danger"
            onClick={(e) => descartarcambios()}
          >
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
