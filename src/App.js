import {React} from "react";
import TopBar from "./components/TopBar";
import HomeTab from "./components/HomeTab"
import AboutTab from "./components/AboutTab"
import ProjectsTab from "./components/ProjectsTab";
import ContactTab from "./components/ContactTab";

const App = () => {
  return (
      <div className={'bg-background pt-2 font-sans md:px-[15px]'}>
          <TopBar />
          <HomeTab />
          <AboutTab/>
          <ProjectsTab/>
          <ContactTab/>
      </div>
  );
}

export default App;
