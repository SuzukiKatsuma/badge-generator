import React from 'react';
import { Button, Col, Form, Modal, Row } from 'react-bootstrap';
import './index.scss';
import Data from './data.json';

function Output(props) {
  let imgSrc = 'https://img.shields.io/badge/';
  let logo = props.status.toString().toLowerCase();

  logo = logo.replace(/ /g, "-");
  logo = logo.replace('++', "%2b%2b");

  imgSrc += props.status + '-' + props.color + '.svg?logo=' + logo + '&style=' + props.style;

  return (
    <Row className="output-area">
      <figure className="badge">
        <img src={imgSrc} alt={props.status} />
      </figure>

      <div className="src-title">
        <p>HTML</p>
      </div>
      <pre className="src-space">
        <code>&lt;img src="{imgSrc}" /&gt;</code>
      </pre>
      <div className="src-title">
        <p>Markdown</p>
      </div>
      <pre className="src-space">
        <code>![{props.status}]({imgSrc})</code>
      </pre>
    </Row>
  );
}

export default class Generator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isShow: false,
      status: 'React',
      color: '20232a',
      style: 'flat'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleColorPicke = this.handleColorPicke.bind(this);
  }

  handleChange(event) {
    this.setState({ style: event.target.value });
  }

  handleToggle() {
    this.setState({ isShow: !this.state.isShow });
  }

  handleClick(event) {
    this.setState({
      status: event.currentTarget.name,
      color: event.currentTarget.getAttribute('data-color'),
      isShow: !this.state.isShow
    });
  }

  handleColorPicke(event) {
    const setColor = event.currentTarget.value.slice(1);
    this.setState({ color: setColor });
  }

  render() {
    const lists = Data.map((d) =>
      <Button className="col-sm-3 m-1" variant="outline-primary" key={d.id} name={d.name} data-color={d.color} onClick={this.handleClick}>
        <p className="align-center m-0">{d.name}</p>
      </Button>
    );

    return (
      <main className="container-fluid">
        <Form className="my-5">
          <Form.Group as={Row} className="form-row">
            <Form.Label column sm="2">Icon</Form.Label>
            <Col sm="8">
              <Form.Control readOnly id="logo" name="logo" placeholder={this.state.status} />
            </Col>
            <Col sm="2">
              <Button key="modal" variant="outline-secondary" onClick={this.handleToggle}>Select</Button>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="form-row">
            <Form.Label column sm="2" htmlFor="style">Style</Form.Label>
            <Col sm="6">
              <Form.Select id="style" name="style" value={this.state.style} onChange={this.handleChange}>
                <option value="plastic">plastic</option>
                <option value="flat">flat</option>
                <option value="flat-square">flat-square</option>
                <option value="for-the-badge">for-the-badge</option>
                <option value="social">social</option>
              </Form.Select>
            </Col>
            <Form.Label column sm="2" htmlFor="color">Color</Form.Label>
            <Col sm="2">
              <Form.Control id="color" name="color" type="color" value={'#' + this.state.color} onChange={this.handleColorPicke} />
            </Col>
          </Form.Group>
        </Form>

        <>
          <Modal show={this.state.isShow} onHide={this.handleToggle}>
            <Modal.Header closeButton>
              <Modal.Title>Select</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Row className="justify-content-around">
                {lists}
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={this.handleToggle}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </>

        <Output
          status={this.state.status}
          color={this.state.color}
          style={this.state.style}
        />
      </main >
    );
  }
}