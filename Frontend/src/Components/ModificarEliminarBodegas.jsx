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

const ModificarEliminarBodegas = (props) => {
  const [Seleccionado, setSeleccionado] = useState({
    _id: '',
    numBodega: '',
    descripcion: '',
    encargado: '',
    cantPasillos: '',
  });

  const [ModalModificarBodega, setModalModificarBodega] = useState(false);

  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });

  const cerrarModal = () => {
    props.change();
    form.numBodega = 0;
    form.Description = '';
    form.Encargado = '';
    form.cantPasillos = 0;
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  async function handleValidSubmit(event, values) {
    const Id = Seleccionado._id;
    axios
      .put(`http://localhost:3001/api/bodegas/${Id}`, {
        numBodega: values.numBodega,
        descripcion: values.Description,
        encargado: values.Encargado,
        cantPasillos: values.CantPasillos,
      })
      .then(alert('Modificado con exito'))
      .catch((error) => {
        console.log(error);
      });
    Window.location.reload(false);
    setModalModificarBodega(false);
  }

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);

  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/bodegas').then((response) => {
        setData(response.data);
      });
    };
    fecthData();
  }, []);

  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/bodegas/${memberId}`);
    // window.location.reload(false);
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
  };

  const llenar = (i) => {
    setSeleccionado(i);
    setModalModificarBodega(true);
  };

  const recargar = () => {
    // props.change;
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
              dark
              align="center"
              size="sm"
              id="myTable"
              style={{ width: '500px' }}
            >
              <thead>
                <tr>
                  <th>#</th>
                  <th>BODEGA</th>
                  <th>DESCRIPCION</th>
                  <th>ENCARGADO</th>
                  <th>CANTIDAD DE PASILLOS</th>
                  <th class="text-center"> Acción</th>
                </tr>
              </thead>
              <tbody>
                {data.map((elemento, index) => (
                  <tr>
                    <td>{(index += 1)}</td>
                    <td>{elemento.numBodega}</td>
                    <td>{elemento.descripcion}</td>
                    <td>{elemento.encargado}</td>
                    <td>{elemento.cantPasillos}</td>
                    <td>
                      <Button onClick={() => llenar(elemento)} color="success">
                        Modificar
                      </Button>
                    </td>
                    <td>
                      <Button onClick={() => eliminar(elemento._id)} color="danger">
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
