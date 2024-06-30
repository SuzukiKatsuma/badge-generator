import  { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import './index.scss';
import Data from './data.json';
import Outputs from './components/Outputs';

const App = () => {
  const [isModalOpened, setIsModalOpened] = useState<boolean>(false);
  const [searchText, setSearchText] = useState<string>('');

  const [badgeTitle, setBadgeTitle] = useState<string>('React');
  const [color, setColor] = useState<string>('20232a');
  const [style, setStyle] = useState<string>('flat');

  const handleModalToggle = () => {
    setIsModalOpened(!isModalOpened);
  };

  const selectData = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    setIsModalOpened(!isModalOpened);
    setBadgeTitle(currentTarget.name);
    const colorData = currentTarget.getAttribute('data-color');
    colorData && (setColor(colorData));
  };

  const handleColorPicke = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    const setColorValue = currentTarget.value.slice(1);
    setColor(setColorValue);
  };

  const search = searchText.toUpperCase();
  const lists = Data.map(({ name, color }, index) =>
    (search === '' || name.toUpperCase().indexOf(search) !== -1) &&
      <button className="list-item" key={index} name={name} data-color={color} onClick={selectData}>
        <p className="align-center m-0">{name}</p>
      </button>
  );

  return (
    <main>
      <Form className="form-wrapper">
        <Form.Group className="form-row icon-form">
          <Form.Label column sm="2">Icon</Form.Label>
          <Form.Control readOnly id="logo" name="logo" placeholder={badgeTitle} />
          <Button key="modal" variant="outline-secondary" onClick={handleModalToggle}>
            Select
          </Button>
        </Form.Group>
        <Form.Group className="form-row design-form">
          <Form.Label column sm="2" htmlFor="style">Style</Form.Label>
          <Form.Select id="style" name="style" value={style} onChange={({ target }) => setStyle(target.value)}>
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
        <Modal show={isModalOpened} onHide={handleModalToggle}>
          <Modal.Header closeButton>
            <div>
              <h4>Select</h4>
              <form className="search-box" role="search">
                <input id="search" placeholder="search" value={searchText} onChange={({ target }) => setSearchText(target.value)}>
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
};

export default App;
