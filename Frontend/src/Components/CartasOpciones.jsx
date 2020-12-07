import React from 'react';
import { Card, Button } from 'reactstrap';

const CartasOpciones = (props) => (
  <div>
    <Card body>
      {props.icon}
      <Button color="primary" onClick={props.isOpen}>
        {props.titulo}
      </Button>
    </Card>
  </div>
);

export default CartasOpciones;