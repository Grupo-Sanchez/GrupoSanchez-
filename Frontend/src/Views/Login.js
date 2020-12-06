import React, { useState } from 'react';
// import Form from 'react-bootstrap/Form';
// import Button from 'react-bootstrap/Button';
import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
import '../Styles/Login.css';

import { withRouter } from 'react-router-dom';

const Login = (props) => {
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'email':
        setEmail(event.value);
        break;
      default:
    }
  };

  return (
    <div className="Login">
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input
            type="email"
            name="email"
            id="exampleEmail"
            placeholder="with a placeholder"
            value={email}
            onChange={(event) => changeValue(event.currentTarget)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input
            type="password"
            name="password"
            id="examplePassword"
            placeholder="password placeholder"
          />
        </FormGroup>
        <Button
          block
          size="lg"
          type="submit"
          onClick={() => {
            console.log('Correo: ', email);
            switch (email) {
              case 'propietario':
                history.push('/Propietario');

                break;
              case 'vendedor':
                history.push('/Vendedor');

                break;
              case 'jefetienda':
                history.push('/JefeTienda');

                break;
              case 'administrador':
                history.push('/Administrador');

                break;

              default:
                break;
            }
          }}
        >
          Login
        </Button>
      </Form>
    </div>
  );
};

export default withRouter(Login);

//   <Form onSubmit={handleSubmit}>
//     <Form.Group size="lg" controlId="email">
//       <Form.Label>Email</Form.Label>
//       <Form.Control
//         autoFocus
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//     </Form.Group>
//     <Form.Group size="lg" controlId="password">
//       <Form.Label>Password</Form.Label>
//       <Form.Control
//         type="password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//     </Form.Group>
//     <Button block size="lg" type="submit" disabled={!validateForm()}>
//       Login
//     </Button>
//   </Form>
