import React, { useState } from 'react';
import { Input, Container, Button, Col } from 'reactstrap';
import '../Styles/ImgSelection.css';

const CreacionDepartamentos = () => {
  const [data, setData] = useState({
    nombre: '',
    image: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const imageHandler = (e) => {
    if (e.target.files[0]) {
      console.log(e.target.files[0]);
      const image = e.target.files[0];
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
          <img src={data.profilepic} alt="" id="img" className="img img-select" />
        </div>
        <Input type="file" name="imgfile" id="exampleFile" onChange={imageHandler} />
      </Col>
    </Container>
  );
};

export default CreacionDepartamentos;
