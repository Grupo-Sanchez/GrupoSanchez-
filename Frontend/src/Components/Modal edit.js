import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddEditForm from './FormCliente modificar';

class ModalForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
    };
  }

  toggle = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    const closeBtn = (
      <button className="close" onClick={this.toggle}>
        &times;
      </button>
    );

    const label = this.props.buttonLabel;

    let button = '';
    let title = '';

    if (label === 'Edit') {
      button = (
        <Button
          color="warning"
          onClick={this.toggle}
          style={{ float: 'left', marginRight: '10px' }}
        >
          {label}
        </Button>
      );
      title = 'Editar cliente';
    } else {
      button = (
        <Button
          color="success"
          onClick={this.toggle}
          style={{ float: 'left', marginRight: '10px' }}
        >
          {label}
        </Button>
      );
      title = 'agregar nuevo cliente';
    }

    return (
      <div>
        {button}
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle} close={closeBtn}>
            {title}
          </ModalHeader>
          <ModalBody>
            <AddEditForm
              cerrar={this.state.modal}
              id={this.props.id}
              addItemToState={this.props.addItemToState}
              updateState={this.props.updateState}
              toggle={this.toggle}
              item={this.props.item}
            />
          </ModalBody>
        </Modal>
      </div>
    );
  }
}

export default ModalForm;