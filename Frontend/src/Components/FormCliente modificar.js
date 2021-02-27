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
      .put(`http://localhost:3001/api/clientes/${props.id}`, payload)
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

  function paddingAvInput() {
    return {
      'border-radius': '26px',
      width: '240px',
      height: '41px',
    };
  }

  return (
    <AvForm onValidSubmit={handleValidSubmit} onInvalidSubmit={handleInvalidSubmit}>
      <Row>
        <Col xs="6">
          {' '}
          <AvField
            value={props.item.nombre}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
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
        <Col xs="6">
          <AvField
            value={props.item.primer_apellido}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
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

      <br></br>

      <Row>
        <Col xs="6">
          <AvField
            value={props.item.segundo_nombre}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
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
          {' '}
          <AvField
            value={props.item.segundo_apellido}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
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
      </Row>
      <br></br>
      <Row>
        <Col xs="6">
          <AvField
            value={props.item.cedula}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
            name="cedula"
            label="No. Identidad"
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
          <AvField
            value={props.item.RTN}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
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
      <br></br>
      <Row>
        <Col xs="6">
          <AvField
            value={props.item.tel}
            grid={{ xs: 8 }}
            style={paddingAvInput()}
            name="tel"
            label="teléfono"
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
            grid={{ xs: 8 }}
            style={paddingAvInput()}
            name="email"
            label="correo"
            type="email"
          />
        </Col>
      </Row>
      <br></br>
      <br></br>
      <Row>
        <Col sm={{ size: 'auto', offset: 8 }}>
          <Button className="botonesForm" outline color="success">
            modificar
          </Button>

          <Button
            onClick={() =>
              Confirm.open({
                title: 'aviso',
                message: 'al salir perdera la informacion nueva',
                onok: () => {
                  props.toggle();
                },
              })
            }
            className="botonesForm"
            outline
            color="danger"
          >
            cancelar
          </Button>
        </Col>
      </Row>
    </AvForm>
  );
};

export default formClienteModificar;
