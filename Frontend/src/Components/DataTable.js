import React, { Component } from 'react';
import axios from 'axios';
import { Table, Button } from 'reactstrap';
import ModalForm from './Modal edit';
import { Confirm } from './Confirm';
import '../Styles/ConfirmStyle.css';

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

  render() {
    const items = this.props.items.map((item) => (
      <tr key={item._id}>
        <th scope="row">{item.cedula}</th>
        <td>{item.nombre}</td>
        <td>{item.primer_apellido}</td>
        <td>{item.email}</td>
        <td>{item.tel}</td>
        <td>
          <div style={{ width: '110px' }}>
            <ModalForm
              id={item._id}
              buttonLabel="Edit"
              item={item}
              updateState={this.props.updateState}
            />{' '}
            <Button color="danger" onClick={() => this.deleteItem(item._id)}>
              Del
            </Button>
          </div>
        </td>
      </tr>
    ));

    return (
      <Table responsive hover>
        <thead>
          <tr>
            <th>ID</th>
            <th>First</th>
            <th>Last</th>
            <th>Email</th>
            <th>tel</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>{items}</tbody>
      </Table>
    );
  }
}

export default DataTable;
