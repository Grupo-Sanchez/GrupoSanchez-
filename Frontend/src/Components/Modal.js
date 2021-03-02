import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import AddEditForm from './FormCliente copy';
import { ReactComponent as PlusIcon } from '../Icons/plus.svg';
import '../Styles/modalEddas.css';

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
          onClick={this.toggle}
          style={{
            'background-color': 'transparent',
            borderColor: 'transparent',

            'border-radius': '26px',
          }}
        >
          <PlusIcon fill="#ff7070" width="50px" height="50px" />
        </Button>
      );
      title = 'agregar nuevo cliente';
    }

    return (
      <div>
        {button}
        <Modal
          isOpen={this.state.modal}
          //className={this.props.className}
          style={{
            height: '95vh',
            'overflow-y': 'auto',
            top: '20px',
            maxWidth: '1000px',
          }}
        >
          <ModalBody>
            <h3>CREACIÓN DE CLIENTE NUEVO</h3>
            <br></br>
            <AddEditForm
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
