import DataForm from "@/components/DataForm";
import Header from "@/components/Header";
import OutputArea from "@/components/OutputArea";
import { useState } from "react";

import "./index.scss";

const App = () => {
  const [badgeData, setBadgeData] = useState<BadgeData>({
    name: "React",
    color: "20232a",
    style: "flat",
  });

  return (
    <>
      <Header />

      <main>
        <DataForm
          badgeData={badgeData}
          setBadgeData={(badgeData) => setBadgeData(badgeData)}
        />

        <OutputArea badgeData={badgeData} />
      </main>
    </>
  );
};

export default App;
