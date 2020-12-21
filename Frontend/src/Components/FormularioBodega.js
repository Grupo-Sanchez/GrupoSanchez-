import React from 'react';
import {
  AvForm,
  AvField,
  AvGroup,
  AvInput,
  AvFeedback,
  AvRadioGroup,
  AvRadio,
  AvCheckboxGroup,
  AvCheckbox,
} from 'availity-reactstrap-validation';
import { Button, Label, FormGroup, CustomInput } from 'reactstrap';

const Formulario = ({ onChange, onSubmit, form }) => (
  <AvForm onSubmit={onSubmit}>
    <AvField
      name="numBodega"
      label="Numero de bodega"
      type="number"
      onChange={onChange}
      value={form.numBodega}
    />
    <AvField
      name="Description"
      label="Descripcion"
      type="text"
      onChange={onChange}
      value={form.Description}
      validate={{
        required: { value: true, errorMessage: 'Campo debe ser llenado ' },
        pattern: {
          value: '^[A-Za-z0-9]',
          errorMessage: 'Este campo debe estar compuesto solo de letras y numeros',
        },
      }}
    />
    <AvField
      name="Encargado"
      label="Encargado"
      type="text"
      onChange={onChange}
      value={form.Encargado}
      validate={{
        required: { value: true, errorMessage: 'Campo debe ser llenado' },
        pattern: {
          value: '^[A-Za-z0-9]',
          errorMessage: 'Este Campo debe ser llenado con letras y numeros',
        },
      }}
    />
    <AvField
      name="CantPasillos"
      label="Cantidad de pasillos"
      type="number"
      onChange={onChange}
      value={form.CantPasillos}
    />
  </AvForm>
);

export default Formulario;
