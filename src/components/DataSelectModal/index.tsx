import { useEffect, useRef, useState, useMemo, useCallback } from "react";
import type { BadgeParameter } from "@/types/BadgeParameter";

import data from "@/data.json";
import style from "./style.module.css";

interface Props {
  readonly hasModalOpened: boolean;
  readonly selectBadgeData: (badgeTitle: string, color: string) => void;
  readonly onClose: () => void;
}

interface BadgeData {
  readonly name: string;
  readonly color: string;
}

const useSearchFilter = (data: BadgeData[], searchText: string) => {
  return useMemo(() => {
    if (!searchText.trim()) {
      return data;
    }
    return data.filter((item) =>
      item.name.toLowerCase().includes(searchText.toLowerCase().trim()),
    );
  }, [data, searchText]);
};

const DataSelectModal = ({
  hasModalOpened,
  selectBadgeData,
  onClose,
}: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [searchText, setSearchText] = useState<string>("");

  useEffect(() => {
    hasModalOpened ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [hasModalOpened]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (hasModalOpened) {
      document.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [hasModalOpened, onClose]);

  const handleSelectData = useCallback(
    ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
      const badgeTitle = currentTarget.name;
      const color = currentTarget.getAttribute("data-color") as string;

      selectBadgeData(badgeTitle, color);
      setSearchText("");
    },
    [selectBadgeData],
  );

  const filteredData = useSearchFilter(data as BadgeData[], searchText);

  const renderItems = () => {
    if (filteredData.length === 0) {
      return <p className={style.notFound}>NOT FOUND</p>;
    }

    const items = filteredData.map((item) => (
      <button
        type="button"
        key={item.name}
        name={item.name}
        data-color={item.color}
        onClick={handleSelectData}
        aria-label={`Select ${item.name} badge`}
      >
        {item.name}
      </button>
    ));

    return items;
  };

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
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <div className={style.listItemBody}>{renderItems()}</div>
    </dialog>
  );
};

export default DataSelectModal;
