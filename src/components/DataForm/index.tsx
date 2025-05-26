import { useState } from "react";
import DataSelectModal from "@/components/DataSelectModal";
import type { BadgeParameter } from "@/types/BadgeParameter";

import style from "./style.module.css";

interface Props {
  readonly badgeParameter: BadgeParameter;
  readonly setBadgeParameter: (badgeParameter: BadgeParameter) => void;
}

const DataForm = ({ badgeParameter, setBadgeParameter }: Props) => {
  const [hasModalOpened, setHasModalOpened] = useState(false);
  const [iconName, setIconName] = useState<string>(badgeParameter.name);

  const selectBadgeData = (selectBadgeTitle: string, selectColor: string) => {
    setIconName(selectBadgeTitle);
    setBadgeParameter({ ...badgeParameter, name: selectBadgeTitle, color: selectColor });

    setHasModalOpened(false);
  };

  const onStyleChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLSelectElement>) => {
    const style = currentTarget.value;
    setBadgeParameter({ ...badgeParameter, style: style });
  };

  const onColorChange = ({
    currentTarget,
  }: React.ChangeEvent<HTMLInputElement>) => {
    const setColorValue = currentTarget.value.slice(1);
    const color = setColorValue;
    setBadgeParameter({ ...badgeParameter, color: color });
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
            value={badgeParameter.style}
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
            value={`#${badgeParameter.color}`}
            onChange={onColorChange}
          />
        </fieldset>

        <button
          type="button"
          className={style.iconSelectButton}
          onClick={() => setHasModalOpened(true)}
        >
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
