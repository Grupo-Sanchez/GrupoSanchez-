import React, { useState } from 'react';
import { Input, Container, Button, Col } from 'reactstrap';
import '../Styles/ImgSelection.css';
import axios from 'axios';

const CreacionDepartamentos = () => {
  const [imagen, setImagen] = useState();

  const [data, setData] = useState({
    nombre: '',
    descripcion: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const updateImg = (e) => {
    setImagen(e.target.files[0]);
    const nombreImagen = 'image';
    setData({ ...data, [nombreImagen]: URL.createObjectURL(e.target.files[0]) });
  };

  const imageHandler = (e) => {
    if (e.target.files[0]) {
      const image = e.target.files[0];
      setImagen(image);
    }
    updateImg(e);
  };

  const prueba = async () => {
    alert('entro');
    const campos = {
      nombre: data.nombre,
      descripcion: data.descripcion,
      imagen: data.image,
    };
    alert('salio');
    const res = await axios.post('http://localhost:3001/api/departamento', campos);
    console.log(res);
    alert('escribio');
  };

  return (
    <Container>
      <Col md="6" style={{ margin: 'auto', paddingTop: '25px' }}>
        <h3>Agregar Departamento</h3>
        <h3>Nombre</h3>
        <Input name="nombre" value={data.nombre} onChange={handleChange} />
        <h3>Descripción Breve</h3>
        <Input
          type="textarea"
          name="descripcion"
          value={data.descripcion}
          onChange={handleChange}
        />
        <h3>Imagen de Departamento</h3>
        <div className="img-holder">
          <img src={data.image} alt="" id="img" className="img img-select" />
        </div>
        <Input
          type="file"
          name="image"
          id="exampleFile"
          onChange={imageHandler}
          style={{ paddingBottom: '2em' }}
        />
        <Button color="primary" onClick={prueba}>
          Crear Departamento
        </Button>
      </Col>
    </Container>
  );
};

export default CreacionDepartamentos;
