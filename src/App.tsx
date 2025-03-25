import DataForm from "@/components/DataForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OutputArea from "@/components/OutputArea";
import { useState } from "react";

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

      <Footer />
    </>
  );
};

export default App;
