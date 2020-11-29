import React from 'react';
import { Card, Button } from 'reactstrap';

const CartasOpciones = (props) => (
  <div>
    <Card body>
      {props.icon}
      <Button color="primary">{props.titulo}</Button>
    </Card>
  </div>
);

export default CartasOpciones;
