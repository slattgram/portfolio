import React from "react";
import TopBar from "./components/TopBar";
import Home from "./components/Home"
import About from "./components/About"

const App = () => {
  return (
      <div className={'bg-background pt-2 font-sans'}>
          <TopBar />
          <Home />
          <About />
      </div>
  );
}

export default App;
