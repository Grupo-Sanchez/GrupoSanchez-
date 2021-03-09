import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import ModalForm from './Modal';
import DataTable from './DataTable';
import LupaIcon from '../Icons/lupa1.jpeg';

class MainTable extends Component {
  state = {
    items: [],
  };

  getItems = async () => {
    const res = await axios.get('http://Localhost:3001/api/clientes');
    this.setState({ items: res.data });
  };

  addItemToState = (item) => {
    this.setState((prevState) => ({
      items: [...prevState.items, item],
    }));
  };

  updateState = (item) => {
    const itemIndex = this.state.items.findIndex((data) => data._id === item._id);
    const newArray = [
      // destructure all items from beginning to the indexed item
      ...this.state.items.slice(0, itemIndex),
      // add the updated item to the array
      item,
      // add the rest of the items to the array from the index after the replaced item
      ...this.state.items.slice(itemIndex + 1),
    ];
    this.setState({ items: newArray });
  };

  deleteItemFromState = (id) => {
    const updatedItems = this.state.items.filter((item) => item.id !== id);
    this.setState({ items: updatedItems });
  };

  componentDidMount() {
    this.getItems();
  }

  render() {
    return (
      <Container className="MainTable">
        <br></br>
        <h3>CLIENTES</h3>

        <br></br>
        <Row>
          <Col sm="3">
            <ModalForm buttonLabel="add" addItemToState={this.addItemToState} />
          </Col>
          <Col sm={{ size: 6, order: 2, offset: 0 }}>
            <input
              type="text"
              id="myInput"
              placeholder="Encuentre clientes .."
              title="Type in a name"
              style={{
                'background-image': `url('${LupaIcon}')`,
                'background-position': '10px 10px',
                'background-repeat': 'no-repeat',
                width: '90%',
                'font-size': '16px',
                padding: '12px 20px 12px 40px',
                'border-radius': '26px',
              }}
            ></input>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row></Row>
      </Container>
    );
  }
}

export default MainTable;
