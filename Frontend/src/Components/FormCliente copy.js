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

const formClienteCopy = (props) => {
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

  const handleValidSubmit = async (event, values) => {
    const campos = {
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
      .post('http://Localhost:178.128.67.247/api/clientes', campos)
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
            message: 'usuario agregado correctamente',
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

    // window.location.reload();

    // this.props.deleteItemFromState(id)
  };

  function handleInvalidSubmit(event, errors, values) {
    console.log('invalid submit', { event, errors, values });
  }

  return (
    <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
      <AvGroup>
        <Row>
          <Col xs="6">
            <AvField
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
              name="segundo_nombre"
              label="segundo nombre"
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
              name="RTN"
              label="Rtn"
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
              name="tel"
              label="telefono"
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
            <AvField name="email" label="correo electronico" type="email" />
          </Col>
        </Row>
      </AvGroup>
      <Button color="primary">guardar</Button>
    </AvForm>
  );
};

export default formClienteCopy;
