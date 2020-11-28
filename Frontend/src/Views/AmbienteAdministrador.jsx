import { Row, Col, Container } from 'reactstrap';
import Header from '../Components/Header.jsx';

const items = [
  {
    name: 'Usuarios',
    to: '/a',
    icon: (
      <svg
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Item B',
    to: '/b',
    icon: (
      <svg
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Item C',
    to: '/c',
    icon: (
      <svg
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    ),
  },
  {
    name: 'Item D',
    to: '/d',
    icon: (
      <svg
        style={{ width: '1em', height: '1em', marginRight: '0.5rem' }}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"
        ></path>
      </svg>
    ),
  },
];

const AmbienteAdministrador = () => (
  <div>
    <Container fluid style={{ padding: '0' }}>
      <Row noGutters>
        <Col>
          <Header items={items} />
        </Col>
      </Row>

      <Row>
        <Col>
          <div>Content PEPEGA</div>
        </Col>
      </Row>
    </Container>
  </div>
);

export default AmbienteAdministrador;
