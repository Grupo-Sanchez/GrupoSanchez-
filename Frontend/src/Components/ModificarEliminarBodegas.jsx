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

  const EscribirBodegas = async () => {
    //if(form.numBodega !== false && form.Description !== false && form.Encargado !== false && form.CantPasillos !== false){
    const campos = {
      numBodega: form.numBodega,
      descripcion: form.Description,
      encargado: form.Encargado,
      cantPasillos: form.CantPasillos,
    };
    const res = await axios.post('http://localhost:3001/api/bodegas', campos);
    console.log(res);
    alert('¡Bodega Agregada!');
    cerrarModal();
    //}else{
    //alert('Error en la creacion!')
    //cerrarModal();
    //}
  };

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const dataApuntes = [];
  const [data, setData] = useState(dataApuntes);
  const [seleccionado, setSeleccionado] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });
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
  };
  const eliminar = (i) => {
    setData(data.filter((elemento) => elemento._id !== i));
    onDelete(i);
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
                      <Button onClick={() => setModalModificarBodega(true)} color="success">
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
          <button className="btn btn-danger" onClick={props.change}>
            CANCELAR
          </button>
        </ModalFooter>
      </Modal>

      <Modal
        isOpen={ModalModificarBodega}
        className="text-center"
        style={{ maxWidth: '1700px', width: '80%' }}
      >
        <ModalHeader>
          <div>
            <h3>Modificacion DE BODEGAS</h3>
          </div>
        </ModalHeader>
        <ModalBody>
          <div className="row">
            <div className="col-sm ">
              <CartaBodegas {...form} />
            </div>
            <div className="col-sm">
              {/* <Formulario onChange={handleChange} form={form} /> */}
              <AvForm>
                <AvField
                  name="numBodega"
                  label="Numero de bodega"
                  type="number"
                  onChange={handleChange}
                  value={form.numBodega}
                />
                <AvField
                  name="Description"
                  label="Descripcion"
                  type="text"
                  onChange={handleChange}
                  value={form.Description}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado ' },
                    pattern: {
                      value: '^[A-Za-z0-9]',
                      errorMessage: 'Este campo debe estar compuesto solo de letras y numeros',
                    },
                  }}
                />
                <AvField
                  name="Encargado"
                  label="Encargado"
                  type="text"
                  onChange={handleChange}
                  value={form.Encargado}
                  validate={{
                    required: { value: true, errorMessage: 'Campo debe ser llenado' },
                    pattern: {
                      value: '^[A-Za-z0-9]',
                      errorMessage: 'Este Campo debe ser llenado con letras y numeros',
                    },
                  }}
                />
                <AvField
                  name="CantPasillos"
                  label="Cantidad de pasillos"
                  type="number"
                  onChange={handleChange}
                  value={form.CantPasillos}
                />
              </AvForm>
            </div>
          </div>
        </ModalBody>
        <ModalFooter>
          <FormGroup>
            <div className="row">
              <Button className="btn btn-primary" onClick={() => alert('Daniel')}>
                Modificar
              </Button>
              <Button className="btn btn-primary" onClick={() => setModalModificarBodega(false)}>
                CANCELAR
              </Button>
            </div>
          </FormGroup>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ModificarEliminarBodegas;
