import  { useState } from 'react';

import DataForm from './components/DataForm';
import Outputs from '~/components/Outputs';

import './index.scss';

const App = () => {
  const [badgeTitle, setBadgeTitle] = useState<string>('React');
  const [color, setColor] = useState<string>('20232a');
  const [style, setStyle] = useState<string>('flat');

  const setBadgeData = (selectBadgeTitle: string, selectColor: string, style: string) => {
    setBadgeTitle(selectBadgeTitle);
    setColor(selectColor);
    setStyle(style);
  };

  return (
    <main>
      <DataForm
        badgeTitle={badgeTitle}
        color={color}
        style={style}
        setBadgeData={setBadgeData}
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
