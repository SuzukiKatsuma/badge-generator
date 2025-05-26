import DataForm from "@/components/DataForm";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OutputArea from "@/components/OutputArea";
import type { BadgeParameter } from "@/types/BadgeParameter";
import { useState } from "react";

const App = () => {
  const [badgeParameter, setBadgeParameter] = useState<BadgeParameter>({
    name: "React",
    color: "20232a",
    style: "flat",
  });

  return (
    <>
      <Header />

      <main>
        <DataForm
          badgeParameter={badgeParameter}
          setBadgeParameter={(badgeParameter) => setBadgeParameter(badgeParameter)}
        />

        <OutputArea badgeParameter={badgeParameter} />
      </main>

      <Footer />
    </>
  );
};

export default App;
