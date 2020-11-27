import React from 'react';
import { Button } from 'reactstrap';
import {UseEffect, useState} from 'react';

const tablas = (props) => {
    useEffect = (()=> {
        console.log("que tal?")
    },[])
  return (
    <div>
      <Button outline color="primary">primary</Button>{' '}
      <Button outline color="secondary">secondary</Button>{' '}
      <Button outline color="success">success</Button>{' '}
      <Button outline color="info">info</Button>{' '}
      <Button outline color="warning">warning</Button>{' '}
      <Button outline color="danger">danger</Button>
    </div>
  );

}

export default tablas;