import {React, useRef} from "react";
import TopBar from "./components/TopBar";
import HomeTab from "./components/HomeTab"
import AboutTab from "./components/AboutTab"
import ProjectsTab from "./components/ProjectsTab";
import ContactTab from "./components/ContactTab";

const App = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const projectsRef = useRef(null)
    const contactRef = useRef(null)

    return (
        <div className={'bg-background pt-2 font-sans md:px-[15px]'}>
            <TopBar homeRef={homeRef} aboutRef={aboutRef} projectsRef={projectsRef} contactRef={contactRef}/>
            <HomeTab homeRef={homeRef} contactRef={contactRef} />
            <AboutTab aboutRef={aboutRef}/>
            <ProjectsTab projectsRef={projectsRef}/>
            <ContactTab contactRef={contactRef}/>
        </div>
    );
}

export default App;
