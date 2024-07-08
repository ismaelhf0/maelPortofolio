import { BrowserRouter } from "react-router-dom"
import Navbar from './components/header/navbar.jsx'
import './reset.css'; // or './reset.css'
import Footer from './components/footer/footer.jsx'

function App() {

  return (
    
    <BrowserRouter>

     <Navbar />

      <Footer />
    
</BrowserRouter>



  )
}

export default App
