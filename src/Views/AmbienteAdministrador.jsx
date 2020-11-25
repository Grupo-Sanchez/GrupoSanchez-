import { Row, Col } from "reactstrap";
import Header from "../Components/Header";
import OpcionesAdministrador from "../Components/OpcionesAdministrador";

const AmbienteAdministrador = () => {
  return (
    <div>
      <Header />
      <Row>
        <Col md="3">
          <OpcionesAdministrador />
        </Col>
      </Row>
    </div>
  );
};

export default AmbienteAdministrador;
