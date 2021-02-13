import React, { useState, useCallback, useEffect } from 'react';
// import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Container, Alert } from 'reactstrap';

import { withRouter } from 'react-router-dom';

import axios from 'axios';

// eslint-disable-next-line max-len
// eslint-disable-no-shadow
// import Logo from '../Icons/kisspng-online-shopping-logo-flip-flops-sneakers-shop-5ac7402aea65f5.0006220115230075309601.png';
import Logo from '../Icons/renovation.svg';

import '../Styles/newLogin.css';

const Login = (props) => {
  const [hidden, setHidden] = useState(true);

  const [visible, setVisible] = useState(false);

  const onDismiss = () => setVisible(true);
  // States
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const changeValue = (event) => {
    const emptyVal = event.value === '';
    switch (event.name) {
      case 'email':
        setEmail(event.value);
        break;
      case 'password':
        setPassword(event.value);
        break;
      default:
    }
  };

  const handleSubmit = () => {
    console.log('Email: ', email);
    console.log('Contraseña: ', password);

    // const auth = {
    //   email: email,
    //   password: password,
    // };
    // const response = axios.post('http://178.128.67.247/api/login', auth);
    // console.log(response);
  };

  const authMethod = () => {
    const jsonString = { email: email, password: password };
    console.log('Mandando: ', jsonString);
    //     fetch('http://178.128.67.247/api/login', {
    fetch('http://178.128.67.247/api/login', {
      method: 'post',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(jsonString),
    })
      // .then((res) => {
      //   res.json();
      //   console.log('Response: ', res);
      // })
      // .then((json) => {
      //   console.log('JSON: ', json);
      // });
      .then((res) => res.json())
      .then((json) => {
        console.log('JSON: ', json);
        if (json.message === 'Auth successful') {
          console.log('Correcto');
          axios
            .get('http://178.128.67.247/api/users')
            .then((response) => console.log('Response: ', response));
          history.push(`/${json.ruta}`);
        } else {
          setVisible(!visible);
          console.log('Incorrecto');
        }
      });
  };

  console.log('Login.js activated');
  // console.log('Login.js ', email);

  return (
    <>
      <div className="pageContent">
        <div className="outsideCard">
          <img
            src={
              'https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/5e17558f848f82e664c09d67_logo-dark.svg'
            }
            className="imageLogo"
            alt="Logo"
          />
          <div className={hidden ? 'loginForm loginFormHidden' : 'loginForm'}>
            <div className="innerForm">
              <Label className="labelFormLogin" for="exampleEmail">
                Correo
              </Label>
              <Input
                className="inputFormLogin"
                type="email"
                name="email"
                id="email"
                placeholder="Ingrese su correo"
                onChange={(event) => changeValue(event.currentTarget)}
              />
            </div>
            <div className="innerForm">
              <Label className="labelFormLogin" for="examplePassword">
                Contraseña
              </Label>
              <Input
                className="inputFormLogin"
                type="password"
                name="password"
                id="password"
                placeholder="Ingrese su contraseña"
                onChange={(event) => changeValue(event.currentTarget)}
              />
            </div>
          </div>
          <div>
            <Button
              className="loginButton"
              onClick={() => {
                setHidden(!hidden);
                if (password !== '' || email !== '') {
                  authMethod();
                }
              }}
            >
              {' '}
              Autenticarme
            </Button>
          </div>
        </div>
      </div>

      {/* <div className="LoginSignupCardContainer">
            <div className="LogoEmpresaImg">
              <img src={Logo} alt="Logo" />
            </div>
            <Form className="FormContainer">
              <FormGroup className="FormGroupContainer">
                <Label className="FormLabel" for="exampleEmail">
                  Email
                </Label>
                <Input
                  className="FormInput"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="antonio@gmail.com"
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </FormGroup>
              <FormGroup className="FormGroupContainer">
                <Label className="FormLabel" for="examplePassword">
                  Contraseña
                </Label>
                <Input
                  className="FormInput"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="・・・・・・・・・"
                  // value={password}
                  onChange={(event) => changeValue(event.currentTarget)}
                />
              </FormGroup>
              <Button
                block
                className="LoginButton"
                size="lg"
                onClick={() => {
                  authMethod();
                }}
              >
                Login
              </Button>
            </Form>
          </div> */}
      <Alert
        className={visible ? 'alertMessage' : 'alertMessage alertMessageHidden'}
        color="info"
        isOpen={visible}
        toggle={onDismiss}
      >
        Usuario o contraseña incorrecto, verifique sus datos porfavor.
      </Alert>
    </>
  );
};

export default withRouter(Login);

// import React, { useState } from 'react';
// // import Form from 'react-bootstrap/Form';
// // import Button from 'react-bootstrap/Button';
// import { Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import '../Styles/Login.css';

// import { withRouter } from 'react-router-dom';

// const Login = (props) => {
//   const { history } = props;
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

//   const changeValue = (event) => {
//     const emptyVal = event.value === '';
//     switch (event.name) {
//       case 'email':
//         setEmail(event.value);
//         break;
//       default:
//     }
//   };

//   return (
//     <div className="Login">
//       <Form>
//         <FormGroup>
//           <Label for="exampleEmail">Email</Label>
//           <Input
//             type="email"
//             name="email"
//             id="exampleEmail"
//             placeholder="with a placeholder"
//             value={email}
//             onChange={(event) => changeValue(event.currentTarget)}
//           />
//         </FormGroup>
//         <FormGroup>
//           <Label for="examplePassword">Password</Label>
//           <Input
//             type="password"
//             name="password"
//             id="examplePassword"
//             placeholder="password placeholder"
//           />
//         </FormGroup>
//         <Button
//           block
//           size="lg"
//           type="submit"
//           onClick={() => {
//             console.log('Correo: ', email);
//             switch (email) {
//               case 'propietario':
//                 history.push('/Propietario');

//                 break;
//               case 'vendedor':
//                 history.push('/Vendedor');

//                 break;
//               case 'jefetienda':
//                 history.push('/JefeTienda');

//                 break;
//               case 'administrador':
//                 history.push('/Administrador');

//                 break;

//               default:
//                 break;
//             }
//           }}
//         >
//           Login
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default withRouter(Login);

// //   <Form onSubmit={handleSubmit}>
// //     <Form.Group size="lg" controlId="email">
// //       <Form.Label>Email</Form.Label>
// //       <Form.Control
// //         autoFocus
// //         type="email"
// //         value={email}
// //         onChange={(e) => setEmail(e.target.value)}
// //       />
// //     </Form.Group>
// //     <Form.Group size="lg" controlId="password">
// //       <Form.Label>Password</Form.Label>
// //       <Form.Control
// //         type="password"
// //         value={password}
// //         onChange={(e) => setPassword(e.target.value)}
// //       />
// //     </Form.Group>
// //     <Button block size="lg" type="submit" disabled={!validateForm()}>
// //       Login
// //     </Button>
// //   </Form>
