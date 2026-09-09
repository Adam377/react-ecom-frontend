import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx'
import TopBanner from './components/TopBanner/TopBanner.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';

import './App.css';

function App() {
  return (
    <>
      <HashRouter>
        <TopBanner />
        <NavBar />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
      {/* <TopBanner />
      <NavBar />
      <div className="contentContainer">
        <Home />
      </div>
      <Footer /> */}
    </>
  )
}

export default App