import React, { Component, useState, useEffect } from 'react';
import {
  Button,
  Table,
  Label,
  FormGroup,
  Input,
  Row,
  Col,
  Modal,
  ModalBody,
  ModalHeader,
  ModalFooter,
} from 'reactstrap';

export default function FacturaImprimir(props) {
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * -6);
  let convertir = require('numero-a-letras');
  const imprimir = () => {
    props.change();
    window.print();
  };
  return (
    <div>
      <p class="centered">
        <h5 style={{ fontWeight: 'bold' }}>COMERCIAL Y FERRETERA "SANCHEZ" "COFERSA" </h5>
        Colonia Villanueva, Carretera a Danli Tegucigalpa, M.D.C
        <br />
        <h6>RTN: 08019001211740 | Tels.: 2291-2440 - 2291-1942</h6>
        <p style={{ fontWeight: 'bold', fontSize: '11px' }}>
          CAI: 0FDB3F-A8C88F-F7459A-38BCD6-C91E47-0A | RTN: 08019001211740
        </p>
        <h5>No. FAC #{props.productos.invoiceNumber}</h5>
        Nombre Cliente: {props.productos.nombreCliente}
        <br />
        RTN: {props.productos.identificacion}
      </p>
      <Row>
        <Col>
          <p>
            Fecha:{' '}
            {`${new Date().getDate()}/${parseInt(
              new Date().getMonth() + 1,
              10,
            )}/${new Date().getFullYear()}`}
          </p>
        </Col>
        <Col>
          <p>Hora: {nd.toLocaleTimeString()}</p>
        </Col>
      </Row>
      <Table>
        <thead>
          <tr>
            <th class="quantity">Cantidad</th>
            <th class="description">Nombre/Codigo Producto</th>
            <th class="price">Precio</th>
            <td class="description" style={{ fontWeight: 'bold' }}>
              TOTAL
            </td>
          </tr>
        </thead>
        <tbody>
          {props.productos.productosSeleccionado.map((row, i) => (
            <tr key={i}>
              <td class="quantity">{row.cantidad}</td>
              <td class="description">
                {row.name}, {row.codigo}
              </td>
              <td class="price">L. {row.precioSumado}</td>
              <td class="price">L. {props.productos.total}</td>
            </tr>
          ))}
          <tr>
            <td>--------</td>
            <td>--------</td>
            <td>--------</td>
          </tr>
          <tr>
            <td class="quantity"></td>
            <td class="description" style={{ fontWeight: 'bold' }}>
              SUBTOTAL
            </td>
            <td class="price">L. {props.productos.subtotal}</td>
          </tr>
          <tr>
            <td class="quantity"></td>
            <td class="description" style={{ fontWeight: 'bold' }}>
              IMPUESTO
            </td>
            <td class="price">L. {props.productos.impuesto}</td>
          </tr>
          <tr>
            <td class="quantity"></td>
            <td class="description" style={{ fontWeight: 'bold' }}>
              TOTAL
            </td>
            <td class="price">L. {props.productos.total}</td>
          </tr>
        </tbody>
      </Table>
      <h5 class="centered">FACTURA AL CONTADO</h5>
      <p class="centered" style={{ fontWeight: 'bold' }}>
        Son: {convertir.NumerosALetras(props.productos.total)}
      </p>
      <p class="centered" style={{ fontSize: '11px' }}>
        "LA FACTURA ES BENEFICIO DE TODOS: ¡EXIJALA!"
        <br />
        comercialferreterasanchez@hotmail.com
      </p>
      <Row>
        <Col style={{ paddingLeft: '50px' }}>
          __________________________ <br />
          <span style={{ display: 'inline-block', 'margin-left': '70px' }}></span>
          Firma
        </Col>
        <Col>
          <p class="centered" style={{ fontSize: '11px' }}>
            GRACIAS POR SU COMPRA
            <br />
            Original: Cliente - Copia: Vendedor
          </p>
        </Col>
      </Row>
      <div class="hide-on-print">
        <Row>
          <Col>
            <Button class="hide-on-print" color="primary" onClick={() => imprimir()}>
              Print
            </Button>
          </Col>
          <Col style={{ paddingLeft: '280px' }}>
            <Button class="hide-on-print" color="danger" onClick={() => props.change()}>
              Cancelar
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
