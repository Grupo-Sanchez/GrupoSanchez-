import React, { useState, useEffect } from "react";
import { ModalBody } from "reactstrap";
import CardBodega from "../Components/CartaBodega";

const Bodegas = ({ data }) => {
  // Falta agregarle la data.
  return (
      <Modal isOpen={props.isOpen}className="text-center">
        <ModalHeader>
            <div>
                <h3>LISTADO DE BODEGAS </h3>
            </div>
        </ModalHeader>
        <ModalBody>
            <div>
                {data.map((Bodegas) => {
                return (
                    <div>
                        <CardBodega
                            bodega={Bodegas.numBodega}
                            encargado={Bodegas.Description}
                            description={Bodegas.Encargado}
                            CantPasillos={Bodegas.CantPasillos}
                        />
                    </div>
                    );
                    })}
            </div>
        </ModalBody>
              <ModalFooter>
                <button className="btn btn-primary" onClick={() => insertar(0)}>
                    CREAR BODEGA
                </button>
                <button className="btn btn-danger" onClick={() => setModalInsertarCodigo(false)}>
                    CANCELAR
                </button>
      </ModalFooter>
      </Modal>
  );
};

export default Bodegas;