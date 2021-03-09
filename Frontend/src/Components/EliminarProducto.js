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
import SelectSearch from 'react-select-search';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import { useDropzone } from 'react-dropzone';
import imagePath from '../Icons/lupa1.jpeg';
import AgregarProveedor from './AgregarProveedor.jsx';
import AgregarBodega from './CrearBodega.jsx';
import Agregar from './AgregarMarca.jsx';
import AgregarProducto from './AgregarProducto';
import { ReactComponent as Logo } from '../Icons/edit.svg';
import { ReactComponent as Plus } from '../Icons/plus.svg';
import { ReactComponent as Remove } from '../Icons/remove.svg';
import { ReactComponent as Delete } from '../Icons/delete.svg';
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
export default function EliminarProducto(props) {
  const dataApuntes = [];
  const options = [
    { name: 'Swedish', value: 'sv' },
    { name: 'English', value: 'en' },
    { name: 'patito', value: 'patito' },
  ];
  const { Canvas } = require('canvas');
  const JsBarcode = require('jsbarcode');
  const [size, setSize] = useState('1');
  let [precioprov1, setPrecioProv1] = useState(true);
  const [codigoBarra, setCodigoBarra] = useState('');
  let [precioprov2, setPrecioProv2] = useState(true);
  const [tags, setTags] = useState([]);
  const [codes, setCodes] = useState([]);
  let [precioprov3, setPrecioProv3] = useState(true);
  let [precioprov4, setPrecioProv4] = useState(true);
  let [precioprov5, setPrecioProv5] = useState(true);
  let [precioprov6, setPrecioProv6] = useState(true);
  let [precioprov7, setPrecioProv7] = useState(true);
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
  const [banderaPrecios, setBanderaPrecios] = useState(false);
  const [data, setData] = useState(dataApuntes);
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
  const [modalAgregarBodega, setModalAgregarBodega] = useState(false);
  const array = [];
  const isAlphanumeric = require('is-alphanumeric');
  const [tagsProveedores, settagsProveedores] = useState([]);
  let [tempProv, settempProv] = useState([]);
  const [tagsBodegas, settagsBodegas] = useState([]);
  let [tempBod, settempBod] = useState([]);
  const [modalAgregarProducto, setModalAgregarProducto] = useState(false);
  const [tagstemp, setTagsTemp] = useState([]);
  let [proveedores, setProveedores] = useState([]);
  let [marcas, setMarcas] = useState([]);
  let [bodegas, setBodegas] = useState([]);
  const fecthProveedores = async () => {
    await axios.get('http://localhost:3001/api/proveedor').then((response) => {
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
  let cont = 1;
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
  const fecthData = () => {
    axios.get('http://localhost:3001/api/productos').then((response) => {
      setData(response.data);
    });
    fecthBodegas();
    fecthMarcas();
    fecthProveedores();
  };

  useEffect(() => {
    fecthData();
  }, []);
  const removeTagsProv = (index) => {
    settagsProveedores([
      ...tagsProveedores.filter((tag) => tagsProveedores.indexOf(tag) !== index),
    ]);
    fecthProveedores();
    setProveedores(proveedores.filter(({ item }) => !tagsProveedores.includes(item)));
  };

  const removeTagsBodega = (index) => {
    //setBodegas([...bodegas, tagsBodegas[index]]);
    settagsBodegas([...tagsBodegas.filter((tag) => tagsBodegas.indexOf(tag) !== index)]);
    fecthBodegas();
    setBodegas(bodegas.filter(({ item }) => !tagsBodegas.includes(item)));
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
      //setTagsTempProveedor([...tagstempProveedor, tempProv]);
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
    if (precioprovedor6 !== 0) {
      tempBod = tempBod.filter((x) => x != null);
      const uniqueData = [...new Set(tempBod)];

      //settagsProveedores([...tagsProveedores, tempProv]);
      tagsBodegas.push({
        name: uniqueData[0].name,
        value: uniqueData[0].value,
        numPasillo: precioprovedor6,
      });
      //setTagsTempProveedor([...tagstempProveedor, tempProv]);
      setSize7('6');
      settempBod([]);
      setPrecioProvedor6(0);
      setBodegas(bodegas.filter(({ item }) => !tagsBodegas.includes(item)));
    } else {
      Confirm.open({
        title: 'Error',
        message: 'Debe ingresar el pasillo en el que esta el producto',
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
  const removeTags = (index) => {
    setTags([...tags.filter((tag) => tags.indexOf(tag) !== index)]);
    if (index === 0) {
      setCodigoBarra(tags[1]);
    }
  };
  let proveedoresSeleccionados = [];
  const manejarCambioPrecioBodega = (e) => {
    setPrecioProvedor6(e.target.value);
  };
  const manejarCambioPrecioProveedor = (e) => {
    setPrecioProvedor7(e.target.value);
  };
  const handleOnChangeBodega = (value) => {
    tempBod.push(bodegas.filter((item) => item.value === value)[0]);
    bodegas = bodegas.filter((item) => item.value !== value);
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
      setBanderaPrecios(true);
    }
  };
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/productos/${memberId}`);
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
    Confirm.open({
      title: '',
      message: 'Producto Eliminado Exitosamente',
      onok: () => {
        setModalModificar(false);
      },
    });
  };

  const regex = /^[ña-zA-Z0-9\u00E0-\u00FC-\s]+$/;
  const [marcaSel, setMarcaSel] = useState([]);
  const [bodegaSel, setBodegaSel] = useState([]);
  const updateItem = async (Id) => {
    GuardarPrecio();
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

            break;
          }
        }
      }
    }
    if (
      tagsBodegas.length > 0 &&
      tags.length > 0 &&
      tagsProveedores.length > 0 &&
      seleccionado.precios.length > 0 &&
      seleccionado.descripcion.toString().trim() !== '' &&
      seleccionado.area.toString().trim() !== '' &&
      document.getElementById('modcantidad').value > 0 &&
      document.getElementById('modcantidad_minima').value > 0
    ) {
      if (
        regex.test(document.getElementById('modnombre').value) &&
        regex.test(document.getElementById('modarea').value)
        //isAlphanumeric(document.getElementById('modnombre').value) &&
        // isAlphanumeric(document.getElementById('modarea').value)
      ) {
        if (banderaPrecios) {
          setModalModificar(false);
          axios
            .put(`http://localhost:3001/api/productos/${Id}`, {
              descripcion: document.getElementById('modnombre').value,
              area: document.getElementById('modarea').value,
              codigoPrincipal: seleccionado.codigoPrincipal,
              codigos: tags,
              proveedores: tagsProveedores,
              marca: seleccionado.marca,
              bodega: tagsBodegas,
              precios: seleccionado.precios,
              cantidad: document.getElementById('modcantidad').value,
              codigoBarra: seleccionado.nombre,
              descripcion_larga: document.getElementById('descripcion2').value,
              cantidad_minima: document.getElementById('modcantidad_minima').value,
              productoExento: seleccionado.productoExento,
            })
            .then(
              Confirm.open({
                title: '',
                message: `Producto ${seleccionado.descripcion} modificado exitosamente`,
                onok: () => {
                  fecthData();
                },
              }),
            )
            .catch((error) => {
              console.log(error);
            });
        }
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
    setCodes(element.codigos);
    setCantminsel(element.cantidad_minima);
    setCantsel(element.cantidad);
    // setMarcaSel(element.marca[0].value);
    //setBodegaSel(element.bodega[0].value);
    //setNombre(element.nombre);
    setTagsTemp(element.codigos);
    settempProv(element.proveedores);
    settagsBodegas(seleccionado.bodega);
    //settempBod(tagsBodegas);
    setCodigoBarra(element.codigoBarra);
    setprecio1(element.precios[0]);
    setprecio2(element.precios[1]);
    setprecio3(element.precios[2]);
    settagsProveedores(element.proveedores);
    setTags(element.codigos);
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
  const manejarCambioCodRef = (e) => {
    setCodRef(e.target.value);
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
    setCodigoBarra(seleccionado.codigos[0]);
    setModalModificarCodigos(false);
  };
  const changeCode = () => {
    setCodigoBarra(codes[0]);
    setCodigo1(codes[0]);
    setCodigo2(codes[1]);
    setCodigo3(codes[2]);
    setCodigo4(codes[3]);
    setCodigo5(codes[4]);
    setCodigo6(codes[5]);
    setCodigo7(codes[6]);
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
    let entra = false;
    let mansajenot = '';
    let yaesta = false;
    if (
      isAlphanumeric(document.getElementById('mcod1').value) &&
      isAlphanumeric(document.getElementById('modcod2').value) &&
      isAlphanumeric(document.getElementById('modcod3').value) &&
      isAlphanumeric(document.getElementById('modcod4').value) &&
      isAlphanumeric(document.getElementById('modcod5').value) &&
      isAlphanumeric(document.getElementById('modcod6').value) &&
      isAlphanumeric(document.getElementById('modcod7').value)
    ) {
      if (document.getElementById('mcod1').value !== '') {
        array.push(codigo1);
      }
      if (document.getElementById('modcod2').value !== '') {
        array.push(codigo2);
      }
      if (document.getElementById('modcod3').value !== '') {
        array.push(codigo3);
      }
      if (document.getElementById('modcod4').value !== '') {
        array.push(codigo4);
      }
      if (document.getElementById('modcod5').value !== '') {
        array.push(codigo5);
      }
      if (document.getElementById('modcod6').value !== '') {
        array.push(codigo6);
      }
      if (document.getElementById('modcod7').value !== '') {
        array.push(codigo7);
      }
      let arrayVacio = false;
      if (array.length === 0) {
        arrayVacio = true;
      } else {
        setCodigoBarra(array[0]);
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
        let mensaje = [];
        let codigos2 = [];
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
      }
      if (!arrayVacio) {
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
          setCodes(array);
          setModalModificarCodigos(false);
        }
      } else {
        Confirm.open({
          title: 'Error',
          message: `Los Codigos de ${seleccionado.nombre} estan vacio`,
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
    if (document.getElementById('modcantidad').value <= 0) {
      document.getElementById('modcantidad').value = 1;
    } else {
      setCantsel(e.target.value);
    }
  };
  const addTags = (event) => {
    let duplicadoPrincipal = false;
    if (event.key === 'Enter') {
      for (let index = 0; index < data.length; index++) {
        if (data[index].codigoPrincipal === event.target.value) {
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
      for (let index = 0; index < data.length; index++) {
        const element = data[index];
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
    for (let index = 0; index < data.length; index++) {
      if (data[index].codigoPrincipal === event) {
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
        for (let index = 0; index < data.length; index++) {
          const element = data[index];
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
    if (num <= 0) {
      document.getElementById('modcantidad_minima').value = 1;
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
  const mostrarModalProducto = () => {
    setModalAgregarProducto(true);
  };
  const cerraroAbrirModalProducto = () => {
    setModalAgregarProducto(!modalAgregarProducto);
    fecthData();
  };
  return (
    <div align="center">
      <br />
      <h1 class="text-center">PRODUCTOS EN INVENTARIO</h1>
      <br />
      <br />
      <Row>
        <Col style={{ paddingLeft: '100px' }}>
          <Button
            style={{
              'background-color': 'transparent',
              borderColor: 'transparent',
              'margin-left': '20px',
              'border-radius': '26px',
            }}
            onClick={() => mostrarModalProducto()}
          >
            <Plus width="50px" height="50px" />
          </Button>
        </Col>
        <Col style={{ paddingRight: '650px' }}>
          <input
            type="text"
            id="myInput"
            onChange={() => myFunction()}
            placeholder="Encuentre Productos.."
            title="Type in a name"
            style={{
              'background-image': `url('${imagePath}')`,
              'background-position': '10px 10px',
              'background-repeat': 'no-repeat',
              width: '90%',
              'font-size': '16px',
              padding: '12px 20px 12px 40px',
              'border-radius': '26px',
            }}
          ></input>
        </Col>
      </Row>
      <div
        style={{
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <br />
        <Table
          responsive
          striped
          hover
          align="center"
          size="sm"
          id="myTable"
          style={{
            width: '1200px',
            'border-collapse': 'separate',
            border: 'solid #ccc 2px',
            '-moz-border-radius': '26px',
            '-webkit-border-radius': '26px',
            'border-radius': '26px',
            '-webkit-box-shadow': '0 1px 1px #ccc',
            '-moz-box-shadow': '0 1px 1px #ccc',
            'box-shadow': '0 1px 1px #ccc',
          }}
        >
          <thead>
            <tr style={{ textAlign: 'center' }}>
              <th>#</th>
              <th>Código de Barra</th>
              <th>Codigo Principal</th>
              <th style={{ width: '300px' }}>Descripcion</th>
              <th>Marca</th>
              <th>Inventario</th>
              <th>Precio</th>
              <th class="text-center"> Acción</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr>
                <td>{(index += 1)}</td>
                <td>{`${elemento.codigoBarra}`}</td>
                <td>{elemento.codigoPrincipal}</td>
                <td style={{ whiteSpace: 'unset' }}>{elemento.descripcion}</td>
                <td style={{ whiteSpace: 'unset' }}>{elemento.marca[0].name}</td>
                <td>{elemento.cantidad}</td>
                <td>{elemento.precios[0]}</td>
                <td align="center">
                  <Button
                    style={{
                      'background-color': 'transparent',
                      borderColor: 'transparent',
                    }}
                    onClick={() => Modificar(elemento)}
                  >
                    <Logo width="30px" height="30px" />
                  </Button>
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
            'border-radius': '36px',
            'overflow-x': 'hidden',
          }}
        >
          <h3>EDITAR PRODUCTO</h3>
          <Button
            style={{
              'background-color': 'transparent',
              borderColor: 'transparent',
              position: 'absolute',
              top: '8px',
              right: '16px',
              'font-size': '18px',
              'border-radius': '26px',
            }}
            onClick={() =>
              Confirm.open({
                title: '',
                message: `¿Desea Eliminar el producto ${seleccionado.descripcion}?`,
                onok: () => {
                  eliminar(seleccionado._id);
                },
              })
            }
          >
            <Delete width="50px" height="50px" />
          </Button>
          <ModalBody
            style={{
              'margin-right': '-80px',
              paddingLeft: '200px',
            }}
          >
            <br />
            <AvForm>
              <Row style={{ marginRight: '200px' }}>
                <h style={{ marginRight: '-20px', paddingRight: '50px' }}>Descripción</h>
                <Col sm={{ size: 'auto' }}>
                  <AvField
                    style={paddingAvInput()}
                    className="form-control"
                    type="text"
                    value={seleccionado.descripcion ? seleccionado.descripcion : ''}
                    name="nombre"
                    id="modnombre"
                    errorMessage="Nombre Inválido"
                    validate={{
                      required: { value: true },
                      pattern: { value: regex },

                      minLength: { value: 1 },
                    }}
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
                        id="codigo_principal"
                        errorMessage="Nombre Inválido"
                        validate={{
                          required: { value: true },
                          pattern: { value: regex },
                          minLength: { value: 1 },
                        }}
                        value={seleccionado ? seleccionado.codigoPrincipal : ''}
                        onChange={(e) => manejarCambio(e)}
                      />
                    </Col>
                  </Row>
                </Col>
                <h style={{ 'margin-left': '5px' }}>Descripción especifica</h>
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
                  value={codRef}
                  onChange={(e) => manejarCambioCodRef(e)}
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
                    onClick={() => addTagsClick(codRef)}
                    color="primary"
                  >
                    +
                  </Button>
                </div>
                <Row style={{ marginRight: '-100px', marginLeft: '-50px' }}>
                  <h style={{ marginLeft: '-50px' }}>Marca</h>
                  <Col sm={{ size: 'auto' }}>
                    <div style={{ marginLeft: '-15px' }}>
                      <SelectSearch
                        printOptions="on-focus"
                        search
                        placeholder="Encuentre la Marca del Producto"
                        required
                        autoComplete
                        options={marcas}
                        value={marcaSel}
                        onChange={(e) => handleChange2(e)}
                      />
                    </div>
                    <br />
                    <label style={{ 'margin-left': '-15px', paddingTop: '-10px' }}># Pasillo</label>
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
                          value={size7}
                          onClick={handleOnChangeBodega(size7)}
                          onChange={setSize7}
                        />
                      </Col>
                      <AvForm>
                        <input
                          style={{
                            width: '90px',
                            'margin-left': '20px',
                            'border-radius': '26px',
                          }}
                          className="form-control"
                          type="Number"
                          onChange={(e) => manejarCambioPrecioBodega(e)}
                          value={precioprovedor6}
                          min={1}
                        />
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
                              'margin-left': '-780px',
                              marginTop: '90px',
                            }}
                            onClick={() => onChangeBodega()}
                            color="primary"
                          >
                            +
                          </Button>
                        </div>
                      </AvForm>
                      <div style={paddingdivbodegas()}>
                        <ul style={paddingulbodegas()}>
                          {tagsBodegas.map((tag, index) => (
                            <li style={paddingmain()} key={index}>
                              <span style={paddingtitle()}>
                                {tag.name}, L. {tag.precio}
                              </span>
                              <i
                                style={paddingclosebodega()}
                                onClick={() => removeTagsBodega(index)}
                              >
                                x
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
                      <h>Inventario</h>
                      <Col sm={{ size: 'auto' }} style={{ marginLeft: '50px', top: '-20px' }}>
                        <h style={{ 'margin-left': '5px' }}>Cantidad</h>
                        <input
                          style={paddingAvInputCantidades()}
                          className="form-control"
                          type="number"
                          id="modcantidad"
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
                          id="modcantidad_minima"
                          min={1}
                          max={cantsel}
                          value={cantminsel}
                          onChange={(e) => manejarCambiocantmin(e, 1)}
                        />
                      </Col>
                    </Row>
                    <Row>
                      <h style={{ marginLeft: '-90px' }}>Código de Barra</h>
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
                            value={seleccionado ? seleccionado.codigoBarra : ''}
                            onChange={(e) => manejarCambio(e)}
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
              <h style={{ marginLeft: '-5px' }}>Área</h>
              <Col>
                <AvForm>
                  <AvField
                    style={{
                      'border-radius': '26px',
                      width: '320px',
                      marginLeft: '-10px',
                    }}
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
                <Row style={{ marginLeft: '-120px' }}>
                  <label style={{ marginTop: '25px' }}>Proveedor</label>
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
                      onChange={(e) => manejarCambioPrecioProveedor(e)}
                      min={1}
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
                          <span style={paddingtitle()}>
                            {tag.name}, L. {tag.precio}
                          </span>
                          <i style={paddingclose()} onClick={() => removeTagsProv(index)}>
                            x
                          </i>
                        </li>
                      ))}

                      <br />
                    </ul>
                  </div>
                  <div />
                  <AvForm
                    style={{
                      marginTop: '50px',
                    }}
                  >
                    <Row>
                      <label style={{ 'margin-left': '40px', marginTop: '-20px' }}>
                        Precios de
                        <br /> Venta
                      </label>
                      <Col sm={{ size: 'auto' }} style={{ top: '-30px' }}>
                        <div>
                          <h style={{ paddingRight: '-300px' }}>Precio 1</h>
                          <input
                            style={paddingAvInputCantidades()}
                            className="form-control"
                            type="Number"
                            name="modprecio1"
                            id="modprecio1"
                            value={precio1}
                            onChange={(event) => setprecio1(event.target.value)}
                            validate={{}}
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
                          id="modprecio2"
                          validate={{
                            required: { value: false },
                          }}
                          value={precio2}
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
                          id="modprecio3"
                          validate={{
                            required: { value: false },
                          }}
                          value={precio3}
                          // value={elementoSeleccionado ? elementoSeleccionado.Etiqueta : ''}
                          // onChange={manejarCambio}
                        />
                      </Col>
                    </Row>
                  </AvForm>
                </Row>
                <Row style={{ marginTop: '-25px' }}>
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
              style={{
                'border-radius': '26px',
                'border-color': '#ff9800',
                color: 'green',
                border: '2px solid green',
                'background-color': 'white',
                'font-size': '16px',
                cursor: 'pointer',
              }}
              className="btn btn-primary"
              onClick={() =>
                Confirm.open({
                  title: 'Guardar Cambios',
                  message: 'Está seguro de que quiere modificar este producto?',
                  onok: () => {
                    updateItem(seleccionado._id);
                  },
                })
              }
            >
              Guardar Cambios
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
              onClick={() => setModalModificar(false)}
            >
              Cancelar
            </button>
          </ModalFooter>
        </Modal>
      </div>
      <AgregarBodega isOpen={modalAgregarBodega} change={() => cerraroAbrirModalBodega()} />
      <AgregarProducto isOpen={modalAgregarProducto} change={() => cerraroAbrirModalProducto()} />
    </div>
  );
}
