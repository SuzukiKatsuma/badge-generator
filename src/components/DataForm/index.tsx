import DataSelectModal from "@/components/DataSelectModal";
import { useState } from "react";

import style from "./style.module.css";

interface Props {
  readonly badgeData: BadgeData;
  readonly setBadgeData: (badgeData: BadgeData) => void;
}

const DataForm = ({ badgeData, setBadgeData }: Props) => {
  const [hasModalOpened, setHasModalOpened] = useState(false);
  const [iconName, setIconName] = useState<string>(badgeData.name);

  const selectBadgeData = (selectBadgeTitle: string, selectColor: string) => {
    setIconName(selectBadgeTitle);
    setBadgeData({ ...badgeData, name: selectBadgeTitle, color: selectColor });

    setHasModalOpened(false);
  };

  const onStyleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const style = currentTarget.value;
    setBadgeData({ ...badgeData, style: style });
  };

  const onColorChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const setColorValue = currentTarget.value.slice(1);
    const color = setColorValue;
    setBadgeData({ ...badgeData, color: color });
  };

  return (
    <div className={style.badgeFormWrapper}>
      <form className={style.badgeForm}>
        <fieldset className={style.badgeFormRow}>
          <label htmlFor="icon">Icon:</label>
          <input id="icon" name="icon" type="text" value={iconName} readOnly />
        </fieldset>

        <fieldset className={style.badgeFormRow}>
          <label htmlFor="style">Style:</label>
          <select
            id="style"
            name="style"
            value={badgeData.style}
            onChange={onStyleChange}
          >
            <option value="plastic">plastic</option>
            <option value="flat">flat</option>
            <option value="flat-square">flat-square</option>
            <option value="for-the-badge">for-the-badge</option>
            <option value="social">social</option>
          </select>
        </fieldset>

        <fieldset className={style.badgeFormRow}>
          <label htmlFor="color">Color:</label>
          <input
            id="color"
            name="color"
            type="color"
            value={`#${badgeData.color}`}
            onChange={onColorChange}
          />
        </fieldset>

        <button type="button" onClick={() => setHasModalOpened(true)}>
          Icon Select
        </button>
      </form>

      <DataSelectModal
        hasModalOpened={hasModalOpened}
        selectBadgeData={selectBadgeData}
        onClose={() => setHasModalOpened(false)}
      />
    </div>
  );
};

export default DataForm;
