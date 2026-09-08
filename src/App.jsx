import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'

import './App.css';
import Intro from './components/Intro/Intro.jsx';

function App() {
  

  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <Intro />
      </div>
      <Footer />
    </>
  )
}

export default App