import React from 'react';
import { Card, Button } from 'reactstrap';
import { useHistory } from 'react-router-dom';

const CartasOpciones = (props) => {
  const history = useHistory();

  const moveTo = () => {
    if (props.isOpen) {
      props.isOpen();
    } else {
      history.push(props.to);
    }
  };

  return (
    <div>
      <Card body>
        {props.icon}
        <Button color="primary" onClick={moveTo}>
          {props.titulo}
        </Button>
      </Card>
    </div>
  );
};

export default CartasOpciones;
