import React, { useState } from "react";
import { ListGroup, ListGroupItem, Collapse, Button } from "reactstrap";
import styles from "../App.css";

const OpcionesAdministrador = (props) => {
  const stylelist = {
    color: "white",
    background: "#343a40",
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
        Toggle
      </Button>
      <Collapse isOpen={isOpen}>
        <ListGroup>
          <ListGroupItem style={stylelist} tag="button" action>
            Inicio
          </ListGroupItem>
          <ListGroupItem style={stylelist} tag="button" action>
            Precio
          </ListGroupItem>
          <ListGroupItem style={stylelist} tag="button" action>
            Reportes
          </ListGroupItem>
          <ListGroupItem style={stylelist} tag="button" action>
            Porta ac consectetur ac
          </ListGroupItem>
          <ListGroupItem style={stylelist} tag="button" action>
            Vestibulum at eros
          </ListGroupItem>
        </ListGroup>
      </Collapse>
    </div>
  );
};

export default OpcionesAdministrador;
