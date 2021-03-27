import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, Row, Col } from 'reactstrap';
import axios from 'axios';
import AddEditForm from './FormCliente modificar';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';
import { ReactComponent as BasureroLogo } from '../Icons/delete.svg';
import { Confirm } from './Confirm';
import '../Styles/ConfirmStyle.css';
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

  deleteItem = async (id) => {
    await axios.delete(`http://localhost:3001/api/clientes/${id}`);
    Confirm.open({
      title: 'Aviso',
      message: 'cliente eliminado',
      onok: () => {},
    });
    setTimeout(() => {
      window.location.reload();
    }, 1500);

    // this.props.deleteItemFromState(id)
  };

  checkElimination = () => {
    Confirm.open({
      title: 'Aviso',
      message: 'se eliminara el cliente permanentemente',
      onok: () => {
        this.deleteItem(this.props.item._id);
      },
    });
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
            top: '-120px',
            maxWidth: '1000px',
          }}
          isOpen={this.state.modal}
        >
          <ModalBody>
            <Row>
              <Col sm="12" md={{ size: 6, offset: 3 }}>
                <h3>GESTIONAR CLIENTE</h3>
              </Col>
              <Col>
                <Button
                  onClick={() => this.checkElimination()}
                  style={{
                    'background-color': 'transparent',
                    borderColor: 'transparent',

                    'border-radius': '26px',
                  }}
                  className="boton-basurero"
                >
                  <BasureroLogo fill="#dc0000" width="50px" height="50px" />
                </Button>
              </Col>
            </Row>

            <br></br>
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
