import React from 'react';
import { Button } from 'reactstrap';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { Table } from 'reactstrap';
const Facturas = (props) => {
    var total = 0;
    var precios = [];
    const getTotal = () => {
        for (let index = 0; index < precios.length; index++) {
            total += precios[index];
            alert("sddff")
        }
    }
    return (
        <div>
            <h1 align="center">FACTURA</h1>
            <Table responsive="sm" striped bordered hover dark align="center" size="sm">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Nombre Producto</th>
                        <th>Codigo</th>
                        <th>Cantidad</th>
                        <th>Precio Unitario</th>
                        <th>Precio Sumado</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Tornillo</td>
                        <td>000235</td>
                        <td>5</td>
                        <td>25 Lps.</td>
                        {precios.concat(25 * 5)}
                        
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Martillo</td>
                        <td>000255</td>
                        <td>10</td>
                        <td>500 Lps.</td>
                        {precios.concat(500 * 10)}
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Lijas</td>
                        <td>000335</td>
                        <td>15</td>
                        <td>100 Lps.</td>
                        {precios.concat(100 * 15)}
                    </tr>
                </tbody>
            </Table>
            {"Precios: ", console.log(precios[0])}
            <h1>Total {precios.reduce(function (a, b) {
                return a + b[1];
            }, 0)}</h1>
        </div>
    );
}

export default Facturas;