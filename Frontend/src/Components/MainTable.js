import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';
import ModalForm from './Modal';
import DataTable from './DataTable';

class MainTable extends Component {
  state = {
    items: [],
  };

  getItems = async () => {
    const res = await axios.get('http://178.128.67.247:3001/api/clientes');
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
        <Row>
          <Col>
            <h1 style={{ margin: '20px 0' }}>Clientes</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <DataTable
              items={this.state.items}
              updateState={this.updateState}
              deleteItemFromState={this.deleteItemFromState}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <ModalForm buttonLabel="add" addItemToState={this.addItemToState} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainTable;
