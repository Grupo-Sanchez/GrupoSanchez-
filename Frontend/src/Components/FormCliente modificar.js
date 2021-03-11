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
    if (values.RTN === '') {
      values.RTN = 'consumidor fin';
    }
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
            message: 'error el No. Identidad ya existe',
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
          <Row>
            <Col>
              <label class="verde">Primer nombre</label>
            </Col>
            <Col>
              <AvField
                value={props.item.nombre}
                style={paddingAvInput()}
                name="nombre"
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
        </Col>
        <Col xs="6">
          <Row>
            <Col>
              <label class="verde">Primer apellido</label>
            </Col>
            <Col>
              <AvField
                value={props.item.primer_apellido}
                style={paddingAvInput()}
                name="primer_apellido"
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
        </Col>
      </Row>

      <br></br>

      <Row>
        <Col xs="6">
          <Row>
            <Col>
              <label>segundo nombre</label>
            </Col>
            <Col>
              <AvField
                value={props.item.segundo_nombre}
                style={paddingAvInput()}
                name="segundo_nombre"
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
        </Col>
        <Col xs="6">
          <Row>
            <Col>
              <label>Segundo apellido</label>
            </Col>
            <Col>
              <AvField
                value={props.item.segundo_apellido}
                style={paddingAvInput()}
                name="segundo_apellido"
                type="text"
                validate={{
                  pattern: {
                    value: '^[A-Za-z]+$',
                    errorMessage: 'espacios/numeros o acentos no son validos',
                  },
                }}
              />
            </Col>
          </Row>{' '}
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6">
          <Row>
            <Col>
              <label class="verde">No. Identidad</label>
            </Col>
            <Col>
              <AvField
                value={props.item.cedula}
                style={paddingAvInput()}
                name="cedula"
                type="text"
                validate={{
                  required: { value: true, errorMessage: 'campo requerido' },
                  minLength: { value: 13, errorMessage: 'el No. debe constar de 13 caracteres' },
                  maxLength: { value: 13 },
                  number: { value: true, errorMessage: 'solo se aceptan numeros' },
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs="6">
          <Row>
            <Col>
              <label>RTN</label>
            </Col>
            <Col>
              {' '}
              <AvField
                value={props.item.RTN}
                style={paddingAvInput()}
                name="RTN"
                type="text"
                validate={{
                  minLength: {
                    value: 14,
                    errorMessage: 'el Rtn debe tener 14 digitos',
                  },
                  maxLength: {
                    value: 14,
                    errorMessage: 'el Rtn debe tener 14 digitos',
                  },
                }}
              />
            </Col>
          </Row>
        </Col>
      </Row>
      <br></br>
      <Row>
        <Col xs="6">
          <Row>
            <Col>
              <label>Telefono</label>
            </Col>
            <Col>
              {' '}
              <AvField
                value={props.item.tel}
                style={paddingAvInput()}
                name="tel"
                type="text"
                validate={{
                  minLength: {
                    value: 8,
                    errorMessage: 'el numero debe tener 8 caracteres',
                  },
                  maxLength: {
                    value: 8,
                    errorMessage: 'el numero debe tener 8 caracteres',
                  },
                  number: { value: true, errorMessage: 'solo se aceptan numeros' },
                }}
              />
            </Col>
          </Row>
        </Col>
        <Col xs="6">
          <Row>
            <Col>
              <label>Correo</label>
            </Col>
            <Col>
              {' '}
              <AvField
                value={props.item.email}
                style={paddingAvInput()}
                name="email"
                type="email"
              />
            </Col>
          </Row>{' '}
        </Col>
      </Row>
      <br></br>
      <br></br>

      <Row>
        <Col></Col>
        <Col xs="6">
          <Button
            onClick={() =>
              Confirm.open({
                title: 'aviso',
                message: 'al salir perdera la informacion',
                onok: () => {
                  props.toggle();
                },
              })
            }
            className="botonFormRed"
            outline
            color="danger"
          >
            cancelar
          </Button>
          <Button className="botonFormGreen" outline color="success">
            modificar
          </Button>
        </Col>
      </Row>
    </AvForm>
  );
};

export default formClienteModificar;
