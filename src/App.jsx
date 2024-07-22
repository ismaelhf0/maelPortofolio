import { BrowserRouter } from "react-router-dom"
import Navbar from './components/header/navbar.jsx'
import Hero from './sections/hero/hero.jsx'

import './reset.css'; // or './reset.css'
import Footer from './components/footer/footer.jsx'
import About from './sections/section-one/section-one.jsx'
function App() {

  return (
    
    <BrowserRouter>
    <Navbar />
    <Hero />
    <About />
      <Footer />
    
</BrowserRouter>



  )
}

export default App
