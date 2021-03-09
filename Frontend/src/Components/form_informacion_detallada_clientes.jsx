import { AvForm, AvField, AvInput } from 'availity-reactstrap-validation';
import '../Styles/pruebaFlexStyles.css';
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

const infoDetalladaClientes = (props) => {
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

  return (
    <>
      <h3>información detallada del cliente</h3>
      <div className="form_container">
        <div className="form_items">
          <div className="form_input">
            <label>Primer nombre:</label>
            <Col xs="6">
              <label>{props.elemento.nombre}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>Segundo nombre:</label>
            <Col xs="6">
              <label>{props.elemento.segundo_nombre}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>No. Identidad:</label>
            <Col xs="6">
              <label>{props.elemento.cedula}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>RTN</label>
            <Col xs="6">
              <label>{props.elemento.RTN}</label>
            </Col>
          </div>
        </div>
        <div className="form_items">
          <div className="form_input">
            {' '}
            <label>Primer apellido:</label>
            <Col xs="6">
              <label>{props.elemento.primer_apellido}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>Segundo apellido:</label>
            <Col xs="6">
              <label>{props.elemento.segundo_apellido}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>Teléfono</label>
            <Col xs="6">
              <label>{props.elemento.tel}</label>
            </Col>
          </div>
          <div className="form_input">
            <label>Correo</label>
            <Col xs="6">
              <label>{props.elemento.email}</label>
            </Col>
          </div>
        </div>
      </div>
    </>
  );
};

export default infoDetalladaClientes;
