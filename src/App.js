import React from "react";
import TopBar from "./components/TopBar";
import Home from "./components/Home"

const App = () => {
  return (
      <div className={'bg-background pt-2 font-sans'}>
          <TopBar />
          <Home />
      </div>
  );
}

export default App;
