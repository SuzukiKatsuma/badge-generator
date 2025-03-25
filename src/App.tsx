import  { useState } from 'react';

import DataForm from '@/components/DataForm';
import OutputArea from '@/components/OutputArea';

import './index.scss';

const App = () => {
  const [badgeData, setBadgeData] = useState<BadgeData>({ name: 'React', color: '20232a', style: 'flat' });

  return (
    <main>
      <DataForm
        badgeData={badgeData}
        setBadgeData={(badgeData) => setBadgeData(badgeData)}
      />

      <OutputArea badgeData={badgeData} />
    </main>
  );
};

export default App;
