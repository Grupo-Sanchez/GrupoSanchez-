import React from 'react';

const Formulario = ({ onChange, onSubmit, form }) => (
  <div className="container">
    <form onSubmit={onSubmit}>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Numero de bodega"
          name="numBodega"
          onChange={onChange}
          value={form.numBodega}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Descripcion de Bodega"
          name="Description"
          onChange={onChange}
          value={form.Description}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Encargado de Bodega"
          name="Encargado"
          onChange={onChange}
          value={form.Encargado}
        />
      </div>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Cantidad de pasillos"
          name="CantPasillos"
          onChange={onChange}
          value={form.CantPasillos}
        />
      </div>
    </form>
  </div>
);

export default Formulario;
