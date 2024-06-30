import { useState } from 'react';

import DataSelectModal  from '~/components/DataSelectModal';

import './style.css';

interface Props {
  readonly badgeTitle: string;
  readonly color: string;
  readonly style: string;
  readonly setBadgeData: (selectBadgeTitle: string, selectColor: string, style: string) => void;
};

const DataForm = ({ badgeTitle, color, style, setBadgeData }: Props) => {
  const [hasModalOpened, setHasModalOpened] = useState(false);
  const [iconName, setIconName] = useState<string>(badgeTitle);

  const selectBadgeData = (selectBadgeTitle: string, selectColor: string) => {
    setIconName(selectBadgeTitle);
    setBadgeData(selectBadgeTitle, selectColor, style);

    setHasModalOpened(false);
  };

  const onStyleChange = ({ currentTarget }: React.ChangeEvent<HTMLSelectElement>) => {
    const style = currentTarget.value;
    setBadgeData(badgeTitle, color, style);
  };

  const onColorChange = ({ currentTarget }: React.ChangeEvent<HTMLInputElement>) => {
    const setColorValue = currentTarget.value.slice(1);
    const color = setColorValue;
    setBadgeData(badgeTitle, color, style);
  };

  return (
    <>
      <form className="badge-form">
        <fieldset>
          <label>Icon:</label>
          <h2>{iconName}</h2>
        </fieldset>

        <fieldset>
          <label htmlFor="style">Style:</label>
          <select id="style" name="style" value={style} onChange={onStyleChange}>
            <option value="plastic">plastic</option>
            <option value="flat">flat</option>
            <option value="flat-square">flat-square</option>
            <option value="for-the-badge">for-the-badge</option>
            <option value="social">social</option>
          </select>
        </fieldset>

        <fieldset>
          <label htmlFor="color">Color:</label>
          <input id="color" name="color" type="color" value={`#${color}`} onChange={onColorChange} />
        </fieldset>

        <button type='button'  onClick={() => setHasModalOpened(true)}>
          Icon Select
        </button>
      </form>


      <DataSelectModal
        hasModalOpened={hasModalOpened}
        selectBadgeData={selectBadgeData}
        onClose={() => setHasModalOpened(false)}
      />
    </>
  );
};

export default DataForm;
