import React, { useState, useEffect } from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import axios from 'axios';
import CardBodega from './CartaBodega';

const ListarBodegas = (props) => {
  const formulario = [];
  const [data, setData] = useState(formulario);

  const [form, setForm] = useState({
    numBodega: '',
    Description: '',
    Encargado: '',
    CantPasillos: '',
  });
  useEffect(() => {
    const fecthData = async () => {
      await axios.get('http://localhost:3001/api/bodegas').then((response) => {
        setData(response.data);
        console.log(data[0]);
      });
    };
    fecthData();
  }, []);

  return (
    <Modal
      isOpen={props.isOpen}
      className="text-center"
      style={{ maxWidth: '1700px', width: '60%' }}
    >
      <ModalHeader>
        <div>
          <h3>LISTADO DE BODEGAS </h3>
        </div>
      </ModalHeader>
      <ModalBody>
        <div>
          {data.map((Bodegas) => {
            console.log(Bodegas);
            return (
              <div>
                <CardBodega
                  numBodega={Bodegas.numBodega}
                  Description={Bodegas.descripcion}
                  Encargado={Bodegas.encargado}
                  CantPasillos={Bodegas.cantPasillos}
                />
              </div>
            );
          })}
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-danger" onClick={props.change}>
          CANCELAR
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default ListarBodegas;
