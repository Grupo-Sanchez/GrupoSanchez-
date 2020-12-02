import React, { useState } from 'react';
import { Input, Container, Button, Col } from 'reactstrap';
import '../Styles/ImgSelection.css';

const CreacionDepartamentos = () => {
  const [imagen, setImagen] = useState();

  const [data, setData] = useState({
    nombre: '',
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

  return (
    <Container>
      <Col md="6" style={{ margin: 'auto', paddingTop: '25px' }}>
        <h3>Agregar Departamento</h3>
        <h3>Nombre</h3>
        <Input name="nombre" value={data.nombre} onChange={handleChange} />
        <h3>Imagen de Departamento</h3>
        <div className="img-holder">
          <img src={data.image} alt="" id="img" className="img img-select" />
        </div>
        <Input type="file" name="image" id="exampleFile" onChange={imageHandler} />
      </Col>
    </Container>
  );
};

export default CreacionDepartamentos;
