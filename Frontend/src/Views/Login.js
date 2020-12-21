import React, { useState, useCallback, useEffect } from 'react';
// import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

import { withRouter } from 'react-router-dom';

// eslint-disable-next-line max-len
import Logo from '../Icons/kisspng-online-shopping-logo-flip-flops-sneakers-shop-5ac7402aea65f5.0006220115230075309601.png';

import '../Styles/App.css';

import '../Styles/LoginSignupCard.css';

const Login = (props) => {
  // States
  const { history } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  console.log('Login.js activated');

  return (
    <div className="App">
      <header className="App-header">
        <div className="LoginSignupCardContainer">
          <div className="LogoEmpresaImg">{/* <img src={Logo} alt="Logo" /> */}</div>
          <Form className="FormContainer">
            <FormGroup className="FormGroupContainer">
              <Label className="FormLabel" for="exampleEmail">
                Email
              </Label>
              <Input
                className="FormInput"
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="antonio@gmail.com"
              />
            </FormGroup>
            <FormGroup className="FormGroupContainer">
              <Label className="FormLabel" for="examplePassword">
                Constraseña
              </Label>
              <Input
                className="FormInput"
                type="password"
                name="password"
                id="examplePassword"
                placeholder="・・・・・・・・・"
              />
            </FormGroup>
            {/* <Button className="LoginButton">Login</Button> */}
            <Button
              block
              className="LoginButton"
              size="lg"
              type="submit"
              onClick={() => {
                console.log('Contraseña: ', password);
                switch (password) {
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
      </header>
    </div>
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
