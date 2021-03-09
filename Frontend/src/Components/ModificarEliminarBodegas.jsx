import React, { useState, useEffect } from 'react';
import {
  Modal,
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
import CartaBodegas from './CartaBodega';
import '../Styles/ConfirmStyle.css';
import { Confirm } from './Confirm';

const ModificarEliminarBodegas = (props) => {
  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);
  const [Seleccionado, setSeleccionado] = useState({
    _id: '',
    numBodega: '',
    descripcion: '',
    encargado: '',
    cantPasillos: '',
    CantProductos: '',
  });
  const [product, setProduct] = useState('');
  const [ModalModificarBodega, setModalModificarBodega] = useState(false);

  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
    CantProductos: '',
  });

  const cerrarModal = () => {
    props.change();
    form.numBodega = 0;
    form.Description = '';
    form.Encargado = '';
    form.cantPasillos = 0;
  };
  const fetchProducts = async () => {
    await axios.get('http://Localhost:3001/api/productos').then((response) => {
      setProduct(response.data);
    });
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  async function handleValidSubmit(event, values) {
    const Id = Seleccionado._id;
    const payload = { value: Seleccionado._id, name: values.numBodega };
    fetchProducts();
    axios
      .put(`http://Localhost:3001/api/bodegas/${Id}`, {
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
          for (let i = 0; i < product.length; i++) {
            if (
              product[i].bodega[0].value === Seleccionado._id &&
              product[i].bodega[0].name !== payload.name
            ) {
              product[i].bodega[0] = payload;
              axios
                .put(`http://Localhost:3001/api/productos/${product[i]._id}`, {
                  nombre: product[i].nombre,
                  area: product[i].area,
                  codigos: product[i].codigos,
                  proveedores: product[i].proveedores,
                  ubicacion: product[i].ubicacion,
                  marca: product[i].marca,
                  bodega: payload,
                  precios: product[i].precios,
                  cantidad: product[i].cantidad,
                  descripcion_corta: product[i].descripcion_corta,
                  descripcion_larga: product[i].descripcion_larga,
                  cantidad_minima: product[i].cantidad_minima,
                  fecha_creacion: product[i].fecha_creacion,
                })
                .then((response) => {
                  console.log(response);
                })
                .catch((error) => {
                  console.log(error);
                });
            }
          }
          setModalModificarBodega(false);
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

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const fecthData = async () => {
    await axios.get('http://Localhost:3001/api/bodegas').then((response) => {
      setData(response.data);
    });
  };
  useEffect(() => {
    fecthData();
    fetchProducts();
  }, []);

  useEffect(() => {
    fecthData();
    fetchProducts();
  }, [data, product]);

  const onDelete = (memberId) => {
    axios.delete(`http://Localhost:3001/api/bodegas/${memberId}`);
    // window.location.reload(false);
  };
  const eliminar = (bodega) => {
    // if (i.CantProductos === '0') {
    //   setData(data.filter((elemento) => elemento._id !== i));
    //   onDelete(i._id);
    //   Confirm.open({
    //     title: '!exito!',
    //     message: 'bodega Eliminada correctamente',
    //     onok: () => {},
    //   });
    //   setTimeout(() => {
    //     window.location.reload();
    //   }, 2000);
    // } else {
    //   Confirm.open({
    //     title: 'error',
    //     message: 'La bodega no debe contener productos para poder eliminarla',
    //     onok: () => {},
    //   });
    // }
    let booleano = 0;
    for (let i = 0; i < product.length; i++) {
      if (product[i].bodega[0].value === bodega._id) {
        booleano = 1;
        fecthData();
        Confirm.open({
          title: 'error',
          message: 'La bodega no debe contener productos para poder eliminarla',
          onok: () => {},
        });
      }
    }
    if (booleano === 0) {
      onDelete(bodega._id);
      Confirm.open({
        title: '!exito!',
        message: 'bodega modificada correctamente',
        onok: () => {},
      });
      fecthData();
    }
  };

  const llenar = (i) => {
    setSeleccionado(i);
    setModalModificarBodega(true);
  };

  const recargar = () => {
    window.location.reload(false);
  };

  return (
    <div>
      <Modal
        isOpen={props.isOpen}
        className="text-center"
        style={{ maxWidth: '1700px', width: '80%' }}
      >
        <ModalHeader>
          <div>
            <h3>CREACION DE BODEGAS</h3>
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
                  <th scope="col">#</th>
                  <th>NUMERO DE BODEGA</th>
                  <th>DESCRIPCION</th>
                  <th>ENCARGADO</th>
                  <th>CANTIDAD DE PASILLOS</th>
                  {/* <th>PRODUCTOS EN BODEGA</th> */}
                  <th class="text-center"> Acción</th>
                  <th class="text-center"> Acción</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elemento, index) => (
                  <tr>
                    <td></td>
                    <td>{elemento.numBodega}</td>
                    <td>{elemento.descripcion}</td>
                    <td>{elemento.encargado}</td>
                    <td>{elemento.cantPasillos}</td>
                    {/* <td>{elemento.CantProductos}</td> */}
                    <td>
                      <Button onClick={() => llenar(elemento)} color="success">
                        Modificar
                      </Button>
                    </td>
                    <td>
                      {/* <Button onClick={() => eliminar(elemento._id)} color="danger"> */}
                      <Button onClick={() => eliminar(elemento)} color="danger">
                        Eliminar
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

      <Modal
        isOpen={ModalModificarBodega}
        className="text-center"
        style={{ maxWidth: '1700px', width: '80%' }}
      >
        <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
          <ModalHeader>
            <div>
              <h3>CREACION DE BODEGAS</h3>
            </div>
          </ModalHeader>
          <ModalBody>
            <div className="row">
              <div className="col-sm ">
                <CartaBodegas {...form} />
              </div>
              <div className="col-sm">
                <AvField
                  name="numBodega"
                  label="Numero de bodega"
                  type="number"
                  onChange={handleChange}
                  value={Seleccionado.numBodega}
                  validate={{ required: { value: true, errorMessage: 'Ingrese valor' } }}
                />
                <AvField
                  name="Description"
                  label="Descripcion"
                  type="text"
                  onChange={handleChange}
                  value={Seleccionado.descripcion}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                  }}
                />
                <AvField
                  name="Encargado"
                  label="Encargado"
                  type="text"
                  onChange={handleChange}
                  value={Seleccionado.encargado}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado' },
                  }}
                />
                <AvField
                  name="CantPasillos"
                  label="Cantidad de pasillos"
                  type="number"
                  onChange={handleChange}
                  value={Seleccionado.cantPasillos}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado' },
                  }}
                />
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <FormGroup>
              <Button type="submit" color="primary">
                Editar Bodega
              </Button>
              <span>‎ ‏‏‎</span>
              <Button className="btn btn-danger" onClick={() => setModalModificarBodega(false)}>
                CANCELAR
              </Button>
            </FormGroup>
          </ModalFooter>
        </AvForm>
      </Modal>
    </div>
  );
};

export default ModificarEliminarBodegas;
