import React, { useState, useEffect } from 'react';
import '../Styles/SearchBar.css';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';
import '../Styles/InterfazProducto.css';
import axios from 'axios';
import imagePath from '../Icons/lupa1.jpeg';
import { Confirm } from './Confirm';

export default function EliminarUsuario(props) {
  const onDelete = (memberId) => {
    axios.delete(`http://localhost:3001/api/users/${memberId}`);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/users').then((response) => {
        setData(response.data);
      });
    };
    fecthData();
  }, [data]);

  const myFunction = () => {
    // alert("eentoroo");
    const input = document.getElementById('myInput');
    let filter;
    let table;
    let tr;
    let td;
    let i;
    let txtValue;
    if (input != null) {
      filter = input.value.toUpperCase();
      table = document.getElementById('myTable');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    }
  };

  return (
    <div align="center">
      <h1 class="text-center">USUARIOS</h1>
      <input
        type="text"
        id="myInput"
        onChange={() => myFunction()}
        placeholder="Buscar por identificacion"
        title="Type in a name"
        style={{
          'background-image': `url('${imagePath}')`,
          'background-position': '10px 10px',
          'background-repeat': 'no-repeat',
          width: '50%',
          'font-size': '16px',
          padding: '12px 20px 12px 40px',
          border: '1px solid #ddd',
          'margin-bottom': '12px',
        }}
      ></input>
      <div
        style={{
          maxHeight: '600px',
          overflowY: 'auto',
        }}
      >
        <Table
          responsive
          striped
          bordered
          hover
          dark
          align="center"
          size="sm"
          id="myTable"
          style={{ width: '500px' }}
        >
          <thead>
            <tr>
              <th>#</th>
              <th>Identidad</th>
              <th>Primer Nombre</th>
              <th>Segundo Nombre</th>
              <th>Primer Apellido</th>
              <th>Segundo Apellido</th>
              <th>RTN</th>
              <th>Telefono</th>
              <th>Correo</th>
              <th>Rol</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemento, index) => (
              <tr>
                <td>{(index += 1)}</td>
                <td>{elemento.identidad}</td>
                <td>{elemento.nombre}</td>
                <td>{elemento.segundo_nombre}</td>
                <td>{elemento.primer_apellido}</td>
                <td>{elemento.segundo_apellido}</td>
                <td>{elemento.rtn}</td>
                <td>{elemento.telefono}</td>
                <td>{elemento.correo}</td>
                <td>{elemento.rol[0].name}</td>
                <td>
                  <Button
                    color="danger"
                    onClick={() =>
                      Confirm.open({
                        title: '¡Advertencia!',
                        message: '¿Esta seguro que desea eliminar el usuario?.',
                        onok: () => {
                          onDelete(elemento._id);
                        },
                      })
                    }
                  >
                    Eliminar
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
