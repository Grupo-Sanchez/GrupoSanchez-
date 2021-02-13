import React, { Component } from 'react';
import { toast } from 'react-toastify';
import { array } from '../registros.json';
import '../Styles/Notificaciones.css';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();

class Notificaciones extends Component {
  constructor() {
    super();

    this.state = {
      array,
    };

    this.agregarNuevoReg = this.agregarNuevoReg.bind(this);
  }

  notify = () => {
    toast('llamar a proveedor Larach co. a las 4:00pm');
  };

  agregarNuevoReg(regi) {
    this.setState({
      array: [...this.state.array, regi],
    });
  }

  delete(index) {
    this.setState({
      array: this.state.array.filter((e, i) => i !== index),
    });
  }
  componentDidMount() {
    this.notify();
  }

  render() {
    const tags = this.state.array.map((registro, i) => (
      <div className="col-lg-4 col-md-6">
        <div className="card mt-4">
          <div className="card-header">
            <h2 id="text_name">{registro.name}</h2>
          </div>
          <div className="card-body">
            <p>{registro.texto}</p>
            <p>{registro.fecha}</p>
          </div>
          <button class="delete-btn" onClick={this.delete.bind(this, i)}>
            X
          </button>
        </div>
      </div>
    ));

    return (
      <div className="Notificaciones">
        <div className="container">
          <div className="row  mt-4">{tags}</div>
        </div>
      </div>
    );
  }
}

export default Notificaciones;
