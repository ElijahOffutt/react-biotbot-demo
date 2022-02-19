import React from "react";

import { Header, Footer } from '@components'
import Analysis from "@components/splash/analysis";

const Home: React.FC = () => {
  return (
    <>
      <Header short={false} />
        <div style={{width: '1125px', margin: '100px auto'}}>
          <Analysis /> <br /> <br />
        </div>
      <Footer />
    </>
  );
};

export default Home;
