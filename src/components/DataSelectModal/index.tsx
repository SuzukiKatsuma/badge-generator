import  { useEffect, useState, useRef } from 'react';

import './style.css';
import Data from '@/data.json';

interface Props {
  readonly hasModalOpened: boolean;
  readonly selectBadgeData: (badgeTitle: string, color: string) => void;
  readonly onClose: () => void;
};

const DataSelectModal = ({ hasModalOpened, selectBadgeData, onClose }: Props) => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const [searchString, setSearchString] = useState<string>('');

  useEffect(() => {
    hasModalOpened ? modalRef.current?.showModal() : modalRef.current?.close();
  }, [hasModalOpened]);

  const selectData = ({ currentTarget }: React.MouseEvent<HTMLButtonElement>) => {
    const badgeTitle = currentTarget.name;
    const color = currentTarget.getAttribute('data-color') as string;

    selectBadgeData(badgeTitle, color);

    setSearchString('');
  };

  const search = searchString.toUpperCase();
  const lists = Data.map(({ name, color }, index) =>
    (search === '' || name.toUpperCase().indexOf(search) !== -1) &&
      <button type='button' className="list-item" key={name} name={name} data-color={color} onClick={selectData}>
        <p className="align-center m-0">{name}</p>
      </button>
  );

  return (
    <dialog ref={modalRef} >
      <button type="button" className='close-button' onClick={onClose}>x</button>
      <form className="search-box" role="search">
        <label>Search:</label>
        <input id="search" value={searchString} onChange={e => setSearchString(e.target.value)} />
      </form>
      <div className="list-item-body">
        {lists}
      </div>
    </dialog>
  );
};

export default DataSelectModal;
