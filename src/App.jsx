import { Router, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx'
import TopBanner from './components/TopBanner/TopBanner.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';

import './App.css';

function App() {
  return (
    <>
      {/* <Router>
        <TopBanner />
        <NavBar />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </Router> */}
      <TopBanner />
      <NavBar />
      <div className="contentContainer">
        <Home />
      </div>
      <Footer />
    </>
  )
}

export default App