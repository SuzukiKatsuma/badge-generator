import { useEffect, useRef, useState } from "react";

import Data from "@/data.json";
import style from "./style.module.css";

interface Props {
  readonly hasModalOpened: boolean;
  readonly selectBadgeData: (badgeTitle: string, color: string) => void;
  readonly onClose: () => void;
}

const DataSelectModal = ({
  hasModalOpened,
  selectBadgeData,
  onClose,
}: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [searchString, setSearchString] = useState<string>("");

  useEffect(() => {
    hasModalOpened ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [hasModalOpened]);

  const selectData = ({
    currentTarget,
  }: React.MouseEvent<HTMLButtonElement>) => {
    const badgeTitle = currentTarget.name;
    const color = currentTarget.getAttribute("data-color") as string;

    selectBadgeData(badgeTitle, color);

    setSearchString("");
  };

  const search = searchString.toUpperCase();
  const lists = Data.map(
    ({ name, color }, index) =>
      (search === "" || name.toUpperCase().indexOf(search) !== -1) && (
        <button
          type="button"
          className="list-item"
          key={name}
          name={name}
          data-color={color}
          onClick={selectData}
        >
          <p className="align-center m-0">{name}</p>
        </button>
      ),
  );

  return (
    <dialog ref={modalRef} className={style.searchModal}>
      <button type="button" className={style.closeButton} onClick={onClose}>
        x
      </button>
      <input
        id="search"
        type="search"
        className={style.searchBox}
        placeholder="Search..."
        value={searchString}
        onChange={(e) => setSearchString(e.target.value)}
      />
      <div className={style.listItemBody}>{lists}</div>
    </dialog>
  );
};

export default DataSelectModal;
