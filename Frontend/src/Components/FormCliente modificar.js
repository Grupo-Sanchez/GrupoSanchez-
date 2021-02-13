import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import axios from 'axios';
import {
  Input,
  Button,
  Modal,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Label,
  Container,
  Row,
  Col,
} from 'reactstrap';
import AvGroup from 'availity-reactstrap-validation/lib/AvGroup';
import AvRadioGroup from 'availity-reactstrap-validation/lib/AvRadioGroup';
import AvRadio from 'availity-reactstrap-validation/lib/AvRadio';
import { Confirm } from './Confirm';
import '../Styles/ConfirmStyle.css';

const formClienteModificar = (props) => {
  // const [data, setData] = useState({
  //   nombre: '',
  //   descripcion: '',
  // });

  // const [hasError, setHasError] = useState(false);

  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setData({ ...data, [name]: value });
  //   console.log(data.name);
  // };

  const modifyProveedor = async (values) => {
    const payload = {
      cedula: values.cedula,
      nombre: values.nombre,
      segundo_nombre: values.segundo_nombre,
      primer_apellido: values.primer_apellido,
      segundo_apellido: values.segundo_apellido,
      RTN: values.RTN,
      tel: values.tel,
      email: values.email,
    };

    await axios
      .put(`http://Localhost:178.128.67.247/api/clientes/${props.id}`, payload)
      .then((res) => {
        if (res.data.message) {
          Confirm.open({
            title: 'aviso',
            message: 'error campos duplicados',
            onok: () => {},
          });
        } else {
          Confirm.open({
            title: '!exito!',
            message: 'cliente modificado correctamente',
            onok: () => {},
          });
          setTimeout(() => {
            window.location.reload();
          }, 1500);
        }
      })
      .catch((error) => {
        Confirm.open({
          title: 'error',
          message: 'ha ocurrido un error',
          onok: () => {},
        });
      });
  };

  async function handleValidSubmit(event, values) {
    Confirm.open({
      title: 'Aviso',
      message: 'seguro que quiere modificar el cliente?',
      onok: () => {
        modifyProveedor(values);
      },
    });
  }

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
      <AvGroup>
        <Row>
          <Col xs="6">
            <AvField
              value={props.item.cedula}
              name="cedula"
              label="Identidad"
              type="text"
              validate={{
                required: { value: true, errorMessage: 'campo requerido' },
                minLength: { value: 13, errorMessage: 'el campo debe constar de 13 caracteres' },
                maxLength: { value: 13 },
                number: { value: true, errorMessage: 'solo se aceptan numeros' },
              }}
            />
          </Col>
          <Col xs="6">
            {' '}
            <AvField
              value={props.item.nombre}
              name="nombre"
              label="Primer nombre"
              type="text"
              validate={{
                required: {
                  value: true,
                  errorMessage: 'campo requerido',
                },
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'espacios/numeros o acentos no son validos',
                },
              }}
            />
          </Col>
        </Row>

        <Row>
          <Col xs="6">
            <AvField
              value={props.item.segundo_nombre}
              name="segundo_nombre"
              label="Segundo nombre"
              type="text"
              validate={{
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'espacios/numeros o acentos no son validos',
                },
              }}
            />
          </Col>
          <Col xs="6">
            <AvField
              value={props.item.primer_apellido}
              name="primer_apellido"
              label="Primer apellido"
              type="text"
              validate={{
                required: { value: true, errorMessage: 'campo requerido' },
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'espacios/numeros o acentos no son validos',
                },
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            {' '}
            <AvField
              value={props.item.segundo_apellido}
              name="segundo_apellido"
              label="Segundo apellido"
              type="text"
              validate={{
                pattern: {
                  value: '^[A-Za-z]+$',
                  errorMessage: 'espacios/numeros o acentos no son validos',
                },
              }}
            />
          </Col>
          <Col xs="6">
            <AvField
              value={props.item.RTN}
              name="RTN"
              label="RTN"
              type="number"
              validate={{
                minLength: {
                  value: 14,
                  errorMessage: 'el Rtn debe tener 14 digitos',
                },
                maxLength: {
                  value: 14,
                  errorMessage: 'el Rtn debe tener 14 digitos',
                },
                min: {
                  value: 0,
                  errorMessage: 'ingrese con formato solicitado 14 digitos',
                },
              }}
            />
          </Col>
        </Row>
        <Row>
          <Col xs="6">
            <AvField
              value={props.item.tel}
              name="tel"
              label="Telefono"
              type="number"
              min="0"
              validate={{
                minLength: {
                  value: 8,
                  errorMessage: 'el numero debe tener 8 caracteres',
                },
                maxLength: {
                  value: 8,
                  errorMessage: 'el numero debe tener 8 caracteres',
                },
                min: {
                  value: 0,
                  errorMessage: 'no se aceptan numeros negativos',
                },
              }}
            />
          </Col>
          <Col xs="6">
            {' '}
            <AvField
              value={props.item.email}
              name="email"
              label="Correo Electronico"
              type="email"
            />
          </Col>
        </Row>
      </AvGroup>
      <Button color="primary">guardar</Button>
    </AvForm>
  );
};

export default formClienteModificar;
