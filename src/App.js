import {React, useRef} from "react";
import TopBar from "./components/TopBar";
import HomeTab from "./components/HomeTab"
import AboutTab from "./components/AboutTab"
import ContactTab from "./components/ContactTab";
import Footer from "./components/Footer"

const App = () => {
    const homeRef = useRef(null)
    const aboutRef = useRef(null)
    const linksRef = useRef(null)
    const contactRef = useRef(null)

    return (
        <div className={'bg-background py-2 font-sans md:px-[15px]'}>
            <TopBar homeRef={homeRef} aboutRef={aboutRef} linksRef={linksRef} contactRef={contactRef}/>
            <HomeTab homeRef={homeRef} contactRef={contactRef} />
            <AboutTab aboutRef={aboutRef}/>
            <ContactTab contactRef={contactRef}/>
            <Footer linksRef={linksRef}/>
        </div>
    );
}

export default App;
