import Footer from './components/Footer/Footer.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import Intro from './components/Intro/Intro.jsx';
import LatestProduct from './components/LatestProduct/LatestProduct.jsx';

import './App.css';

function App() {
  

  return (
    <>
      <NavBar />
      <div className="contentContainer">
        <Intro />
        <LatestProduct />
      </div>
      <Footer />
    </>
  )
}

export default App