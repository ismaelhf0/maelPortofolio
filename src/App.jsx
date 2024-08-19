import { BrowserRouter } from "react-router-dom"
import Navbar from './components/header/navbar.jsx'
import Hero from './sections/hero/hero.jsx'
import '@fortawesome/fontawesome-svg-core/styles.css'

import './reset.css'; // or './reset.css'
import Footer from './components/footer/footer.jsx'
// import About from './sections/section-one/section-one.jsx'
import Projects from "./sections/section-two/projects.jsx";
import Skills from "./sections/section-tree/skills.jsx";
import Contact from "./sections/contact/contact.jsx";
import BioSection from "./sections/whoImI/BioSection.jsx";
import VerticalBioSection from "./sections/vertical-bioSection/VerticalBioSection";

function App() {

  return (
    <BrowserRouter>
    <Navbar />
    <Hero />
    <VerticalBioSection/>
    <BioSection />
    {/* <About /> */}
    <Projects />
    <Skills />
    <Contact />
      <Footer />
    
</BrowserRouter>


  )
}

export default App
