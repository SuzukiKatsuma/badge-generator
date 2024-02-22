import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import "./index.scss";
import Data from "./data.json";
import Outputs from "./components/Outputs";

function App(){
  const [isShow, setIsShow] = useState(false);
  const [searchText, setSearchText] = useState("");

  const [badgeTitle, setBadgeTitle] = useState("React");
  const [color, setColor] = useState("20232a");
  const [style, setStyle] = useState("flat");

  const handleToggle = () => {
    setIsShow(!isShow);
  }

  const handleSearch = ({ target }) => {
    setSearchText(target.value);
  }

  const handleClick = ({ currentTarget }) => {
    setIsShow(!isShow);
    setBadgeTitle(currentTarget.name);
    setColor(currentTarget.getAttribute("data-color"));
  }

  const handleChange = ({ target }) => {
    setStyle(target.value);
  }

  const handleColorPicke = ({ currentTarget }) => {
    const setColorValue = currentTarget.value.slice(1);
    setColor(setColorValue);
  }

  const search = searchText.toUpperCase();
  const lists = Data.map(({ name, color }, index) =>
    (search === "" || name.toUpperCase().indexOf(search) !== -1) &&
    <button className="list-item" key={index} name={name} data-color={color} onClick={handleClick}>
      <p className="align-center m-0">{name}</p>
    </button>
  );

  return (
    <main>
      <Form className="form-wrapper">
        <Form.Group className="form-row icon-form">
          <Form.Label column sm="2">Icon</Form.Label>
          <Form.Control readOnly id="logo" name="logo" placeholder={badgeTitle} />
          <Button key="modal" variant="outline-secondary" onClick={handleToggle}>
            Select
          </Button>
        </Form.Group>
        <Form.Group className="form-row design-form">
          <Form.Label column sm="2" htmlFor="style">Style</Form.Label>
          <Form.Select id="style" name="style" value={style} onChange={handleChange}>
            <option value="plastic">plastic</option>
            <option value="flat">flat</option>
            <option value="flat-square">flat-square</option>
            <option value="for-the-badge">for-the-badge</option>
            <option value="social">social</option>
          </Form.Select>
          <Form.Label column sm="2" htmlFor="color">Color</Form.Label>
          <Form.Control id="color" name="color" type="color" value={`#${color}`} onChange={handleColorPicke} />
        </Form.Group>
      </Form>

      <>
        <Modal show={isShow} onHide={handleToggle}>
          <Modal.Header closeButton>
            <div>
              <h4>Select</h4>
              <form className="search-box" role="search">
                <input id="search" placeholder="search" value={searchText} onChange={handleSearch}>
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
        badgeTitle={badgeTitle}
        color={color}
        style={style}
      />
    </main>
  );
}


export default App;
