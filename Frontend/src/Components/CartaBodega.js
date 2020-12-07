import React from 'react';
import home from '../Icons/CasaBodegas.png';
import '../Styles/Bodegas.css';

const CartaBodegas = ({ numBodega, Description, Encargado, CantPasillos }) => (
  <div className="cardBodegas mx-auto Fitness-Card">
    <div className="card-body">
      <div className="row center">
        <div className="col-6">
          <img src={home} className="float-right" alt=" not found" />
        </div>
        <div className="col-6 Fitness-Card-Info">
          <p># de Bodega: {numBodega}</p>
          <p>Descripcion: {Description}</p>
          <p>Encargado: {Encargado}</p>
          <p>Cantidad de Pasillos: {CantPasillos}</p>
        </div>
      </div>
    </div>
  </div>
);

export default CartaBodegas;
