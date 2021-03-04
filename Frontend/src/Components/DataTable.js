import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button, Row, Col, Container } from 'reactstrap';
import ModalForm from './Modal edit';
import { Confirm } from './Confirm';
import '../Styles/ConfirmStyle.css';
import '../Styles/estilosTableClientes.css';

class DataTable extends Component {
  deleteItem = async (id) => {
    const confirmDelete = window.confirm('borrar el cliente para siempre?');
    if (confirmDelete) {
      await axios.delete(`http://178.128.67.247:3001/api/clientes/${id}`);
      Confirm.open({
        title: 'Aviso',
        message: 'cliente eliminado',
        onok: () => {},
      });
      setTimeout(() => {
        window.location.reload();
      }, 1500);

      // this.props.deleteItemFromState(id)
    }
  };

  modificarCliente = async (id) => {
    const confirmModificar = window.confirm('seguro que quiere modificar el cliente?');
    if (confirmModificar) {
      await axios.put(`http://178.128.67.247:3001/api/clientes/${id}`);
      window.confirm('cliente modificado exitosamente');
      window.location.reload();

      // this.props.deleteItemFromState(id)
    }
  };

  //temporalmente boton de eliminar desactivado <Button color="danger" onClick={() => this.deleteItem(item._id)}>
  //Del
  //</Button>

  render() {
    const items = this.props.items.map((item) => (
      <tr key={item._id}>
        <th scope="row">{item.cedula}</th>
        <td>{item.nombre}</td>
        <td>{item.primer_apellido}</td>
        <td>{item.tel}</td>
        <td>{item.email}</td>
        <td>
          <div style={{ width: 'auto' }}>
            <ModalForm
              id={item._id}
              buttonLabel="Edit"
              item={item}
              updateState={this.props.updateState}
            />{' '}
          </div>
        </td>
      </tr>
    ));

    return (
      <Table
        responsive="sm"
        striped
        hover
        align="center"
        size="sm"
        id="myTable"
        style={{
          'border-collapse': 'separate',
          border: 'solid #ccc 2px',
          '-moz-border-radius': '26px',
          '-webkit-border-radius': '26px',
          'border-radius': '26px',
          '-webkit-box-shadow': '0 1px 1px #ccc',
          '-moz-box-shadow': '0 1px 1px #ccc',
          'box-shadow': '0 1px 1px #ccc',
        }}
      >
        <thead>
          <tr>
            <th>Numero de identidad</th>
            <th>Primer nombre</th>
            <th>Primer apellido</th>
            <th>Telefono</th>
            <th>Correo electronico</th>
            <th>Accion</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
