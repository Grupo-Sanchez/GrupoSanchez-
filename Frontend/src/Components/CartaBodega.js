import React from 'react';
import home from '../Icons/warehouse.png';
import '../Styles/Bodegas.css';
import { ReactComponent as EditLogo } from '../Icons/edit.svg';

const CartaBodegas = ({ numBodega, Description, Encargado, CantPasillos }) => (
  <div className="card-bodegas mx-auto Fitness-Card">
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={home} className="float-right" alt=" not found" />
        </div>
        <div className="col-6 Fitness-Card-Info ">
          <div style={{ marginLeft: '180px' }}>
            <EditLogo width="30px" height="30px" />
          </div>
          <div>
            <p className="text-left">
              <b>descripción:</b> {Description}
            </p>
            <p className="text-left">
              <b>Encargado:</b> {Encargado}
            </p>
            <p className="text-left">
              <b>No. Bodega</b> {numBodega}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default CartaBodegas;
