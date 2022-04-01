import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./index.scss";
import Data from "./data.json";
import Outputs from "./components/Outputs";

export default class Generator extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      search: "",
      status: "React",
      color: "20232a",
      style: "flat"
    };
  }

  handleToggle = () => {
    this.setState({ isShow: !this.state.isShow });
  }

  handleSearch = ({ target }) => {
    this.setState({ search: target.value })
  }

  handleClick = ({ currentTarget }) => {
    this.setState({
      isShow: !this.state.isShow,
      status: currentTarget.name,
      color: currentTarget.getAttribute("data-color")
    });
  }

  handleChange = ({ target }) => {
    this.setState({ style: target.value });
  }

  handleColorPicke = ({ currentTarget }) => {
    const setColor = currentTarget.value.slice(1);
    this.setState({ color: setColor });
  }

  render() {
    const search = this.state.search.toUpperCase();

    const lists = Data.map(({ name, color }, index) =>
      (search === "" || name.toUpperCase().indexOf(search) !== -1) &&
      <button className="list-item" key={index} name={name} data-color={color} onClick={this.handleClick}>
        <p className="align-center m-0">{name}</p>
      </button>
    );

    return (
      <main>
        <Form className="form-wrapper">
          <Form.Group className="form-row icon-form">
            <Form.Label column sm="2">Icon</Form.Label>
            <Form.Control readOnly id="logo" name="logo" placeholder={this.state.status} />
            <Button key="modal" variant="outline-secondary" onClick={this.handleToggle}>
              Select
            </Button>
          </Form.Group>
          <Form.Group className="form-row design-form">
            <Form.Label column sm="2" htmlFor="style">Style</Form.Label>
            <Form.Select id="style" name="style" value={this.state.style} onChange={this.handleChange}>
              <option value="plastic">plastic</option>
              <option value="flat">flat</option>
              <option value="flat-square">flat-square</option>
              <option value="for-the-badge">for-the-badge</option>
              <option value="social">social</option>
            </Form.Select>
            <Form.Label column sm="2" htmlFor="color">Color</Form.Label>
            <Form.Control id="color" name="color" type="color" value={`#${this.state.color}`} onChange={this.handleColorPicke} />
          </Form.Group>
        </Form>

        <>
          <Modal show={this.state.isShow} onHide={this.handleToggle}>
            <Modal.Header closeButton>
              <div>
                <h4>Select</h4>
                <form className="search-box" role="search">
                  <input id="search" placeholder="search" value={this.state.search} onChange={this.handleSearch}>
                  </input>
                </form>
              </div>
            </Modal.Header>
            <Modal.Body className="list-item-body">
              {lists}
            </Modal.Body>
          </Modal>
        </>

        <Outputs
          status={this.state.status}
          color={this.state.color}
          style={this.state.style}
        />
      </main>
    );
  }
}