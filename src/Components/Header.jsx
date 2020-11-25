import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" style={{ color: "white" }}>
          Grupo Sanchez
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar />
          <UncontrolledDropdown inNavbar>
            <DropdownToggle nav caret style={{ color: "white" }}>
              Nombre Usuario
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Ver Perfil</DropdownItem>
              <DropdownItem>Editar Perfil</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Cerrar Sesion</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
