import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddEditForm from './FormCliente modificar';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';

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
          onClick={this.toggle}
          //style={{ float: 'left', marginRight: '10px' }}
          style={{
            'background-color': 'transparent',
            borderColor: 'transparent',
          }}
        >
          <EditLogo width="30px" height="30px" />
        </Button>
      );
      title = 'GESTIONAR CLIENTE';
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
        <Modal
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
            maxWidth: '1000px',
          }}
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
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
