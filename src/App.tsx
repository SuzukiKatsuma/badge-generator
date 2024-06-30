import  { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

import Outputs from '~/components/Outputs';
import DataSelectModal  from '~/components/DataSelectModal';

import './index.scss';

const App = () => {
  const [hasModalOpened, setHasModalOpened] = useState<boolean>(false);

  const [badgeTitle, setBadgeTitle] = useState<string>('React');
  const [color, setColor] = useState<string>('20232a');
  const [style, setStyle] = useState<string>('flat');


  const setBadgeData = (selectBadgeTitle: string, selectColor: string) => {
    setBadgeTitle(selectBadgeTitle);
    setColor(selectColor);

    setHasModalOpened(false);
  };

  const handleColorPicke = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    const setColorValue = currentTarget.value.slice(1);
    setColor(setColorValue);
  };

  return (
    <main>
      <Form className="form-wrapper">
        <Form.Group className="form-row icon-form">
          <Form.Label column sm="2">Icon</Form.Label>
          <Form.Control readOnly id="logo" name="logo" placeholder={badgeTitle} />
          <Button key="modal" variant="outline-secondary" onClick={() => setHasModalOpened(true)}>
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

      <DataSelectModal
        hasModalOpened={hasModalOpened}
        setBadgeData={setBadgeData}
        onClose={() => setHasModalOpened(false)}
      />

      <Outputs
        badgeTitle={badgeTitle}
        color={color}
        style={style}
      />
    </main>
  );
};

export default App;
