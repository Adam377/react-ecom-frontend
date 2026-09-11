import { useEffect, useState } from 'react';
import { BrowserRouter as HashRouter, Route, Routes } from 'react-router-dom';

import Footer from './components/Footer/Footer.jsx'
import TopBanner from './components/TopBanner/TopBanner.jsx'
import NavBar from './components/NavBar/NavBar.jsx';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import Downloads from './pages/Downloads/Downloads.jsx';

import productsJson from './data/products.json';

import './App.css';
import { setItem } from './utils/localStorage.js';

const storeLocalData = async() => {
  setItem("products", productsJson)
}

function App() {
  storeLocalData();

  return (
    <>
      <HashRouter>
        <TopBanner />
        <NavBar />
        <div className="contentContainer">
          <Routes>
            <Route index element={<Home />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </div>
        <Footer />
      </HashRouter>
    </>
  )
}

export default App