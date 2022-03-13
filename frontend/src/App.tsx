import React from "react";
import { Layout } from "./src/components/Layout";
import { Menu } from "./src/components/Menu";

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu />
      </Layout>
    </div>
  );
}

export default App;
